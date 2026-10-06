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
import { COMMUNITY_HREF, COMMUNITY_POINTS, CONTACT_EMAIL, QUESTIONS, TEXTS } from "@/content/landing";
import { CHAPTERS, GLOSSARY, GLOSSARY_PATH, LEARN_PATH, REVISION_PATH, UNITS, chapterBySlug, chapterPath, conceptIds, deva, passageHref } from "@/content/learn";

// A section's eyebrow: a big Devanagari numeral, then the label.
function Eyebrow({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <span className="eyebrow"><span className="numeral" lang="sa" aria-hidden="true">{num}</span>{children}</span>
  );
}

const Rule = () => <div className="wrap"><div className="rule" /></div>;

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
          <span className="eyebrow"><i className="sq" aria-hidden="true" />Management, read alongside India&apos;s classical thought</span>
          <h1 id="hero-h"><span>Management is new.</span><span className="red">Its questions are not.</span></h1>
          <div className="split intro">
            <p className="lede">Each management idea, plainly. Then the Arthaśāstra, the Gītā or the Tirukkuṟaḷ on the same question, and where the two part ways.</p>
            <div className="hero-actions">
              <div className="btn-row">
                <Link href={LEARN_PATH} className="btn btn-primary btn-lg wide">Start reading<Arrow /></Link>
                <a href={COMMUNITY_HREF} className="btn btn-secondary btn-lg">Join the community</a>
              </div>
              <div className="promise">
                <span>Free to read</span><i aria-hidden="true" />
                <span>No sign-in needed</span><i aria-hidden="true" />
                <span>Every passage referenced</span>
              </div>
            </div>
          </div>
          <HeroTry href={passageHref("principles-of-management", 5)} />
        </section>

        <Rule />
        <section className="wrap sec" id="questions" aria-labelledby="q-h">
          <Eyebrow num="१">Questions worth a second look</Eyebrow>
          <h2 id="q-h" style={{ maxWidth: "22ch" }}>Some questions are older than management. <span className="red">Their answers still argue with ours.</span></h2>
          <QuestionCards cards={cards} />
        </section>

        <Rule />
        <section className="wrap sec" id="chapters" aria-labelledby="chapters-h">
          <div className="split end">
            <div className="sec-copy">
              <Eyebrow num="२">Read</Eyebrow>
              <h2 id="chapters-h">{CHAPTERS.length} chapters. <span className="red">Each idea, then its ancient lens.</span></h2>
            </div>
            <div className="chap-cta">
              <div className="btn-row">
                <Link href={LEARN_PATH} className="btn btn-primary btn-lg wide">Open all chapters<Arrow /></Link>
                <Link href={GLOSSARY_PATH} className="btn btn-secondary btn-lg">Browse the glossary</Link>
              </div>
            </div>
          </div>
          <dl className="honest-stats site-stats">
            <div><dt>Chapters</dt><dd>{CHAPTERS.length}</dd></div>
            <div><dt>Concepts</dt><dd>{concepts}</dd></div>
            <div><dt>Cited passages</dt><dd>{passages}</dd></div>
            <div><dt>Glossary terms</dt><dd>{GLOSSARY.length}</dd></div>
          </dl>
          <UnitTabs units={tabs} />
        </section>

        <Rule />
        <section className="wrap sec" id="texts" aria-labelledby="texts-h">
          <div className="split end">
            <div className="sec-copy">
              <Eyebrow num="३">Ancient Lens</Eyebrow>
              <h2 id="texts-h">Old texts, <span className="red">read the way one reads Aristotle or Confucius.</span></h2>
            </div>
            <p className="sub">Not scripture to obey, not proof that the ancients knew it all: serious thinkers on the same problems, each passage referenced.</p>
          </div>
          <figure className="verse">
            <div className="verse-red">
              <p className="verse-ta" lang="ta">இதனை இதனால் இவன்முடிக்கும் என்றாய்ந்து<br />அதனை அவன்கண் விடல்.</p>
              <p className="verse-en">“Judge that this person can do this task by these means, then leave the task to them.”</p>
            </div>
            <figcaption className="verse-cap">
              <div><span className="label">Transliteration</span><span className="verse-tr" lang="ta-Latn">itaṉai itaṉāl ivaṉ muṭikkum eṉṟu āyntu<br />ataṉai avaṉkaṇ viṭal</span></div>
              <div className="cap-row"><span className="label">What it means</span><span>Before you hand over work, weigh the person, the task and the means together. Once you have, trust them with it. Job analysis and delegation, in two lines.</span></div>
              <div className="cap-row"><span className="label">Reference</span><b>Tirukkuṟaḷ 517</b><Link className="more" href={passageHref("human-resource-management", 0)} prefetch={false}>Read it in its chapter<Arrow /></Link></div>
            </figcaption>
          </figure>
          <ul className="names" aria-label="The texts the chapters quote">
            {TEXTS.map(t => <li key={t} lang="sa-Latn">{t}</li>)}
          </ul>
          <LabelGame items={game} />
        </section>

        <Rule />
        <section className="wrap sec split" id="together" aria-labelledby="together-h">
          <div className="sec-copy">
            <Eyebrow num="४">Community</Eyebrow>
            <h2 id="together-h">An idea becomes yours <span className="red">when you explain it to someone else.</span></h2>
            <p className="sub">Reading needs no account. Asking and answering does.</p>
            <a className="btn btn-secondary btn-lg" href={COMMUNITY_HREF}>Open the community<Arrow /></a>
          </div>
          <ol className="steps together">
            {COMMUNITY_POINTS.map((s, i) => (
              <li key={s.name}>
                <b className="n">{`0${i + 1}`}</b>
                <div><span className="step-name">{s.name}</span><span className="step-line">{s.line}</span></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="closing" aria-labelledby="closing-h">
          <div className="wrap closing-in">
            <div className="motto">
              <p className="motto-sa" lang="sa">आ नो भद्राः क्रतवो यन्तु विश्वतः</p>
              <p className="motto-en">“Let noble thoughts come to us from every side.” <span className="nowrap">Ṛgveda 1.89.1</span></p>
            </div>
            <div className="closing-cta">
              <h2 id="closing-h">Start with one idea today.</h2>
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
            <p>Management one clear idea at a time, each read beside India&apos;s classical thought, with every passage referenced.</p>
          </div>
          <nav className="foot-col" aria-label="Learn">
            <span className="label">Learn</span>
            <Link href={LEARN_PATH}>All chapters</Link>
            <Link href={GLOSSARY_PATH}>Glossary</Link>
            <Link href={REVISION_PATH}>Revision sheets</Link>
            <a href={COMMUNITY_HREF}>Community</a>
          </nav>
          <nav className="foot-col" aria-label="About">
            <span className="label">About</span>
            <a href="#texts">The texts</a>
            <a href="#questions">Questions worth a second look</a>
          </nav>
          <nav className="foot-col" aria-label="Contact">
            <span className="label">Contact</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
            <Link href="/privacy">Privacy</Link>
          </nav>
        </div>
        <div className="wrap wordmark-wrap"><span className="wordmark" aria-hidden="true">Veda Verse<span className="red">.</span></span></div>
        <div className="wrap">
          <div className="foot-base">
            <span>{CHAPTERS.length} chapters across {count(UNITS.length)} {UNITS.length === 1 ? "unit" : "units"} so far, with more added as they are written.</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span className="end">Set in Archivo and Tiro Devanagari Sanskrit.</span>
          </div>
        </div>
      </footer>

      <Toast />
    </>
  );
}
