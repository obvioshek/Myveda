"use client";

import { useState } from "react";
import { Field, Out, Tool, Warn, num, ok, rupees, signed } from "./bits";

// Price elasticity by three of the chapter's methods, for one price change:
// proportionate (from the starting point), arc (midpoint) and total outlay.
// Starts with the chapter's chai stall: ₹10 to ₹12, sales 200 to 150.
const START = { p1: "10", p2: "12", q1: "200", q2: "150" };

function kind(e: number) {
  const a = Math.abs(e);
  if (Math.abs(a - 1) < 0.005) return "unitary";
  return a > 1 ? "elastic" : "inelastic";
}

export default function Elasticity() {
  const [v, setV] = useState(START);
  const set = (k: keyof typeof START) => (s: string) => setV({ ...v, [k]: s });
  const p1 = num(v.p1), p2 = num(v.p2), q1 = num(v.q1), q2 = num(v.q2);

  let body: React.ReactNode;
  if (!ok(p1, p2, q1, q2) || p1 <= 0 || p2 <= 0 || q1 < 0 || q2 < 0) body = <Warn>Enter prices above zero and quantities of zero or more.</Warn>;
  else if (p1 === p2) body = <Warn>The price has to change for elasticity to mean anything.</Warn>;
  else if (q1 === 0) body = <Warn>The proportionate method divides by the starting quantity, so it needs to be above zero.</Warn>;
  else {
    const prop = ((q2 - q1) / q1) / ((p2 - p1) / p1);
    const arc = ((q2 - q1) / ((q1 + q2) / 2)) / ((p2 - p1) / ((p1 + p2) / 2));
    const back = q2 === 0 ? NaN : ((q1 - q2) / q2) / ((p1 - p2) / p2);
    const r1 = p1 * q1, r2 = p2 * q2;
    const up = p2 > p1;
    const outlay = r1 === r2 ? "unitary" : (r2 > r1) !== up ? "elastic" : "inelastic";
    body = (
      <>
        <div className="tl-outs">
          <Out label="Proportionate method" value={signed(prop)} note={Number.isFinite(back) ? `From the other end it gives ${signed(back)}` : undefined} />
          <Out label="Arc (midpoint) method" value={signed(arc)} note="The same whichever way the price moved" strong />
          <Out label="Total outlay" value={`${rupees(r1)} → ${rupees(r2)}`} note={`Spending ${r2 === r1 ? "stays the same" : r2 > r1 ? "rises" : "falls"} as the price ${up ? "rises" : "falls"}`} />
        </div>
        <p className="tl-say">
          Demand here is <b>{kind(arc)}</b> by the arc method{prop > 0 && " (a positive figure means quantity moved with price, which is unusual for demand)"}.
          {" "}The total outlay method agrees that it is {outlay}{outlay !== kind(arc) && ", though the methods measure differently near 1"}.
          {kind(arc) === "elastic" && " A price cut would raise revenue; a rise would lower it."}
          {kind(arc) === "inelastic" && " A price rise would raise revenue; a cut would lower it."}
        </p>
      </>
    );
  }

  return (
    <Tool
      intro="The chapter’s chai stall is filled in. Change the prices and quantities to see each method’s answer."
      onReset={() => setV(START)}
      fields={<>
        <Field label="Price before" unit="₹" value={v.p1} onChange={set("p1")} />
        <Field label="Price after" unit="₹" value={v.p2} onChange={set("p2")} />
        <Field label="Quantity before" value={v.q1} onChange={set("q1")} />
        <Field label="Quantity after" value={v.q2} onChange={set("q2")} />
      </>}
    >
      {body}
    </Tool>
  );
}
