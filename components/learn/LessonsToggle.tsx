"use client";

import { setAllLessons } from "./progress";

// Opens or closes every concept on the chapter page, for reading straight through
// or for printing.
export default function LessonsToggle() {
  return (
    <div className="lt" role="group" aria-label="All concepts">
      <button type="button" className="btn btn-secondary" onClick={() => setAllLessons(true)}>Open all</button>
      <button type="button" className="btn btn-secondary" onClick={() => setAllLessons(false)}>Close all</button>
      <button type="button" className="btn btn-ghost lt-print" onClick={() => { setAllLessons(true); window.setTimeout(() => window.print(), 350); }}>Print</button>
    </div>
  );
}
