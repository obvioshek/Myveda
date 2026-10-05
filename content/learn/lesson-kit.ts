// Guided lessons: a chapter's concepts taught the way the home page's sample
// concept is, in five steps (before you read, core idea, check yourself, Ancient
// lens, reflect, one-page summary) with each step opening in place. A lesson
// explains one block of a chapter in chapters.json, and takes the passages it
// needs from that chapter's own list, so nothing is said twice.
//
// Everything here is drawn from the chapter text it sits beside: questions and
// answers restate what the chapter says, and "what it adds" / "where they
// differ" only compare what the passage and the concept each say. Keep to that
// when writing more, and leave a step out rather than fill it with a guess.

export type Check = { q: string; options: string[]; answer: number; why: string };
export type LensNote = { pairing: number; adds: string; differs: string };

export type Lesson = {
  /** The chapter block this lesson explains (its id in chapters.json). */
  blockId: string;
  name: string;
  /** One line under the name. */
  intro: string;
  /** A small question to answer before reading; each choice reveals a short reply. */
  before: { q: string; choices: [{ label: string; reveal: string }, { label: string; reveal: string }] };
  /** The idea in a single line, shown above the chapter's detail. */
  lead: string;
  check: Check[];
  /** Passages (indexes into the chapter's pairings) with how each compares. Empty when none is verified. */
  lens: LensNote[];
  reflect: string;
  summary: { points: string[]; memory: string };
};

/**
 * A multiple-choice question. The right answer is given first and placed among
 * the wrong ones at a spot that depends on the question, so the answers don't
 * always sit in the same position.
 */
export function ask(q: string, right: string, wrong: string[], why: string): Check {
  const at = q.length % (wrong.length + 1);
  const options = [...wrong];
  options.splice(at, 0, right);
  return { q, options, answer: at, why };
}

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
