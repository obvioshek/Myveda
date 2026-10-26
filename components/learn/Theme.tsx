"use client";

import { useEffect } from "react";
import { useDevice, writeDevice } from "@/components/landing/device";

// Light or dark, chosen by the reader and kept on this device. "System"
// follows the phone or computer's own setting. The site stays light unless
// the reader picks otherwise. THEME_SCRIPT applies the choice before the page
// paints; the stylesheet does the rest (html[data-theme="dark"] in landing.css).
export const THEME_KEY = "vv-theme";
const CHOICES = [
  { value: "", label: "Light" },
  { value: "dark", label: "Dark" },
  // "System", as phones, computers and most sites call it; the stored value
  // stays "device", so choices already made carry over.
  { value: "device", label: "System" },
] as const;

export const THEME_SCRIPT = `try{var m=localStorage.getItem("${THEME_KEY}");if(m==="dark"||(m==="device"&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.dataset.theme="dark"}catch(e){}`;

function apply(choice: string) {
  const dark = choice === "dark" || (choice === "device" && matchMedia("(prefers-color-scheme: dark)").matches);
  const html = document.documentElement;
  if (dark) html.setAttribute("data-theme", "dark");
  else html.removeAttribute("data-theme");
}

export default function Theme() {
  const raw = useDevice(THEME_KEY);
  const current = raw === "dark" || raw === "device" ? raw : "";

  // With "System", follow the setting as it changes.
  useEffect(() => {
    if (current !== "device") return;
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const on = () => apply("device");
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [current]);

  return (
    <div className="ts" role="group" aria-label="Theme">
      <span className="ts-l">Theme</span>
      {CHOICES.map(c => (
        <button key={c.value} type="button" className="ts-b ts-w" aria-pressed={current === c.value} onClick={() => { writeDevice(THEME_KEY, c.value); apply(c.value); }}>
          {c.label}
        </button>
      ))}
    </div>
  );
}
