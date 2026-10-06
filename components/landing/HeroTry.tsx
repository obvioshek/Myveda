"use client";

import Link from "next/link";
import { useState } from "react";
import Arrow from "./Arrow";

// The hero's example, as something to do rather than read: the visitor answers
// one question first, then sees the modern theory and the classical verse side
// by side, marked with the one they sided with, and where the two part ways.
const CHOICES = [
  "They expect a result worth having",
  "Acting well matters, whatever the result",
];

export default function HeroTry({ href }: { href: string }) {
  const [pick, setPick] = useState<number | null>(null);
  const done = pick !== null;
  return (
    <div className={done ? "try done" : "try"}>
      <div className="try-ask">
        <div className="try-top"><span className="label red">Try one idea</span><span className="tag tag-accent">Motivation</span></div>
        <p className="try-q" id="try-q">Why do people put in effort?</p>
        <div className="try-choices" role="group" aria-labelledby="try-q">
          {CHOICES.map((c, i) => (
            <button key={c} type="button" className={pick === i ? "try-c on" : "try-c"} aria-pressed={pick === i} aria-controls="try-answer" onClick={() => setPick(i)}>
              <b>{i === 0 ? "A" : "B"}</b><span>{c}</span>
            </button>
          ))}
        </div>
        <p className="try-hint" aria-live="polite">{done ? "Here is who agrees with you, and who doesn't." : "Pick the answer closer to what you believe."}</p>
      </div>

      <div className={done ? "reveal slow open" : "reveal slow"} id="try-answer" inert={!done}>
        <div className="reveal-in">
          <div className="try-sides">
            <div className={pick === 0 ? "try-side mine" : "try-side"}>
              <div className="try-top"><span className="label">A · Modern · Victor Vroom, 1964</span>{pick === 0 && <span className="try-you">You</span>}</div>
              <p className="try-name">Expectancy theory</p>
              <p className="try-say">People put in effort when they believe it will lead to a result, and that the result is worth having.</p>
            </div>
            <div className={pick === 1 ? "try-side red mine" : "try-side red"}>
              <div className="try-top"><span className="label">B · Bhagavad Gītā 2.47</span>{pick === 1 && <span className="try-you">You</span>}</div>
              <p className="try-sa" lang="sa">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।</p>
              <p className="try-say">“Your right is to the action alone, never to its fruits.”</p>
            </div>
          </div>
          <div className="try-foot">
            <p><b>Where they part.</b> Vroom makes the expected result the reason to act. The Gītā asks you to act well without making the result the reason.</p>
            <div className="try-links">
              <Link className="more" href={href} prefetch={false}>Read both in Chapter 1<Arrow /></Link>
              <button type="button" className="try-again" onClick={() => setPick(null)}>Answer again</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
