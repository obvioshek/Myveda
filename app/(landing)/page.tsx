import Link from "next/link";
import SiteHeader from "@/components/landing/SiteHeader";
import BrandMark from "@/components/landing/Brand";
import ContinueBand from "@/components/landing/ContinueBand";
import HeroTry from "@/components/landing/HeroTry";
import UnitTabs from "@/components/landing/UnitTabs";
import ClassicsAdd from "@/components/landing/ClassicsAdd";
import Toast from "@/components/landing/Toast";
import Arrow from "@/components/landing/Arrow";
import { siteUrl } from "@/lib/site";
import ThreadPreview from "@/components/landing/ThreadPreview";
import { COMMUNITY_HREF, COMMUNITY_NOTES, CONTACT_EMAIL } from "@/content/landing";
import { CHAPTERS, GLOSSARY, GLOSSARY_PATH, LEARN_PATH, START_WALK_PATH, UNITS, chapterPath, conceptIds, deva, passageHref } from "@/content/learn";
import { TEXTS, TEXTS_PATH } from "@/content/learn/texts";
import { THEMES, pairView } from "@/content/learn/readings";
import { ABOUT_LINKS, SITE_MAP } from "@/content/nav";

// A section's eyebrow: a big Devanagari numeral, then the label.
function Eyebrow({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <span className="eyebrow"><span className="numeral" lang="sa" aria-hidden="true">{num}</span>{children}</span>
  );
}

const WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const count = (n: number) => WORDS[n] ?? String(n);

