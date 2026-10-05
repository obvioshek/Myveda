"use client";

import { useEffect, useState } from "react";
import { SECTIONS } from "@/content/landing";
import { goTo } from "./device";

// A column of Devanagari numerals beside the page (wide screens only). The
// current section is filled, the ones already passed are tinted.
export default function SectionRail() {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      let a = -1;
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) a = i;
      });
      setActive(a);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav className="rail" aria-label="Page sections">
      {SECTIONS.map((s, i) => (
        <button
          key={s.id}
          type="button"
          lang="sa"
          className={i === active ? "cur" : i < active ? "past" : undefined}
          aria-current={i === active ? "true" : undefined}
          aria-label={s.label}
          title={s.label}
          onClick={() => goTo(s.id)}
        >
          {s.num}
        </button>
      ))}
    </nav>
  );
}
