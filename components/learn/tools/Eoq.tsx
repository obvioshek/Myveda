"use client";

import { useState } from "react";
import { Field, Out, Tool, Warn, count, num, ok, rupees } from "./bits";

// The economic order quantity, √(2 × annual demand × cost per order ÷ carrying
// cost per unit), and what it costs a year. Starts with the chapter's fan
// distributor: 12,000 fans a year, ₹500 an order, ₹12 to hold a fan for a year.
const START = { demand: "12000", order: "500", carry: "12" };

export default function Eoq() {
  const [v, setV] = useState(START);
  const set = (k: keyof typeof START) => (s: string) => setV({ ...v, [k]: s });
  const d = num(v.demand), o = num(v.order), h = num(v.carry);

  let body: React.ReactNode;
  if (!ok(d, o, h) || d <= 0 || o <= 0 || h <= 0) body = <Warn>Enter a yearly demand, an ordering cost and a carrying cost, each above zero.</Warn>;
  else {
    const q = Math.sqrt((2 * d * o) / h);
    const orders = d / q;
    const ordering = orders * o, carrying = (q / 2) * h;
    // Ordering half or double the EOQ, to show how flat the cost is near it.
    const at = (x: number) => (d / x) * o + (x / 2) * h;
    body = (
      <>
        <div className="tl-outs">
          <Out label="Economic order quantity" value={`${count(q)} units`} note={`√(2 × ${count(d)} × ${rupees(o)} ÷ ${rupees(h, 2)})`} strong />
          <Out label="Orders a year" value={count(orders, 1)} note={`About every ${count(365 / orders)} days`} />
          <Out label="Yearly cost at the EOQ" value={rupees(ordering + carrying)} note={`${rupees(ordering)} ordering + ${rupees(carrying)} carrying`} />
        </div>
        <p className="tl-say">
          At the EOQ, the cost of ordering equals the cost of holding stock. Ordering {count(q / 2)} at a time would cost {rupees(at(q / 2))} a year, and {count(q * 2)} at a time {rupees(at(q * 2))}.
        </p>
      </>
    );
  }

  return (
    <Tool
      intro="The chapter’s fan distributor is filled in. Change the demand or the costs to see the best order size move."
      onReset={() => setV(START)}
      fields={<>
        <Field label="Annual demand (units)" value={v.demand} onChange={set("demand")} />
        <Field label="Cost per order" unit="₹" value={v.order} onChange={set("order")} />
        <Field label="Carrying cost per unit a year" unit="₹" value={v.carry} onChange={set("carry")} />
      </>}
    >
      {body}
    </Tool>
  );
}
