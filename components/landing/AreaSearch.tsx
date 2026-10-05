"use client";

import { useId, useState } from "react";
import { AREAS, SEARCH_HINTS } from "@/content/landing";

// Search over the ten areas. Students arrive looking for one topic, so a match
// lights up its area and shows which concepts matched; the rest dim, nothing
// is hidden, and the page does not jump.
export default function AreaSearch() {
  const [q, setQ] = useState("");
  const id = useId();
  const needle = q.trim().toLowerCase();

  let matched = 0;
  const areas = AREAS.map(a => {
    const hits = needle ? a.concepts.filter(k => k.toLowerCase().includes(needle)) : [];
    const match = !needle || hits.length > 0 || a.name.toLowerCase().includes(needle) || a.question.toLowerCase().includes(needle);
    if (match) matched++;
    return { ...a, hits: hits.slice(0, 3), match, lit: !!needle && match };
  });

  const result = !needle ? "" : matched === 0 ? "Nothing yet. Try “leadership” or “branding”." : `${matched} of ${AREAS.length} areas`;

  return (
    <>
      <div className="search">
        <div className="search-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          <label className="sr-only" htmlFor={id}>Search a concept</label>
          <input id={id} className="input" type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Search a concept" autoComplete="off" />
        </div>
        <div className="search-hints">
          <span>try</span>
          {SEARCH_HINTS.map(h => (
            <button key={h} type="button" className={needle === h.toLowerCase() ? "tag tag-outline on" : "tag tag-outline"} aria-pressed={needle === h.toLowerCase()} onClick={() => setQ(needle === h.toLowerCase() ? "" : h)}>“{h}”</button>
          ))}
          <span className="search-result" role="status" aria-live="polite">{result}</span>
        </div>
      </div>

      <ul className="areas">
        {areas.map(a => (
          <li key={a.n} className={a.lit ? "area lit" : a.match ? "area" : "area dim"}>
            <div className="area-top">
              <span className="area-n" lang="en">{a.n}</span>
              <span className="area-dot" aria-hidden="true" />
            </div>
            <span className="area-name">{a.name}</span>
            <p className="area-q">{a.question}</p>
            {a.hits.length > 0 && (
              <div className="area-hits">
                {a.hits.map(k => <span key={k} className="tag tag-accent-2">{k}</span>)}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
