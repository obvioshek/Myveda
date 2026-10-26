"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { Check, Lesson } from "@/content/learn";
import { NOTE_PREFIX, openConcept, showToast, useDevice, writeDevice } from "@/components/landing/device";
import { onAllLessons, setDone, useDone } from "./progress";
import { decoded } from "@/lib/app/params";
import { questionId } from "@/content/learn/question-id";
import { recordAnswer, recordedLine } from "./review";
import { saveAsk } from "./ask";
import Listen from "./Listen";
import MixupHint from "./MixupHint";
import ReportProblem from "./ReportProblem";

function Part({ children }: { children: React.ReactNode }) {
  return <span className="part"><i className="sq" aria-hidden="true" />{children}</span>;
}

const Tick = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
);

// The first answer to a question counts for the review list: a wrong one puts
// it there for tomorrow. Trying again after seeing the answer changes nothing.
function Question({ check, n, rid, mixups, onAnswer }: { check: Check; n: number; rid: string; mixups: string[]; onAnswer: (right: boolean) => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  const [line, setLine] = useState<string | null>(null);
  const first = useRef(true);
  const id = useId();
  const right = picked === check.answer;
  const choose = (i: number) => {
    setPicked(i);
    onAnswer(i === check.answer);
    if (first.current) {
      first.current = false;
      setLine(recordedLine(recordAnswer(rid, i === check.answer)));
    }
  };
  return (
    <div className="ck">
      <p className="ck-q" id={id}>{n}. {check.q}</p>
      <div className="ck-opts" role="group" aria-labelledby={id}>
        {check.options.map((o, i) => {
          const state = picked === i ? (right ? " right" : " wrong") : "";
          return (
            <button key={o} type="button" className={`btn btn-secondary ck-opt${state}`} aria-pressed={picked === i} onClick={() => choose(i)}>{o}</button>
          );
        })}
      </div>
      <div className={picked === null ? "reveal" : "reveal open"} aria-live="polite" inert={picked === null}>
        <div className="reveal-in">
          <p className="ck-a"><b>{right ? "Correct. " : "Not quite. "}</b>{!right && <>The answer is “{check.options[check.answer]}”. </>}{check.why}</p>
          {picked !== null && !right && <MixupHint notes={mixups} />}
          {line && <p className="ck-r">{line} <Link className="link" href="/learn/practice#review" prefetch={false}>Your review</Link></p>}
          {picked !== null && <p className="ck-rp"><ReportProblem what={`The question “${check.q}”`} label="Report a problem with this question" /></p>}
        </div>
      </div>
    </div>
  );
}

// One lesson: a concept taught in five steps, opened in place. The closed card
// shows only the concept, so a chapter reads as a short list; opening it starts
// with a small question to answer first, then the core idea, a quick check, the
// Ancient lens, a prompt to reflect on, and the whole thing on one page. Answering every check correctly, or pressing "Mark as
// done", marks the concept done. Notes and progress stay on this device.
export default function LessonCard({ lesson, index, total, next = null, path, chapter, detail, lens, tool = null, mixups = [] }: {
  lesson: Lesson;
  index: number;
  total: number;
  /** The concept after this one, so the summary can lead straight on to it. */
  next?: { id: string; name: string } | null;
  /** The chapter's address, so Continue can lead back here. */
  path: string;
  /** The chapter's title, for "Ask the community about this". */
  chapter: string;
  detail: React.ReactNode;
  lens: React.ReactNode | null;
  /** A calculator for the concept, shown as "Try it" after the core idea. */
  tool?: React.ReactNode | null;
  /** The concept's "Don't confuse it with" hints, shown after a wrong answer (only <b> and <i>). */
  mixups?: string[];
}) {
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<number | null>(null);
  const [right, setRight] = useState<Set<number>>(() => new Set());
  const slug = path.split("/").pop() ?? "";
  const id = `${slug}#${lesson.blockId}`;
  const doneSet = useDone();
  const done = doneSet.has(id);
  // Marking this concept done: say so, and say when it completes the chapter.
  const markDone = () => {
    setDone(id, true);
    const before = [...doneSet].filter(x => x.startsWith(`${slug}#`) && x !== id).length;
    showToast(before + 1 === total ? `That's every concept in ${chapter}. Well done.` : `${lesson.name}: marked as done`);
  };
  const noteKey = `${NOTE_PREFIX}${path}#${lesson.blockId}`;
  const note = useDevice(noteKey);
  const bodyId = useId();
  const beforeId = useId();
  const noteId = useId();
  const core = useRef<HTMLDivElement>(null);

  // A link that points at this lesson (the side list, a search result, Continue)
  // opens it, then brings it into view once it has room.
  useEffect(() => {
    const check = () => {
      if (decoded(window.location.hash.slice(1)) !== lesson.blockId) return;
      setOpen(true);
      openConcept(lesson.name, false, `${path}#${lesson.blockId}`);
      window.setTimeout(() => document.getElementById(lesson.blockId)?.scrollIntoView({ block: "start" }), 120);
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, [lesson.blockId, lesson.name, path]);

  useEffect(() => onAllLessons(setOpen), []);

  const toggle = () => {
    if (open) { setOpen(false); return; }
    setOpen(true);
    openConcept(lesson.name, true, `${path}#${lesson.blockId}`);
  };

  const answered = (i: number, ok: boolean) => {
    const next = new Set(right);
    if (ok) next.add(i); else next.delete(i);
    setRight(next);
    if (ok && next.size === lesson.check.length && !done) markDone();
  };

  // Close this concept and open the next where it starts. The next card opens
  // itself when the address names it (see the effect above).
  const goNext = () => {
    if (!next) return;
    setOpen(false);
    if (window.location.hash === `#${next.id}`) window.dispatchEvent(new HashChangeEvent("hashchange"));
    else window.location.hash = next.id;
  };

  const copy = async () => {
    const text = [`${lesson.name}`, "", ...lesson.summary.points.map(p => `• ${p}`), "", `Remember: ${lesson.summary.memory}`, "", "From Veda Verse, myvedaverse.in"].join("\n");
    try { await navigator.clipboard.writeText(text); showToast("Summary copied"); } catch { showToast("Could not copy. Select the text instead."); }
  };

  return (
    <article className={done ? "ls done" : "ls"} id={lesson.blockId} aria-label={lesson.name}>
      <div className="ls-head" onClick={e => { if (!(e.target as HTMLElement).closest("button, a")) toggle(); }}>
        <span className="ls-n" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <div className="ls-hd">
          <span className="sr-only">Concept {index + 1} of {total}. </span>
          <h3 className="ls-title">{lesson.name}</h3>
          <p className="ls-sub">{lesson.intro}</p>
        </div>
        {done && <span className="ls-done"><Tick />Done</span>}
        <button type="button" className="btn btn-secondary ls-open" aria-expanded={open} aria-controls={bodyId} onClick={toggle}>
          <span className="ls-open-l">{open ? "Close" : "Open"}</span><span className="sr-only"> {lesson.name}</span>
          <svg className={open ? "chev up" : "chev"} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
        </button>
      </div>

      <div className={open ? "reveal slow open" : "reveal slow"} id={bodyId} inert={!open}>
        <div className="reveal-in">
          <div className="ls-body">
            <div className="ls-before">
              <span className="label red">Before you read</span>
              <p className="ls-bq" id={beforeId}>{lesson.before.q}</p>
              <div className="choices" role="group" aria-labelledby={beforeId}>
                {lesson.before.choices.map((c, i) => (
                  <button key={c.label} type="button" className={choice === i ? "btn btn-primary" : "btn btn-secondary"} aria-pressed={choice === i} onClick={() => setChoice(i)}>{c.label}</button>
                ))}
              </div>
              <div className={choice !== null ? "reveal open" : "reveal"} aria-live="polite" inert={choice === null}>
                <div className="reveal-in"><p className="ls-ba">{choice !== null && lesson.before.choices[choice].reveal}</p></div>
              </div>
            </div>
            <div className="part-row">
              <Part>Core idea</Part>
              <div className="ls-core" ref={core}>
                {open && <Listen target={core} label={lesson.name} />}
                <p className="core">{lesson.lead}</p>
                {detail}
              </div>
            </div>

            {tool && (
              <div className="part-row">
                <Part>Try it</Part>
                <div className="ls-tool">{tool}</div>
              </div>
            )}

            <div className="part-row">
              <Part>Check yourself</Part>
              <div className="ls-checks">
                {lesson.check.map((c, i) => <Question key={c.q} check={c} n={i + 1} rid={questionId(slug, lesson.blockId, c.q)} mixups={mixups} onAnswer={ok => answered(i, ok)} />)}
              </div>
            </div>

            {lens && (
              <div className="part-row">
                <Part>Ancient lens</Part>
                <div className="ls-lens">{lens}</div>
              </div>
            )}

            <div className="part-row">
              <Part>Reflect &amp; discuss</Part>
              <div className="reflect">
                <p className="reflect-q">“{lesson.reflect}”</p>
                <div className="note">
                  <label htmlFor={noteId}>Your answer, in a line or two</label>
                  <textarea id={noteId} className="input" rows={2} value={note} onChange={e => writeDevice(noteKey, e.target.value)} placeholder="Write yours before you read on." />
                  <span className="note-line">{note ? "Saved on this device. Only you can see it." : "Kept on this device. Nobody sees it unless you share it."}</span>
                </div>
                <p className="ls-ask">
                  Still unsure, or see it differently?{" "}
                  <Link className="link" href="/home" prefetch={false} onClick={() => saveAsk(lesson.name, chapter)}>Ask the community about this</Link>
                  <span className="ls-ask-note">You’ll sign in first if you haven’t. Your note above stays private.</span>
                </p>
              </div>
            </div>

            <div className="part-row">
              <Part>One-page summary</Part>
              <div className="ls-sum">
                <div className="pair-2">
                  <div className="cell">
                    <span className="story-h">{lesson.name}</span>
                    <ul className="ls-points">{lesson.summary.points.map(p => <li key={p}>{p}</li>)}</ul>
                  </div>
                  <div className="cell red">
                    <span className="story-h">Remember</span>
                    <p>{lesson.summary.memory}</p>
                  </div>
                </div>
                <div className="btn-row">
                  <button type="button" className={done ? "btn btn-secondary" : "btn btn-primary"} aria-pressed={done} onClick={() => { if (done) setDone(id, false); else markDone(); }}>
                    {done ? <><Tick />Done. Mark as not done</> : "Mark as done"}
                  </button>
                  {next ? (
                    <button type="button" className={done ? "btn btn-primary ls-next" : "btn btn-secondary ls-next"} onClick={goNext}>
                      <span><span className="ls-next-k">Next</span> {next.name}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                    </button>
                  ) : (
                    <Link className={done ? "btn btn-primary ls-next" : "btn btn-secondary ls-next"} href={`/learn/practice?chapter=${slug}`} prefetch={false}>
                      <span><span className="ls-next-k">Last concept</span> Test yourself on the chapter</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                    </Link>
                  )}
                </div>
                <div className="ls-more">
                  <button type="button" className="btn btn-ghost" onClick={copy}>Copy this summary</button>
                  <Link className="btn btn-ghost" href={`/learn/practice?recall=${slug}/${lesson.blockId}`} prefetch={false}>Recall it from a blank page</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
