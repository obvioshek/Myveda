import Link from "next/link";
import Header from "@/components/landing/Header";
import BrandMark from "@/components/landing/Brand";
import ContinueBand from "@/components/landing/ContinueBand";
import HeroTry from "@/components/landing/HeroTry";
import QuestionCards from "@/components/landing/QuestionCards";
import UnitTabs from "@/components/landing/UnitTabs";
import LabelGame from "@/components/landing/LabelGame";
import Toast from "@/components/landing/Toast";
import ChaptersMenu from "@/components/learn/ChaptersMenu";
import Arrow from "@/components/landing/Arrow";
import { siteUrl } from "@/lib/site";
import ThreadPreview from "@/components/landing/ThreadPreview";
import { COMMUNITY_HREF, COMMUNITY_NOTES, CONTACT_EMAIL, QUESTIONS, TEXTS } from "@/content/landing";
import { CHAPTERS, GLOSSARY, GLOSSARY_PATH, LEARN_PATH, REVISION_PATH, UNITS, chapterBySlug, chapterPath, conceptIds, deva, passageHref } from "@/content/learn";

// A section's eyebrow: a big Devanagari numeral, then the label.
function Eyebrow({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <span className="eyebrow"><span className="numeral" lang="sa" aria-hidden="true">{num}</span>{children}</span>
  );
}

// Real passages for the "Documented, or a view?" game: chapter slug and passage
// index. Pick a mix of both kinds, from different texts.
const GAME = [
  { slug: "strategy-implementation-and-evaluation", pairing: 0 },
  { slug: "strategic-decisions-and-levels-of-strategy", pairing: 0 },
  { slug: "growth-strategies", pairing: 0 },
];

const WORDS = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const count = (n: number) => WORDS[n] ?? String(n);

