"use client";

import { LAST_HREF_KEY, LAST_KEY, NOTE_PREFIX, PLAN_KEY, writeDevice } from "@/components/landing/device";
import { DONE_KEY } from "./progress";
import { REVIEW_KEY, type ReviewList } from "./review";
import { STATS_KEY, cleanStats, type Stats } from "./stats";

// Moving progress to another device without a server. Everything the site
// keeps on a device (finished concepts, the review list, recent answers by
// chapter, the study plan's settings, the Continue link and, if the reader
// wants, their reflection notes) is packed into a code: JSON, compressed where the browser can,
// then base64url. The reader carries it over themselves, as text, a link whose
// code sits after "#" (which browsers never send to a server) or a file.
//
// A code is untrusted input: decoding checks every field, keeps only the keys
// above, and caps sizes. Adding a code merges it with what is already on the
// device; nothing the reader has is lost.

export type Bundle = {
  v: 1;
  done: string[];
  review: ReviewList;
  plan: { exam: string; units: string[] | null; days: number } | null;
  last: { name: string; href: string } | null;
  notes: Record<string, string>;
  /** Recent answers by chapter (stats.ts). Codes made before it existed have none. */
  stats: Stats;
};

const ID = /^[a-z0-9-]{1,120}#[a-z0-9-]{1,160}$/;
const REVIEW_ID = /^[a-z0-9-]{1,120}#[a-z0-9-]{1,160}#[a-z0-9]{1,13}$/;
const NOTE_PATH = /^\/learn\/[a-z0-9-]{1,120}#[a-z0-9-]{1,160}$/;
const MAX_CODE = 600_000;
const MAX_JSON = 2_000_000;
const MAX_NOTE = 5_000;

function read(key: string): string {
  try { return localStorage.getItem(key) ?? ""; } catch { return ""; }
}
function json(key: string): unknown {
  try { return JSON.parse(read(key)); } catch { return null; }
}

// ---------- Checking ----------

function clean(raw: unknown): Bundle | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  if (o.v !== 1) return null;
  const done = Array.isArray(o.done) ? [...new Set(o.done.filter((x): x is string => typeof x === "string" && ID.test(x)))].slice(0, 20_000) : [];
  const review: ReviewList = {};
  if (o.review && typeof o.review === "object" && !Array.isArray(o.review)) {
    for (const [id, it] of Object.entries(o.review as Record<string, unknown>).slice(0, 20_000)) {
      const x = it as { box?: unknown; due?: unknown } | null;
      if (REVIEW_ID.test(id) && x && Number.isInteger(x.box) && Number.isInteger(x.due) && (x.box as number) >= 0 && (x.box as number) < 10 && Math.abs(x.due as number) < 1e6) review[id] = { box: x.box as number, due: x.due as number };
    }
  }
  let plan: Bundle["plan"] = null;
  const p = o.plan as Record<string, unknown> | null;
  if (p && typeof p === "object" && typeof p.exam === "string" && /^\d{4}-\d{2}-\d{2}$/.test(p.exam) && Number.isInteger(p.days) && (p.days as number) >= 1 && (p.days as number) <= 7) {
    const units = Array.isArray(p.units) ? p.units.filter((x): x is string => typeof x === "string" && /^[a-z0-9-]{1,40}$/.test(x)).slice(0, 50) : null;
    plan = { exam: p.exam, units, days: p.days as number };
  }
  let last: Bundle["last"] = null;
  const l = o.last as Record<string, unknown> | null;
  if (l && typeof l === "object" && typeof l.name === "string" && typeof l.href === "string" && l.name.length <= 200 && /^\/learn\/[a-z0-9-]{1,120}(#[a-z0-9-]{1,160})?$/.test(l.href)) last = { name: l.name, href: l.href };
  const notes: Record<string, string> = {};
  if (o.notes && typeof o.notes === "object" && !Array.isArray(o.notes)) {
    for (const [k, t] of Object.entries(o.notes as Record<string, unknown>).slice(0, 5_000)) {
      if (NOTE_PATH.test(k) && typeof t === "string" && t.trim()) notes[k] = t.slice(0, MAX_NOTE);
    }
  }
  return { v: 1, done, review, plan, last, notes, stats: cleanStats(o.stats) };
}

// ---------- Gathering and adding ----------

/** What this device holds now, as a bundle. */
export function gather(includeNotes: boolean): Bundle {
  const notes: Record<string, string> = {};
  if (includeNotes) {
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k?.startsWith(NOTE_PREFIX)) notes[k.slice(NOTE_PREFIX.length)] = localStorage.getItem(k) ?? "";
      }
    } catch { /* no storage: no notes */ }
  }
  const name = read(LAST_KEY), href = read(LAST_HREF_KEY);
  return clean({ v: 1, done: json(DONE_KEY), review: json(REVIEW_KEY), plan: json(PLAN_KEY), last: name && href ? { name, href } : null, notes, stats: json(STATS_KEY) }) ?? { v: 1, done: [], review: {}, plan: null, last: null, notes: {}, stats: {} };
}

