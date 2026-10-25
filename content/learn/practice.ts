// Every check question on the site, for the practice page: mixed practice
// across chapters and units, and the reader's spaced review. Served once as a
// static file (/practice-bank.json) and fetched when the practice page opens, so
// the chapter pages carry none of it.

import { CHAPTERS, UNITS, lessonsFor } from "./index";
import { questionId } from "./question-id";

// The id the review list keeps a question under isn't sent: the page works it
// out from the chapter, block and wording with questionId().
export type PracticeQuestion = {
  /** Unit id. */
  u: string;
  /** Chapter slug, and the chapter's short title. */
  c: string;
  ct: string;
  /** The concept: its block id and name. */
  b: string;
  bn: string;
  q: string;
  o: string[];
  /** Index of the right option. */
  a: number;
  /** Why it is right. */
  w: string;
};

export type PracticeUnit = { id: string; n: number; short: string };
export type PracticeBank = { units: PracticeUnit[]; questions: PracticeQuestion[] };

export function buildPracticeBank(): PracticeBank {
  const questions: PracticeQuestion[] = [];
  for (const c of CHAPTERS) {
    for (const l of lessonsFor(c.slug) ?? []) {
      for (const k of l.check) {
        questions.push({ u: c.unit, c: c.slug, ct: c.short ?? c.title, b: l.blockId, bn: l.name, q: k.q, o: k.options, a: k.answer, w: k.why });
      }
    }
  }
  const units = UNITS.filter(u => questions.some(q => q.u === u.id)).map(u => ({ id: u.id, n: u.n, short: u.short }));
  return { units, questions };
}

// Two questions with the same id would share one place in the review list.
const ids = new Set<string>();
for (const q of buildPracticeBank().questions) {
  const id = questionId(q.c, q.b, q.q);
  if (ids.has(id)) throw new Error(`Learning content has problems:\n- question "${q.q}" appears twice in ${q.c}#${q.b}`);
  ids.add(id);
}
