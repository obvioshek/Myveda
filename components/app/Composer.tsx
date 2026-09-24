"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/app/AppProvider";
import { deleteMine, publish, saveDraft, similarQuestions } from "@/actions/app/compose";
import {
  BASIS_HELP, LABELS, SHARE_BASES, SOURCE_TYPES, checkSourceUrl, suggestBasis, suggestIntent, type Basis, type ShareBasis,
} from "@/lib/app/labels";
import type { ComposeAudience, DraftInput } from "@/lib/app/types";

// "Ask or post": one box. The intent and the label are suggested from what
// you write; you always choose. Documented posts need a specific source.
export default function Composer({
  prefill, topics, audiences, onClose,
}: { prefill: Partial<DraftInput>; topics: string[]; audiences: ComposeAudience[]; onClose: () => void }) {
  const { toast, run } = useApp();
  const router = useRouter();
  const [draftId, setDraftId] = useState<string | null>(prefill.id ?? null);
  const [text, setText] = useState(prefill.text ?? "");
  const [intent, setIntent] = useState<"asking" | "sharing" | null>(prefill.intent ?? null);
  const [basis, setBasis] = useState<Basis | null>(prefill.basis ?? null);
  const [url, setUrl] = useState(prefill.url ?? "");
  const [stype, setStype] = useState(prefill.stype || "Reference work");
  const [loc, setLoc] = useState(prefill.loc ?? "");
  const [topic, setTopic] = useState(prefill.topic && topics.includes(prefill.topic) ? prefill.topic : topics[0] ?? "");
  const [audience, setAudience] = useState(prefill.audience && audiences.some(a => a.value === prefill.audience) ? prefill.audience : "public");
  const [ai, setAi] = useState(!!prefill.ai);
  const [different, setDifferent] = useState(false);
  const [similar, setSimilar] = useState<{ id: string; title: string; status: string }[]>([]);
  const [busy, setBusy] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const effIntent = intent ?? suggestIntent(text);
  const suggested = suggestBasis(text);
  const effBasis: ShareBasis = basis && basis !== "asking" ? basis : suggested;
  const isDoc = effIntent === "sharing" && effBasis === "documented";
  const src = useMemo(() => checkSourceUrl(url), [url]);
  const srcWarn = !!url.trim() && !src.ok;
  const hasCard = !!url.trim() && src.ok;
  const domain = src.url ? src.url.hostname.replace(/^www\./, "") + src.url.pathname : url.trim();
  const postOff = busy || text.trim().length < 3 || (isDoc && (!url.trim() || srcWarn));

  const draft: DraftInput = { id: draftId, text, intent, basis, topic, audience, url, stype, loc, ai };
  const draftRef = useRef(draft);
  draftRef.current = draft;

  useEffect(() => { textRef.current?.focus(); }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  // drafts save automatically, a moment after you stop typing
  useEffect(() => {
    if (!text.trim()) return;
    const t = setTimeout(async () => {
      const r = await saveDraft(draftRef.current);
      if (r.ok && r.id) setDraftId(r.id);
    }, 1200);
    return () => clearTimeout(t);
  }, [text, intent, basis, topic, audience, url, stype, loc, ai]);

  // before asking: has someone asked this already?
  useEffect(() => {
    if (effIntent !== "asking" || different || text.trim().length < 12) return;
    // a late answer for older text must not bring the list back
    let live = true;
    const t = setTimeout(async () => {
      const r = await similarQuestions(text);
      if (live && r.ok) setSimilar(r.items);
    }, 500);
    return () => { live = false; clearTimeout(t); };
  }, [text, effIntent, different]);

  function close() {
    if (text.trim()) {
      saveDraft(draftRef.current);
      toast("Saved to Drafts.");
    }
    onClose();
  }

  async function submit() {
    if (postOff) return;
    setBusy(true);
    const r = await run(publish({ ...draft, intent: effIntent, basis: effIntent === "asking" ? "asking" : effBasis }));
    setBusy(false);
    if (!r.ok) return;
    onClose();
    router.push(r.kind === "question" ? `/q/${r.id}` : "/home");
    toast(r.message, async () => {
      const d = await run(deleteMine(r.kind, r.id));
      if (d.ok) { toast("Removed."); router.push("/home"); }
    });
  }

  return (
    <div className="backdrop" onClick={close}>
      <div className="dialog compose" role="dialog" aria-modal="true" aria-labelledby="composeT" onClick={e => e.stopPropagation()}>
        <div className="dialog-head">
          <div className="dialog-title" id="composeT">Ask or post</div>
          <button className="btn btn-ghost btn-icon" type="button" aria-label="Close" onClick={close} style={{ color: "var(--ink-2)", width: 40, height: 40 }}>×</button>
        </div>
        <textarea
          ref={textRef}
          className="input"
          rows={4}
          aria-label="What you want to ask or share"
          placeholder="Ask a question, or share something you know, lived, or were told…"
          value={text}
          onChange={e => setText(e.target.value)}
          style={{ minHeight: 110, fontSize: 16 }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <div className="seg" role="tablist" aria-label="Asking or sharing">
            <button type="button" role="tab" aria-selected={effIntent === "asking"} onClick={() => setIntent("asking")}>Asking</button>
            <button type="button" role="tab" aria-selected={effIntent === "sharing"} onClick={() => setIntent("sharing")}>Sharing</button>
          </div>
          <span className="muted" style={{ fontSize: 13 }}>{!intent && text.trim() ? "Suggested from your text" : ""}</span>
        </div>

        {similar.length > 0 && !different && effIntent === "asking" && text.trim().length >= 12 && (
          <div className="similar">
            <div style={{ fontWeight: 700, fontSize: 14 }}>Similar questions already asked</div>
            {similar.map(s => (
              <Link key={s.id} className="row" href={`/q/${s.id}`} onClick={onClose}>
                {s.title}<span className="sub" style={{ fontSize: 12 }}>{s.status}</span>
              </Link>
            ))}
            <div>
              <button className="btn btn-ghost" type="button" onClick={() => setDifferent(true)} style={{ padding: "4px 8px", marginLeft: -8 }}>
                Mine is different — keep going
              </button>
            </div>
          </div>
        )}

        {effIntent === "sharing" && (
          <div className="stack" style={{ gap: 8 }}>
            <div style={{ fontWeight: 700, fontSize: 14 }} id="basisLab">What does this rest on?</div>
            <div className="wrap-chips" role="group" aria-labelledby="basisLab">
              {SHARE_BASES.map(k => (
                <button
                  key={k}
                  type="button"
                  className={`chip basis-btn lb-${k}`}
                  aria-pressed={effBasis === k}
                  onClick={() => setBasis(k)}
                >
                  {LABELS[k].glyph} {LABELS[k].name}{k === suggested && !basis ? " · suggested" : ""}
                </button>
              ))}
            </div>
            <div className="muted" style={{ fontSize: 13 }}>{BASIS_HELP[effBasis]}</div>
          </div>
        )}

        {isDoc && (
          <div className="srcbox">
            <div style={{ fontWeight: 700, fontSize: 14 }}>Source (needed for Documented)</div>
            <input className="input" type="text" inputMode="url" aria-label="Source link, ISBN or DOI" placeholder="Link, ISBN or DOI" value={url} onChange={e => setUrl(e.target.value)} />
            <div className="two">
              <select className="input" aria-label="Source type" value={stype} onChange={e => setStype(e.target.value)}>
                {SOURCE_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <input className="input" aria-label="Page, entry or timestamp" placeholder="Page, entry or timestamp" value={loc} onChange={e => setLoc(e.target.value)} />
            </div>
            {srcWarn && <div className="error">Link to the specific page or entry, not a home page.</div>}
            {hasCard && (
              <div className="srccard">
                <span className="chip lb-documented">✓</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{domain}</div>
                  <div className="muted" style={{ fontSize: 12 }}>{stype} · {loc.trim() || "no locator"}</div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="two">
          <label className="lab">Topic
            <select className="input" value={topic} onChange={e => setTopic(e.target.value)}>
              {topics.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </label>
          <label className="lab">Who sees it
            <select className="input" value={audience} onChange={e => setAudience(e.target.value)}>
              {audiences.map(a => <option key={a.value} value={a.value}>{a.label}</option>)}
            </select>
          </label>
        </div>
        <label className="check" style={{ fontSize: 14 }}>
          <input type="checkbox" checked={ai} onChange={() => setAi(!ai)} />Drafted with AI help
        </label>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <span className="muted" style={{ fontSize: 12 }}>Drafts save automatically. You can edit after posting.</span>
          <button className="btn btn-primary" type="button" disabled={postOff} onClick={submit}>{effIntent === "asking" ? "Ask" : "Post"}</button>
        </div>
      </div>
    </div>
  );
}
