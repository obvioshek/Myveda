// A teacher's quiz, carried whole in a link: /learn/practice?set=…, with the
// questions' ids in order, an optional title and, for a mock test, the time
// per question. Nothing is stored on a server; a student's answers stay on
// their own device, as in any practice.
//
// A question id is "<chapter slug>#<block id>#<hash>" (question-id.ts). In the
// link "#" becomes "." and ids are joined by "~", so the link needs no escaping.

export const QUIZ_PATH = "/learn/quiz";
export const MAX_QUIZ = 50;
export const PACES = [0, 60, 90] as const;

export type Quiz = { ids: string[]; title: string; mock: boolean; pace: number };

const ID = /^[a-z0-9-]{1,120}#[a-z0-9-]{1,160}#[a-z0-9]{1,13}$/;

export function quizHref(q: Quiz): string {
  // Built by hand: the ids need no escaping, and URLSearchParams would escape "~".
  const parts = [`set=${q.ids.slice(0, MAX_QUIZ).map(id => id.replace(/#/g, ".")).join("~")}`];
  if (q.title.trim()) parts.push(`t=${encodeURIComponent(q.title.trim().slice(0, 80))}`);
  if (q.mock) { parts.push("mock=1"); if (q.pace) parts.push(`pace=${q.pace}`); }
  return `/learn/practice?${parts.join("&")}`;
}

/** Reads a quiz from a link's parameters; null if there is none or it is malformed. */
export function readQuiz(params: URLSearchParams): Quiz | null {
  const raw = params.get("set");
  if (!raw) return null;
  const ids = [...new Set(raw.split("~").map(s => s.replace(/\./g, "#")).filter(id => ID.test(id)))].slice(0, MAX_QUIZ);
  if (!ids.length) return null;
  const pace = Number(params.get("pace") ?? 0);
  return {
    ids,
    title: (params.get("t") ?? "").replace(/\s+/g, " ").trim().slice(0, 80),
    mock: params.get("mock") === "1",
    pace: (PACES as readonly number[]).includes(pace) ? pace : 0,
  };
}
