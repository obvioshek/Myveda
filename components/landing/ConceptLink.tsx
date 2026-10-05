"use client";

import { openConcept } from "./device";

// A link or button that opens a concept. Concept pages are not built yet, so
// for now it saves the concept to "Continue" on this device and moves on to
// where the link points.
export default function ConceptLink({ concept, href, className, children }: { concept: string; href?: string; className?: string; children: React.ReactNode }) {
  if (href) return <a href={href} className={className} onClick={() => openConcept(concept)}>{children}</a>;
  return <button type="button" className={className} onClick={() => openConcept(concept)}>{children}</button>;
}
