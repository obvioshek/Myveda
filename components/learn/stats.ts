"use client";

import { useMemo } from "react";
import { useDevice, writeDevice } from "@/components/landing/device";

// How the reader has been doing, chapter by chapter, kept on this device: the
// last few answers to each chapter's questions, as a string of 1s (right) and
// 0s (wrong or guessed), oldest first. Recent answers are what matter, so
// older ones drop off. A chapter is "weak" once it has enough answers to judge
// and too many of them are wrong. Term cards aren't counted: they measure
// vocabulary, not the chapter's ideas.
export const STATS_KEY = "vv-stats";
const KEEP = 20;
export const MIN_ANSWERS = 5;
export const WEAK_BELOW = 0.7;

export type Stats = Record<string, string>;

/** Keeps only well-formed entries; anything else (including a transfer code's) is dropped. */
export function cleanStats(v: unknown): Stats {
  if (!v || typeof v !== "object" || Array.isArray(v)) return {};
  const out: Stats = {};
  for (const [k, s] of Object.entries(v).slice(0, 2_000)) if (/^[a-z0-9-]{1,120}$/.test(k) && typeof s === "string" && /^[01]{1,20}$/.test(s)) out[k] = s;
  return out;
}

export function parseStats(raw: string): Stats {
  try { return cleanStats(JSON.parse(raw)); } catch { return {}; }
}

function read(): Stats {
  try { return parseStats(localStorage.getItem(STATS_KEY) ?? ""); } catch { return {}; }
}

export function useStats(): Stats {
  const raw = useDevice(STATS_KEY);
  return useMemo(() => parseStats(raw), [raw]);
}

/** Adds one answer to its chapter's record. `id` is a question id, "<chapter>#<block>#<hash>". */
export function recordOutcome(id: string, right: boolean) {
  if (id.startsWith("glossary#")) return;
  const chapter = id.split("#")[0];
  if (!/^[a-z0-9-]{1,120}$/.test(chapter)) return;
  const all = read();
  all[chapter] = ((all[chapter] ?? "") + (right ? "1" : "0")).slice(-KEEP);
  writeDevice(STATS_KEY, JSON.stringify(all));
}

export type ChapterScore = { slug: string; right: number; total: number; share: number };

/** Chapters with enough answers to judge and too many wrong, weakest first. */
export function weakChapters(stats: Stats): ChapterScore[] {
  return Object.entries(stats)
    .map(([slug, s]) => { const right = [...s].filter(c => c === "1").length; return { slug, right, total: s.length, share: right / s.length }; })
    .filter(c => c.total >= MIN_ANSWERS && c.share < WEAK_BELOW)
    .sort((a, b) => a.share - b.share || b.total - a.total);
}
