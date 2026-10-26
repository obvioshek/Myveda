"use client";

import Link from "next/link";
import { useId, useState } from "react";
import Arrow from "./Arrow";
import { Tag } from "@/components/learn/Evidence";
import type { PairView } from "@/content/learn/readings";

// "What the classics add": a few modern ideas, each beside a passage from a
// classical text, with what the passage adds; where the two part ways opens on
// request, to keep each card short. The visitor picks a theme. All of it is the chapters' own text
// (content/learn/readings.ts); the passages are trusted HTML from there.
export default function ClassicsAdd({ themes }: { themes: { label: string; pairs: PairView[] }[] }) {
  const [at, setAt] = useState(0);
  const base = useId();
  const tabId = (i: number) => `${base}-tab-${i}`;
  const panelId = `${base}-panel`;

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (at + (e.key === "ArrowRight" ? 1 : themes.length - 1)) % themes.length;
    setAt(next);
    document.getElementById(tabId(next))?.focus();
  };

  return (
    <div className="ca">
      <div className="ca-tabs" role="tablist" aria-label="Themes" onKeyDown={onKey}>
        {themes.map((t, i) => (
          <button key={t.label} id={tabId(i)} type="button" role="tab" aria-selected={i === at} aria-controls={panelId} tabIndex={i === at ? 0 : -1} className="ca-tab" onClick={() => setAt(i)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="ca-grid" role="tabpanel" id={panelId} aria-labelledby={tabId(at)}>
        {themes[at].pairs.map(p => (
          <article key={p.id} className="ca-card">
            <p className="ca-pair"><b>{p.modern}</b><span aria-hidden="true"> ↔ </span><span className="sr-only"> and </span>{p.classic}</p>
            <div className="ca-quote" dangerouslySetInnerHTML={{ __html: p.quote }} />
            <dl className="ca-notes">
              <div><dt>What it adds</dt><dd>{p.adds}</dd></div>
            </dl>
            <details className="ca-more">
              <summary>Where they differ</summary>
              <p>{p.differs}</p>
            </details>
            <div className="ca-foot">
              <Tag kind={p.kind} />
              <Link className="more" href={p.href} prefetch={false}>{p.concept}, in {p.chapter}<Arrow /></Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
