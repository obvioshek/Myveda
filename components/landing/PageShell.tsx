import Link from "next/link";
import { CONTACT_EMAIL } from "@/content/landing";
import { ABOUT_LINKS, SITE_MAP } from "@/content/nav";
import BrandMark from "./Brand";
import BackToTop from "./BackToTop";
import SiteHeader from "./SiteHeader";
import HashLanding from "./HashLanding";
import CurrentLink from "./CurrentLink";
import Shortcuts from "./Shortcuts";
import TextSize from "@/components/learn/TextSize";
import Theme from "@/components/learn/Theme";
import ReportProblem from "@/components/learn/ReportProblem";

const YEAR = new Date().getFullYear();

// The frame for the landing site's pages: the site header, the page, and the
// footer, whose links are the Menu's three groups.
export default function PageShell({ children, wide = false, note = "Questions about your data:" }: { children: React.ReactNode; wide?: boolean; note?: string }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className={wide ? "page-wide" : "page"}>{children}</main>
      <BackToTop />
      <HashLanding />
      <footer className="foot">
        <div className="wrap">
          <div className="foot-nav">
            <div className="foot-about">
              <Link className="foot-brand" href="/"><BrandMark />Veda Verse</Link>
              <p>Management concepts in plain language, each read beside India&apos;s classical texts. Open to everyone; what you do here stays on your device.</p>
            </div>
            {SITE_MAP.map(g => (
              <nav key={g.id} className="foot-col" aria-labelledby={`ft-${g.id}`}>
                <span id={`ft-${g.id}`} className="label">{g.label}</span>
                <ul>
                  {g.links.map(l => (
                    <li key={l.href}><CurrentLink href={l.href} prefetch={false} lang={l.lang} hrefLang={l.lang} className={l.lang ? "hi-ui" : undefined}>{l.label}</CurrentLink></li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="foot-base">
            <span>{note} <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></span>
            <ReportProblem what="This page" label="Report a problem" />
            {/* Home is the brand above; it isn't offered twice. */}
            {ABOUT_LINKS.filter(l => l.href !== "/").map(l => <Link key={l.href} href={l.href} prefetch={false}>{l.label}</Link>)}
            <span>© {YEAR} Veda Verse</span>
            <Shortcuts />
            <span className="foot-prefs" id="display"><TextSize /><Theme /></span>
          </div>
        </div>
      </footer>
    </>
  );
}
