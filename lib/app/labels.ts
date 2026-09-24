// The five labels. Every contribution says what it rests on; "asking" is the
// label a question carries, the other four are what a share or an answer
// rests on.

export type Basis = "asking" | "documented" | "lived" | "told" | "view";
export type ShareBasis = Exclude<Basis, "asking">;

export const LABELS: Record<Basis, { name: string; glyph: string }> = {
  asking: { name: "Asking", glyph: "?" },
  documented: { name: "Documented", glyph: "✓" },
  lived: { name: "Lived", glyph: "◉" },
  told: { name: "Told", glyph: "❞" },
  view: { name: "My view", glyph: "◐" },
};

export const SHARE_BASES: ShareBasis[] = ["documented", "lived", "told", "view"];

export const BASIS_HELP: Record<ShareBasis, string> = {
  documented: "Can be checked against a record. Needs a specific source.",
  lived: "Happened to you or in front of you.",
  told: "Heard, passed down, commonly said.",
  view: "Your opinion, reading or guess. Open to disagreement, not fact-checks.",
};

export function isBasis(v: unknown): v is Basis {
  return typeof v === "string" && v in LABELS;
}
export function isShareBasis(v: unknown): v is ShareBasis {
  return isBasis(v) && v !== "asking";
}

// How a reply relates to what it replies to. Replies are grouped by these,
// never ranked.
export const REPLY_RELATIONS = ["Adds context", "Builds on", "Disagrees", "Asks"] as const;
export type ReplyRelation = (typeof REPLY_RELATIONS)[number];
export const ANSWER_RELATIONS = ["Answers", "Builds on", "Disagrees"] as const;
export type AnswerRelation = (typeof ANSWER_RELATIONS)[number];

export const SOURCE_TYPES = ["Primary record", "Scholarly work", "News", "Reference work", "Personal site"] as const;

export const SOURCE_VERDICTS = ["Supports it", "Partly", "Doesn't", "Can't access"] as const;

export const REPORT_REASONS = [
  "Hate or harassment",
  "Stirs up hostility between communities",
  "False, and labelled Documented",
  "Spam or scam",
  "Pretending to be someone",
  "Something else",
] as const;

export const OPEN_TO = ["Answering questions", "Conversation", "Just reading"] as const;
export const BRINGS: [string, string][] = [
  ["Reading", "A short daily Edition, and depth when you want it."],
  ["Asking", "Questions that reach people who know."],
  ["Helping", "Questions on what you know are sent to you."],
];

export const COMMUNITY_FORMATS: Record<string, string> = {
  Circle: "one book or theme at a time, a thread per part",
  Board: "a shared noticeboard for a place or a moment",
  Cohort: "a small group that applies and moves together",
  Practice: "practice in the open, corrections come as replies",
};

export function memoryLabel(memory: string, fadeDays?: number | null) {
  if (memory === "fades") return `Fades after ${fadeDays ?? 7} days`;
  if (memory === "members") return "Kept, members only";
  return "Kept over time";
}

// Suggestions only — the member always has the last word on the label.
export const suggestIntent = (t: string): "asking" | "sharing" => (/\?\s*$/.test(t.trim()) ? "asking" : "sharing");

export function suggestBasis(t: string): ShareBasis {
  if (/https?:\/\/|www\.|according to|\b(1[5-9]|20)\d\d\b/i.test(t)) return "documented";
  if (/\b(grandmother|grandfather|nani|nana|dadi|paati|they say|people say|it is said|my family says|legend)\b/i.test(t)) return "told";
  if (/\b(I|my|me|today|yesterday|we)\b/.test(t)) return "lived";
  return "view";
}

// A Documented claim must point at the specific page or entry, not a home page.
export function checkSourceUrl(raw: string): { ok: boolean; url: URL | null } {
  const v = raw.trim();
  if (!v) return { ok: false, url: null };
  // ISBNs and DOIs are specific by nature
  if (/^(isbn[:\s]*)?[\d-]{10,17}x?$/i.test(v) || /^(doi:\s*)?10\.\d{4,9}\/\S+$/i.test(v)) return { ok: true, url: null };
  try {
    const u = new URL(/^https?:/i.test(v) ? v : "https://" + v);
    if (!u.hostname.includes(".")) return { ok: false, url: null };
    return { ok: u.pathname.replace(/\/+$/, "") !== "" || u.search !== "", url: u };
  } catch {
    return { ok: false, url: null };
  }
}

export function firstName(name: string) {
  return name.split(" ")[0];
}

export function initialsOf(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase() || "?";
}

export function hueOf(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h % 360;
}
