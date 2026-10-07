"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

type T = { id: string; term: string; def: string };

const WIDE = "(min-width: 1200px)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(WIDE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

// The chapter's glossary terms, each opening its definition in place. Beside the
// text on wide screens the list starts open; on narrow ones it starts folded so
// it doesn't push the concepts down. Once the reader opens or closes it, their
// choice holds.
export default function TermsList({ terms, glossary }: { terms: T[]; glossary: string }) {
  const wide = useSyncExternalStore(subscribe, () => window.matchMedia(WIDE).matches, () => false);
  const [chosen, setChosen] = useState<boolean | null>(null);
  const open = chosen ?? wide;
  return (
    <details className="terms" open={open} onToggle={e => { const now = (e.currentTarget as HTMLDetailsElement).open; if (now !== open) setChosen(now); }}>
      <summary><span className="ch-glance-k">Terms in this chapter · {terms.length}</span></summary>
      <ul>
        {terms.map(t => (
          <li key={t.id}>
            <details>
              <summary>{t.term}</summary>
              <p>{t.def} <Link href={`${glossary}#${t.id}`} prefetch={false}>In the glossary</Link></p>
            </details>
          </li>
        ))}
      </ul>
    </details>
  );
}
