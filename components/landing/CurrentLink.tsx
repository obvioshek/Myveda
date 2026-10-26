"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// A site link that knows when it leads to the page being read
// (aria-current="page") or, with `section`, to the part of the site the page
// is in ("true"). The header, the Menu and the footer mark it, so the reader
// can see where they are.
export default function CurrentLink({ href, section = false, ...rest }: React.ComponentProps<typeof Link> & { href: string; section?: boolean }) {
  const path = usePathname();
  const here = path === href ? "page" : section && path.startsWith(`${href}/`) ? "true" : undefined;
  return <Link href={href} aria-current={here} {...rest} />;
}
