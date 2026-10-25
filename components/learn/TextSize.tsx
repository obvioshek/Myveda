"use client";

import { useDevice, writeDevice } from "@/components/landing/device";

// The reader's text size, kept on this device. It sets data-text on <html>,
// and the stylesheet scales the page's main content to match (tables and
// figures included). TEXT_SIZE_SCRIPT applies a saved choice before the page
// paints, so the text doesn't jump on load.
export const TEXT_KEY = "vv-text";
const SIZES = [
  { value: "", label: "Standard" },
  { value: "large", label: "Large" },
  { value: "larger", label: "Larger" },
] as const;

export const TEXT_SIZE_SCRIPT = `try{var t=localStorage.getItem("${TEXT_KEY}");if(t==="large"||t==="larger")document.documentElement.dataset.text=t}catch(e){}`;

function apply(v: string) {
  const html = document.documentElement;
  if (v) html.setAttribute("data-text", v);
  else html.removeAttribute("data-text");
}

export default function TextSize() {
  const current = useDevice(TEXT_KEY);
  const set = (v: string) => {
    writeDevice(TEXT_KEY, v);
    apply(v);
  };
  return (
    <div className="ts" role="group" aria-label="Text size">
      <span className="ts-l">Text size</span>
      {SIZES.map((s, i) => (
        <button key={s.value} type="button" className={`ts-b ts-${i}`} aria-pressed={(current === "large" || current === "larger" ? current : "") === s.value} onClick={() => set(s.value)}>
          <span aria-hidden="true">A</span><span className="sr-only">{s.label}</span>
        </button>
      ))}
    </div>
  );
}
