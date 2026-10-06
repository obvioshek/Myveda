"use client";

import Link from "next/link";
import { useState } from "react";
import Arrow from "./Arrow";

export type QuestionCard = { n: string; fact: string; question: string; concept: string; ref: string; href: string };

// Each card asks first. The classical answer stays folded until the visitor has
// had a moment with the question, then opens in place with its reference.
export default function QuestionCards({ cards }: { cards: QuestionCard[] }) {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const show = (n: string) => setOpen(s => new Set(s).add(n));
  return (
    <div className="grid g3">
      {cards.map(c => {
        const on = open.has(c.n);
        return (
          <article key={c.n} className={on ? "cell qcell on" : "cell qcell"}>
            <b className="n">{c.n}</b>
            <p className="qq-big">{c.question}</p>
            {!on && (
              <button type="button" className="q-open" aria-expanded={false} aria-controls={`q-${c.n}`} onClick={() => show(c.n)}>
                What the text says<span aria-hidden="true">+</span>
              </button>
            )}
            <div className={on ? "reveal open" : "reveal"} id={`q-${c.n}`} inert={!on}>
              <div className="reveal-in"><p className="qfact">{c.fact}</p></div>
            </div>
            <Link href={c.href} prefetch={false} className="qlink">
              <span className="qlink-t"><b>{c.concept}</b><span>{c.ref}</span></span>
              <span className="qgo"><Arrow /></span>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
