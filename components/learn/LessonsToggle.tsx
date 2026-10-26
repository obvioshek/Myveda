"use client";

import { useState } from "react";
import { setAllLessons } from "./progress";

// Opens or closes every concept on the chapter page, for reading straight
// through or for printing: one button whose label says what it will do.
export default function LessonsToggle() {
  const [open, setOpen] = useState(false);
  const flip = () => { setAllLessons(!open); setOpen(!open); };
  return (
    <div className="lt" role="group" aria-label="All concepts">
      <button type="button" className="btn btn-secondary" aria-pressed={open} onClick={flip}>{open ? "Close all concepts" : "Open all concepts"}</button>
      <button type="button" className="btn btn-ghost lt-print" onClick={() => { setAllLessons(true); setOpen(true); window.setTimeout(() => window.print(), 350); }}>Print</button>
    </div>
  );
}
