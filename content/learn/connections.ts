// How chapters connect: which other chapters' ideas a chapter uses, and where
// its own ideas are used later. Worked out from the glossary terms each
// chapter's text links (term-links.ts): a chapter "uses ideas from" another when
// its text uses at least two of the other chapter's glossary terms. One shared
// term is too often a passing example (a kirana store) to mean much.

import { CHAPTERS, GLOSSARY, GLOSSARY_PATH, chapterBySlug } from "./index";
import { linkTerms } from "./term-links";

export type Link = { slug: string; title: string; unitN: number; terms: string[] };

const MIN_TERMS = 2;
const MAX_LINKS = 4;

let graph: Map<string, Map<string, Set<string>>> | null = null;

// chapter slug → (other chapter slug → ids of that chapter's terms it uses)
function build() {
  if (graph) return graph;
  const home = new Map(GLOSSARY.map(t => [t.id, t.chapterSlug]));
  graph = new Map();
  for (const c of CHAPTERS) {
    const uses = new Map<string, Set<string>>();
    for (const b of c.blocks) {
      for (const id of linkTerms(b.html, GLOSSARY, c.slug, b.title, x => `${GLOSSARY_PATH}#${x}`).ids) {
        const from = home.get(id);
        if (!from || from === c.slug) continue;
        if (!uses.has(from)) uses.set(from, new Set());
        uses.get(from)!.add(id);
      }
    }
    graph.set(c.slug, uses);
  }
  return graph;
}

const names = new Map(GLOSSARY.map(t => [t.id, t.term]));

function links(pairs: [string, Set<string>][]): Link[] {
  return pairs
    .filter(([, ids]) => ids.size >= MIN_TERMS)
    .sort((a, b) => b[1].size - a[1].size)
    .slice(0, MAX_LINKS)
    .map(([slug, ids]) => {
      const c = chapterBySlug(slug)!;
      return { slug, title: c.short ?? c.title, unitN: c.unitN, terms: [...ids].map(id => names.get(id) ?? id) };
    });
}

/** Chapters whose ideas this one uses, most used first. */
export function usesIdeasFrom(slug: string): Link[] {
  return links([...(build().get(slug) ?? new Map())]);
}

/** Chapters that use this one's ideas, most used first. */
export function ideasUsedIn(slug: string): Link[] {
  const pairs: [string, Set<string>][] = [];
  for (const [other, uses] of build()) {
    const ids = uses.get(slug);
    if (ids) pairs.push([other, ids]);
  }
  return links(pairs);
}

/** Every link between chapters, with how many of the other chapter's terms it uses, for the map. */
export function allConnections(): { from: string; to: string; n: number }[] {
  const out: { from: string; to: string; n: number }[] = [];
  for (const [from, uses] of build()) for (const [to, ids] of uses) if (ids.size >= MIN_TERMS) out.push({ from, to, n: ids.size });
  return out;
}
