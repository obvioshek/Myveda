// What the site search looks through, built from the chapters, the glossary,
// the texts and the site's own pages and settings, so "formula sheet", "dark
// mode" or "mock test" find their page as surely as a concept does. It is
// served once as a small static file (/search-index.json) and fetched the
// first time someone opens the search box.

import { CHAPTERS, GLOSSARY, GLOSSARY_PATH, UNITS, chapterPath, lessonsFor } from "./index";
import { TEXTS, textPath } from "./texts";
import { READING_GUIDE_PATH, SPELLINGS, WORDS } from "./reading-guide";
import { ABOUT_LINKS, SITE_MAP } from "../nav";

export type SearchKind = "page" | "setting" | "concept" | "term" | "chapter" | "passage" | "text";
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
  /** Other names for it, matched as strongly as its title ("mock test" for Practice). */
  a?: string;
};

// Things on the site that are not a page of their own: a setting in every
// footer, a section of a page, and the way into the community. "#…" opens on
// the page the reader is on.
const EXTRA: SearchEntry[] = [
  { k: "setting", t: "Text size and theme", s: "Larger text, and light or dark, at the foot of every page", h: "#display", x: "", a: "dark mode night theme light black font size bigger larger text zoom display settings preferences" },
  { k: "setting", t: "Keyboard shortcuts", s: "Every key the site answers to; press ? on any page", h: "#keys", x: "", a: "keys keyboard shortcut shortcuts hotkeys help" },
  { k: "page", t: "Read offline", s: "Save every chapter on this device, for reading without a connection", h: "/learn#offline", x: "", a: "offline download save internet connection data" },
  { k: "page", t: "Sign in to the community", s: "For members; anyone can read the chapters without an account", h: "/signin", x: "", a: "sign in signin login log account invite join member" },
];

const plain = (html: string) =>
  html.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const cut = (s: string, n: number) => (s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`);

export function buildSearchIndex(): SearchEntry[] {
  const out: SearchEntry[] = [];

  // The site's pages, by the names in the Menu and the words readers use for them.
  for (const l of [...SITE_MAP.flatMap(g => g.links), ...ABOUT_LINKS]) {
    if (l.about) out.push({ k: "page", t: l.label, s: l.about, h: l.href, x: "", a: l.also });
  }
  out.push(...EXTRA);
  for (const u of UNITS) out.push({ k: "page", t: `Unit ${u.n}: ${u.title}`, s: `${u.chapters.length} chapters`, h: `/learn#${u.id}`, x: u.chapters.map(c => c.title).join(" "), a: `unit ${u.n} ${u.short}` });

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

  // The texts, findable by their familiar spellings too (Thirukkural, Arthashastra).
  const spelled = (name: string) => SPELLINGS.filter(([a]) => a.includes(name.split(" ")[0])).map(([, b]) => b).join(" ");
  for (const t of TEXTS) out.push({ k: "text", t: t.name, s: `${t.kind} · ${t.language}`, h: textPath(t.id), x: `${t.by} ${t.original?.text ?? ""} ${spelled(t.name)}` });
  for (const w of WORDS) out.push({ k: "term", t: w.term, s: cut(w.means, 110), h: `${READING_GUIDE_PATH}#${w.id}`, x: w.notQuite });

  return out;
}
