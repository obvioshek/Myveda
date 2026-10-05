"use client";

import { useMemo } from "react";
import { useDevice, writeDevice } from "@/components/landing/device";

// Which concepts the reader has finished, kept on this device only, as a list of
// "<chapter slug>#<block id>" ids. Like the rest of device.ts it works without
// storage: progress just isn't remembered.
export const DONE_KEY = "vv-done";

function parse(raw: string): string[] {
  try {
    const list: unknown = JSON.parse(raw);
    return Array.isArray(list) ? list.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function read(): string[] {
  try { return parse(localStorage.getItem(DONE_KEY) ?? ""); } catch { return []; }
}

export function useDone(): Set<string> {
  const raw = useDevice(DONE_KEY);
  return useMemo(() => new Set(parse(raw)), [raw]);
}

export function setDone(id: string, on: boolean) {
  const all = new Set(read());
  if (on) all.add(id); else all.delete(id);
  writeDevice(DONE_KEY, JSON.stringify([...all]));
}

// Opens or closes every lesson on the page at once.
const ALL = "vv-lessons";
export function setAllLessons(open: boolean) {
  window.dispatchEvent(new CustomEvent(ALL, { detail: open }));
}
export function onAllLessons(handler: (open: boolean) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<boolean>).detail);
  window.addEventListener(ALL, listener);
  return () => window.removeEventListener(ALL, listener);
}
