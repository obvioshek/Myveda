// The Unit 1 chapters: each one explains the modern concepts, then sets passages
// from India's classical texts beside them (the "Ancient lens"). The words live in
// chapters.json so they can be edited without touching markup. Concept text is
// trusted HTML from that file (paragraphs, tables, lists, formulas and small SVG
// figures); nothing user-supplied ever reaches it.
//
// Every passage is marked either "documented" (it exists in a named text and the
// modern concept is a fair reading of it) or "view" (an interpretive parallel,
// offered for reflection). Keep that distinction when adding to the file.

import data from "./chapters.json";
import glossary from "./glossary.json";

export type Kind = "documented" | "view";
export type Group = "management" | "economics" | "ethics";

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
export type Chapter = {
  n: number;
  slug: string;
  title: string;
  scope: string;
  group: Group;
  blocks: Block[];
  lensNote: string | null;
  pairings: Pairing[];
};

export const CHAPTERS = data.chapters as Chapter[];
export const HOW = data.how;
export const TEXTS_USED = data.textsUsed;

// Edit when chapter text changes; the sitemap reports it as the last-modified date.
export const CONTENT_UPDATED = "2026-10-05";

export const GROUPS: { key: Group; label: string; blurb: string }[] = [
  { key: "management", label: "Management", blurb: "What managers do, how they communicate and decide, and how work is organised." },
  { key: "economics", label: "Economics", blurb: "Why people buy, how markets set prices, and how an economy is measured." },
  { key: "ethics", label: "Ethics and governance", blurb: "What a business owes the people it serves, and who answers for it." },
];

export const chapterPath = (slug: string) => `/learn/${slug}`;
export const chapterBySlug = (slug: string) => CHAPTERS.find(c => c.slug === slug);
export const neighbours = (c: Chapter) => ({
  prev: CHAPTERS.find(x => x.n === c.n - 1) ?? null,
  next: CHAPTERS.find(x => x.n === c.n + 1) ?? null,
});

export function evidence(c: Chapter) {
  const documented = c.pairings.filter(p => p.kind === "documented").length;
  return { documented, view: c.pairings.length - documented, total: c.pairings.length };
}

// Chapter numbers in Devanagari, matching the numerals used on the home page.
export const deva = (n: number) => String(n).replace(/\d/g, d => "०१२३४५६७८९"[Number(d)]);

// The description search results show, under about 160 characters.
export function chapterDescription(c: Chapter) {
  const full = `${c.scope} With ${c.pairings.length} cited passages from India's classical texts.`;
  return full.length <= 160 ? full : c.scope;
}

// The page title: a descriptive form when it fits in about 65 characters,
// otherwise the chapter name alone.
export function chapterTitle(c: Chapter) {
  const long = `${c.title}, explained with the classics · Veda Verse`;
  return long.length <= 65 ? long : `${c.title} · Veda Verse`;
}

// The glossary: short definitions, each tied to the chapter that explains the idea.
export type Term = { id: string; letter: string; term: string; def: string; chapter: number };
export const GLOSSARY = glossary as Term[];
export const GLOSSARY_PATH = "/learn/glossary";
export const termsForChapter = (n: number) => GLOSSARY.filter(t => t.chapter === n);
