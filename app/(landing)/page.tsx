import Link from "next/link";
import Header from "@/components/landing/Header";
import BrandMark from "@/components/landing/Brand";
import ContinueBand from "@/components/landing/ContinueBand";
import HeroPair from "@/components/landing/HeroPair";
import Toast from "@/components/landing/Toast";
import ChaptersMenu from "@/components/learn/ChaptersMenu";
import { Tag } from "@/components/learn/Evidence";
import Arrow from "@/components/landing/Arrow";
import { siteUrl } from "@/lib/site";
import { COMMUNITY_HREF, CONTACT_EMAIL, QUESTIONS, STEPS, TEXTS } from "@/content/landing";
import { CHAPTERS, GLOSSARY, GLOSSARY_PATH, HOW, LEARN_PATH, REVISION_PATH, UNITS, chapterPath, deva, passageHref } from "@/content/learn";

// A section's eyebrow: a big Devanagari numeral, then the label.
function Eyebrow({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <span className="eyebrow"><span className="numeral" lang="sa" aria-hidden="true">{num}</span>{children}</span>
  );
}

const Rule = () => <div className="wrap"><div className="rule" /></div>;

export default function LandingPage() {
  const base = siteUrl();
  const concepts = CHAPTERS.reduce((a, c) => a + c.blocks.length, 0);
  const passages = CHAPTERS.reduce((a, c) => a + c.pairings.length, 0);
  const first = CHAPTERS[0];
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
            <p className="lede">Whom do you trust with the work? When is a reward fair? Why do people follow one leader and not another? A course answers with theories from the last hundred years. Here you learn those theories plainly, then read them beside the Arthaśāstra, the Gītā and the Tirukkuṟaḷ, which asked the same questions long before, and see where the two agree and where they part.</p>
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
          <HeroPair href={passageHref("principles-of-management", 5)} />
        </section>

        <Rule />
        <section className="wrap sec" id="questions" aria-labelledby="q-h">
          <Eyebrow num="१">Questions worth a second look</Eyebrow>
          <h2 id="q-h" style={{ maxWidth: "22ch" }}>Some questions are older than management. <span className="red">Their answers still argue with ours.</span></h2>
          <div className="grid g3">
            {QUESTIONS.map(c => (
              <article key={c.n} className="cell qcell">
                <b className="n">{c.n}</b>
                <p className="qfact">{c.fact}</p>
                <p className="qq">{c.question}</p>
                <Link href={passageHref(c.chapter, c.pairing)} prefetch={false} className="qlink">
                  <span className="qlink-t"><b>{c.concept}</b><span>{c.ref}</span></span>
                  <span className="qgo"><Arrow /></span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <Rule />
        <section className="wrap sec split" id="steps" aria-labelledby="steps-h">
          <div className="sec-copy">
            <Eyebrow num="२">How every concept is taught</Eyebrow>
            <h2 id="steps-h">Five steps. <span className="red">The same every time, so you always know where you are.</span></h2>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.name}>
                  <b className="n">{`0${i + 1}`}</b>
                  <div><span className="step-name">{s.name}</span><span className="step-line">{s.line}</span></div>
                </li>
              ))}
            </ol>
          </div>
          <div className="honest">
            <span className="label red">Honest about every link</span>
            <p className="honest-h">Not every parallel is a proof. Each passage says which kind it is.</p>
            <div className="honest-row"><Tag kind="documented" /><p>{HOW.documented}</p></div>
            <div className="honest-row"><Tag kind="view" /><p>{HOW.view}</p></div>
            <dl className="honest-stats">
              <div><dt>Chapters</dt><dd>{CHAPTERS.length}</dd></div>
              <div><dt>Concepts</dt><dd>{concepts}</dd></div>
              <div><dt>Cited passages</dt><dd>{passages}</dd></div>
              <div><dt>Glossary terms</dt><dd>{GLOSSARY.length}</dd></div>
            </dl>
            <Link href={chapterPath(first.slug)} className="btn btn-primary btn-lg">Try the first chapter<Arrow /></Link>
          </div>
        </section>

        <Rule />
        <section className="wrap sec" id="chapters" aria-labelledby="chapters-h">
          <div className="split end">
            <div className="sec-copy">
              <Eyebrow num="३">Read</Eyebrow>
              <h2 id="chapters-h">{CHAPTERS.length} chapters. <span className="red">Each idea, then its ancient lens.</span></h2>
            </div>
            <div className="chap-cta">
              <p className="sub">From Fayol and Taylor to elasticity and market structures, from motivation and leadership to job evaluation and strategic HRM. Start with any chapter; each stands on its own, and your progress stays on your device.</p>
              <div className="btn-row">
                <Link href={LEARN_PATH} className="btn btn-primary btn-lg wide">Open all chapters<Arrow /></Link>
                <Link href={GLOSSARY_PATH} className="btn btn-secondary btn-lg">Browse the glossary</Link>
              </div>
            </div>
          </div>
          {UNITS.map(u => (
            <div key={u.id} className="chap-unit">
              {UNITS.length > 1 && <h3 className="chap-unit-h"><span className="label red">Unit {u.n}</span>{u.title}</h3>}
              <ol className="grid g3 chap">
                {u.chapters.map(c => (
                  <li key={c.slug} className="cell chap-c">
                    <Link href={chapterPath(c.slug)} prefetch={false}>
                      <span className="chap-n" lang="sa" aria-hidden="true">{deva(c.n)}</span>
                      <span className="chap-t">{c.title}</span>
                      <Arrow />
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>

        <Rule />
        <section className="wrap sec" id="texts" aria-labelledby="texts-h">
          <div className="split end">
            <div className="sec-copy">
              <Eyebrow num="४">Ancient Lens</Eyebrow>
              <h2 id="texts-h">Old texts, <span className="red">read the way one reads Aristotle or Confucius.</span></h2>
            </div>
            <p className="sub">Not as scripture to obey, and not as proof that the ancients knew it all, but as serious thinkers on the same problems. Every passage carries its reference, so you can check it against your own edition.</p>
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
        </section>

        <Rule />
        <section className="wrap sec" aria-label="Community and practice">
          <div className="grid g2">
            <div className="cell big" id="together">
              <Eyebrow num="५">Community</Eyebrow>
              <h2 className="h-sm">An idea becomes yours <span className="red">when you explain it to someone else.</span></h2>
              <p>Read with a study circle (<i lang="sa-Latn">Saṅgha</i>), ask about a concept you are stuck on, and share notes with people reading the same chapter. No follower counts. No endless feed.</p>
              <a className="more" href={COMMUNITY_HREF}>Open the community<Arrow /></a>
            </div>
            <div className="cell big" id="practice">
              <Eyebrow num="६">Practice</Eyebrow>
              <h2 className="h-sm">Studying for an exam or a course? <span className="red">The same pages hold up when the stakes are higher.</span></h2>
              <p>Each concept covers the terms, formulas and examples a postgraduate management course expects, and every lesson ends in a one-page summary. The revision sheets gather them all, ready to print.</p>
              <Link className="more" href={REVISION_PATH}>Open the revision sheets<Arrow /></Link>
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
            <a href="#practice">For exam students</a>
            <a href={COMMUNITY_HREF}>Community</a>
          </nav>
          <nav className="foot-col" aria-label="About">
            <span className="label">About</span>
            <a href="#texts">The texts</a>
            <a href="#steps">How concepts are taught</a>
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
            <span>Covers the full breadth of a postgraduate management curriculum, from first principles to strategy.</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span className="end">Set in Archivo and Tiro Devanagari Sanskrit.</span>
          </div>
        </div>
      </footer>

      <Toast />
    </>
  );
}