export type Summary = { done: number; review: number; plan: string | null; notes: number; last: string | null; stats: number };

export function summarise(b: Bundle): Summary {
  const plan = b.plan ? (() => { const [y, m, d] = b.plan.exam.split("-").map(Number); return new Date(y, m - 1, d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }); })() : null;
  return { done: b.done.length, review: Object.keys(b.review).length, plan, notes: Object.keys(b.notes).length, last: b.last?.name ?? null, stats: Object.keys(b.stats).length };
}

export const isEmpty = (s: Summary) => !s.done && !s.review && !s.plan && !s.notes && !s.last && !s.stats;

/**
 * Adds a bundle to this device. Finished concepts are joined. A question on
 * both review lists keeps the entry that is less far along, so nothing is
 * marked learned too soon. A note already here is kept; one only in the code is
 * added. The plan, the Continue link and a chapter's record of answers come
 * from the code only if this device has none. Returns what was added.
 */
export function addToDevice(b: Bundle): { done: number; review: number; notes: number; plan: boolean; last: boolean } {
  const here = gather(true);
  const done = new Set(here.done);
  const before = done.size;
  for (const id of b.done) done.add(id);
  writeDevice(DONE_KEY, JSON.stringify([...done]));

  const review = { ...here.review };
  let reviewAdded = 0;
  for (const [id, it] of Object.entries(b.review)) {
    const mine = review[id];
    if (!mine) { review[id] = it; reviewAdded++; }
    else if (it.box < mine.box || (it.box === mine.box && it.due < mine.due)) review[id] = it;
  }
  writeDevice(REVIEW_KEY, JSON.stringify(review));

  let notes = 0;
  for (const [k, t] of Object.entries(b.notes)) {
    if (here.notes[k]?.trim()) continue;
    writeDevice(NOTE_PREFIX + k, t);
    notes++;
  }

  // A chapter's record of answers is kept from this device if it has one.
  const stats = { ...b.stats, ...here.stats };
  writeDevice(STATS_KEY, JSON.stringify(stats));

  const plan = !here.plan && !!b.plan;
  if (plan) writeDevice(PLAN_KEY, JSON.stringify(b.plan));
  const last = !here.last && !!b.last;
  if (last && b.last) { writeDevice(LAST_HREF_KEY, b.last.href); writeDevice(LAST_KEY, b.last.name); }

  return { done: done.size - before, review: reviewAdded, notes, plan, last };
}

// ---------- The code ----------

function toB64url(bytes: Uint8Array): string {
  let s = "";
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function fromB64url(s: string): Uint8Array {
  const b = atob(s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4));
  const out = new Uint8Array(b.length);
  for (let i = 0; i < b.length; i++) out[i] = b.charCodeAt(i);
  return out;
}

const canZip = () => typeof CompressionStream === "function" && typeof DecompressionStream === "function";

async function pipe(bytes: Uint8Array, stream: CompressionStream | DecompressionStream, cap: number): Promise<Uint8Array> {
  const reader = new Blob([bytes as BlobPart]).stream().pipeThrough(stream).getReader();
  const parts: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > cap) { await reader.cancel(); throw new Error("too large"); }
    parts.push(value);
  }
  const out = new Uint8Array(size);
  let at = 0;
  for (const p of parts) { out.set(p, at); at += p.length; }
  return out;
}

/** "VV1z." and compressed JSON where the browser can compress, else "VV1." and plain JSON. */
export async function encode(b: Bundle): Promise<string> {
  const bytes = new TextEncoder().encode(JSON.stringify(b));
  if (canZip()) return `VV1z.${toB64url(await pipe(bytes, new CompressionStream("deflate-raw"), MAX_JSON))}`;
  return `VV1.${toB64url(bytes)}`;
}

/** Reads a code, a link with the code after "#t=", or a file's text. */
export async function decode(input: string): Promise<{ ok: true; bundle: Bundle } | { ok: false; error: string }> {
  const text = input.trim();
  if (!text) return { ok: false, error: "Paste a code first." };
  if (text.length > MAX_CODE) return { ok: false, error: "That is too long to be a Veda Verse code." };
  const code = (text.match(/VV1z?\.[A-Za-z0-9_-]+/) ?? [""])[0];
  if (!code) return { ok: false, error: "That isn’t a Veda Verse code. It starts with “VV1”." };
  const [head, body] = code.split(".");
  try {
    let bytes = fromB64url(body);
    if (head === "VV1z") {
      if (!canZip()) return { ok: false, error: "This browser can’t open compressed codes. Try a current version of Chrome, Firefox, Safari or Edge." };
      bytes = await pipe(bytes, new DecompressionStream("deflate-raw"), MAX_JSON);
    }
    const bundle = clean(JSON.parse(new TextDecoder().decode(bytes)));
    return bundle ? { ok: true, bundle } : { ok: false, error: "That code is from a different version, or it was cut short." };
  } catch {
    return { ok: false, error: "That code is incomplete or changed. Copy the whole of it and try again." };
  }
}