export default function LandingPage() {
  const base = siteUrl();
  const concepts = CHAPTERS.reduce((a, c) => a + c.blocks.length, 0);
  const passages = CHAPTERS.reduce((a, c) => a + c.pairings.length, 0);
  const first = CHAPTERS[0];
  const languages = new Set(TEXTS.flatMap(t => (t.original ? [t.original.lang] : []))).size;
  const tabs = UNITS.map(u => ({
    id: u.id, n: u.n, title: u.title, blurb: u.blurb,
    chapters: u.chapters.map(c => ({ slug: c.slug, href: chapterPath(c.slug), n: deva(c.n), title: c.title, minutes: c.minutes, ids: conceptIds(c) })),
  }));
  const themes = THEMES.map(t => ({ label: t.label, pairs: t.pairs.map(pairView) }));
  // What search engines read about the site itself: who publishes it, what it is
  // called (including the domain and the older "My Veda Verse" name people may
  // search for), and what this page is.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization", "@id": `${base}/#org`, name: "Veda Verse", alternateName: ["My Veda Verse", "myvedaverse.in"],
        url: `${base}/`, email: CONTACT_EMAIL, logo: { "@type": "ImageObject", url: `${base}/logo.png`, width: 512, height: 512 },
        description: "An independent team in India explaining management concepts alongside India's classical thought.",
        areaServed: "IN", knowsLanguage: ["en"],
      },
      {
        "@type": "WebSite", "@id": `${base}/#site`, name: "Veda Verse", alternateName: ["My Veda Verse", "myvedaverse.in"],
        url: `${base}/`, publisher: { "@id": `${base}/#org` }, inLanguage: "en-IN",
      },
      {
        "@type": "WebPage", "@id": `${base}/#page`, url: `${base}/`, name: "Veda Verse: Learn Management with India's Classical Thought",
        isPartOf: { "@id": `${base}/#site` }, about: { "@id": `${base}/#org` }, inLanguage: "en-IN",
        description: "Management concepts explained one clear idea at a time, each read alongside India's classical texts and thinkers, from the Arthashastra and the Thirukkural to Kabir and Basavanna, shown in their own languages.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <ContinueBand />

        <section className="wrap hero" aria-labelledby="hero-h">
          <h1 id="hero-h"><span>Management is new.</span><span className="red">Its questions are not.</span></h1>
          <div className="split intro">
            <p className="lede">Each management idea in plain words, beside what India&apos;s classical thinkers said about the same problem, with the source. And a community where every answer says how the writer knows.</p>
            <div className="hero-actions">
              <div className="btn-row">
                <Link href={LEARN_PATH} className="btn btn-primary btn-lg wide">Start reading<Arrow /></Link>
                <a href="#community" className="btn btn-secondary btn-lg">See the community<Arrow dir="down" /></a>
              </div>
              <ul className="promise" aria-label="What to expect">
                <li>Free, with no account to read</li>
                <li>No likes or follower counts</li>
              </ul>
            </div>
          </div>
          <HeroTry href={passageHref("principles-of-management", 5)} />
        </section>

        <section className="wrap sec ruled" id="chapters" aria-labelledby="chapters-h">
          <div className="split end">
            <div className="sec-copy">
              <Eyebrow num="१">Read</Eyebrow>
              <h2 id="chapters-h">{CHAPTERS.length} chapters, one idea at a time.</h2>
              <p className="sub">Each concept takes a few minutes: a question first, the idea in plain words, a quick check, then the ancient lens.</p>
            </div>
            <div className="chap-cta">
              <Link href={LEARN_PATH} className="btn btn-primary btn-lg wide">Open all chapters<Arrow /></Link>
              <p className="tally">{concepts} concepts · {passages} cited passages · <Link className="link" href={GLOSSARY_PATH}>{GLOSSARY.length} glossary terms</Link></p>
            </div>
          </div>
          <UnitTabs units={tabs} />
        </section>

        <section className="wrap sec ruled" id="texts" aria-labelledby="texts-h">
          <div className="split end">
            <div className="sec-copy">
              <Eyebrow num="२">Read two ways</Eyebrow>
              <h2 id="texts-h">Old texts, read as thinkers, not scripture.</h2>
            </div>
            <p className="sub">A modern idea beside a passage that met the same problem long before, and what the passage adds. Pick a theme.</p>
          </div>
          <ClassicsAdd themes={themes} />
          <p className="ca-walk">New to reading the classics like this? <Link className="link" href={START_WALK_PATH}>Take the five-step walk</Link><span>About 15 minutes.</span></p>
          <p className="ca-walk">Quoted so far: {TEXTS.length} texts in {languages} languages. <Link className="link" href={TEXTS_PATH}>Meet the texts</Link></p>
        </section>

        <section className="talk" id="community" aria-labelledby="community-h">
          <div className="wrap talk-in">
            <div className="talk-head">
              <Eyebrow num="३">Community</Eyebrow>
              <h2 id="community-h">Ask, answer, and say how you know.</h2>
              <p className="sub">Every answer says what it rests on. No endless feed: notifications wait out the night, and the daily Edition ends.</p>
            </div>
            <ThreadPreview />
            <div className="talk-notes">
              <ol className="notes" aria-label="What the numbers in the example mark">
                {COMMUNITY_NOTES.map((s, i) => (
                  <li key={s.name}>
                    <i className="tmark" aria-hidden="true">{i + 1}</i>
                    <div><span className="note-name">{s.name}</span><span className="note-line">{s.line}</span></div>
                  </li>
                ))}
              </ol>
              <div className="talk-cta">
                <a className="btn btn-primary btn-lg wide" href={COMMUNITY_HREF}>Join the community<Arrow /></a>
                <span className="talk-fine">Reading never needs an account. Asking and answering do.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-h">
          <div className="wrap closing-in">
            <div className="motto">
              <p className="motto-sa" lang="sa">आ नो भद्राः क्रतवो यन्तु विश्वतः</p>
              <p className="motto-en">“Let noble thoughts come to us from every side.” <span className="nowrap">Ṛgveda 1.89.1</span></p>
            </div>
            <div className="closing-cta">
              <h2 id="closing-h">Read one idea. Then ask about it.</h2>
              <div className="btn-row">
                <Link href={chapterPath(first.slug)} className="btn btn-light btn-lg">Begin with Chapter 1<Arrow /></Link>
                <a href={COMMUNITY_HREF} className="btn btn-outline-light btn-lg">Join the community</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot" id="about">
        <div className="wrap foot-nav">
          <div className="foot-about">
            <span className="foot-brand"><BrandMark />Veda Verse</span>
            <p>Management ideas in plain words, read beside India&apos;s classical thought. Made by an independent team in India.</p>
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
        <div className="wrap wordmark-wrap"><span className="wordmark" aria-hidden="true">Veda Verse<span className="red">.</span></span></div>
        <div className="wrap">
          <div className="foot-base">
            <span>{CHAPTERS.length} chapters across {count(UNITS.length)} {UNITS.length === 1 ? "unit" : "units"} so far, with more added as they are written.</span>
            <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            {ABOUT_LINKS.filter(l => l.href !== "/").map(l => <Link key={l.href} href={l.href} prefetch={false}>{l.label}</Link>)}
          </div>
        </div>
      </footer>

      <Toast />
    </>
  );
}
