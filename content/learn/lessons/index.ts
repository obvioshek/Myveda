// Guided lessons for each chapter, one file per chapter. See types.ts for what a
// lesson is and the rules for writing one.

import businessEconomicsAndDemand from "./business-economics-and-demand";
import businessEthicsAndCsr from "./business-ethics-and-csr";
import communication from "./communication";
import corporateGovernance from "./corporate-governance";
import decisionMaking from "./decision-making";
import elasticityOfDemand from "./elasticity-of-demand";
import indifferenceCurves from "./indifference-curves";
import marketStructures from "./market-structures";
import nationalIncomeAndInflation from "./national-income-and-inflation";
import organisationStructure from "./organisation-structure";
import principlesOfManagement from "./principles-of-management";
import theoriesOfManagement from "./theories-of-management";
import utilityAnalysis from "./utility-analysis";
import type { Lesson } from "./types";

export type { Check, Lesson, LensNote } from "./types";

const LESSONS: Record<string, Lesson[]> = {
  "principles-of-management": principlesOfManagement,
  "theories-of-management": theoriesOfManagement,
  "communication": communication,
  "decision-making": decisionMaking,
  "organisation-structure": organisationStructure,
  "business-economics-and-demand": businessEconomicsAndDemand,
  "elasticity-of-demand": elasticityOfDemand,
  "utility-analysis": utilityAnalysis,
  "indifference-curves": indifferenceCurves,
  "market-structures": marketStructures,
  "national-income-and-inflation": nationalIncomeAndInflation,
  "business-ethics-and-csr": businessEthicsAndCsr,
  "corporate-governance": corporateGovernance,
};

export const lessonsFor = (slug: string): Lesson[] | null => LESSONS[slug] ?? null;

// Catches slips in the lesson data when the pages are built: a lesson that points at
// a block or passage that isn't there, a passage used twice or not at all, or an
// answer that isn't one of the options. A build that finds one fails rather than
// publishing a broken page.
export function lessonProblems(blocks: { id: string }[], pairingCount: number, lessons: Lesson[]): string[] {
  const out: string[] = [];
  const ids = new Set(blocks.map(b => b.id));
  const seen = new Set<string>();
  const used = new Map<number, number>();
  for (const l of lessons) {
    if (!ids.has(l.blockId)) out.push(`lesson "${l.name}" points at a missing block (${l.blockId})`);
    if (seen.has(l.blockId)) out.push(`two lessons explain ${l.blockId}`);
    seen.add(l.blockId);
    for (const c of l.check) {
      if (c.answer < 0 || c.answer >= c.options.length) out.push(`"${c.q}" has an answer outside its options`);
      if (new Set(c.options).size !== c.options.length) out.push(`"${c.q}" repeats an option`);
    }
    if (!l.check.length) out.push(`lesson "${l.name}" has no questions`);
    for (const n of l.lens) used.set(n.pairing, (used.get(n.pairing) ?? 0) + 1);
  }
  for (const b of blocks) if (!seen.has(b.id)) out.push(`block ${b.id} has no lesson`);
  for (let i = 0; i < pairingCount; i++) {
    const n = used.get(i) ?? 0;
    if (n !== 1) out.push(`passage ${i} is used ${n} times`);
  }
  for (const i of used.keys()) if (i < 0 || i >= pairingCount) out.push(`lesson points at passage ${i}, which does not exist`);
  return out;
}
