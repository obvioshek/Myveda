// What the site search looks through, built from the chapters and the
// glossary. It is served once as a small static file
// (/search-index.json) and fetched the first time someone opens the search box.

import { CHAPTERS, GLOSSARY, GLOSSARY_PATH, UNITS, chapterPath, lessonsFor } from "./index";

export type SearchKind = "concept" | "term" | "chapter" | "passage";
export type SearchEntry = {
  k: SearchKind;
  /** Title shown in the results. */
  t: string;
  /** A line of context under it. */
  s: string;
  /** Where it leads. */
  h: string;
  /** More words to match against. */
  x: string;
};

const plain = (html: string) =>
  html.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const cut = (s: string, n: number) => (s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`);

export function buildSearchIndex(): SearchEntry[] {
  const out: SearchEntry[] = [];

  // With more than one unit, say which unit a chapter belongs to.
  const where = (c: { n: number; unitN: number }) => (UNITS.length > 1 ? `Unit ${c.unitN} · Chapter ${c.n}` : `Chapter ${c.n}`);

  for (const c of CHAPTERS) {
    const path = chapterPath(c.slug);
    const lessons = lessonsFor(c.slug);
    out.push({ k: "chapter", t: c.title, s: `${where(c)} · ${cut(c.scope, 100)}`, h: path, x: `${c.scope} ${c.blocks.map(b => b.title ?? "").join(" ")}` });
    for (const b of c.blocks) {
      if (b.title) out.push({ k: "concept", t: b.title, s: `${where(c)} · ${c.title}`, h: `${path}#${b.id}`, x: cut(plain(b.html), 300) });
    }
    c.pairings.forEach((p, i) => {
      const lesson = lessons?.find(l => l.lens.some(n => n.pairing === i));
      out.push({
        k: "passage",
        t: p.classic ? `${p.modern} ↔ ${p.classic}` : p.modern,
        s: `Ancient lens · ${where(c)}`,
        h: lesson ? `${path}#${lesson.blockId}` : `${path}#lens`,
        x: cut(plain([...p.text, p.quote ?? ""].join(" ")), 240),
      });
    });
  }

  for (const t of GLOSSARY) out.push({ k: "term", t: t.term, s: cut(t.def, 110), h: `${GLOSSARY_PATH}#${t.id}`, x: t.def.length > 110 ? t.def : "" });

  return out;
}
