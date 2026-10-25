// The learning content, joined across units. Each unit lives in units/unit-N
// (chapters, glossary and guided lessons); this module puts them together for
// the pages, adds what pages need (reading time, unit names on chapters, chapter
// names on glossary terms) and checks the whole set when the site is built.
//
// Concept text is trusted HTML from the units' chapters.json (paragraphs,
// tables, lists, formulas and small SVG figures); nothing user-supplied reaches
// it. Every passage is marked either "documented" (it exists in a named text and
// the modern concept is a fair reading of it) or "view" (an interpretive
// parallel, offered for reflection). Keep that distinction when adding to it.

import { lessonProblems, type Lesson } from "./lesson-kit";
import { pendingUnitsLabel } from "./pending";
import type { Chapter, Term, Unit } from "./types";
import { UNIT_SOURCES } from "./units";

export type { Block, Chapter, GroupInfo, Kind, Pairing, Term, Unit } from "./types";
export type { Check, Lesson, LensNote } from "./lesson-kit";

// How passages are marked, shown on every chapter.
export const HOW = {
  documented: "The passage exists in a named text, and the modern concept is a fair reading of what it says.",
  view: "An interpretive parallel. The text does not discuss the modern concept; the link is a reading offered for reflection, not a claim about what the authors meant.",
  translations: "Translations are paraphrases. Arthaśāstra references follow Kangle's critical edition; Bhagavad Gītā references are chapter.verse; Tirukkuṟaḷ references are couplet numbers. Check each reference against your own edition before quoting it in submitted work.",
};

// Edit when chapter text changes; the sitemap reports it as the last-modified date.
export const CONTENT_UPDATED = "2026-10-18";

export const LEARN_PATH = "/learn";
export const GLOSSARY_PATH = "/learn/glossary";
export const REVISION_PATH = "/learn/revision";
export const PRACTICE_PATH = "/learn/practice";
export const FORMULAS_PATH = "/learn/formulas";
export const PLAN_PATH = "/learn/plan";
export const TRANSFER_PATH = "/learn/transfer";
export const chapterPath = (slug: string) => `/learn/${slug}`;

// Words in a chapter, for a reading-time estimate at about 200 words a minute.
const words = (s: string) => s.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
function minutesFor(c: { blocks: { html: string }[]; pairings: { text: string[]; quote: string | null }[] }, lessons: Lesson[] | undefined) {
  let n = c.blocks.reduce((a, b) => a + words(b.html), 0);
  n += c.pairings.reduce((a, p) => a + words(p.text.join(" ")) + words(p.quote ?? ""), 0);
  for (const l of lessons ?? []) n += words([l.lead, l.before.q, ...l.check.map(k => k.q), ...l.summary.points].join(" "));
  return Math.max(1, Math.round(n / 200));
}

const LESSONS = new Map<string, Lesson[]>();
const chapters: Chapter[] = [];
const terms: Term[] = [];
const units: Unit[] = [];

for (const u of UNIT_SOURCES) {
  const list: Chapter[] = u.chapters.map(c => {
    const lessons = u.lessons[c.slug];
    if (lessons) LESSONS.set(c.slug, lessons);
    return { ...c, unit: u.id, unitN: u.n, unitShort: u.short, total: u.chapters.length, minutes: minutesFor(c, lessons) };
  });
  chapters.push(...list);
  for (const t of u.glossary) {
    const c = list.find(x => x.n === t.chapter);
    terms.push({ ...t, unit: u.id, unitN: u.n, chapterSlug: c?.slug ?? "", chapterTitle: c?.title ?? "" });
  }
  units.push({
    id: u.id, n: u.n, title: u.title, short: u.short, blurb: u.blurb, groups: u.groups, textsUsed: u.textsUsed,
    chapters: list,
    terms: u.glossary.length,
    concepts: list.reduce((a, c) => a + c.blocks.length, 0),
  });
}

export const UNITS = units;
export const CHAPTERS = chapters;
export const GLOSSARY = [...terms].sort((a, b) => a.letter.localeCompare(b.letter) || a.term.localeCompare(b.term, "en", { sensitivity: "base" }));

// "Units 3 and 5 are being written", or null when no unit number is missing.
export const pendingUnits = () => pendingUnitsLabel(UNITS.map(u => u.n));

export const unitById = (id: string) => UNITS.find(u => u.id === id);
export const chapterBySlug = (slug: string) => CHAPTERS.find(c => c.slug === slug);
export const lessonsFor = (slug: string): Lesson[] | null => LESSONS.get(slug) ?? null;
export const termsForChapter = (slug: string) => GLOSSARY.filter(t => t.chapterSlug === slug);

// Previous and next chapter within the same unit.
export const neighbours = (c: Chapter) => {
  const list = unitById(c.unit)?.chapters ?? [];
  return { prev: list.find(x => x.n === c.n - 1) ?? null, next: list.find(x => x.n === c.n + 1) ?? null };
};

