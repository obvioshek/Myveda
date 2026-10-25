"use client";

import { useMemo } from "react";
import { useDevice, writeDevice } from "@/components/landing/device";

// The reader's review list, kept on this device only. A check question answered
// wrongly, in a lesson or in practice, joins it and comes back the next day.
// Each right answer when it is due sends it further away (3, then 7, then 21
// days); a right answer at 21 days takes it off the list. A wrong answer at any
// point starts it again from the next day. Questions answered rightly the first
// time never join: the list is for what the reader hasn't got yet.
export const REVIEW_KEY = "vv-review";

/** Days to wait after a right answer, by how many times in a row it has been right. */
export const GAPS = [1, 3, 7, 21];

export type ReviewItem = { box: number; due: number };
export type ReviewList = Record<string, ReviewItem>;

// Today as a whole number of days, by the reader's own calendar, so a question
// due "tomorrow" is due after midnight where they are.
export function today(): number {
  const d = new Date();
  return Math.floor((d.getTime() - d.getTimezoneOffset() * 60_000) / 86_400_000);
}

function parse(raw: string): ReviewList {
  try {
    const v: unknown = JSON.parse(raw);
    if (!v || typeof v !== "object" || Array.isArray(v)) return {};
    const out: ReviewList = {};
    for (const [id, x] of Object.entries(v)) {
      const it = x as Partial<ReviewItem> | null;
      if (it && Number.isInteger(it.box) && Number.isInteger(it.due)) out[id] = { box: it.box!, due: it.due! };
    }
    return out;
  } catch {
    return {};
  }
}

function read(): ReviewList {
  try { return parse(localStorage.getItem(REVIEW_KEY) ?? ""); } catch { return {}; }
}

export function useReview(): ReviewList {
  const raw = useDevice(REVIEW_KEY);
  return useMemo(() => parse(raw), [raw]);
}

/** The questions due today or earlier, soonest first. */
export function dueIds(list: ReviewList, day = today()): string[] {
  return Object.entries(list).filter(([, it]) => it.due <= day).sort((a, b) => a[1].due - b[1].due).map(([id]) => id);
}

export type Recorded = { kind: "added" | "moved" | "learned"; days: number };

/**
 * Records an answer. A wrong one puts the question on the list for tomorrow. A
 * right one moves a due question to its next gap, or off the list after the
 * last; a right answer to a question that isn't due, or isn't listed, changes
 * nothing. Returns what happened, for the line shown under the answer.
 */
export function recordAnswer(id: string, right: boolean): Recorded | null {
  const list = read();
  const day = today();
  const it = list[id];
  let result: Recorded | null = null;
  if (!right) {
    list[id] = { box: 0, due: day + GAPS[0] };
    result = { kind: "added", days: GAPS[0] };
  } else if (it && it.due <= day) {
    const box = it.box + 1;
    if (box >= GAPS.length) { delete list[id]; result = { kind: "learned", days: 0 }; }
    else { list[id] = { box, due: day + GAPS[box] }; result = { kind: "moved", days: GAPS[box] }; }
  }
  if (result) writeDevice(REVIEW_KEY, JSON.stringify(list));
  return result;
}

// The line shown under an answer that changed the review list.
export function recordedLine(r: Recorded | null): string | null {
  if (!r) return null;
  if (r.kind === "added") return `Added to your review: it comes back ${dayWord(r.days)}.`;
  if (r.kind === "moved") return `Right again: next review ${dayWord(r.days)}.`;
  return "Right four times running: off your review list.";
}

/** Drops questions that are no longer on the site (reworded or removed). */
export function forget(ids: string[]) {
  if (!ids.length) return;
  const list = read();
  for (const id of ids) delete list[id];
  writeDevice(REVIEW_KEY, JSON.stringify(list));
}

export function clearReview() {
  writeDevice(REVIEW_KEY, "{}");
}

export const dayWord = (days: number) => (days <= 0 ? "today" : days === 1 ? "tomorrow" : `in ${days} days`);
