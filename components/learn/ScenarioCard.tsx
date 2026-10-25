"use client";

import Link from "next/link";
import { useState } from "react";

// One "Apply it" situation: the reader picks the idea that helps most, then
// sees why, with the lesson for each option and, where one fits, a passage.
export type ScenarioOption = { name: string; chapter: string; unitN: number; href: string };

export default function ScenarioCard({ n, title, situation, ask, options, answer, why, passage }: {
  n: number; title: string; situation: string; ask: string; options: ScenarioOption[]; answer: number; why: string; passage?: React.ReactNode;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const right = picked === answer;
  const id = `ap-${n}`;
  return (
    <article className="ap" aria-labelledby={id}>
      <span className="label red">Situation {n}</span>
      <h2 id={id} className="h-xs">{title}</h2>
      <p className="ap-sit">{situation}</p>
      <p className="ap-ask"><b>{ask}</b></p>
      <div className="ck-opts" role="group" aria-label={ask}>
        {options.map((o, i) => {
          const state = picked === null ? "" : i === answer ? " right" : picked === i ? " wrong" : "";
          return (
            <button key={o.href} type="button" className={`btn btn-secondary ck-opt${state}`} aria-pressed={picked === i} onClick={() => setPicked(i)}>
              <span className="ap-opt"><b>{o.name}</b><span>Unit {o.unitN} · {o.chapter}</span></span>
            </button>
          );
        })}
      </div>
      <div className={picked === null ? "reveal" : "reveal open"} aria-live="polite" inert={picked === null}>
        <div className="reveal-in">
          <div className="ap-why">
            <p className="ck-a"><b>{right ? "Yes. " : "Not the best fit. "}</b>{why}</p>
            <p className="ap-read">Read: {options.map((o, i) => <span key={o.href}>{i > 0 && " · "}<Link className="link" href={o.href} prefetch={false}>{o.name}</Link></span>)}</p>
            {passage}
          </div>
        </div>
      </div>
    </article>
  );
}
