"use client";

import { useState } from "react";
import { Field, Out, Tool, Warn, count, num, ok, pct, rupees } from "./bits";

// Payback, NPV and IRR for a project with the same cash inflow each year, as in
// the chapter. Starts with its machine: ₹10,00,000 bringing in ₹4,00,000 a
// year for 4 years, at a 12% cost of capital.
const START = { cost: "1000000", inflow: "400000", years: "4", rate: "12" };

const annuity = (r: number, n: number) => (r === 0 ? n : (1 - (1 + r) ** -n) / r);

// The rate at which NPV is zero, by halving the interval: NPV falls as the rate
// rises, so there is one answer when the inflows add up to more than the cost.
function irr(cost: number, inflow: number, n: number): number | null {
  if (inflow * n <= cost) return inflow * n === cost ? 0 : null;
  let lo = 0, hi = 1;
  while (inflow * annuity(hi, n) > cost && hi < 1e4) hi *= 2;
  for (let i = 0; i < 100; i++) {
    const mid = (lo + hi) / 2;
    if (inflow * annuity(mid, n) > cost) lo = mid; else hi = mid;
  }
  return (lo + hi) / 2;
}

export default function CapitalBudgeting() {
  const [v, setV] = useState(START);
  const set = (k: keyof typeof START) => (s: string) => setV({ ...v, [k]: s });
  const cost = num(v.cost), inflow = num(v.inflow), years = num(v.years), rate = num(v.rate) / 100;

  let body: React.ReactNode;
  if (!ok(cost, inflow, years, rate) || cost <= 0 || inflow < 0 || rate < 0) body = <Warn>Enter a cost above zero, an inflow of zero or more, and a rate of zero or more.</Warn>;
  else if (!Number.isInteger(years) || years < 1 || years > 50) body = <Warn>Enter the life as a whole number of years, from 1 to 50.</Warn>;
  else {
    const factor = annuity(rate, years);
    const pv = inflow * factor;
    const npv = pv - cost;
    const payback = inflow > 0 ? cost / inflow : Infinity;
    const r = irr(cost, inflow, years);
    const accept = npv > 0;
    body = (
      <>
        <div className="tl-outs">
          <Out label="Payback period" value={payback <= years ? `${count(payback, 2)} years` : "Not within its life"} note="Ignores the time value of money" />
          <Out label="Net present value" value={rupees(Math.round(npv))} note={`${rupees(Math.round(inflow))} × annuity factor ${factor.toFixed(4)} − ${rupees(cost)}`} strong />
          <Out label="Internal rate of return" value={r === null ? "None above 0%" : pct(r)} note={r === null ? "The inflows never add up to the cost" : `${r > rate ? "Above" : r < rate ? "Below" : "Equal to"} the ${pct(rate)} required`} />
        </div>
        <p className="tl-say">
          {accept ? <>Accept: the NPV is positive{r !== null && <>, and the IRR of {pct(r)} is above the {pct(rate)} cost of capital</>}.</>
            : npv === 0 ? <>The NPV is zero: the project just earns its {pct(rate)} cost of capital.</>
            : <>Reject: the NPV is negative{r !== null && <>, and the IRR of {pct(r)} is below the {pct(rate)} cost of capital</>}.</>}
          {" "}NPV is the main test; a short payback alone doesn’t make a project worth doing.
        </p>
      </>
    );
  }

  return (
    <Tool
      intro="The chapter’s machine is filled in. Change the cost, the yearly inflow, its life or the cost of capital."
      onReset={() => setV(START)}
      fields={<>
        <Field label="Initial cost" unit="₹" value={v.cost} onChange={set("cost")} />
        <Field label="Cash inflow each year" unit="₹" value={v.inflow} onChange={set("inflow")} />
        <Field label="Life" unit="years" value={v.years} onChange={set("years")} />
        <Field label="Cost of capital" unit="%" value={v.rate} onChange={set("rate")} />
      </>}
    >
      {body}
    </Tool>
  );
}
