"use client";

import Link from "next/link";
import { useId, useMemo, useSyncExternalStore } from "react";
import { PLAN_KEY as KEY, useDevice, writeDevice } from "@/components/landing/device";
import Progress from "./Progress";
import { useDone } from "./progress";
import { dueIds, useReview } from "./review";

// A study plan worked back from an exam date. The reader's unfinished chapters,
// in syllabus order, are shared out over the weeks before the exam so each week
// has about the same reading time; the last stretch is kept for revision. The
// plan isn't stored, only the settings: it is worked out again from what is
// done each time the page opens, so finished chapters drop out and the rest
// move up. Everything stays on this device.

export type PlanChapter = { slug: string; title: string; minutes: number; ids: string[] };
export type PlanUnit = { id: string; n: number; short: string; chapters: PlanChapter[] };

type Settings = { exam: string; units: string[] | null; days: number };
const DAY = 86_400_000;

function parse(raw: string): Settings {
  try {
    const v = JSON.parse(raw) as Partial<Settings>;
    return {
      exam: typeof v.exam === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v.exam) ? v.exam : "",
      units: Array.isArray(v.units) ? v.units.filter((x): x is string => typeof x === "string") : null,
      days: Number.isInteger(v.days) && v.days! >= 1 && v.days! <= 7 ? v.days! : 6,
    };
  } catch {
    return { exam: "", units: null, days: 6 };
  }
}

// Dates as local calendar days, so "today" and the exam day are the reader's own.
const fromIso = (s: string) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const toIso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const short = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

// Today's date, read outside render so the page stays pure; "" on the server,
// where the plan isn't drawn.
const noSubscribe = () => () => {};
function useToday(): string {
  return useSyncExternalStore(noSubscribe, () => toIso(new Date()), () => "");
}

type Week = { start: Date; end: Date; chapters: (PlanChapter & { unitN: number })[]; minutes: number };

