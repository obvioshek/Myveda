import Link from "next/link";
import { SITE_MAP } from "@/content/nav";
import ChaptersMenu from "@/components/learn/ChaptersMenu";
import SiteSearch from "@/components/learn/SiteSearch";
import DueBadge from "@/components/learn/DueBadge";
import MenuContinue from "@/components/learn/MenuContinue";
import BrandMark from "./Brand";
import HeaderHide from "./HeaderHide";
import CurrentLink from "./CurrentLink";
import TextSize from "@/components/learn/TextSize";
import Theme from "@/components/learn/Theme";

// Three lines while the Menu is closed, a cross while it is open: the button
// shows what pressing it will do.
const MenuIcon = () => (
  <svg className="pmenu-i" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path className="pmenu-open" d="M4 6h16M4 12h16M4 18h16" /><path className="pmenu-close" d="M6 6l12 12M18 6 6 18" />
  </svg>
);

// The one header, on the home page and every other page of the learning site,
// so it is learned once. It keeps the five places readers go most; on narrower
// screens the rest move into the Menu, which lists every page in the same
// three groups as the footer, starting with the concept to continue and
// ending with text size and theme, where settings are looked for.
export default function SiteHeader() {
  return (
    <>
      <header className="top scrolled">
        <div className="top-in">
          <Link className="brand" href="/"><BrandMark />Veda Verse</Link>
          <nav className="top-nav" aria-label="Site">
            <div className="has-menu"><ChaptersMenu /></div>
            <CurrentLink href="/learn/glossary" section prefetch={false} className="hide-xs">Glossary</CurrentLink>
            <CurrentLink href="/learn/practice" section prefetch={false} className="hide-nav">Practice<DueBadge /></CurrentLink>
            <CurrentLink href="/learn/revision" section prefetch={false} className="hide-sm">Revision</CurrentLink>
            <Link href="/#community" prefetch={false} className="hide-sm">Community</Link>
          </nav>
          <SiteSearch />
          <details className="pmenu">
            <summary title="Menu: every page, and text size and theme"><MenuIcon /><span className="pmenu-l">Menu</span><DueBadge /></summary>
            <div className="pmenu-panel">
              <MenuContinue />
              {SITE_MAP.map(g => (
                <nav key={g.id} className="pmenu-col" aria-labelledby={`pm-${g.id}`}>
                  <span id={`pm-${g.id}`} className="label red">{g.label}</span>
                  <ul>
                    {g.links.map(l => (
                      <li key={l.href}>
                        <CurrentLink href={l.href} prefetch={false} lang={l.lang} hrefLang={l.lang} className={l.lang ? "hi-ui" : undefined}>
                          {l.label}{l.href === "/learn/practice" && <DueBadge />}
                        </CurrentLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
              <div className="pmenu-prefs" role="group" aria-label="Display">
                <span className="label red">Display</span>
                <TextSize /><Theme />
              </div>
            </div>
            <div className="pmenu-scrim" aria-hidden="true" />
          </details>
        </div>
      </header>
      <HeaderHide />
    </>
  );
}
