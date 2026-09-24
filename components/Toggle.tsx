"use client";

import React, { useState } from "react";
import { ping } from "@/lib/ping";

/* 33. SAVE AND REACT — small toggles, private by design: a save or a
   reaction never becomes a public number. `on`/`off` relabel the button
   (inside its .tl span) when it has a text label that changes. */
export default function Toggle({
  initial = false,
  icon,
  label,
  on,
  off,
  className
}: {
  initial?: boolean;
  icon: string;
  label?: string;
  on?: string;
  off?: string;
  className?: string;
}) {
  const [pressed, setPressed] = useState(initial);
  return (
    <button
      type="button"
      className={className}
      aria-pressed={pressed}
      onClick={() => { setPressed(!pressed); ping(pressed ? 1 : 2); }}
    >
      <svg aria-hidden="true"><use href={`#${icon}`}/></svg>
      {on && off ? <span className="tl">{pressed ? on : off}</span> : label}
    </button>
  );
}
