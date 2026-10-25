"use client";

import { useState } from "react";
import { Field, Out, Tool, Warn, num, ok, pct, rupees } from "./bits";

// WACC as the chapter works it: each source's after-tax cost, weighted by its
// share of the total, then added; and the decision rule against a project's
// return. Starts with the chapter's firm: debt ₹2,00,000 at 10%, preference
// ₹50,000 at 12%, equity ₹2,50,000 at 15%.
const SOURCES = [
  { key: "d", name: "Debt (after tax)" },
  { key: "p", name: "Preference capital" },
  { key: "e", name: "Equity" },
  { key: "r", name: "Retained earnings" },
] as const;
type Key = (typeof SOURCES)[number]["key"];
const START: Record<`${Key}a` | `${Key}k` | "project", string> = { da: "200000", dk: "10", pa: "50000", pk: "12", ea: "250000", ek: "15", ra: "0", rk: "15", project: "14" };

export default function Wacc() {
  const [v, setV] = useState(START);
  const set = (k: keyof typeof START) => (s: string) => setV({ ...v, [k]: s });
  const rows = SOURCES.map(s => ({ ...s, amount: num(v[`${s.key}a`]), cost: num(v[`${s.key}k`]) / 100 }));
  const project = num(v.project) / 100;
  const total = rows.reduce((a, r) => a + (Number.isFinite(r.amount) ? r.amount : 0), 0);

  let body: React.ReactNode;
  if (rows.some(r => !ok(r.amount, r.cost) || r.amount < 0) || !(total > 0)) body = <Warn>Enter amounts of zero or more, with at least one above zero, and a cost for each.</Warn>;
  else {
    const wacc = rows.reduce((a, r) => a + (r.amount / total) * r.cost, 0);
    body = (
      <>
        <div className="tl-table-wrap">
          <table className="tl-table">
            <thead><tr><th scope="col">Source</th><th scope="col">Amount</th><th scope="col">Cost</th><th scope="col">Weight</th><th scope="col">Weighted cost</th></tr></thead>
            <tbody>
              {rows.filter(r => r.amount > 0).map(r => (
                <tr key={r.key}><th scope="row">{r.name}</th><td>{rupees(r.amount)}</td><td>{pct(r.cost, 2)}</td><td>{(r.amount / total).toFixed(2)}</td><td>{pct((r.amount / total) * r.cost, 2)}</td></tr>
              ))}
            </tbody>
            <tfoot><tr><th scope="row">Total</th><td>{rupees(total)}</td><td /><td>1.00</td><td><b>{pct(wacc, 2)}</b></td></tr></tfoot>
          </table>
        </div>
        <div className="tl-outs">
          <Out label="WACC" value={pct(wacc, 2)} note="The minimum average return investors require" strong />
          {Number.isFinite(project) && <Out label="The project" value={pct(project, 2)} note={project > wacc ? "Above the WACC: it adds value" : project < wacc ? "Below the WACC: it destroys value" : "Equal to the WACC: it neither adds nor destroys value"} />}
        </div>
      </>
    );
  }

  return (
    <Tool
      intro="The chapter’s firm is filled in, at book values. Change the amounts or costs, add retained earnings, or try a project’s return."
      onReset={() => setV(START)}
      fields={<>
        {SOURCES.map(s => (
          <div key={s.key} className="tl-pair">
            <Field label={s.name} unit="₹" value={v[`${s.key}a`]} onChange={set(`${s.key}a`)} />
            <Field label={<>Cost<span className="sr-only"> of {s.name.toLowerCase()}</span></>} unit="%" value={v[`${s.key}k`]} onChange={set(`${s.key}k`)} />
          </div>
        ))}
        <Field label="A project’s expected return" unit="%" value={v.project} onChange={set("project")} />
      </>}
    >
      {body}
    </Tool>
  );
}
