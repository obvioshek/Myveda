// The formula sheet: every formula the chapters write out, gathered by unit,
// chapter and concept, for revising or printing. Nothing here is written
// separately; it is read from the chapters' own text when the site is built,
// so it changes when they do. Two kinds of markup count:
// - a <div class="eq"> line with an "=" in it (lines without one are
//   sequences, like "Plan → Do → Check", not formulas);
// - a row of a table whose header has a column named "Formula", taking the
//   row's first cell as the name and that column as the formula.
// A line that works the formula through with figures ("Current ratio =
// ₹18,00,000 ÷ ₹8,00,000 = 2.25 : 1") is kept as a worked example.

import { CHAPTERS, UNITS } from "./index";

export type FormulaItem = { name: string | null; html: string; worked: boolean };
export type FormulaConcept = { blockId: string; title: string; items: FormulaItem[] };
export type FormulaChapter = { slug: string; title: string; n: number; concepts: FormulaConcept[] };
export type FormulaUnit = { id: string; n: number; title: string; chapters: FormulaChapter[]; formulas: number; worked: number };

const plain = (html: string) => html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/\s+/g, " ").trim();
const inner = (el: string) => el.replace(/^<[^>]+>/, "").replace(/<\/[a-z0-9]+>$/i, "").trim();
// Figures in rupees, or a number straight after an "=", mean the line is worked through.
const isWorked = (text: string) => text.includes("₹") || /=\s*\(?\s*\d/.test(text);

function itemsIn(html: string): FormulaItem[] {
  const out: FormulaItem[] = [];
  // In document order: equation lines and formula tables as they appear.
  for (const el of html.match(/<div class="eq"[^>]*>[\s\S]*?<\/div>|<table[\s\S]*?<\/table>/g) ?? []) {
    if (el.startsWith("<div")) {
      const text = plain(el);
      if (text.includes("=")) out.push({ name: null, html: inner(el), worked: isWorked(text) });
      continue;
    }
    const heads = (el.match(/<thead[\s\S]*?<\/thead>/)?.[0].match(/<th[^>]*>[\s\S]*?<\/th>/g) ?? []).map(plain);
    const col = heads.findIndex(h => /^formulae?s?$/i.test(h));
    if (col <= 0) continue;
    for (const row of el.match(/<tbody[\s\S]*?<\/tbody>/)?.[0].match(/<tr[\s\S]*?<\/tr>/g) ?? []) {
      const cells = row.match(/<t[dh][^>]*>[\s\S]*?<\/t[dh]>/g) ?? [];
      const f = cells[col];
      if (!f || !plain(f) || /^[—–-]$/.test(plain(f))) continue;
      out.push({ name: plain(cells[0] ?? ""), html: inner(f), worked: isWorked(plain(f)) });
    }
  }
  return out;
}

export function buildFormulaSheet(): FormulaUnit[] {
  return UNITS.map(u => {
    const chapters: FormulaChapter[] = [];
    for (const c of CHAPTERS.filter(x => x.unit === u.id)) {
      const concepts = c.blocks
        .map(b => ({ blockId: b.id, title: b.title ?? c.title, items: itemsIn(b.html) }))
        .filter(x => x.items.length);
      if (concepts.length) chapters.push({ slug: c.slug, title: c.title, n: c.n, concepts });
    }
    const all = chapters.flatMap(c => c.concepts.flatMap(x => x.items));
    return { id: u.id, n: u.n, title: u.title, chapters, formulas: all.filter(i => !i.worked).length, worked: all.filter(i => i.worked).length };
  }).filter(u => u.chapters.length);
}
