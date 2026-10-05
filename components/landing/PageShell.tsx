import Link from "next/link";
import { CONTACT_EMAIL } from "@/content/landing";
import BrandMark from "./Brand";

// Header and footer for the landing site's standalone pages.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="top scrolled">
        <div className="top-in">
          <Link className="brand" href="/"><BrandMark />Veda Verse</Link>
        </div>
      </header>
      <main id="main" className="page">{children}</main>
      <footer className="foot">
        <div className="foot-in">
          <div className="about">
            <p>Questions about your data: <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
            <nav className="links" aria-label="Footer"><Link href="/">Home</Link><Link href="/privacy">Privacy</Link></nav>
          </div>
        </div>
      </footer>
    </>
  );
}
