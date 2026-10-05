"use client";

import { useSyncExternalStore } from "react";

// Things the landing page remembers on this device only: the concept to
// continue with, and the reader's own note. Nothing here is sent anywhere.
// localStorage can be missing or throw (private windows, blocked site data), so
// every access is wrapped and the page works without it.

export const LAST_KEY = "vv-last";
export const NOTE_KEY = "vv-note";

const CHANGE = "vv-device-change";
const TOAST = "vv-toast";
const SEARCH = "vv-search";
const CONCEPT = "vv-concept";

function read(key: string): string {
  try { return localStorage.getItem(key) ?? ""; } catch { return ""; }
}

export function writeDevice(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* the page works without storage */ }
  window.dispatchEvent(new Event(CHANGE));
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE, onChange);
    window.removeEventListener("storage", onChange);
  };
}

// The server and the first client render both see "", so there is no mismatch.
export function useDevice(key: string): string {
  return useSyncExternalStore(subscribe, () => read(key), () => "");
}

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent(TOAST, { detail: message }));
}

export function onToast(handler: (message: string) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<string>).detail);
  window.addEventListener(TOAST, listener);
  return () => window.removeEventListener(TOAST, listener);
}

// Fills the area search from elsewhere on the page (a question card).
export function searchAreas(term: string) {
  window.dispatchEvent(new CustomEvent(SEARCH, { detail: term }));
}

export function onSearchAreas(handler: (term: string) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<string>).detail);
  window.addEventListener(SEARCH, listener);
  return () => window.removeEventListener(SEARCH, listener);
}

export function onRevealConcept(handler: () => void) {
  window.addEventListener(CONCEPT, handler);
  return () => window.removeEventListener(CONCEPT, handler);
}

// Opening a concept saves it as the place to continue from and opens the sample
// concept on the page. Concept pages don't exist yet, and Selection is the one
// concept with content, so it is the one that opens.
export function openConcept(name: string, announce = true) {
  writeDevice(LAST_KEY, name);
  if (announce) showToast(`${name} saved to Continue`);
  window.dispatchEvent(new Event(CONCEPT));
}
