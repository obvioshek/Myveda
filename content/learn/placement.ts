// "Where should I start?": a short check across the units, for /learn/check.
// Four questions a unit, from chapters spread through it (its first, its last
// and two between), each the first check question of the chapter's first
// lesson. Chosen when the site is built, so everyone gets the same check.

import { UNITS, lessonsFor } from "./index";

export const CHECK_PATH = "/learn/check";
const PER_UNIT = 4;

export type CheckQuestion = {
  u: string; un: number; us: string;
  c: string; ct: string; b: string; bn: string;
  q: string; o: string[]; a: number; w: string;
};

function spread<T>(list: T[], k: number): T[] {
  if (list.length <= k) return list;
  return Array.from({ length: k }, (_, i) => list[Math.round((i * (list.length - 1)) / (k - 1))]);
}

export function placementQuestions(): CheckQuestion[] {
  const out: CheckQuestion[] = [];
  for (const u of UNITS) {
    const withChecks = u.chapters.filter(c => (lessonsFor(c.slug) ?? []).some(l => l.check.length));
    for (const c of spread(withChecks, PER_UNIT)) {
      const l = lessonsFor(c.slug)!.find(x => x.check.length)!;
      const k = l.check[0];
      out.push({ u: u.id, un: u.n, us: u.short, c: c.slug, ct: c.short ?? c.title, b: l.blockId, bn: l.name, q: k.q, o: k.options, a: k.answer, w: k.why });
    }
  }
  return out;
}
