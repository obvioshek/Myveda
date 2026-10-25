// Every check question on the site, for the practice page: mixed practice
// across chapters and units, and the reader's spaced review. Served once as a
// static file (/practice-bank.json) and fetched when the practice page opens, so
// the chapter pages carry none of it.

import { CHAPTERS, GLOSSARY, UNITS, chapterBySlug, lessonsFor } from "./index";
import { mixupHints } from "./mixups";
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

/** A glossary term, practised as a card: the term, then its meaning. */
export type PracticeTerm = {
  /** The term's glossary id. */
  id: string;
  u: string;
  /** Its chapter's slug and short title. */
  c: string;
  ct: string;
  t: string;
  d: string;
};

/** A concept, for blank-page recall: its one-page summary points and the line to remember. */
export type PracticeConcept = { u: string; c: string; ct: string; b: string; bn: string; p: string[]; m: string };

export type PracticeUnit = { id: string; n: number; short: string };
export type PracticeBank = {
  units: PracticeUnit[];
  questions: PracticeQuestion[];
  terms: PracticeTerm[];
  /** Each concept's "Don't confuse it with" hints, by "<chapter slug>#<block id>". */
  mixups: Record<string, string[]>;
};

/** Served separately (/practice-recall.json) and fetched only when recall is used. */
export type RecallBank = { concepts: PracticeConcept[] };

/** The id a term card is kept under in the review list. "glossary" is never a chapter slug. */
export const cardId = (termId: string) => `glossary#${termId}#t`;

/** The id a concept's recall is kept under in the review list. */
export const recallId = (slug: string, blockId: string) => `${slug}#${blockId}#r`;

export function buildPracticeBank(): PracticeBank {
  const questions: PracticeQuestion[] = [];
  for (const c of CHAPTERS) {
    for (const l of lessonsFor(c.slug) ?? []) {
      for (const k of l.check) {
        questions.push({ u: c.unit, c: c.slug, ct: c.short ?? c.title, b: l.blockId, bn: l.name, q: k.q, o: k.options, a: k.answer, w: k.why });
      }
    }
  }
  const terms: PracticeTerm[] = GLOSSARY.map(t => {
    const c = chapterBySlug(t.chapterSlug)!;
    return { id: t.id, u: t.unit, c: c.slug, ct: c.short ?? c.title, t: t.term, d: t.def };
  });
  const mixups: Record<string, string[]> = {};
  for (const c of CHAPTERS) for (const b of c.blocks) {
    const hints = mixupHints(b.html);
    if (hints.length) mixups[`${c.slug}#${b.id}`] = hints;
  }
  const units = UNITS.filter(u => questions.some(q => q.u === u.id) || terms.some(t => t.u === u.id)).map(u => ({ id: u.id, n: u.n, short: u.short }));
  return { units, questions, terms, mixups };
}

export function buildRecallBank(): RecallBank {
  const concepts: PracticeConcept[] = [];
  for (const c of CHAPTERS) {
    for (const l of lessonsFor(c.slug) ?? []) {
      if (l.summary.points.length) concepts.push({ u: c.unit, c: c.slug, ct: c.short ?? c.title, b: l.blockId, bn: l.name, p: l.summary.points, m: l.summary.memory });
    }
  }
  return { concepts };
}

// Two questions with the same id would share one place in the review list.
const ids = new Set<string>();
for (const q of buildPracticeBank().questions) {
  const id = questionId(q.c, q.b, q.q);
  if (ids.has(id)) throw new Error(`Learning content has problems:\n- question "${q.q}" appears twice in ${q.c}#${q.b}`);
  ids.add(id);
}