// The lesson that sets out a chapter's passage, for linking straight to it.
export function passageHref(slug: string, pairing: number) {
  const lesson = lessonsFor(slug)?.find(l => l.lens.some(n => n.pairing === pairing));
  return lesson ? `${chapterPath(slug)}#${lesson.blockId}` : chapterPath(slug);
}

export function evidence(c: Chapter) {
  const documented = c.pairings.filter(p => p.kind === "documented").length;
  return { documented, view: c.pairings.length - documented, total: c.pairings.length };
}

// The ids progress is kept under: one per concept, "<chapter slug>#<block id>".
export const conceptIds = (c: Chapter) => c.blocks.map(b => `${c.slug}#${b.id}`);

// Chapter numbers in Devanagari, matching the numerals used on the home page.
export const deva = (n: number) => String(n).replace(/\d/g, d => "०१२३४५६७८९"[Number(d)]);

// The description search results show, under about 160 characters.
export function chapterDescription(c: Chapter) {
  if (c.pairings.length === 0) return c.scope;
  const n = c.pairings.length;
  const full = `${c.scope} With ${n} cited ${n === 1 ? "passage" : "passages"} from India's classical texts.`;
  return full.length <= 160 ? full : c.scope;
}

// The page title: a descriptive form when it fits in about 65 characters,
// otherwise the chapter name alone. A chapter with no classical passage doesn't
// claim to be explained with the classics.
export function chapterTitle(c: Chapter) {
  if (c.pairings.length === 0) return `${c.title} · Veda Verse`;
  const long = `${c.title}, explained with the classics · Veda Verse`;
  return long.length <= 65 ? long : `${c.title} · Veda Verse`;
}

// ---------- Checks, run once when the site is built ----------
// A slip in the data (two chapters at one address, a glossary term pointing at a
// missing chapter, a lesson that doesn't match its chapter) fails the build
// instead of publishing a broken page.
const RESERVED = new Set(["glossary", "revision", "practice", "formulas", "plan", "transfer"]);

// The text is rendered as HTML, so it may only use markup for formatting:
// nothing that runs code or loads something from elsewhere.
const UNSAFE = [
  [/<\s*\/?\s*(script|iframe|object|embed|style|link|meta|base|form|input|button|textarea|frame|frameset)\b/i, "a disallowed tag"],
  [/\son[a-z]+\s*=/i, "an event-handler attribute"],
  [/(href|src|xlink:href|action)\s*=\s*["']?\s*(javascript|data|vbscript):/i, "a script or data URL"],
] as const;
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === "string") out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === "object") for (const x of Object.values(v)) strings(x, out);
  return out;
}
function unsafe(where: string, value: unknown, out: string[]) {
  for (const text of strings(value)) {
    for (const [re, what] of UNSAFE) if (re.test(text)) out.push(`${where} contains ${what}: ${text.slice(0, 80)}`);
  }
}

function problems(): string[] {
  const out: string[] = [];
  const seen = (label: string, values: string[]) => {
    const s = new Set<string>();
    for (const v of values) { if (s.has(v)) out.push(`${label} "${v}" is used twice`); s.add(v); }
  };
  seen("unit id", UNIT_SOURCES.map(u => u.id));
  seen("unit number", UNIT_SOURCES.map(u => String(u.n)));
  seen("chapter slug", CHAPTERS.map(c => c.slug));
  seen("glossary id", GLOSSARY.map(t => t.id));
  for (const c of CHAPTERS) if (RESERVED.has(c.slug)) out.push(`chapter slug "${c.slug}" is reserved`);
  for (const u of UNIT_SOURCES) {
    const keys = new Set(u.groups.map(g => g.key));
    for (const c of u.chapters) {
      if (!keys.has(c.group)) out.push(`${u.id}: chapter ${c.slug} is in unknown group "${c.group}"`);
      seen(`${u.id}: block id in ${c.slug}`, c.blocks.map(b => b.id));
      const lessons = u.lessons[c.slug];
      if (lessons) for (const p of lessonProblems(c.blocks, c.pairings.length, lessons)) out.push(`${u.id}/${c.slug}: ${p}`);
      unsafe(`${u.id}/${c.slug}`, [c.blocks, c.pairings, lessons], out);
    }
    for (const slug of Object.keys(u.lessons)) if (!u.chapters.some(c => c.slug === slug)) out.push(`${u.id}: lessons for unknown chapter ${slug}`);
    for (const t of u.glossary) if (!u.chapters.some(c => c.n === t.chapter)) out.push(`${u.id}: term "${t.term}" points at missing chapter ${t.chapter}`);
    unsafe(`${u.id} glossary`, u.glossary, out);
  }
  return out;
}
const found = problems();
if (found.length) throw new Error(`Learning content has problems:\n- ${found.join("\n- ")}`);
