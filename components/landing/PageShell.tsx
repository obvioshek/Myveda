import Link from "next/link";
import { CONTACT_EMAIL } from "@/content/landing";
import BrandMark from "./Brand";

// Header and footer for the landing site's standalone pages.
export default function PageShell({ children, wide = false, note = "Questions about your data:" }: { children: React.ReactNode; wide?: boolean; note?: string }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="top scrolled">
        <div className="top-in">
          <Link className="brand" href="/"><BrandMark />Veda Verse</Link>
          <nav className="top-nav" aria-label="Site">
            <Link href="/learn">Chapters</Link>
            <Link href="/#explore">Explore</Link>
          </nav>
        </div>
      </header>
      <main id="main" className={wide ? "page-wide" : "page"}>{children}</main>
      <footer className="foot">
        <div className="wrap">
          <div className="foot-base">
            <span>{note}</span>
            <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <Link href="/">Home</Link>
            <Link href="/learn">Chapters</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
