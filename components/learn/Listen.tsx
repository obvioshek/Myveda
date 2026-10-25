"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";

// Read a concept aloud with the browser's own speech, for revising on the move.
// Nothing is sent anywhere: the voice is the device's. It reads the text in
// `target` as shown, skipping what an English voice can't read well or that
// doesn't read aloud: originals in other scripts and their transliterations
// (their English rendering is read), diagrams, tables and a closed "Go deeper".
// One concept speaks at a time; starting another stops the first.

const SKIP = "svg, figure, table, script, style, button, .og, .ta, [lang]:not([lang^='en']), details:not([open]), .sr-only";
const STARTED = "vv-speak";

const noop = () => () => {};
const useCanSpeak = () => useSyncExternalStore(noop, () => "speechSynthesis" in window && typeof SpeechSynthesisUtterance === "function", () => false);

function textOf(el: HTMLElement): string {
  const copy = el.cloneNode(true) as HTMLElement;
  copy.querySelectorAll(SKIP).forEach(n => n.remove());
  // Keep block boundaries as pauses.
  copy.querySelectorAll("p, li, h3, h4, div, dt, dd, summary").forEach(n => n.append(". "));
  return (copy.textContent ?? "").replace(/\s+/g, " ").replace(/(\.\s*){2,}/g, ". ").replace(/\s+([.,;:])/g, "$1").trim();
}

// Short pieces, since some browsers stop long utterances part-way.
function sentences(text: string): string[] {
  const parts = text.match(/[^.!?]+[.!?]+["”’)]*\s*|[^.!?]+$/g) ?? [text];
  const out: string[] = [];
  for (const p of parts) {
    const t = p.trim();
    if (!t) continue;
    if (out.length && (out[out.length - 1].length + t.length) < 180) out[out.length - 1] += " " + t;
    else out.push(t);
  }
  return out;
}

function voice(): SpeechSynthesisVoice | null {
  const all = speechSynthesis.getVoices();
  return all.find(v => v.lang === "en-IN") ?? all.find(v => v.lang.replace("_", "-").startsWith("en-IN")) ?? all.find(v => v.lang.startsWith("en") && v.default) ?? all.find(v => v.lang.startsWith("en")) ?? null;
}

export default function Listen({ target, label }: { target: React.RefObject<HTMLElement | null>; label: string }) {
  const can = useCanSpeak();
  const [state, setState] = useState<"idle" | "speaking" | "paused">("idle");
  const live = useRef(false);
  const me = useId();

  // Another concept started speaking: this one has stopped.
  useEffect(() => {
    const id = me;
    const on = (e: Event) => { if ((e as CustomEvent<string>).detail !== id) { live.current = false; setState("idle"); } };
    window.addEventListener(STARTED, on);
    return () => { window.removeEventListener(STARTED, on); };
  }, [me]);

  // Closing the concept or leaving the page stops the voice, if it is this one's.
  useEffect(() => () => { if (live.current) speechSynthesis.cancel(); }, []);
  const set = (s: "idle" | "speaking" | "paused") => { live.current = s !== "idle"; setState(s); };

  if (!can) return null;

  const start = () => {
    const el = target.current;
    if (!el) return;
    speechSynthesis.cancel();
    window.dispatchEvent(new CustomEvent(STARTED, { detail: me }));
    const v = voice();
    const pieces = sentences(textOf(el));
    pieces.forEach((t, i) => {
      const u = new SpeechSynthesisUtterance(t);
      u.lang = v?.lang ?? "en-IN";
      try { if (v) u.voice = v; } catch { /* the language alone picks a voice */ }
      u.rate = 0.95;
      if (i === pieces.length - 1) { u.onend = () => set("idle"); u.onerror = () => set("idle"); }
      speechSynthesis.speak(u);
    });
    set("speaking");
  };

  return (
    <div className="ln" role="group" aria-label={`Listen to ${label}`}>
      {state === "idle" && (
        <button type="button" className="btn btn-ghost ln-b" onClick={start}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M19 5a10 10 0 0 1 0 14" /></svg>
          Listen
        </button>
      )}
      {state === "speaking" && <button type="button" className="btn btn-ghost ln-b" onClick={() => { speechSynthesis.pause(); set("paused"); }}>Pause</button>}
      {state === "paused" && <button type="button" className="btn btn-ghost ln-b" onClick={() => { speechSynthesis.resume(); set("speaking"); }}>Resume</button>}
      {state !== "idle" && <button type="button" className="btn btn-ghost ln-b" onClick={() => { speechSynthesis.cancel(); set("idle"); }}>Stop</button>}
    </div>
  );
}
