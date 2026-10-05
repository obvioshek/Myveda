"use client";

import { useDone } from "./progress";

// How many of a set of concepts the reader has finished on this device. The
// server and first render show "Not started yet", so nothing jumps on load.
export default function Progress({ ids, compact = false }: { ids: string[]; compact?: boolean }) {
  const done = useDone();
  const n = ids.filter(id => done.has(id)).length;
  const pct = ids.length ? Math.round((n / ids.length) * 100) : 0;
  // On a chapter card, say nothing until there is something to say.
  if (compact && n === 0) return <span className="pg compact" />;
  const text = n === 0 ? "Not started yet" : n === ids.length ? `All ${ids.length} done` : `${n} of ${ids.length} done`;
  return (
    <span className={compact ? "pg compact" : "pg"}>
      <span className="pg-bar" aria-hidden="true"><i style={{ width: `${pct}%` }} /></span>
      <span className="pg-t">{text}</span>
    </span>
  );
}