export default function Planner({ units }: { units: PlanUnit[] }) {
  const raw = useDevice(KEY);
  const s = useMemo(() => parse(raw), [raw]);
  const done = useDone();
  const due = dueIds(useReview()).length;
  const ids = { exam: useId(), days: useId() };
  const save = (next: Partial<Settings>) => writeDevice(KEY, JSON.stringify({ ...s, ...next }));

  const chosen = useMemo(() => s.units ?? units.map(u => u.id), [s.units, units]);
  const todayIso = useToday();

  const plan = useMemo(() => {
    if (!s.exam || !todayIso) return null;
    const today = fromIso(todayIso);
    const exam = fromIso(s.exam);
    const daysLeft = Math.round((exam.getTime() - today.getTime()) / DAY);
    const lastDay = addDays(today, daysLeft - 1);
    if (daysLeft < 1) return { daysLeft, weeks: [] as Week[], revisionFrom: today, left: [] as Week["chapters"], perDay: 0, lastDay };
    // Keep the last tenth of the time, between 3 and 14 days, for revision.
    const revise = Math.min(daysLeft, Math.max(3, Math.min(14, Math.round(daysLeft / 10))));
    const readDays = daysLeft - revise;
    const revisionFrom = addDays(today, readDays);
    const left = units.filter(u => chosen.includes(u.id)).flatMap(u => u.chapters.filter(c => !c.ids.every(id => done.has(id))).map(c => ({ ...c, unitN: u.n })));
    const weeks: Week[] = [];
    for (let d = 0; d < readDays; d += 7) weeks.push({ start: addDays(today, d), end: addDays(today, Math.min(d + 6, readDays - 1)), chapters: [], minutes: 0 });
    if (!weeks.length) return { daysLeft, weeks, revisionFrom, left, perDay: 0, lastDay };
    // Share the reading out by time: a chapter goes in the week where the
    // running total of minutes reaches its point, weighted by how long each week is.
    const total = left.reduce((a, c) => a + c.minutes, 0);
    const lengths = weeks.map(w => Math.round((w.end.getTime() - w.start.getTime()) / DAY) + 1);
    const bounds: number[] = [];
    let acc = 0;
    for (const l of lengths) { acc += l; bounds.push((acc / readDays) * total); }
    let run = 0, w = 0;
    for (const c of left) {
      const mid = run + c.minutes / 2;
      while (w < weeks.length - 1 && mid > bounds[w]) w++;
      weeks[w].chapters.push(c);
      weeks[w].minutes += c.minutes;
      run += c.minutes;
    }
    const studyDays = Math.max(1, Math.round((readDays * s.days) / 7));
    return { daysLeft, weeks, revisionFrom, left, perDay: Math.ceil(total / studyDays), lastDay };
  }, [s.exam, s.days, chosen, units, done, todayIso]);

  const today = todayIso ? fromIso(todayIso) : null;
  const minDate = today ? toIso(addDays(today, 1)) : undefined;

  return (
    <div className="wrap pl">
      <div className="pl-form">
        <div className="tl-f">
          <label htmlFor={ids.exam}>Exam date</label>
          <div className="tl-in"><input id={ids.exam} type="date" min={minDate} value={s.exam} onChange={e => save({ exam: e.target.value })} /></div>
        </div>
        <div className="tl-f">
          <label htmlFor={ids.days}>Days a week you can study</label>
          <div className="tl-in">
            <select id={ids.days} value={s.days} onChange={e => save({ days: Number(e.target.value) })}>
              {[1, 2, 3, 4, 5, 6, 7].map(n => <option key={n} value={n}>{n} {n === 1 ? "day" : "days"}</option>)}
            </select>
          </div>
        </div>
        <fieldset className="pr-set pl-units">
          <legend className="label">Units to cover</legend>
          <div className="pr-chips">
            {units.map(u => (
              <button key={u.id} type="button" className="pr-chip" aria-pressed={chosen.includes(u.id)} onClick={() => save({ units: chosen.includes(u.id) ? chosen.filter(x => x !== u.id) : [...chosen, u.id] })}>
                <b>Unit {u.n}</b> {u.short}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {!plan && <p className="pr-text pl-empty">Choose your exam date and a plan appears here, week by week. It is kept on this device, and it changes as you finish chapters.</p>}

      {plan && plan.daysLeft < 1 && <p className="tl-warn">That date has passed. Choose the date of your next exam.</p>}

      {plan && plan.daysLeft >= 1 && (
        <div className="pl-plan" aria-live="polite">
          <p className="pl-sum">
            <b>{plan.daysLeft} {plan.daysLeft === 1 ? "day" : "days"}</b> to go.
            {plan.left.length === 0
              ? " Every chapter you chose is done: the rest of the time is for revision."
              : <> {plan.left.length} {plan.left.length === 1 ? "chapter" : "chapters"} left to read{plan.weeks.length > 0 && <>, about <b>{plan.perDay} minutes</b> of reading a study day, plus time for the checks and practice</>}.</>}
            {plan.left.length > 0 && plan.weeks.length === 0 && " That is too close to read new chapters well: spend the time revising what you have read."}
            {plan.perDay > 120 && " That is a lot for one day: consider fewer units, or more study days."}
          </p>

          {plan.weeks.map((w, i) => {
            if (!w.chapters.length) return null;
            const now = !!today && today >= w.start && today <= w.end;
            return (
              <section key={i} className={now ? "pl-week now" : "pl-week"} aria-label={`Week ${i + 1}`}>
                <div className="pl-wh">
                  <span className="label red">{now ? "This week" : `Week ${i + 1}`}</span>
                  <span className="pl-dates">{short(w.start)} – {short(w.end)}</span>
                  <span className="pl-min">{w.minutes} min</span>
                </div>
                <ul>
                  {w.chapters.map(c => (
                    <li key={c.slug}>
                      <Link href={`/learn/${c.slug}`} prefetch={false}><span className="ci-pu">Unit {c.unitN}</span><b>{c.title}</b></Link>
                      <span className="pl-c-side">{c.minutes} min<Progress ids={c.ids} compact /></span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}

          <section className="pl-week rev" aria-label="Revision">
            <div className="pl-wh">
              <span className="label red">Revision</span>
              <span className="pl-dates">{short(plan.revisionFrom)} – {short(plan.lastDay)}</span>
            </div>
            <ul className="pl-rev">
              <li><Link href="/learn/revision" prefetch={false}><b>Revision sheets</b></Link><span>Every concept’s one-page summary</span></li>
              <li><Link href="/learn/formulas" prefetch={false}><b>Formula sheet</b></Link><span>Every formula, with worked examples</span></li>
              <li><Link href="/learn/practice" prefetch={false}><b>Mixed practice</b></Link><span>Questions mixed across chapters{due ? `; ${due} due for review now` : ""}</span></li>
            </ul>
          </section>
          <p className="ci-fine">Reading times are estimates at about 200 words a minute. Finished chapters leave the plan, and what’s left is shared out again. The plan is kept on this device; <Link className="link" href="/learn/transfer" prefetch={false}>move it to another</Link>.</p>
        </div>
      )}
    </div>
  );
}
