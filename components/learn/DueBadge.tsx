"use client";

import { dueIds, useReview } from "./review";

// How many questions are due for review today, beside the Practice link, so
// spaced review doesn't depend on remembering to visit. Nothing shows when
// none are due, or before the page has read the device's list.
export default function DueBadge() {
  const n = dueIds(useReview()).length;
  if (!n) return null;
  return (
    <span className="due-n">
      <span aria-hidden="true">{n > 99 ? "99+" : n}</span>
      <span className="sr-only">, {n} due for review</span>
    </span>
  );
}
