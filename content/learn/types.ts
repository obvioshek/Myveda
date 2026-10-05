// Shapes shared by every unit. A unit's own folder (units/unit-N) supplies the raw
// data (ChapterSource, TermSource, lessons); content/learn/index.ts joins the
// units together and adds what pages need (Chapter, Term, Unit).

import type { Lesson } from "./lesson-kit";

export type Kind = "documented" | "view";

export type Block = { id: string; title: string | null; html: string };
export type Pairing = {
  kind: Kind;
  /** The modern idea, left of the arrow. */
  modern: string;
  /** The classical idea, right of the arrow. Null when the heading has no pair. */
  classic: string | null;
  /** Paragraphs of explanation (may hold <i> for Sanskrit terms). */
  text: string[];
  /** The verse, translation and reference as one HTML string, or null. */
  quote: string | null;
};

export type GroupInfo = { key: string; label: string; blurb: string };

export type ChapterSource = {
  /** Number within its unit, from 1. */
  n: number;
  /** Unique across all units: it is the chapter's address, /learn/<slug>. */
  slug: string;
  title: string;
  scope: string;
  /** One of the unit's group keys. */
  group: string;
  blocks: Block[];
  lensNote: string | null;
  pairings: Pairing[];
};

export type TermSource = { id: string; letter: string; term: string; def: string; chapter: number };

export type UnitSource = {
  /** Stable id, such as "unit-1". */
  id: string;
  n: number;
  title: string;
  /** A shorter name for menus. */
  short: string;
  /** One line about what the unit covers. */
  blurb: string;
  groups: GroupInfo[];
  textsUsed: string;
  chapters: ChapterSource[];
  glossary: TermSource[];
  /** Guided lessons keyed by chapter slug. A chapter without lessons shows as plain text. */
  lessons: Record<string, Lesson[]>;
};

export type Chapter = ChapterSource & {
  unit: string;
  unitN: number;
  unitShort: string;
  /** Chapters in the unit. */
  total: number;
  /** Rough reading time in minutes. */
  minutes: number;
};

export type Term = TermSource & { unit: string; unitN: number; chapterSlug: string; chapterTitle: string };

export type Unit = Omit<UnitSource, "chapters" | "glossary" | "lessons"> & {
  chapters: Chapter[];
  terms: number;
  concepts: number;
};
