"use client";

import { useEffect, useRef } from "react";

// On touch screens, Back closes what is open over the page (search, the
// Menu, a dialog, a chapter's Contents) instead of leaving the page, as in
// most apps. Opening a layer adds a history entry for the same address;
// closing it any other way (×, Escape, a tap outside) takes the entry off
// again, so Back never has a step that does nothing. Going to another page
// from inside a layer should replace the entry, not add one: when `leave()`
// returns true, navigate with `replace`; when false (no entry was added),
// navigate as usual. With a mouse, Back keeps its usual meaning and no entry
// is added. Next.js folds pushState into its router (see "Native History
// API" in its docs), so the router keeps its place.
//
// history.back() lands a moment later, so a layer opened in the same tap that
// closed another (the Menu, then search) adds its entry only once that step
// back has landed; otherwise the step back would take the new entry off.

export type Layer = { close: () => void; leave: () => boolean };

let settling = false;
const waiting: (() => void)[] = [];
const whenSettled = (fn: () => void) => { if (settling) waiting.push(fn); else fn(); };
function stepBack() {
  settling = true;
  const landed = () => {
    window.removeEventListener("popstate", landed);
    settling = false;
    waiting.splice(0).forEach(fn => fn());
  };
  window.addEventListener("popstate", landed);
  history.back();
}

let seq = 0;

export function pushLayer(onBack: () => void): Layer {
  if (typeof window === "undefined" || !window.matchMedia("(pointer: coarse)").matches) return { close() {}, leave: () => false };
  const key = `vv-layer-${++seq}`;
  let done = false;
  let pushed = false;
  const onPop = () => { if (done) return; finish(); onBack(); };
  const finish = () => { done = true; window.removeEventListener("popstate", onPop); };
  whenSettled(() => {
    if (done) return;
    history.pushState({ vvLayer: key }, "");
    pushed = true;
    window.addEventListener("popstate", onPop);
  });
  const current = () => pushed && history.state?.vvLayer === key;
  return {
    close() { if (done) return; const top = current(); finish(); if (top) stepBack(); },
    leave() { if (done) return false; const top = current(); finish(); return top; },
  };
}

/** For a layer whose open state is React state. Returns `leave`. */
export function useLayer(open: boolean, close: () => void): () => boolean {
  const closeRef = useRef(close);
  useEffect(() => { closeRef.current = close; });
  const layer = useRef<Layer | null>(null);
  useEffect(() => {
    if (!open) return;
    const l = pushLayer(() => closeRef.current());
    layer.current = l;
    return () => { l.close(); layer.current = null; };
  }, [open]);
  return () => layer.current?.leave() ?? false;
}
