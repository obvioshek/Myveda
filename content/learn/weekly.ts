// "One idea a week": a modern idea and a classical passage, a new pair each
// Monday, for /learn/weekly, its feed (/feed.xml) and the weekly email. The
// series opens with the five-step walk and the home page's themed pairs, then
// takes every other passage that has lesson notes, a unit at a time in turn,
// and starts over when it runs out. Weeks begin on Mondays, India time.

import { CHAPTERS, lessonsFor } from "./index";
import { THEMES, WALK, pairView, type PairRef } from "./readings";

export const WEEKLY_PATH = "/learn/weekly";
/** Week 0 starts on this Monday. */
export const WEEKLY_START = "2026-10-26";

const DAY = 86_400_000;
const IST = 5.5 * 3600_000;
const key = (r: PairRef) => `${r.slug}#${r.pairing}`;

function series(): PairRef[] {
  const seen = new Set<string>();
  const out: PairRef[] = [];
  const add = (r: PairRef) => { if (!seen.has(key(r))) { seen.add(key(r)); out.push({ slug: r.slug, pairing: r.pairing }); } };
  WALK.forEach(add);
  THEMES.forEach(t => t.pairs.forEach(add));
  const byUnit = new Map<number, PairRef[]>();
  for (const c of CHAPTERS) c.pairings.forEach((p, i) => {
    if (!p.quote?.includes("“")) return;
    if (!(lessonsFor(c.slug) ?? []).some(l => l.lens.some(n => n.pairing === i))) return;
    if (!byUnit.has(c.unitN)) byUnit.set(c.unitN, []);
    byUnit.get(c.unitN)!.push({ slug: c.slug, pairing: i });
  });
  const lists = [...byUnit.values()];
  for (let k = 0; lists.some(l => k < l.length); k++) for (const l of lists) if (k < l.length) add(l[k]);
  return out;
}

export const SERIES = series();

const startMs = () => { const [y, m, d] = WEEKLY_START.split("-").map(Number); return Date.UTC(y, m - 1, d) - IST; };

/** The week number at a moment: 0 for the first week, never less. */
export const weekAt = (ms: number) => Math.max(0, Math.floor((ms - startMs()) / (7 * DAY)));

/** The week number now. */
export const thisWeek = () => weekAt(Date.now());

/** The feed's address, and the weeks it carries: the latest 30, newest first.
 *  The feed (app/feed.xml) and its page for browsers both list these. */
export const FEED_PATH = "/feed.xml";
export const feedWeeks = (now = thisWeek()) => Array.from({ length: Math.min(now + 1, 30) }, (_, i) => now - i);

/** A week's pair, with everything pages and the email show. */
export function weekItem(week: number) {
  const ref = SERIES[week % SERIES.length];
  return { week, slug: ref.slug, pairing: ref.pairing, ...pairView(ref) };
}

/** When a week starts and ends (Monday to Sunday), as dates in India. */
export function weekDates(week: number) {
  const from = new Date(startMs() + week * 7 * DAY + IST);
  const to = new Date(from.getTime() + 6 * DAY);
  const fmt = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "long", timeZone: "UTC" });
  return { from, label: `${fmt(from)} to ${fmt(to)}` };
}
