import Link from "next/link";
import { CONTACT_EMAIL } from "@/content/landing";
import { ABOUT_LINKS, SITE_MAP } from "@/content/nav";
import ChaptersMenu from "@/components/learn/ChaptersMenu";
import SiteSearch from "@/components/learn/SiteSearch";
import DueBadge from "@/components/learn/DueBadge";
import BrandMark from "./Brand";
import HeaderHide from "./HeaderHide";
import TextSize from "@/components/learn/TextSize";
import Theme from "@/components/learn/Theme";
import ReportProblem from "@/components/learn/ReportProblem";

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></svg>
);

// Header and footer for the landing site's standalone pages. The header keeps
// the four places readers go most; on narrower screens the rest move into the
// Menu, which lists every page in the same three groups as the footer.
export default function PageShell({ children, wide = false, note = "Questions about your data:" }: { children: React.ReactNode; wide?: boolean; note?: string }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="top scrolled">
        <div className="top-in">
          <Link className="brand" href="/"><BrandMark />Veda Verse</Link>
          <nav className="top-nav" aria-label="Site">
            <div className="has-menu"><ChaptersMenu variant="panel" /></div>
            <Link href="/learn/glossary" prefetch={false} className="hide-xs">Glossary</Link>
            <Link href="/learn/revision" prefetch={false} className="hide-sm">Revision</Link>
            <Link href="/learn/practice" prefetch={false} className="hide-nav">Practice<DueBadge /></Link>
            <Link href="/#community" prefetch={false} className="hide-sm">Community</Link>
          </nav>
          <SiteSearch />
          <details className="pmenu">
            <summary><MenuIcon /><span className="pmenu-l">Menu</span><DueBadge /></summary>
            <div className="pmenu-panel">
              {SITE_MAP.map(g => (
                <nav key={g.id} className="pmenu-col" aria-labelledby={`pm-${g.id}`}>
                  <span id={`pm-${g.id}`} className="label red">{g.label}</span>
                  <ul>
                    {g.links.map(l => (
                      <li key={l.href}>
                        <Link href={l.href} prefetch={false} lang={l.lang} hrefLang={l.lang} className={l.lang ? "hi-ui" : undefined}>
                          {l.label}{l.href === "/learn/practice" && <DueBadge />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </details>
        </div>
      </header>
      <HeaderHide />
      <main id="main" className={wide ? "page-wide" : "page"}>{children}</main>
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
                    <li key={l.href}><Link href={l.href} prefetch={false} lang={l.lang} hrefLang={l.lang} className={l.lang ? "hi-ui" : undefined}>{l.label}</Link></li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="foot-base">
            <span>{note} <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></span>
            <ReportProblem what="This page" label="Report a problem" />
            {ABOUT_LINKS.map(l => <Link key={l.href} href={l.href} prefetch={false}>{l.label}</Link>)}
            <span className="foot-prefs"><TextSize /><Theme /></span>
          </div>
        </div>
      </footer>
    </>
  );
}
