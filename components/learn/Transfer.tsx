"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { showToast } from "@/components/landing/device";
import { useDone } from "./progress";
import { useReview } from "./review";
import { addToDevice, decode, encode, gather, isEmpty, summarise, type Bundle, type Summary } from "./transfer";

// Two halves: send what this device holds as a code, link or file; and add a
// code from another device to this one, after seeing what is in it.

const plural = (n: number, one: string, many: string) => `${n.toLocaleString("en-IN")} ${n === 1 ? one : many}`;

function SummaryList({ s }: { s: Summary }) {
  return (
    <ul className="tr-sum">
      <li><b>{plural(s.done, "concept", "concepts")}</b> marked done</li>
      <li><b>{plural(s.review, "question", "questions")}</b> on the review list</li>
      <li><b>{plural(s.notes, "note", "notes")}</b> from “Reflect &amp; discuss”</li>
      <li>{s.plan ? <>A study plan for an exam on <b>{s.plan}</b></> : "No study plan"}</li>
      {s.last && <li>Continue from <b>{s.last}</b></li>}
      {s.stats > 0 && <li>Recent answers for <b>{plural(s.stats, "chapter", "chapters")}</b>, for your weak spots</li>}
    </ul>
  );
}

export default function Transfer() {
  const doneHere = useDone().size;
  const reviewHere = Object.keys(useReview()).length;
  const [notes, setNotes] = useState(true);
  const [code, setCode] = useState<{ text: string; summary: Summary } | null>(null);
  const [input, setInput] = useState("");
  const [preview, setPreview] = useState<{ bundle: Bundle; summary: Summary } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [added, setAdded] = useState<string | null>(null);
  const ids = { notes: useId(), input: useId(), file: useId() };
  const fileRef = useRef<HTMLInputElement>(null);

  const check = async (text: string) => {
    setAdded(null);
    const r = await decode(text);
    if (r.ok) { setPreview({ bundle: r.bundle, summary: summarise(r.bundle) }); setError(null); }
    else { setPreview(null); setError(r.error); }
  };

  // A link from another device carries the code after "#t=". Read it, then take
  // it out of the address bar so it isn't left in the history.
  useEffect(() => {
    const t = setTimeout(() => {
      const m = window.location.hash.match(/^#t=(.+)$/);
      if (!m) return;
      history.replaceState(null, "", window.location.pathname);
      setInput(m[1]);
      void check(m[1]);
      document.getElementById("receive")?.scrollIntoView({ block: "start" });
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const make = async () => {
    const b = gather(notes);
    setCode({ text: await encode(b), summary: summarise(b) });
  };

  const copy = async (text: string, what: string) => {
    try { await navigator.clipboard.writeText(text); showToast(`${what} copied`); }
    catch { showToast("Couldn’t copy. Select the text and copy it instead."); }
  };

  const download = () => {
    if (!code) return;
    const d = new Date();
    const name = `veda-verse-progress-${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}.txt`;
    const url = URL.createObjectURL(new Blob([`${code.text}\n`], { type: "text/plain" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: name });
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const fromFile = async (f: File | undefined) => {
    if (!f) return;
    if (f.size > 1_000_000) { setPreview(null); setError("That file is too large to be a Veda Verse code."); return; }
    const text = await f.text();
    setInput(text.trim());
    await check(text);
  };

  const add = () => {
    if (!preview) return;
    const r = addToDevice(preview.bundle);
    const parts = [
      r.done && plural(r.done, "concept", "concepts") + " done",
      r.review && plural(r.review, "question", "questions") + " to review",
      r.notes && plural(r.notes, "note", "notes"),
      r.plan && "the study plan",
      r.last && "where to continue",
    ].filter(Boolean);
    setAdded(parts.length ? `Added ${parts.join(", ")}.` : "Nothing new: this device already had all of it.");
    setPreview(null);
    setInput("");
  };

  const link = code ? `${window.location.origin}/learn/transfer#t=${code.text}` : "";

  return (
    <div className="wrap tr">
      <div className="grid g2 tr-grid">
        <section className="cell tr-side" aria-labelledby="tr-send-h">
          <span className="label red">From this device</span>
          <h2 id="tr-send-h" className="h-sm">Make a code.</h2>
          <p className="pr-text">This device has {plural(doneHere, "concept", "concepts")} done and {plural(reviewHere, "question", "questions")} on the review list. The code holds those, your study plan, where to continue and, if you choose, your notes.</p>
          <label className="pr-check" htmlFor={ids.notes}>
            <input id={ids.notes} type="checkbox" checked={notes} onChange={e => { setNotes(e.target.checked); setCode(null); }} />
            <span>Include my “Reflect &amp; discuss” notes</span>
          </label>
          <div className="btn-row"><button type="button" className="btn btn-primary btn-lg" onClick={make}>{code ? "Make it again" : "Make a code"}</button></div>
          {code && (
            <div className="tr-out">
              <SummaryList s={code.summary} />
              <textarea className="input tr-code" readOnly value={code.text} rows={4} aria-label="Your code" onFocus={e => e.currentTarget.select()} />
              <div className="btn-row">
                <button type="button" className="btn btn-secondary" onClick={() => copy(link, "Link")}>Copy link</button>
                <button type="button" className="btn btn-secondary" onClick={() => copy(code.text, "Code")}>Copy code</button>
                <button type="button" className="btn btn-ghost" onClick={download}>Download as a file</button>
              </div>
              <p className="ci-fine">Open the link on your other device, or paste the code there. Anyone with the code can see what’s in it, notes included, so send it only to yourself. It isn’t sent to us: the part of a link after “#” never reaches a server.</p>
            </div>
          )}
        </section>

        <section className="cell tr-side" id="receive" aria-labelledby="tr-get-h">
          <span className="label red">On this device</span>
          <h2 id="tr-get-h" className="h-sm">Add a code.</h2>
          <p className="pr-text">Paste a code from your other device, or open its file. You’ll see what’s in it before anything changes, and nothing already here is lost.</p>
          <label className="tl-f" htmlFor={ids.input}>
            <span className="tr-lab">Code or link</span>
            <textarea id={ids.input} className="input tr-code" rows={4} value={input} spellCheck={false} autoCapitalize="off" autoCorrect="off" autoComplete="off" placeholder="VV1z.…" onChange={e => { setInput(e.target.value); setPreview(null); setError(null); }} />
          </label>
          <div className="btn-row">
            <button type="button" className="btn btn-primary" disabled={!input.trim()} onClick={() => check(input)}>See what’s in it</button>
            <button type="button" className="btn btn-ghost" onClick={() => fileRef.current?.click()}>Open a file</button>
            <input ref={fileRef} id={ids.file} type="file" accept=".txt,text/plain" hidden onChange={e => { void fromFile(e.target.files?.[0]); e.target.value = ""; }} />
          </div>
          <div aria-live="polite">
            {error && <p className="tl-warn">{error}</p>}
            {preview && (isEmpty(preview.summary)
              ? <p className="tl-warn">That code is empty: the other device had nothing to send yet.</p>
              : (
                <div className="tr-out">
                  <p className="pr-text">This code has:</p>
                  <SummaryList s={preview.summary} />
                  <div className="btn-row"><button type="button" className="btn btn-primary btn-lg" onClick={add}>Add to this device</button></div>
                  <p className="ci-fine">Finished concepts are added to yours. A question on both review lists keeps the less advanced entry. Notes, the plan and where to continue are added only where this device has none.</p>
                </div>
              ))}
            {added && <p className="tr-done"><b>{added}</b> <Link className="link" href="/learn" prefetch={false}>Back to the chapters</Link></p>}
          </div>
        </section>
      </div>
    </div>
  );
}
