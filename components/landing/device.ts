"use client";

import { useSyncExternalStore } from "react";

// Things the site remembers on this device only, such as the concept to
// continue with. Nothing here is sent anywhere.
// localStorage can be missing or throw (private windows, blocked site data), so
// every access is wrapped and the page works without it.

export const LAST_KEY = "vv-last";
export const LAST_HREF_KEY = "vv-last-href";

const CHANGE = "vv-device-change";
const TOAST = "vv-toast";

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

// Opening a concept saves it, with the lesson's address, as the place to
// continue from.
export function openConcept(name: string, announce: boolean, href: string) {
  writeDevice(LAST_HREF_KEY, href);
  writeDevice(LAST_KEY, name);
  if (announce) showToast(`${name} saved to Continue`);
}
