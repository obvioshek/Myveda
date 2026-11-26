// Typographic quotes for text typed with straight ones: "said" becomes “said”
// and it's becomes it’s. The chapters were written at different times, some
// with ' and " and some with ’ and “ ”; this makes them read as one hand.
// It works on the words only: anything inside an HTML tag (attributes, SVG
// paths) is left exactly as it is, and so are marks after a figure with no
// letter following, which are feet, inches or minutes. Text that is already
// typographic passes through unchanged, so it is safe to apply twice. Kept
// free of the content itself, so client components can use it too.

const OPENS_AFTER = /[\s(\[{—–/“‘]/;
const LETTER = /[\p{L}\p{N}]/u;
// A closing single quote further on: after a word or its punctuation, and not
// followed by a letter (which would make it an apostrophe inside a word).
const ELISION = /^(?:\d0s|em|tis|twas)(?![\p{L}\p{N}])/u;
const CLOSES_LATER = /^[^<]*?[\p{L}\p{N}.,!?]'(?![\p{L}\p{N}])/u;

export function typeset(s: string): string {
  if (!s.includes("'") && !s.includes('"')) return s;
  let out = "";
  let prev = "";   // the last character of the words so far (tags don't count)
  let inTag = false;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i], next = s[i + 1] ?? "";
    if (inTag) { out += ch; if (ch === ">") inTag = false; continue; }
    if (ch === "<" && /[a-zA-Z/!]/.test(next)) { inTag = true; out += ch; continue; }
    if (ch === '"' || ch === "'") {
      const measure = /\d/.test(prev) && !LETTER.test(next);
      const opens = (prev === "" || OPENS_AFTER.test(prev)) && LETTER.test(next);
      // A single mark opens a quotation only if one closes it further on.
      // Otherwise it is an apostrophe: 'em, the '90s, and the dropped vowel
      // of transliterated Sanskrit (ko 'nyo 'sti).
      const closed = ch === "'" && opens && !ELISION.test(s.slice(i + 1, i + 6)) && CLOSES_LATER.test(s.slice(i + 1, i + 240));
      out += measure ? ch : ch === '"' ? (opens ? "“" : "”") : (closed ? "‘" : "’");
    } else out += ch;
    prev = ch;
  }
  return out;
}

/** The same, through every string in a value, except under the keys named (ids and the like). */
export function typesetDeep<T>(value: T, skip: ReadonlySet<string>): T {
  if (typeof value === "string") return typeset(value) as T;
  if (Array.isArray(value)) return value.map(v => typesetDeep(v, skip)) as T;
  if (value && typeof value === "object") {
    const o: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) o[k] = skip.has(k) ? v : typesetDeep(v, skip);
    return o as T;
  }
  return value;
}
