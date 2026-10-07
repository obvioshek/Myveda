"use client";

import { useEffect, useState } from "react";
import { useDone } from "./progress";

type Item = { id: string; name: string };

const Tick = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
);

// The chapter's concepts as a contents list that follows the reader: the one in
// view is marked, finished ones carry a tick, and the next one is a click away.
export default function Contents({ slug, items }: { slug: string; items: Item[] }) {
  const [at, setAt] = useState(0);
  const done = useDone();

  useEffect(() => {
    const els = items.map(it => document.getElementById(it.id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    let frame = 0;
    const pick = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // The last concept whose top has passed a line a third of the way down.
        const line = window.innerHeight * 0.33;
        let i = 0;
        els.forEach((el, j) => { if (el.getBoundingClientRect().top <= line) i = j; });
        setAt(i);
      });
    };
    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", pick); window.removeEventListener("resize", pick); };
  }, [items]);

  const next = items[at + 1];
  return (
    <nav className="toc" aria-label="Concepts in this chapter">
      <span className="ch-glance-k">In this chapter</span>
      <ol>
        {items.map((it, i) => {
          const isDone = done.has(`${slug}#${it.id}`);
          return (
            <li key={it.id} className={i === at ? "on" : undefined}>
              <a href={`#${it.id}`} aria-current={i === at ? "location" : undefined}>
                <span className="toc-n" aria-hidden="true">{isDone ? <Tick /> : String(i + 1).padStart(2, "0")}</span>
                <span>{it.name}{isDone && <span className="sr-only"> (done)</span>}</span>
              </a>
            </li>
          );
        })}
      </ol>
      {next && <a className="toc-next" href={`#${next.id}`}>Next concept<span aria-hidden="true"> ↓</span></a>}
    </nav>
  );
}
