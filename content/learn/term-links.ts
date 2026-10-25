// Glossary terms in a concept's text become links: the first time a term
// appears in a block, it links to its glossary entry. Without JavaScript the
// link opens the glossary; on the chapter page, GlossaryTips opens the
// definition in place instead. Runs when the pages are built.
//
// How a term is found in the text:
// - "Internal Rate of Return (IRR)" matches the phrase, any case, and "IRR"
//   exactly. "CSR (Corporate Social Responsibility)" works the other way round.
// - A bracket that isn't an abbreviation of the phrase is a qualifier and is
//   ignored: "Bureaucracy (Weber)" matches "bureaucracy".
// - A phrase may end in s or es, and a hyphen matches a space.
// - A term of one ordinary word ("Attitude") links only inside its own chapter,
//   so common words aren't linked everywhere.
// - Nothing inside a link, a heading or a figure is touched, and a term isn't
//   linked in the block it is named in.

import type { Term } from "./types";

// `probe` is a cheap check before the pattern runs: a word the text must
// contain (lower-cased for phrases, exact for abbreviations).
type Matcher = { id: string; re: RegExp; len: number; own: boolean; key: string; probe: string; exact: boolean };

const MAX_PER_BLOCK = 12;
// Text inside these elements is left alone.
const SKIP = new Set(["a", "svg", "h1", "h2", "h3", "h4", "h5", "h6", "code", "figcaption", "button", "sup", "sub"]);

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const initials = (s: string) => s.split(/[\s-]+/).filter(w => /^[A-Za-z]/.test(w) && !/^(of|and|the|in|on|for|to|a|an|per)$/i.test(w)).map(w => w[0].toUpperCase()).join("");
const isAbbr = (s: string) => /^[A-Za-z]{2,6}$/.test(s) && (s.match(/[A-Z]/g)?.length ?? 0) >= 2;
// An abbreviation stands for the phrase when it starts with the phrase's first initial.
const abbrOf = (abbr: string, phrase: string) => initials(phrase).startsWith(abbr[0].toUpperCase());

function phrasePattern(p: string) {
  const body = p.trim().split(/[\s-]+/).map(w => esc(w).replace(/&/g, "(?:&amp;|&)")).join("[\\s-]+");
  return `(?<![\\w-])${body}(?:s|es)?(?![\\w-])`;
}
const abbrPattern = (a: string) => `(?<![\\w-])${esc(a)}s?(?![\\w-])`;

// Every way a term can be found, longest first so "Price Elasticity of Demand"
// wins over "Elasticity of Demand".
function matchers(terms: Term[]): Matcher[] {
  const out: Matcher[] = [];
  for (const t of terms) {
    const m = t.term.match(/^(.*?)\s*\(([^)]*)\)\s*(.*)$/);
    let phrase = t.term;
    let abbr: string | null = null;
    if (m) {
      const [, before, inside, after] = m;
      if (isAbbr(before) && !after && inside.includes(" ")) { abbr = before; phrase = inside; }
      else {
        phrase = `${before} ${after}`.trim();
        if (!after && isAbbr(inside) && abbrOf(inside, before)) abbr = inside;
      }
    }
    const single = !/[\s-]/.test(phrase.trim());
    const probe = phrase.trim().split(/[\s-]+/).sort((a, b) => b.length - a.length)[0].replace(/&/g, "").toLowerCase();
    if (phrase.length >= 3) out.push({ id: t.id, re: new RegExp(phrasePattern(phrase), "gi"), len: phrase.length, own: single, key: phrase.toLowerCase(), probe, exact: false });
    if (abbr) out.push({ id: t.id, re: new RegExp(abbrPattern(abbr), "g"), len: abbr.length, own: false, key: abbr.toLowerCase(), probe: abbr, exact: true });
  }
  return out.sort((a, b) => b.len - a.len);
}

const cache = new WeakMap<Term[], Matcher[]>();

/**
 * Links the glossary terms in one block's HTML. `chapterSlug` is the chapter the
 * block is in; `title` its heading, whose own terms aren't linked. Returns the
 * new HTML and the ids of the terms it linked.
 */
export function linkTerms(html: string, terms: Term[], chapterSlug: string, title: string | null, href: (id: string) => string): { html: string; ids: string[] } {
  let all = cache.get(terms);
  if (!all) { all = matchers(terms); cache.set(terms, all); }
  const bySlug = new Map(terms.map(t => [t.id, t.chapterSlug]));
  const named = (title ?? "").toLowerCase();

  // Split into tags and text, and note which text can take links.
  const parts = html.split(/(<[^>]+>)/);
  const open: string[] = [];
  const linkable: boolean[] = parts.map(p => {
    if (p.startsWith("<")) {
      const tag = p.match(/^<\s*(\/)?\s*([a-zA-Z0-9]+)/);
      if (tag && SKIP.has(tag[2].toLowerCase()) && !p.endsWith("/>")) {
        if (tag[1]) { const i = open.lastIndexOf(tag[2].toLowerCase()); if (i >= 0) open.splice(i, 1); }
        else open.push(tag[2].toLowerCase());
      }
      return false;
    }
    return open.length === 0 && p.trim().length > 0;
  });

  const text = parts.filter((_, i) => linkable[i]).join(" ");
  const lower = text.toLowerCase();

  // Claim the first free occurrence of each term, longest terms first.
  const claims: { part: number; start: number; end: number; id: string }[] = [];
  const done = new Set<string>();
  for (const m of all) {
    if (claims.length >= MAX_PER_BLOCK) break;
    if (done.has(m.id)) continue;
    if (m.own && bySlug.get(m.id) !== chapterSlug) continue;
    if (named.includes(m.key)) { done.add(m.id); continue; }
    if (!(m.exact ? text : lower).includes(m.probe)) continue;
    for (let i = 0; i < parts.length && !done.has(m.id); i++) {
      if (!linkable[i]) continue;
      const re = m.re;
      re.lastIndex = 0;
      for (let r = re.exec(parts[i]); r; r = re.exec(parts[i])) {
        const start = r.index, end = start + r[0].length;
        if (claims.some(c => c.part === i && start < c.end && end > c.start)) continue;
        claims.push({ part: i, start, end, id: m.id });
        done.add(m.id);
        break;
      }
    }
  }
  if (!claims.length) return { html, ids: [] };

  for (let i = 0; i < parts.length; i++) {
    const mine = claims.filter(c => c.part === i).sort((a, b) => b.start - a.start);
    let s = parts[i];
    for (const c of mine) s = `${s.slice(0, c.start)}<a class="gt" href="${href(c.id)}" data-term="${c.id}">${s.slice(c.start, c.end)}</a>${s.slice(c.end)}`;
    parts[i] = s;
  }
  return { html: parts.join(""), ids: claims.map(c => c.id) };
}
