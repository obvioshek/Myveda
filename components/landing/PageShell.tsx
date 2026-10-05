import Link from "next/link";
import { CONTACT_EMAIL } from "@/content/landing";
import ChaptersMenu from "@/components/learn/ChaptersMenu";
import SiteSearch from "@/components/learn/SiteSearch";
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
            <div className="has-menu"><Link href="/learn" prefetch={false}>Chapters</Link><ChaptersMenu variant="panel" /></div>
            <Link href="/learn/glossary" prefetch={false}>Glossary</Link>
            <Link href="/learn/revision" prefetch={false} className="hide-sm">Revision</Link>
          </nav>
          <SiteSearch />
        </div>
      </header>
      <main id="main" className={wide ? "page-wide" : "page"}>{children}</main>
      <footer className="foot">
        <div className="wrap">
          <div className="foot-base">
            <span>{note}</span>
            <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <Link href="/" prefetch={false}>Home</Link>
            <Link href="/learn" prefetch={false}>Chapters</Link>
            <Link href="/learn/glossary" prefetch={false}>Glossary</Link>
            <Link href="/learn/revision" prefetch={false}>Revision</Link>
            <Link href="/privacy" prefetch={false}>Privacy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
