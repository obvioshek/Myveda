// The id a check question is remembered under in the reader's review list:
// "<chapter slug>#<block id>#<hash of the question>". Hashing the wording rather
// than numbering the questions means adding or reordering questions keeps every
// other id; rewording one only forgets that one. Kept free of the content itself
// so the lesson cards and the practice page can share it.
export function questionId(slug: string, blockId: string, q: string): string {
  // FNV-1a, 32 bits: short, stable and plenty for a few thousand questions.
  let h = 0x811c9dc5;
  for (let i = 0; i < q.length; i++) {
    h ^= q.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return `${slug}#${blockId}#${(h >>> 0).toString(36)}`;
}
