"use client";

import { searchAreas } from "./device";

// A link that scrolls to the area search and fills it with a term.
export default function SearchLink({ term, className, children }: { term: string; className?: string; children: React.ReactNode }) {
  return <a href="#explore" className={className} onClick={() => searchAreas(term)}>{children}</a>;
}
