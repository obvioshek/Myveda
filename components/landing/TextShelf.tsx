"use client";

import { useState } from "react";
import { TEXTS } from "@/content/landing";
import Arrow from "./Arrow";
import { openConcept } from "./device";

// The ten texts as a shelf of book spines. One opens at a time; its panel gives
// the one-line description and, once a concept exists for it, where to start.
export default function TextShelf() {
  const [open, setOpen] = useState(0);
  return (
    <ul className="shelf" aria-label="The ten texts">
      {TEXTS.map((t, i) => {
        const isOpen = i === open;
        return (
          <li key={t.name} className={`spine ${i % 2 ? "sage" : "terracotta"}${isOpen ? " open" : ""}`}>
            <button type="button" className="spine-btn" aria-expanded={isOpen} onClick={() => setOpen(i)}>
              <span className="spine-name" lang="sa-Latn">{t.name}</span>
              <span className="spine-band" aria-hidden="true" /><span className="spine-band two" aria-hidden="true" /><span className="spine-dot" aria-hidden="true" />
            </button>
            <div className="spine-panel" inert={!isOpen}>
              <span className="spine-script" lang={t.script.match(/[஀-௿]/) ? "ta" : "sa"}>{t.script}</span>
              <span className="spine-title" lang="sa-Latn">{t.name}</span>
              <p>{t.desc}</p>
              {t.start && (
                <a className="spine-start" href="#s2" onClick={() => openConcept(t.start!)}>
                  Start with: {t.start}<Arrow />
                </a>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
