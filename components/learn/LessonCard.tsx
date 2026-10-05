"use client";

import { useEffect, useId, useState } from "react";
import type { Check, Lesson } from "@/content/learn/lessons";
import { openConcept, showToast, useDevice, writeDevice } from "@/components/landing/device";

function Part({ children }: { children: React.ReactNode }) {
  return <span className="part"><i className="sq" aria-hidden="true" />{children}</span>;
}

function Question({ check, n }: { check: Check; n: number }) {
  const [picked, setPicked] = useState<number | null>(null);
  const id = useId();
  const right = picked === check.answer;
  return (
    <div className="ck">
      <p className="ck-q" id={id}>{n}. {check.q}</p>
      <div className="ck-opts" role="group" aria-labelledby={id}>
        {check.options.map((o, i) => {
          const state = picked === i ? (right ? " right" : " wrong") : "";
          return (
            <button key={o} type="button" className={`btn btn-secondary btn-lg ck-opt${state}`} aria-pressed={picked === i} onClick={() => setPicked(i)}>{o}</button>
          );
        })}
      </div>
      <div className={picked === null ? "reveal" : "reveal open"} aria-live="polite" inert={picked === null}>
        <div className="reveal-in">
          <p className="ck-a"><b>{right ? "Correct. " : "Not quite. "}</b>{!right && <>The answer is “{check.options[check.answer]}”. </>}{check.why}</p>
        </div>
      </div>
    </div>
  );
}

// One lesson: a concept taught in five steps, opened in place. The idea sits in
// the closed card as a small question; opening it reveals the core idea, a quick
// check, the Ancient lens, a prompt to reflect on, and the whole thing on one
// page. The reader's note stays on this device, like the home page's sample.
export default function LessonCard({ lesson, index, total, path, detail, lens }: {
  lesson: Lesson;
  index: number;
  total: number;
  /** The chapter's address, so Continue can lead back here. */
  path: string;
  detail: React.ReactNode;
  lens: React.ReactNode | null;
}) {
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<number | null>(null);
  const noteKey = `vv-note:${path}#${lesson.blockId}`;
  const note = useDevice(noteKey);
  const bodyId = useId();
  const beforeId = useId();
  const noteId = useId();

  const show = (announce: boolean) => {
    setOpen(true);
    openConcept(lesson.name, announce, `${path}#${lesson.blockId}`);
  };

  // A link that points at this lesson (the side list, a search result, Continue)
  // opens it, then brings it into view once it has room.
  useEffect(() => {
    const check = () => {
      if (decodeURIComponent(window.location.hash.slice(1)) !== lesson.blockId) return;
      setOpen(true);
      openConcept(lesson.name, false, `${path}#${lesson.blockId}`);
      window.setTimeout(() => document.getElementById(lesson.blockId)?.scrollIntoView({ block: "start" }), 120);
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, [lesson.blockId, lesson.name, path]);

  const toggle = () => { if (open) setOpen(false); else show(true); };

  const copy = async () => {
    const text = [`${lesson.name}`, "", ...lesson.summary.points.map(p => `• ${p}`), "", `Remember: ${lesson.summary.memory}`, "", "From Veda Verse, myvedaverse.in"].join("\n");
    try { await navigator.clipboard.writeText(text); showToast("Summary copied"); } catch { showToast("Could not copy. Select the text instead."); }
  };

  return (
    <article className="ls" id={lesson.blockId} aria-label={lesson.name}>
      <div className="ls-head">
        <div>
          <span className="label dark">Concept {index + 1} of {total}</span>
          <h3 className="ls-title">{lesson.name}</h3>
          <p className="ls-sub">{lesson.intro}</p>
        </div>
        <button type="button" className="btn btn-secondary btn-lg" aria-expanded={open} aria-controls={bodyId} onClick={toggle}>
          {open ? "Close the concept" : "Open the concept"}
          <svg className={open ? "chev up" : "chev"} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
        </button>
      </div>

      <div className="ls-before">
        <span className="label red">Before you read</span>
        <p className="before-q" id={beforeId}>{lesson.before.q}</p>
        <div className="choices" role="group" aria-labelledby={beforeId}>
          {lesson.before.choices.map((c, i) => (
            <button key={c.label} type="button" className={choice === i ? "btn btn-primary btn-lg" : "btn btn-secondary btn-lg"} aria-pressed={choice === i} onClick={() => setChoice(i)}>{c.label}</button>
          ))}
        </div>
        <div className={choice !== null ? "reveal open" : "reveal"} aria-live="polite" inert={choice === null}>
          <div className="reveal-in"><p className="before-a">{choice !== null && lesson.before.choices[choice].reveal}</p></div>
        </div>
      </div>

      <div className={open ? "reveal slow open" : "reveal slow"} id={bodyId} inert={!open}>
        <div className="reveal-in">
          <div className="ls-body">
            <div className="part-row">
              <Part>Core idea</Part>
              <div className="ls-core">
                <p className="core">{lesson.lead}</p>
                <div className="prose">{detail}</div>
              </div>
            </div>

            <div className="part-row">
              <Part>Check yourself</Part>
              <div className="ls-checks">
                {lesson.check.map((c, i) => <Question key={c.q} check={c} n={i + 1} />)}
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
                  <textarea id={noteId} className="input" rows={3} value={note} onChange={e => writeDevice(noteKey, e.target.value)} placeholder="Write yours before you read on." />
                  <span className="note-line">{note ? "Saved on this device. Only you can see it." : "Kept on this device. Nobody sees it unless you share it."}</span>
                </div>
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
                <button type="button" className="btn btn-secondary btn-lg" onClick={copy}>Copy this summary</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
