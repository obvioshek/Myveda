"use client";

import { useEffect, useId, useState } from "react";
import { AREAS } from "@/content/landing";
import { onSearchAreas } from "./device";

// Search over the ten areas. Students arrive looking for one topic, so a match
// lights up its area and shows which concepts matched; the rest dim, nothing is
// hidden, and the page does not jump. A question card can fill the box for you.
export default function AreaSearch({ children }: { children: React.ReactNode }) {
  const [q, setQ] = useState("");
  const id = useId();
  const needle = q.trim().toLowerCase();

  useEffect(() => onSearchAreas(setQ), []);

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
      <div className="split end">
        <div className="sec-copy">{children}</div>
        <div className="search">
          <label htmlFor={id} className="label">Search a concept</label>
          <div className="search-row">
            <input id={id} className="input" type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Try “motivation”, “SWOT” or “working capital”" autoComplete="off" />
            <span className="search-ico" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </span>
          </div>
          <span className="search-result" role="status" aria-live="polite">{result}</span>
        </div>
      </div>

      <ul className="grid areas">
        {areas.map(a => (
          <li key={a.n} className={a.lit ? "cell area lit" : a.match ? "cell area" : "cell area dim"}>
            <span className="area-n" lang="en">{a.n}</span>
            <span className="area-name">{a.name}</span>
            <p className="area-q">{a.question}</p>
            {a.hits.length > 0 && <div className="area-hits">{a.hits.map(k => <span key={k} className="tag tag-accent">{k}</span>)}</div>}
          </li>
        ))}
      </ul>
    </>
  );
}
