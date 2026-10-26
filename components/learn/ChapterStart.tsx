"use client";

import Link from "next/link";
import Arrow from "@/components/landing/Arrow";
import { useDone } from "./progress";

// The chapter's first button, worked out from the reader's progress: the first
// concept to start with, the next one not yet done to continue with, or, once
// every concept is done, the chapter test. Before the page reads the device it
// shows the first concept, so nothing changes for a new reader.
export default function ChapterStart({ slug, items, fallback }: {
  slug: string;
  items: { id: string; name: string }[];
  /** Where to go when the chapter has no concepts (its Ancient lens). */
  fallback: { href: string; label: string };
}) {
  const done = useDone();
  if (!items.length) return <a className="btn btn-primary" href={fallback.href}>{fallback.label}<Arrow /></a>;
  const left = items.filter(it => !done.has(`${slug}#${it.id}`));
  if (!left.length) {
    return <Link className="btn btn-primary" href={`/learn/practice?chapter=${slug}`} prefetch={false}>All done: test yourself on the chapter<Arrow /></Link>;
  }
  const started = left.length < items.length;
  return (
    <a className="btn btn-primary ch-start" href={`#${left[0].id}`}>
      {started ? <span><span className="ch-start-k">Continue</span> {left[0].name}</span> : "Start with the first concept"}
      <Arrow />
    </a>
  );
}
