"use client";

import Link from "next/link";
import { LAST_HREF_KEY, LAST_KEY, useDevice } from "@/components/landing/device";
import Arrow from "@/components/landing/Arrow";

// At the top of the Menu: the concept the reader opened last, one tap away
// from any page. Nothing shows until they have opened one.
export default function MenuContinue() {
  const name = useDevice(LAST_KEY);
  const href = useDevice(LAST_HREF_KEY);
  if (!name || !href.startsWith("/learn/")) return null;
  return (
    <Link className="pmenu-cont" href={href} prefetch={false}>
      <span className="label red">Continue</span>
      <b>{name}<Arrow /></b>
    </Link>
  );
}
