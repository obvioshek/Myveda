// Pairs of a modern idea and a classical passage, shown to people meeting this
// way of reading for the first time: by theme on the home page ("What the
// classics add") and as a five-step walk on /learn/start. Everything shown comes
// from the chapters: the passage with its reference, the chapter's paragraph on
// how it meets the modern idea, and the concept's notes on what the passage adds and where the two
// differ. Only the walk's short "what to notice" lines are written here.
//
// Choose documented passages a newcomer can follow without the chapter, from
// different texts. The build checks that each one exists and has its notes.

import { chapterBySlug, lessonsFor, passageHref } from "./index";
import type { Kind } from "./types";

export type PairRef = { slug: string; pairing: number };

export type PairView = {
  id: string;
  modern: string;
  classic: string;
  kind: Kind;
  /** The passage: translation, original, transliteration and reference, as trusted HTML. */
  quote: string;
  /** The chapter's own paragraph on how the passage meets the idea. */
  how: string;
  concept: string;
  chapter: string;
  adds: string;
  differs: string;
  href: string;
};

// Theme names are all "-ing" phrases (what a manager is doing), so the tabs
// read as one set.
export const THEMES: { label: string; pairs: PairRef[] }[] = [
  {
    label: "Leading people",
    pairs: [
      { slug: "group-behaviour-and-leadership", pairing: 3 },
      { slug: "organisational-culture-and-climate", pairing: 0 },
      { slug: "functions-of-management", pairing: 4 },
    ],
  },
  {
    label: "Hiring and judging people",
    pairs: [
      { slug: "recruitment-and-selection", pairing: 2 },
      { slug: "personality-perception-and-attitude", pairing: 2 },
      { slug: "performance-management-and-appraisal", pairing: 1 },
    ],
  },
  {
    label: "Planning and deciding",
    pairs: [
      { slug: "functions-of-management", pairing: 1 },
      { slug: "decision-making", pairing: 2 },
      { slug: "strategy-implementation-and-evaluation", pairing: 0 },
    ],
  },
  {
    label: "Earning trust",
    pairs: [
      { slug: "marketing-concepts", pairing: 0 },
      { slug: "corporate-governance", pairing: 3 },
      { slug: "business-ethics-and-csr", pairing: 1 },
    ],
  },
  {
    label: "Keeping a clear head",
    pairs: [
      { slug: "emotions-and-stress", pairing: 4 },
      { slug: "personality-perception-and-attitude", pairing: 5 },
      { slug: "interpersonal-behaviour", pairing: 2 },
    ],
  },
];

// The walk: each step shows one thing about reading a classical text as an argument
// on a present problem. `notice` is the only line written here.
export const WALK: (PairRef & { step: string; notice: string })[] = [
  {
    slug: "functions-of-management", pairing: 1,
    step: "The same advice, far apart in time",
    notice: "Start with the plain overlap. A couplet and a management textbook can make the same point. That alone shows the question is older than the discipline.",
  },
  {
    slug: "organisation-structure", pairing: 0,
    step: "Practical advice for people running things",
    notice: "The Arthaśāstra was written for those who govern, and much of it is working advice. Kauṭilya's line about the one-wheeled cart is the case a manager makes for delegation today. Look for this practical side.",
  },
  {
    slug: "group-behaviour-and-leadership", pairing: 3,
    step: "Where the passage adds something",
    notice: "The modern idea names a failure. The couplet names the person who prevents it. Read for what the passage adds, not only for agreement.",
  },
  {
    slug: "decision-making", pairing: 2,
    step: "A wider view of the same thing",
    notice: "An implementation plan names who does what, with which resources. The Gītā's five factors behind any action include those, and end with circumstance beyond anyone's control. Notice what the older list keeps in view that a plan can leave out.",
  },
  {
    slug: "principles-of-management", pairing: 0,
    step: "Reading with care",
    notice: "Some passages carry readings that are contested. The note on where the two differ says so, and you should read it before the parallel. Read the classical texts as arguments you can question, not as scripture.",
  },
];

export function pairView({ slug, pairing }: PairRef): PairView {
  const c = chapterBySlug(slug);
  const p = c?.pairings[pairing];
  const lessons = lessonsFor(slug) ?? [];
  const lesson = lessons.find(l => l.lens.some(n => n.pairing === pairing));
  const note = lesson?.lens.find(n => n.pairing === pairing);
  if (!c || !p || !lesson || !note) throw new Error(`readings.ts: ${slug} passage ${pairing} is missing or has no lesson notes`);
  return {
    id: `${slug}-${pairing}`,
    modern: p.modern,
    classic: p.classic ?? "",
    kind: p.kind,
    quote: p.quote ?? "",
    how: p.text[0] ?? "",
    concept: lesson.name,
    chapter: c.short ?? c.title,
    adds: note.adds,
    differs: note.differs,
    href: passageHref(slug, pairing),
  };
}

// Checked when the site is built: every pair exists, has a quote and has its notes.
for (const ref of [...THEMES.flatMap(t => t.pairs), ...WALK]) {
  const v = pairView(ref);
  if (!/“/.test(v.quote)) throw new Error(`readings.ts: ${ref.slug} passage ${ref.pairing} has no quoted text to show`);
}
