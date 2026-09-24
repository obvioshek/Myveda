import Link from "next/link";
import { CONTACT_EMAIL } from "@/content/landing";

// Header and footer for the landing site's standalone pages.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="top scrolled">
        <div className="wrap">
          <Link className="brand" href="/">
            <span className="mark" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4.4 11.9C4.4 19.3 19.6 19.3 19.6 11.9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /><circle cx="12" cy="6.3" r="2.5" fill="currentColor" /></svg>
            </span>
            My Veda Verse
          </Link>
        </div>
      </header>
      <main id="main" className="page"><div className="wrap">{children}</div></main>
      <footer>
        <div className="wrap">
          <p className="name">Questions about your data: <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          <nav className="fnav" aria-label="Footer"><Link className="link" href="/">Home</Link><Link className="link" href="/privacy">Privacy</Link></nav>
        </div>
      </footer>
    </>
  );
}
