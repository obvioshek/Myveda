"use client";

import { useEffect } from "react";
import { useDevice, writeDevice } from "@/components/landing/device";
import { FOCUS_KEY, TEXT_KEY } from "./reading";
const SIZES = [{ v: "", label: "Standard text size" }, { v: "m", label: "Larger text" }, { v: "l", label: "Largest text" }];

// Reading settings for chapter pages: three text sizes, and a focus mode that
// hides everything but the text. Both are kept on this device and applied as
// attributes on <html>, which the stylesheet reads; READING_SCRIPT in reading.ts
// applies them before first paint.
export default function ReadingSettings() {
  const size = useDevice(TEXT_KEY);
  const focus = useDevice(FOCUS_KEY) === "1";

  useEffect(() => {
    const root = document.documentElement;
    if (size) root.dataset.read = size; else delete root.dataset.read;
    if (focus) root.dataset.focus = "1"; else delete root.dataset.focus;
  }, [size, focus]);

  return (
    <>
      <div className="rs" role="group" aria-label="Reading settings">
        <div className="rs-size" role="group" aria-label="Text size">
          {SIZES.map((s, i) => (
            <button key={s.v || "s"} type="button" className={`rs-a rs-a${i}`} aria-pressed={size === s.v} aria-label={s.label} title={s.label} onClick={() => writeDevice(TEXT_KEY, s.v)}>A</button>
          ))}
        </div>
        <button type="button" className="btn btn-ghost rs-focus" aria-pressed={focus} onClick={() => writeDevice(FOCUS_KEY, focus ? "" : "1")}>{focus ? "Exit focus" : "Focus"}</button>
      </div>
      {focus && <button type="button" className="rs-exit" onClick={() => writeDevice(FOCUS_KEY, "")}>Exit focus mode</button>}
    </>
  );
}

