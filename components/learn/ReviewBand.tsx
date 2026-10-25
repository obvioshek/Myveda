"use client";

import Link from "next/link";
import Arrow from "@/components/landing/Arrow";
import { dueIds, useReview } from "./review";

// Shown only when the reader has questions due for review on this device: a
// quiet band, like Continue, with a way to the review.
export default function ReviewBand() {
  const n = dueIds(useReview()).length;
  if (!n) return null;
  return (
    <div className="band-continue">
      <div className="wrap band-in">
        <i className="sq" aria-hidden="true" />
        <span className="label">Due for review today</span>
        <b>{n} {n === 1 ? "question" : "questions"} you missed before</b>
        <Link className="resume" href="/learn/practice#review">Review<Arrow /></Link>
      </div>
    </div>
  );
}
