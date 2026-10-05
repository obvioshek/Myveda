"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

export type GlossaryItem = { id: string; letter: string; term: string; def: string; chapterN: number; chapterTitle: string; chapterHref: string };

// The A to Z list with a filter box. Every term is in the page from the start,
// so search engines and readers without scripts see all of it; the box only
// hides what doesn't match.
export default function GlossaryList({ items }: { items: GlossaryItem[] }) {
  const [q, setQ] = useState("");
  const [here, setHere] = useState("");
  const id = useId();
  const needle = q.trim().toLowerCase();
  const shown = needle ? items.filter(t => t.term.toLowerCase().includes(needle) || t.def.toLowerCase().includes(needle)) : items;
  const letters = Array.from(new Set(items.map(t => t.letter)));
  const live = new Set(shown.map(t => t.letter));

  // Mark the term a link pointed at. The browser's :target doesn't update when
  // the app changes the address without a page load, so read the hash directly.
  useEffect(() => {
    const read = () => setHere(decodeURIComponent(window.location.hash.slice(1)));
    read();
    window.addEventListener("hashchange", read);
    window.addEventListener("popstate", read);
    return () => { window.removeEventListener("hashchange", read); window.removeEventListener("popstate", read); };
  }, []);

  return (
    <>
      <div className="gl-search">
        <label htmlFor={id} className="label">Find a term</label>
        <div className="search-row">
          <input id={id} className="input" type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Try “elasticity”, “Fayol” or “inflation”" autoComplete="off" />
          <span className="search-ico" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          </span>
        </div>
        <span className="search-result" role="status" aria-live="polite">{needle ? (shown.length ? `${shown.length} of ${items.length} terms` : "Nothing matches. Try a shorter word.") : ""}</span>
      </div>

      <nav className="gl-rail" aria-label="Jump to a letter">
        {letters.map(l => live.has(l)
          ? <a key={l} href={`#letter-${l}`}>{l}</a>
          : <span key={l} aria-hidden="true">{l}</span>)}
      </nav>

      {letters.filter(l => live.has(l)).map(l => (
        <section key={l} id={`letter-${l}`} className="gl-sec" aria-label={`Terms beginning with ${l}`}>
          <h2 className="gl-l" aria-hidden="true">{l}</h2>
          <dl>
            {shown.filter(t => t.letter === l).map(t => (
              <div key={t.id} id={t.id} className={t.id === here ? "gl-row on" : "gl-row"}>
                <dt>{t.term}</dt>
                <dd>
                  <p>{t.def}</p>
                  <Link className="gl-ch" href={t.chapterHref}>Chapter {t.chapterN}: {t.chapterTitle}</Link>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </>
  );
}