export default function LandingPage() {
  const base = siteUrl();
  const concepts = CHAPTERS.reduce((a, c) => a + c.blocks.length, 0);
  const passages = CHAPTERS.reduce((a, c) => a + c.pairings.length, 0);
  const first = CHAPTERS[0];
  const cards = QUESTIONS.map(({ chapter, pairing, ...q }) => ({ ...q, href: passageHref(chapter, pairing) }));
  const tabs = UNITS.map(u => ({
    id: u.id, n: u.n, title: u.title, blurb: u.blurb,
    chapters: u.chapters.map(c => ({ slug: c.slug, href: chapterPath(c.slug), n: deva(c.n), title: c.title, minutes: c.minutes, ids: conceptIds(c) })),
  }));
  const game = GAME.flatMap(({ slug, pairing }) => {
    const p = chapterBySlug(slug)?.pairings[pairing];
    return p ? [{ id: `${slug}-${pairing}`, modern: p.modern, classic: p.classic ?? "", kind: p.kind, quote: p.quote ?? "", why: p.text[0], href: passageHref(slug, pairing) }] : [];
  });
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
        description: "Management concepts explained one clear idea at a time, each read alongside the Arthashastra, the Bhagavad Gita or the Thirukkural.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <a className="skip" href="#top">Skip to content</a>
      <Header chaptersPanel={<ChaptersMenu variant="panel" />} chaptersList={<ChaptersMenu variant="list" />} />

      <main id="top">
        <ContinueBand />

        <section className="wrap hero" aria-labelledby="hero-h">
          <span className="eyebrow"><i className="sq" aria-hidden="true" />A place to read and question management ideas</span>
          <h1 id="hero-h"><span>Management is new.</span><span className="red">Its questions are not.</span></h1>
          <div className="split intro">
            <p className="lede">Each management idea in plain words, set beside what the Arthaśāstra, the Gītā or the Tirukkuṟaḷ said about the same problem. Then a community where every answer says how the writer knows.</p>
            <div className="hero-actions">
              <div className="btn-row">
                <Link href={LEARN_PATH} className="btn btn-primary btn-lg wide">Start reading<Arrow /></Link>
                <a href="#community" className="btn btn-secondary btn-lg">See the community<Arrow dir="down" /></a>
              </div>
              <ul className="promise" aria-label="What to expect">
                <li>Free to read</li>
                <li>No account to read</li>
                <li>No likes, no follower counts</li>
              </ul>
            </div>
          </div>
          <HeroTry href={passageHref("principles-of-management", 5)} />
        </section>

        <section className="wrap sec ruled" id="questions" aria-labelledby="q-h">
          <div className="split end">
            <div className="sec-copy">
              <Eyebrow num="१">Questions</Eyebrow>
              <h2 id="q-h">Some questions are older than management.</h2>
            </div>
            <p className="sub">Think about each one first. Then open what a classical text said, with its reference.</p>
          </div>
          <QuestionCards cards={cards} />
        </section>

        <section className="wrap sec ruled" id="chapters" aria-labelledby="chapters-h">
          <div className="split end">
            <div className="sec-copy">
              <Eyebrow num="२">Read</Eyebrow>
              <h2 id="chapters-h">{CHAPTERS.length} chapters, one idea at a time.</h2>
              <p className="sub">A question to answer first, the idea plainly, a quick check, then the ancient lens. Most concepts take a few minutes.</p>
            </div>
            <div className="chap-cta">
              <div className="btn-row">
                <Link href={LEARN_PATH} className="btn btn-primary btn-lg wide">Open all chapters<Arrow /></Link>
                <Link href={GLOSSARY_PATH} className="btn btn-secondary btn-lg">Glossary</Link>
              </div>
              <p className="tally">{concepts} concepts · {passages} cited passages · {GLOSSARY.length} glossary terms</p>
            </div>
          </div>
          <UnitTabs units={tabs} />
        </section>

        <section className="wrap sec ruled" id="texts" aria-labelledby="texts-h">
          <div className="split end">
            <div className="sec-copy">
              <Eyebrow num="३">Trust</Eyebrow>
              <h2 id="texts-h">Old texts, read as thinkers, not scripture.</h2>
            </div>
            <p className="sub">Every passage is marked. <b>Documented</b>: the text says it, and the link is a fair reading. <b>My view</b>: an interpretive parallel, offered to think with. Try telling them apart.</p>
          </div>
          <LabelGame items={game} />
          <div className="names-row">
            <span className="label">Quoted so far</span>
            <ul className="names" aria-label="The texts the chapters quote">
              {TEXTS.map(t => <li key={t} lang="sa-Latn">{t}</li>)}
            </ul>
          </div>
        </section>

        <section className="talk" id="community" aria-labelledby="community-h">
          <div className="wrap talk-in">
            <div className="talk-head">
              <Eyebrow num="४">Community</Eyebrow>
              <h2 id="community-h">Ask, answer, and say how you know.</h2>
              <p className="sub">The rule the chapters keep, applied to conversation. And no feed to keep up with: notifications wait out the night, from 10 pm to 8 am, and the daily Edition ends.</p>
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
        <div className="wrap foot-grid">
          <div className="foot-about">
            <span className="foot-brand"><BrandMark />Veda Verse</span>
            <p>Management one clear idea at a time, read beside India&apos;s classical thought, and a community where every answer says how the writer knows. Made by an independent team in India.</p>
          </div>
          <nav className="foot-col" aria-label="Read">
            <span className="label">Read</span>
            <Link href={LEARN_PATH}>All chapters</Link>
            <Link href={GLOSSARY_PATH}>Glossary</Link>
            <Link href={REVISION_PATH}>Revision sheets</Link>
          </nav>
          <nav className="foot-col" aria-label="Community">
            <span className="label">Community</span>
            <a href="#community">How it works</a>
            <a href={COMMUNITY_HREF}>Join or sign in</a>
          </nav>
          <nav className="foot-col" aria-label="Contact">
            <span className="label">Contact</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <Link href="/privacy">Privacy</Link>
          </nav>
        </div>
        <div className="wrap wordmark-wrap"><span className="wordmark" aria-hidden="true">Veda Verse<span className="red">.</span></span></div>
        <div className="wrap">
          <div className="foot-base">
            <span>{CHAPTERS.length} chapters across {count(UNITS.length)} {UNITS.length === 1 ? "unit" : "units"} so far, with more added as they are written.</span>
            <span className="end">Set in Archivo and Tiro Devanagari Sanskrit.</span>
          </div>
        </div>
      </footer>

      <Toast />
    </>
  );
}
