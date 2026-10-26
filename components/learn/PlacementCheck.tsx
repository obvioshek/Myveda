"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { CheckQuestion } from "@/content/learn/placement";

// "Where should I start?": a few questions from each unit, answered without
// feedback (it is a check, not a test), then what to read first in each unit.
// "I don't know" is an honest answer and counts as a gap; nothing is saved.
type Unit = { id: string; n: number; short: string; first: { slug: string; title: string } };
const DONT_KNOW = -1;

export default function PlacementCheck({ questions, units }: { questions: CheckQuestion[]; units: Unit[] }) {
  const [chosen, setChosen] = useState<string[]>(units.map(u => u.id));
  const [run, setRun] = useState<CheckQuestion[] | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const top = useRef<HTMLDivElement>(null);

  const start = () => { setRun(questions.filter(q => chosen.includes(q.u))); setAnswers([]); top.current?.scrollIntoView({ block: "start" }); };
  const answer = (i: number) => setAnswers(a => [...a, i]);

  if (!run) {
    const n = questions.filter(q => chosen.includes(q.u)).length;
    return (
      <div className="wrap pr-box pc" ref={top}>
        <fieldset className="pr-set">
          <legend className="label">Units you are studying</legend>
          <div className="pr-chips">
            {units.map(u => (
              <button key={u.id} type="button" className="pr-chip" aria-pressed={chosen.includes(u.id)} onClick={() => setChosen(chosen.includes(u.id) ? chosen.filter(x => x !== u.id) : [...chosen, u.id])}>
                <b>Unit {u.n}</b> {u.short}
              </button>
            ))}
          </div>
        </fieldset>
        <p className="pr-text">{n} questions, about {Math.max(1, Math.round(n * 0.5))} minutes. No answers are shown until the end. If you don&apos;t know, say so: a guess that happens to be right hides a gap.</p>
        <div className="btn-row"><button type="button" className="btn btn-primary btn-lg" disabled={!n} onClick={start}>Start the check</button></div>
      </div>
    );
  }

  const i = answers.length;
  if (i < run.length) {
    const q = run[i];
    return (
      <div className="wrap pr-box pc" ref={top}>
        <div className="pc-top"><span className="label red">Unit {q.un} · {q.us}</span><span className="ci-fine">Question {i + 1} of {run.length}</span></div>
        <div className="pc-bar" aria-hidden="true"><i style={{ width: `${(i / run.length) * 100}%` }} /></div>
        <p className="ck-q pr-q">{q.q}</p>
        <div className="ck-opts pr-opts" role="group" aria-label="Choose an answer">
          {q.o.map((o, k) => <button key={o} type="button" className="btn btn-secondary ck-opt" onClick={() => answer(k)}>{o}</button>)}
        </div>
        <div className="btn-row"><button type="button" className="btn btn-ghost" onClick={() => answer(DONT_KNOW)}>I don&apos;t know</button></div>
      </div>
    );
  }

  // Results: each unit's score, what that suggests, and the concepts to read.
  const byUnit = units.filter(u => run.some(q => q.u === u.id)).map(u => {
    const qs = run.map((q, k) => ({ q, a: answers[k] })).filter(x => x.q.u === u.id);
    const right = qs.filter(x => x.a === x.q.a).length;
    const share = right / qs.length;
    const verdict = share === 1 ? "solid" : share >= 0.5 ? "gaps" : "new";
    return { u, qs, right, verdict };
  });
  return (
    <div className="wrap pr-box pc" ref={top}>
      <span className="label red">Your starting points</span>
      <h2 className="h-sm">Where to begin, unit by unit.</h2>
      <ol className="pc-res">
        {byUnit.map(({ u, qs, right, verdict }) => (
          <li key={u.id} className={`pc-u ${verdict}`}>
            <div className="pc-uh"><b>Unit {u.n} · {u.short}</b><span>{right} of {qs.length}</span></div>
            <p className="pr-text">
              {verdict === "solid" ? "You know the basics here. Skim the chapters, and use a chapter test to find anything you've forgotten."
                : verdict === "gaps" ? "Some of this is familiar. Start with the concepts below, then move through the rest of the unit."
                : <>This is new ground, which is fine. Start at the beginning: <Link className="link" href={`/learn/${u.first.slug}`} prefetch={false}>{u.first.title}</Link>.</>}
            </p>
            <ul className="pc-qs">
              {qs.map(({ q, a }) => (
                <li key={q.c + q.b} className={a === q.a ? "ok" : "miss"}>
                  <span className="pc-mark" aria-hidden="true">{a === q.a ? "✓" : "○"}</span>
                  <span>
                    {q.q} <b>{a === q.a ? "Right." : a === DONT_KNOW ? `You didn't know: “${q.o[q.a]}”.` : `The answer is “${q.o[q.a]}”.`}</b>
                    {a !== q.a && <> <Link className="link" href={`/learn/${q.c}#${q.b}`} prefetch={false}>Read {q.bn}, in {q.ct}</Link></>}
                  </span>
                </li>
              ))}
            </ul>
            <Link className="more" href={`/learn/practice?unit=${u.id}`} prefetch={false}>Practise this unit</Link>
          </li>
        ))}
      </ol>
      <div className="btn-row">
        <Link className="btn btn-primary" href="/learn/plan" prefetch={false}>Make a study plan</Link>
        <button type="button" className="btn btn-secondary" onClick={() => { setRun(null); setAnswers([]); }}>Take the check again</button>
      </div>
      <p className="ci-fine">Nothing from this check is saved. A few questions can only point the way; the chapter tests on the practice page give a fuller picture.</p>
    </div>
  );
}
