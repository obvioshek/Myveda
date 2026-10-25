"use client";

import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { NOTE_PREFIX, PLAN_KEY, useDevice } from "@/components/landing/device";
import { useDone } from "./progress";
import { dueIds, useReview } from "./review";
import { useStats, weakChapters } from "./stats";

// "Your progress": everything the site keeps for the reader on this device, in
// one place. How far they are in each unit and what to read next, the review
// waiting for them, their study plan, and their notes from every lesson.

export type OverviewConcept = { id: string; name: string };
export type OverviewChapter = { slug: string; title: string; concepts: OverviewConcept[] };
export type OverviewUnit = { id: string; n: number; title: string; chapters: OverviewChapter[] };

type Note = { key: string; text: string; href: string; concept: string; chapter: string };

// Notes live under one storage key each, so they are read by scanning. Re-read
// whenever the site writes to storage.
const CHANGE = "vv-device-change";
function subscribe(on: () => void) {
  window.addEventListener(CHANGE, on);
  window.addEventListener("storage", on);
  return () => { window.removeEventListener(CHANGE, on); window.removeEventListener("storage", on); };
}
function noteSnapshot(): string {
  try {
    const out: [string, string][] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k?.startsWith(NOTE_PREFIX)) { const v = localStorage.getItem(k) ?? ""; if (v.trim()) out.push([k.slice(NOTE_PREFIX.length), v]); }
    }
    return JSON.stringify(out.sort());
  } catch {
    return "[]";
  }
}

const plural = (n: number, one: string, many: string) => `${n.toLocaleString("en-IN")} ${n === 1 ? one : many}`;

