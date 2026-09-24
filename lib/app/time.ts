import { Temporal } from "temporal-polyfill";

// Timestamps come out of the database as Temporal.Instant. These helpers turn
// them into plain numbers for the client and into the short phrases the
// product uses ("4h", "yesterday"); nothing ever shows a precise count.

type InstantLike = Temporal.Instant | { epochMilliseconds: number } | Date | string | number | null | undefined;

export function toMs(v: InstantLike): number {
  if (v == null) return 0;
  if (typeof v === "number") return v;
  if (typeof v === "string") return new Date(v).getTime();
  if (v instanceof Date) return v.getTime();
  return v.epochMilliseconds;
}

export function instantAt(ms: number) {
  return Temporal.Instant.fromEpochMilliseconds(Math.round(ms));
}

export const now = () => Temporal.Now.instant();

// Feed and list times: "just now", "12m", "4h", "2d", "3w", then a date.
export function shortAgo(v: InstantLike, at = Date.now()) {
  const mins = Math.max(0, Math.floor((at - toMs(v)) / 60000));
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d`;
  if (days < 60) return `${Math.floor(days / 7)}w`;
  return new Date(toMs(v)).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

// Inbox times: "10 min ago", "2h ago", then the weekday, then a date.
export function inboxWhen(v: InstantLike, at = Date.now()) {
  const ms = toMs(v);
  const mins = Math.max(0, Math.floor((at - ms) / 60000));
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  if (mins < 24 * 60) return `${Math.floor(mins / 60)}h ago`;
  if (mins < 7 * 24 * 60) return new Date(ms).toLocaleDateString("en-IN", { weekday: "long" });
  return new Date(ms).toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

export function inboxGroup(v: InstantLike, at = Date.now()) {
  const ms = toMs(v);
  const d = new Date(at);
  const startOfToday = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  if (ms >= startOfToday) return "Today";
  if (ms >= startOfToday - 6 * 86400000) return "This week";
  return "Earlier";
}

export function longDate(v: InstantLike) {
  return new Date(toMs(v)).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function editionDate(at = Date.now(), timeZone = "Asia/Kolkata") {
  return new Date(at).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone });
}

export function visitPhrase(v: InstantLike, timeZone = "Asia/Kolkata", at = Date.now()) {
  const ms = toMs(v);
  if (!ms) return "your first visit";
  const time = new Date(ms).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", timeZone }).toLowerCase();
  const day = new Date(ms).toLocaleDateString("en-CA", { timeZone });
  const today = new Date(at).toLocaleDateString("en-CA", { timeZone });
  const yesterday = new Date(at - 86400000).toLocaleDateString("en-CA", { timeZone });
  if (day === today) return `today at ${time}`;
  if (day === yesterday) return `yesterday at ${time}`;
  return `${new Date(ms).toLocaleDateString("en-GB", { weekday: "long", timeZone })} at ${time}`;
}

function localParts(ms: number, timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone, hour: "numeric", minute: "numeric", weekday: "short", hourCycle: "h23",
  }).formatToParts(new Date(ms));
  const get = (t: string) => parts.find(p => p.type === t)?.value ?? "";
  return { hour: parseInt(get("hour"), 10) % 24, minute: parseInt(get("minute"), 10), weekday: get("weekday") };
}

// The first moment at or after `fromMs` when it is `hour`:00 in the member's
// time zone (on `weekday`, if given).
export function nextLocalHour(fromMs: number, timeZone: string, hour: number, weekday?: string) {
  let t = Math.ceil(fromMs / 60000) * 60000;
  for (let i = 0; i < 9 * 24 * 60; i++) {
    const p = localParts(t, timeZone);
    if (p.hour === hour && p.minute === 0 && (!weekday || p.weekday === weekday)) return t;
    // jump to the next minute boundary, faster once we are off the hour
    t += p.minute === 0 ? 60 * 60000 - 0 : (60 - p.minute) * 60000;
  }
  return fromMs;
}

export function inQuietHours(ms: number, timeZone: string) {
  const { hour } = localParts(ms, timeZone);
  return hour >= 22 || hour < 8;
}
