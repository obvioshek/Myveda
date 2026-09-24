"use client";

import { useState } from "react";
import { POLL } from "@/content/landing";

// Results appear only after you vote, and they're marked as examples.
export default function Poll() {
  const [vote, setVote] = useState<number | null>(null);
  const done = vote !== null;
  return (
    <>
      <div className={done ? "poll done" : "poll"} role="group" aria-label={`Poll: ${POLL.question}`}>
        {POLL.options.map((o, i) => (
          <button key={o.label} className="opt" type="button" aria-pressed={vote === i} aria-disabled={done || undefined}
            onClick={() => { if (!done) setVote(i); }}>
            <i className="bar" aria-hidden="true" style={{ width: done ? `${o.pct}%` : 0 }} />
            <span>{o.label}</span><span className="pct">{o.pct}%</span>
          </button>
        ))}
      </div>
      <p className="note" aria-live="polite">
        {done ? "Example results, shown after you vote. Nobody else sees how you voted." : "Results appear after you vote."}
      </p>
    </>
  );
}
