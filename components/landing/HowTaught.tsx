"use client";

import { useState } from "react";
import { STEPS } from "@/content/landing";

// Five steps, the same for every concept. Pointing at one lights the path up
// to it, so you can see where it sits in the whole.
export default function HowTaught() {
  const [on, setOn] = useState(-1);
  return (
    <ol className="steps" onMouseLeave={() => setOn(-1)}>
      {STEPS.map((s, i) => (
        <li key={s.name} className={i <= on ? "step lit" : "step"} style={{ "--d": `${on >= 0 ? i * 70 : (STEPS.length - 1 - i) * 40}ms` } as React.CSSProperties} onMouseEnter={() => setOn(i)}>
          <div className={i === STEPS.length - 1 ? "step-track last" : "step-track"} aria-hidden="true">
            <span className={i === on ? "step-dot now" : "step-dot"} />
            <span className={i < on ? "step-bar lit" : "step-bar"} />
          </div>
          <div className="step-card">
            <span className="step-name">{s.name}</span>
            <p>{s.line}</p>
            {s.seen && <span className="tag tag-accent-2">In the sample above</span>}
          </div>
        </li>
      ))}
    </ol>
  );
}
