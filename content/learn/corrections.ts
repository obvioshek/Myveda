// The corrections log, shown on /learn/corrections and, for a chapter, at the
// end of that chapter. When a reported problem is fixed, add an entry: the
// date, the page's path (with its #anchor if it has one), and what changed in
// a sentence. Newest first. Don't remove entries; the log is a record.

export const CORRECTIONS_PATH = "/learn/corrections";
export const LOG_STARTED = "2026-10-25";

export type Correction = { date: string; path: string; what: string };

export const CORRECTIONS: Correction[] = [];

export const correctionsFor = (path: string) => CORRECTIONS.filter(c => c.path === path || c.path.startsWith(`${path}#`));

{
  const bad = CORRECTIONS.filter(c => !/^\d{4}-\d{2}-\d{2}$/.test(c.date) || !c.path.startsWith("/") || !c.what.trim());
  if (bad.length) throw new Error(`corrections.ts: ${bad.length} entr${bad.length === 1 ? "y is" : "ies are"} malformed`);
}
