"use client";

import { useId } from "react";

// Shared parts of the calculators: a number field, a result, and number formats
// in the Indian system (lakh and crore), as the chapters write them.

/** A number field kept as text, so a half-typed value ("1,2", "") isn't lost. */
export function Field({ label, value, onChange, unit, hint }: {
  label: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  /** "₹" goes before the number; anything else ("%", "years") after it. */
  unit?: string;
  hint?: string;
}) {
  const id = useId();
  const pre = unit === "₹";
  return (
    <div className="tl-f">
      <label htmlFor={id}>{label}</label>
      <div className="tl-in">
        {pre && <span aria-hidden="true">₹</span>}
        <input id={id} type="text" inputMode="decimal" autoComplete="off" spellCheck={false} value={value} onChange={e => onChange(e.target.value)} />
        {unit && !pre && <span aria-hidden="true">{unit}</span>}
      </div>
      {hint && <span className="tl-hint">{hint}</span>}
    </div>
  );
}

export function Out({ label, value, note, strong = false }: { label: string; value: string; note?: string; strong?: boolean }) {
  return (
    <div className={strong ? "tl-o strong" : "tl-o"}>
      <span className="tl-ol">{label}</span>
      <b>{value}</b>
      {note && <span className="tl-on">{note}</span>}
    </div>
  );
}

/** The frame every calculator sits in: a line on what to do, the fields, the results. */
export function Tool({ intro, onReset, fields, children }: { intro: string; onReset: () => void; fields: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="tl">
      <div className="tl-top">
        <p className="tl-intro">{intro}</p>
        <button type="button" className="btn btn-ghost tl-reset" onClick={onReset}>Back to the chapter’s example</button>
      </div>
      <div className="tl-fields">{fields}</div>
      <div className="tl-res" aria-live="polite">{children}</div>
    </div>
  );
}

export function Warn({ children }: { children: React.ReactNode }) {
  return <p className="tl-warn">{children}</p>;
}

/** Reads a field: commas and spaces are ignored; anything else not a number gives NaN. */
export function num(s: string): number {
  const t = s.replace(/[,\s₹%]/g, "");
  return t === "" || t === "-" ? NaN : Number(t);
}

export const ok = (...xs: number[]) => xs.every(x => Number.isFinite(x));

/** ₹ in the Indian grouping: ₹3,00,000. */
export function rupees(n: number, digits = 0): string {
  const sign = n < 0 ? "−" : "";
  return `${sign}₹${Math.abs(n).toLocaleString("en-IN", { maximumFractionDigits: digits, minimumFractionDigits: 0 })}`;
}

export function count(n: number, digits = 0): string {
  return n.toLocaleString("en-IN", { maximumFractionDigits: digits });
}

export function pct(n: number, digits = 1): string {
  const s = (n * 100).toFixed(digits).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
  return `${s.replace("-", "−")}%`;
}

export function signed(n: number, digits = 2): string {
  return n.toFixed(digits).replace("-", "−");
}
