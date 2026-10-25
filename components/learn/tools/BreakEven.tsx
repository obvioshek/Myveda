"use client";

import { useState } from "react";
import { Field, Out, Tool, Warn, count, num, ok, pct, rupees } from "./bits";

// Break-even and CVP with the chapter's formulas: break-even in units and in
// rupees, margin of safety, and the sales needed for a target profit, with the
// break-even chart redrawn from the numbers. Starts with the chapter's pump-maker:
// price ₹50, variable cost ₹30, fixed cost ₹1,20,000, sales of 8,000 pumps.
const START = { price: "50", vc: "30", fixed: "120000", units: "8000", target: "100000" };

function Chart({ price, vc, fixed, bep, units }: { price: number; vc: number; fixed: number; bep: number; units: number }) {
  const W = 560, H = 260, L = 64, B = 34, T = 14, R = 14;
  const xMax = Math.max(bep * 2, units * 1.2, 1);
  const yMax = Math.max(price * xMax, fixed + vc * xMax) * 1.05;
  const x = (u: number) => L + (u / xMax) * (W - L - R);
  const y = (r: number) => H - B - (r / yMax) * (H - B - T);
  const tick = (n: number) => (n >= 1e7 ? `${count(n / 1e7, 1)} cr` : n >= 1e5 ? `${count(n / 1e5, 1)} L` : count(n));
  return (
    <figure className="tl-chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Break-even chart: the sales line crosses the total cost line at ${count(bep)} units, ${rupees(bep * price)}.`}>
        <line className="ax" x1={L} y1={H - B} x2={W - R} y2={H - B} />
        <line className="ax" x1={L} y1={T} x2={L} y2={H - B} />
        {/* the loss area before break-even and the profit area after it */}
        <polygon className="loss" points={`${x(0)},${y(fixed)} ${x(bep)},${y(fixed + vc * bep)} ${x(0)},${y(0)}`} />
        <polygon className="gain" points={`${x(bep)},${y(price * bep)} ${x(xMax)},${y(price * xMax)} ${x(xMax)},${y(fixed + vc * xMax)}`} />
        <line className="fc" x1={x(0)} y1={y(fixed)} x2={x(xMax)} y2={y(fixed)} />
        <line className="tc" x1={x(0)} y1={y(fixed)} x2={x(xMax)} y2={y(fixed + vc * xMax)} />
        <line className="sl" x1={x(0)} y1={y(0)} x2={x(xMax)} y2={y(price * xMax)} />
        <line className="guide" x1={x(bep)} y1={y(price * bep)} x2={x(bep)} y2={H - B} />
        {units > 0 && <line className="now" x1={x(units)} y1={T} x2={x(units)} y2={H - B} />}
        <rect className="bep" x={x(bep) - 5} y={y(price * bep) - 5} width="10" height="10" />
        {/* Line labels sit near the right end: sales above its line, total cost below its own, so they part as the lines do. */}
        <text className="lb" x={x(xMax * 0.97)} y={y(price * xMax * 0.97) - 10} textAnchor="end">Sales</text>
        <text className="lb" x={x(xMax * 0.97)} y={y(fixed + vc * xMax * 0.97) + 20} textAnchor="end">Total cost</text>
        <text className="lb soft" x={x(xMax) - 4} y={y(fixed) - 6} textAnchor="end">Fixed cost</text>
        <text className="tk" x={x(bep)} y={H - B + 18} textAnchor="middle">{tick(bep)}</text>
        {units > 0 && Math.abs(x(units) - x(bep)) > 70 && <text className="tk now-t" x={x(units)} y={H - B + 18} textAnchor="middle">{tick(units)}</text>}
        <text className="tk" x={L - 8} y={y(price * bep) + 4} textAnchor="end">₹{tick(price * bep)}</text>
        <text className="tk" x={L - 8} y={H - B + 4} textAnchor="end">0</text>
      </svg>
      <figcaption>Units along the bottom, rupees up the side. The square is the break-even point; the dashed line is the sales you entered.</figcaption>
    </figure>
  );
}

export default function BreakEven() {
  const [v, setV] = useState(START);
  const set = (k: keyof typeof START) => (s: string) => setV({ ...v, [k]: s });
  const price = num(v.price), vc = num(v.vc), fixed = num(v.fixed), units = num(v.units), target = num(v.target);

  let body: React.ReactNode;
  if (!ok(price, vc, fixed, units, target) || price <= 0 || vc < 0 || fixed < 0 || units < 0 || target < 0) body = <Warn>Enter a price above zero, and costs, sales and profit of zero or more.</Warn>;
  else if (price <= vc) body = <Warn>The price must be above the variable cost per unit. Otherwise each sale loses money and the firm never breaks even.</Warn>;
  else {
    const c = price - vc, pv = c / price;
    const bep = fixed / c;
    const sales = units * price;
    const mos = sales - bep * price;
    const profit = units * c - fixed;
    body = (
      <>
        <div className="tl-outs">
          <Out label="Contribution per unit" value={rupees(c, 2)} note={`P/V ratio ${pct(pv)}`} />
          <Out label="Break-even" value={`${count(Math.ceil(bep - 1e-9))} units`} note={`${rupees(bep * price)} of sales`} strong />
          <Out label="Margin of safety" value={rupees(mos)} note={sales > 0 ? `${pct(mos / sales)} of sales; profit ${rupees(profit)}` : undefined} />
          <Out label="For the target profit" value={`${count(Math.ceil((fixed + target) / c - 1e-9))} units`} note={`${rupees((fixed + target) / pv)} of sales`} />
        </div>
        <p className="tl-say">
          {mos >= 0
            ? <>Sales could fall by {pct(sales ? mos / sales : 0)} before the firm made a loss.</>
            : <>At these sales the firm is below break-even, making a loss of {rupees(-profit)}.</>}
          {" "}Each unit above break-even adds {rupees(c, 2)} to profit.
        </p>
        <Chart price={price} vc={vc} fixed={fixed} bep={bep} units={units} />
      </>
    );
  }

  return (
    <Tool
      intro="The chapter’s pump-maker is filled in. Change any number and the results and the chart follow."
      onReset={() => setV(START)}
      fields={<>
        <Field label="Selling price per unit" unit="₹" value={v.price} onChange={set("price")} />
        <Field label="Variable cost per unit" unit="₹" value={v.vc} onChange={set("vc")} />
        <Field label="Fixed cost" unit="₹" value={v.fixed} onChange={set("fixed")} />
        <Field label="Units sold" value={v.units} onChange={set("units")} />
        <Field label="Target profit" unit="₹" value={v.target} onChange={set("target")} />
      </>}
    >
      {body}
    </Tool>
  );
}