export default function Overview({ units }: { units: OverviewUnit[] }) {
  const done = useDone();
  const review = useReview();
  const due = dueIds(review).length;
  const listed = Object.keys(review).length;
  const planRaw = useDevice(PLAN_KEY);
  const notesRaw = useSyncExternalStore(subscribe, noteSnapshot, () => "[]");
  const weak = weakChapters(useStats());

  const titles = useMemo(() => new Map(units.flatMap(u => u.chapters.map(c => [c.slug, c.title] as const))), [units]);
  const names = useMemo(() => {
    const m = new Map<string, { concept: string; chapter: string }>();
    for (const u of units) for (const c of u.chapters) for (const x of c.concepts) m.set(`/learn/${c.slug}#${x.id}`, { concept: x.name, chapter: c.title });
    return m;
  }, [units]);

  const notes: Note[] = useMemo(() => {
    // In syllabus order, the order the names were added in.
    const order = new Map([...names.keys()].map((k, i) => [k, i]));
    const raw = JSON.parse(notesRaw) as [string, string][];
    return raw
      .flatMap(([key, text]) => {
        const n = names.get(key);
        return n ? [{ key, text, href: key, concept: n.concept, chapter: n.chapter }] : [];
      })
      .sort((a, b) => order.get(a.key)! - order.get(b.key)!);
  }, [notesRaw, names]);

  const plan = useMemo(() => {
    try {
      const p = JSON.parse(planRaw) as { exam?: string };
      if (!p.exam || !/^\d{4}-\d{2}-\d{2}$/.test(p.exam)) return null;
      const [y, m, d] = p.exam.split("-").map(Number);
      const exam = new Date(y, m - 1, d);
      return { exam };
    } catch {
      return null;
    }
  }, [planRaw]);

  const total = units.reduce((a, u) => a + u.chapters.reduce((b, c) => b + c.concepts.length, 0), 0);
  const doneAll = units.reduce((a, u) => a + u.chapters.reduce((b, c) => b + c.concepts.filter(x => done.has(`${c.slug}#${x.id}`)).length, 0), 0);
  const chaptersDone = units.reduce((a, u) => a + u.chapters.filter(c => c.concepts.length && c.concepts.every(x => done.has(`${c.slug}#${x.id}`))).length, 0);
  const chaptersAll = units.reduce((a, u) => a + u.chapters.length, 0);

  return (
    <div className="wrap ov">
      <div className="grid g3 ov-top">
        <div className="cell">
          <span className="label red">Concepts</span>
          <b className="ov-big">{doneAll.toLocaleString("en-IN")}<span> of {total.toLocaleString("en-IN")}</span></b>
          <span className="ov-sub">{plural(chaptersDone, "chapter", "chapters")} of {chaptersAll} finished</span>
        </div>
        <div className="cell">
          <span className="label red">Review</span>
          <b className="ov-big">{due}<span> due today</span></b>
          <span className="ov-sub">{listed ? <>{plural(listed, "item", "items")} on your list. <Link className="link" href="/learn/practice#review" prefetch={false}>Review</Link></> : <>Nothing on your list yet. <Link className="link" href="/learn/practice" prefetch={false}>Practise</Link></>}</span>
        </div>
        <div className="cell">
          <span className="label red">Study plan</span>
          {plan ? <PlanCell exam={plan.exam} /> : <><b className="ov-big"><span>No exam date set</span></b><span className="ov-sub"><Link className="link" href="/learn/plan" prefetch={false}>Make a study plan</Link></span></>}
        </div>
      </div>

      <section className="ov-units" aria-labelledby="ov-units-h">
        <h2 id="ov-units-h" className="h-xs">By unit</h2>
        <ul>
          {units.map(u => {
            const ids = u.chapters.flatMap(c => c.concepts.map(x => `${c.slug}#${x.id}`));
            const n = ids.filter(id => done.has(id)).length;
            const pct = ids.length ? Math.round((n / ids.length) * 100) : 0;
            // The first concept not done, in syllabus order.
            let next: { href: string; name: string; chapter: string } | null = null;
            for (const c of u.chapters) {
              const x = c.concepts.find(x => !done.has(`${c.slug}#${x.id}`));
              if (x) { next = { href: `/learn/${c.slug}#${x.id}`, name: x.name, chapter: c.title }; break; }
            }
            return (
              <li key={u.id}>
                <span className="ov-u"><span className="ci-pu">Unit {u.n}</span><b>{u.title}</b></span>
                <span className="pg"><span className="pg-bar" aria-hidden="true"><i style={{ width: `${pct}%` }} /></span><span className="pg-t">{n} of {ids.length}</span></span>
                <span className="ov-next">{next ? <>Next: <Link className="link" href={next.href} prefetch={false}>{next.name}</Link> <span>in {next.chapter}</span></> : "All done."}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="ov-weak" aria-labelledby="ov-weak-h">
        <h2 id="ov-weak-h" className="h-xs">Where you’re weakest</h2>
        {weak.length === 0
          ? <p className="pr-text">Chapters where most of your recent answers were wrong show here, once you’ve answered a few questions from them, in lessons or in practice.</p>
          : (
            <ul>
              {weak.slice(0, 6).map(w => {
                const title = titles.get(w.slug) ?? w.slug;
                return (
                  <li key={w.slug}>
                    <Link href={`/learn/${w.slug}`} prefetch={false}><b>{title}</b></Link>
                    <span className="ov-score">{w.right} of your last {w.total} answers right</span>
                    <Link className="link" href={`/learn/practice?chapter=${w.slug}`} prefetch={false}>Test this chapter</Link>
                  </li>
                );
              })}
            </ul>
          )}
      </section>

      <section className="ov-notes" aria-labelledby="ov-notes-h">
        <h2 id="ov-notes-h" className="h-xs">Your notes {notes.length > 0 && <span className="ov-count">{notes.length}</span>}</h2>
        {notes.length === 0
          ? <p className="pr-text">What you write under “Reflect &amp; discuss” in a lesson collects here, so you can read your own thinking back before an exam.</p>
          : (
            <ul>
              {notes.map(n => (
                <li key={n.key}>
                  <Link href={n.href} prefetch={false}><b>{n.concept}</b> <span>{n.chapter}</span></Link>
                  <p>{n.text}</p>
                </li>
              ))}
            </ul>
          )}
      </section>

      <p className="ci-fine">All of this is kept in this browser only. <Link className="link" href="/learn/transfer" prefetch={false}>Move it to another device</Link>.</p>
    </div>
  );
}

const noSub = () => () => {};
function PlanCell({ exam }: { exam: Date }) {
  // Today, read outside render; "" on the server.
  const today = useSyncExternalStore(noSub, () => new Date().toDateString(), () => "");
  if (!today) return null;
  const t = new Date(today);
  const days = Math.round((exam.getTime() - t.getTime()) / 86_400_000);
  return (
    <>
      <b className="ov-big">{days > 0 ? <>{days}<span> {days === 1 ? "day" : "days"} to go</span></> : <span>Exam date passed</span>}</b>
      <span className="ov-sub">{exam.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}. <Link className="link" href="/learn/plan" prefetch={false}>{days > 0 ? "See this week" : "Set a new date"}</Link></span>
    </>
  );
}
