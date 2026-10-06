"use client";

import { useEffect, useState } from "react";

type Item = { id: string; name: string };

// Follows the reader down the page: names the concept in view, how far through
// the chapter it is, and offers the next one. It watches the concept cards
// already on the page, so it needs nothing from the server but their names.
export default function NowReading({ items }: { items: Item[] }) {
  const [at, setAt] = useState(0);

  useEffect(() => {
    const els = items.map(it => document.getElementById(it.id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const pick = () => {
      // The last concept whose top has passed a line a third of the way down.
      const line = window.innerHeight * 0.33;
      let i = 0;
      els.forEach((el, j) => { if (el.getBoundingClientRect().top <= line) i = j; });
      setAt(i);
    };
    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);
    return () => { window.removeEventListener("scroll", pick); window.removeEventListener("resize", pick); };
  }, [items]);

  const cur = items[at];
  const next = items[at + 1];
  if (!cur) return null;
  return (
    <div className="nr">
      <span className="ch-glance-k">Now reading · {at + 1} of {items.length}</span>
      <a className="nr-cur" href={`#${cur.id}`}>{cur.name}</a>
      <div className="nr-dots" aria-hidden="true">
        {items.map((it, i) => <i key={it.id} className={i < at ? "past" : i === at ? "on" : ""} />)}
      </div>
      {next && <a className="nr-next" href={`#${next.id}`}>Next: {next.name}<span aria-hidden="true"> ↓</span></a>}
    </div>
  );
}
