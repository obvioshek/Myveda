"use client";

// "Ask the community about this": the concept a reader wants to ask about is
// kept in this browser while they go to the app, sign in and, if they are new,
// finish onboarding. The app opens its composer with it once (AppProvider),
// then forgets it. Nothing is sent anywhere until the member posts.
export const ASK_KEY = "vv-ask";
// A pending question older than this is dropped rather than opened.
export const ASK_TTL = 24 * 60 * 60 * 1000;

export type PendingAsk = { concept: string; chapter: string; at: number };

export function saveAsk(concept: string, chapter: string) {
  try { localStorage.setItem(ASK_KEY, JSON.stringify({ concept, chapter, at: Date.now() } satisfies PendingAsk)); } catch { /* the link still opens the app */ }
}

/** Reads and clears the pending question, if there is a fresh one. */
export function takeAsk(): PendingAsk | null {
  try {
    const raw = localStorage.getItem(ASK_KEY);
    if (!raw) return null;
    localStorage.removeItem(ASK_KEY);
    const v = JSON.parse(raw) as Partial<PendingAsk>;
    if (typeof v.concept !== "string" || typeof v.chapter !== "string" || typeof v.at !== "number") return null;
    if (Date.now() - v.at > ASK_TTL || v.at > Date.now() + 60_000) return null;
    return { concept: v.concept.slice(0, 200), chapter: v.chapter.slice(0, 200), at: v.at };
  } catch {
    return null;
  }
}
