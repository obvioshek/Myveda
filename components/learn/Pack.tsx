"use client";

import { useMemo, useState } from "react";
import PrintButton from "./PrintButton";
import { useDone } from "./progress";
import { useStats, weakChapters } from "./stats";

// A revision pack: the reader chooses units, which chapters (all, the ones they
// have started, or their weak spots) and what to include, and prints the
// result or saves it as a PDF. The chapters arrive already drawn by the page;
// this only chooses which to show and which parts of each.
export type PackChapter = { slug: string; unit: string; node: React.ReactNode };
type Which = "all" | "started" | "weak";
const PARTS = [
  ["sum", "Summaries"],
  ["mx", "Don’t confuse it with"],
  ["fx", "Formulas"],
  ["terms", "Key terms"],
] as const;

export default function Pack({ units, chapters }: { units: { id: string; n: number; short: string }[]; chapters: PackChapter[] }) {
  const [chosen, setChosen] = useState<string[]>(units.map(u => u.id));
  const [which, setWhich] = useState<Which>("all");
  const [parts, setParts] = useState<Set<string>>(new Set(PARTS.map(([k]) => k)));
  const done = useDone();
  const stats = useStats();
  const started = useMemo(() => new Set([...done].map(id => id.split("#")[0])), [done]);
  const weak = useMemo(() => new Set(weakChapters(stats).map(c => c.slug)), [stats]);

  const shown = chapters.filter(c => chosen.includes(c.unit) && (which === "all" || (which === "started" ? started.has(c.slug) : weak.has(c.slug))));
  const flip = (k: string) => { const p = new Set(parts); if (p.has(k)) p.delete(k); else p.add(k); setParts(p); };

  return (
    <>
      <div className="wrap pk-ui no-print">
        <fieldset className="pr-set">
          <legend className="label">Units</legend>
          <div className="pr-chips">
            {units.map(u => (
              <button key={u.id} type="button" className="pr-chip" aria-pressed={chosen.includes(u.id)} onClick={() => setChosen(chosen.includes(u.id) ? chosen.filter(x => x !== u.id) : [...chosen, u.id])}>
                <b>Unit {u.n}</b> {u.short}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="pr-set">
          <legend className="label">Chapters</legend>
          <div className="pr-chips">
            <button type="button" className="pr-chip" aria-pressed={which === "all"} onClick={() => setWhich("all")}>All</button>
            <button type="button" className="pr-chip" aria-pressed={which === "started"} onClick={() => setWhich("started")}>Started ({started.size})</button>
            <button type="button" className="pr-chip" aria-pressed={which === "weak"} onClick={() => setWhich("weak")}>Weak spots ({weak.size})</button>
          </div>
        </fieldset>
        <fieldset className="pr-set">
          <legend className="label">Include</legend>
          <div className="pr-chips">
            {PARTS.map(([k, label]) => <button key={k} type="button" className="pr-chip" aria-pressed={parts.has(k)} onClick={() => flip(k)}>{label}</button>)}
          </div>
        </fieldset>
        <div className="btn-row pk-go">
          <PrintButton label="Print the pack or save it as a PDF" />
          <span className="ci-fine" aria-live="polite">{shown.length} {shown.length === 1 ? "chapter" : "chapters"} in the pack.{which === "weak" && weak.size === 0 && " Weak spots appear after you answer at least five questions from a chapter in practice."}</span>
        </div>
      </div>
      <div className="wrap pk" data-no-sum={!parts.has("sum") || undefined} data-no-mx={!parts.has("mx") || undefined} data-no-fx={!parts.has("fx") || undefined} data-no-terms={!parts.has("terms") || undefined}>
        {shown.length === 0 ? <p className="sub no-print">No chapters match. Choose more units, or all chapters.</p> : shown.map(c => <div key={c.slug}>{c.node}</div>)}
      </div>
    </>
  );
}
