"use client";

import Link from "next/link";
import { useState } from "react";
import Arrow from "./Arrow";
import { Tag } from "@/components/learn/Evidence";
import type { Kind } from "@/content/learn";

export type GameItem = { id: string; modern: string; classic: string; kind: Kind; quote: string; why: string; href: string };

// The site's honesty rule, learned by doing: for a few real passages the visitor
// guesses whether the link is documented or an interpretive view, then sees the
// answer and the reason the chapter gives.
export default function LabelGame({ items }: { items: GameItem[] }) {
  const [guess, setGuess] = useState<Record<string, Kind>>({});
  const answered = items.filter(it => guess[it.id]);
  const right = answered.filter(it => guess[it.id] === it.kind).length;
  return (
    <div className="lg">
      <div className="lg-head">
        <p className="lg-h">Documented, or a view? <span className="red">Guess, then check.</span></p>
        <p className="lg-score" aria-live="polite">{answered.length === 0 ? `${items.length} real passages from the chapters` : `${right} of ${answered.length} right`}</p>
      </div>
      <div className="lg-grid">
        {items.map(it => {
          const g = guess[it.id];
          return (
            <div key={it.id} className={g ? `lg-card done ${it.kind}` : "lg-card"}>
              <p className="lg-pair"><b>{it.modern}</b><span aria-hidden="true"> → </span><span className="sr-only"> paired with </span>{it.classic}</p>
              <div className="lg-quote" dangerouslySetInnerHTML={{ __html: it.quote }} />
              {!g ? (
                <div className="lg-btns" role="group" aria-label={`Is “${it.modern}” documented or a view?`}>
                  <button type="button" className="btn btn-secondary" onClick={() => setGuess(s => ({ ...s, [it.id]: "documented" }))}>Documented</button>
                  <button type="button" className="btn btn-secondary" onClick={() => setGuess(s => ({ ...s, [it.id]: "view" }))}>My view</button>
                </div>
              ) : (
                <div className="lg-answer">
                  <p className="lg-verdict"><Tag kind={it.kind} /><span>{g === it.kind ? "Right." : "Not quite."}</span></p>
                  <p className="lg-why">{it.why}</p>
                  <Link className="more" href={it.href} prefetch={false}>See it in its lesson<Arrow /></Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
