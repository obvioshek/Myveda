import Link from "next/link";
import Header from "@/components/landing/Header";
import AccountLink from "@/components/landing/AccountLink";
import BrandMark from "@/components/landing/Brand";
import ContinueBand from "@/components/landing/ContinueBand";
import HeroPair from "@/components/landing/HeroPair";
import InsideBox from "@/components/landing/InsideBox";
import FullConcept from "@/components/landing/FullConcept";
import AreaSearch from "@/components/landing/AreaSearch";
import ConceptLink from "@/components/landing/ConceptLink";
import SearchLink from "@/components/landing/SearchLink";
import Toast from "@/components/landing/Toast";
import ChaptersMenu from "@/components/learn/ChaptersMenu";
import Arrow from "@/components/landing/Arrow";
import { siteUrl } from "@/lib/site";
import { CONTACT_EMAIL, QUESTIONS, STEPS, TEXTS } from "@/content/landing";
import { CHAPTERS, UNITS, chapterPath, deva } from "@/content/learn";

// A section's eyebrow: a big Devanagari numeral, then the label.
function Eyebrow({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <span className="eyebrow"><span className="numeral" lang="sa" aria-hidden="true">{num}</span>{children}</span>
  );
}

const Rule = () => <div className="wrap"><div className="rule" /></div>;

export default function LandingPage() {
  const base = siteUrl();
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
          <span className="eyebrow"><i className="sq" aria-hidden="true" />Management, explained, with India&apos;s classical thought</span>
          <h1 id="hero-h"><span>Learn the idea.</span><span className="red">Then see how the classics saw it.</span></h1>
          <div className="split intro">
            <p className="lede">Clear explanations of motivation, leadership, strategy, finance and more, each read alongside the Arthashastra, the Gita or the Thirukkural, with every verse checked against its source.</p>
            <div className="hero-actions">
              <div className="btn-row">
                <ConceptLink concept="Selection" href="#concept" className="btn btn-primary btn-lg wide">Start with today&apos;s idea<Arrow /></ConceptLink>
                <a href="#explore" className="btn btn-secondary btn-lg">Explore ten areas</a>
              </div>
              <div className="promise">
                <span>Open to everyone</span><i aria-hidden="true" />
                <span>No sign-in needed</span><i aria-hidden="true" />
                <span>English &amp; <span lang="hi" style={{ fontFamily: "var(--font-deva)" }}>हिन्दी</span></span>
              </div>
            </div>
          </div>
          <HeroPair />
        </section>

        <Rule />
        <section className="wrap sec" id="questions" aria-labelledby="q-h">
          <Eyebrow num="१">Questions worth a second look</Eyebrow>
          <h2 id="q-h" style={{ maxWidth: "22ch" }}>Some questions are older than management. <span className="red">Their answers still argue with ours.</span></h2>
          <div className="grid g3">
            {QUESTIONS.map(c => {
              const body = (
                <>
                  <span className="qlink-t"><b>{c.concept}</b><span>{c.ref}</span></span>
                  <span className="qgo"><Arrow /></span>
                </>
              );
              return (
                <article key={c.n} className="cell qcell">
                  <b className="n">{c.n}</b>
                  <p className="qfact">{c.fact}</p>
                  <p className="qq">{c.question}</p>
                  {c.search
                    ? <SearchLink term={c.search} className="qlink">{body}</SearchLink>
                    : <ConceptLink concept={c.concept} href="#concept" className="qlink">{body}</ConceptLink>}
                </article>
              );
            })}
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
          <InsideBox />
        </section>

        <FullConcept />

        <Rule />
        <section className="wrap sec" id="explore" aria-labelledby="areas-h">
          <AreaSearch>
            <Eyebrow num="३">Explore</Eyebrow>
            <h2 id="areas-h">Ten areas. <span className="red">One connected whole.</span></h2>
            <p className="sub">Start anywhere. Every area links to the others, the way real decisions do.</p>
          </AreaSearch>
        </section>

        <Rule />
        <section className="wrap sec" id="chapters" aria-labelledby="chapters-h">
          <div className="split end">
            <div className="sec-copy">
              <Eyebrow num="४">Read</Eyebrow>
              <h2 id="chapters-h">{CHAPTERS.length} chapters. <span className="red">Each one ends with the classics.</span></h2>
            </div>
            <div className="chap-cta">
              <p className="sub">Management and managerial economics, organisational behaviour and HRM: from Fayol and Taylor to elasticity, motivation, leadership and job evaluation. Every concept opens in place: the idea, a quick check, the classical passage beside it, and a one-page summary.</p>
              <div className="btn-row">
                <Link href="/learn" className="btn btn-primary btn-lg wide">Open all chapters<Arrow /></Link>
                <Link href="/learn/glossary" className="btn btn-secondary btn-lg">Browse the glossary</Link>
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
              <Eyebrow num="५">Ancient Lens</Eyebrow>
              <h2 id="texts-h">Ten texts, <span className="red">read the way one reads Aristotle or Confucius.</span></h2>
            </div>
            <p className="sub">Every verse is shown with its original, a transliteration, a credited translation and an exact reference.</p>
          </div>
          <figure className="verse">
            <div className="verse-red">
              <p className="verse-sa" lang="sa">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।<br />मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥</p>
              <p className="verse-en">“Your right is to the action alone, never to its fruits.”</p>
            </div>
            <figcaption className="verse-cap">
              <div><span className="label">Transliteration</span><span className="verse-tr" lang="sa-Latn">karmaṇy evādhikāras te mā phaleṣu kadācana<br />mā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi</span></div>
              <div className="cap-row"><span className="label">What it means</span><span>Put your effort into the work itself. The outcome depends on more than you, so don’t make it the reason you act, and don’t let it become a reason to stop acting.</span></div>
              <div className="cap-row"><span className="label">Reference</span><b>Bhagavad Gītā 2.47</b></div>
            </figcaption>
          </figure>
          <ul className="names" aria-label="The ten texts">
            {TEXTS.map(t => <li key={t} lang="sa-Latn">{t}</li>)}
          </ul>
        </section>

        <Rule />
        <section className="wrap sec" aria-label="Community and practice">
          <div className="grid g2">
            <div className="cell big" id="together">
              <Eyebrow num="६">Together</Eyebrow>
              <h2 className="h-sm">You understand an idea best <span className="red">when you explain it to someone else.</span></h2>
              <p>Concept discussions, study circles (<i lang="sa-Latn">Saṅgha</i>) and structured debates (<i lang="sa-Latn">Śāstrārtha</i>). No sign-in needed to read, appreciate, comment or share. No follower counts. No endless feed.</p>
            </div>
            <div className="cell big" id="practice">
              <Eyebrow num="७">Practice</Eyebrow>
              <h2 className="h-sm">Studying for an exam or a course? <span className="red">The same pages hold up when the stakes are higher.</span></h2>
              <p>Every concept covers what a postgraduate management course expects, from first principles to strategy.</p>
              <Link className="more" href="/learn">Read the chapters<Arrow /></Link>
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
                <ConceptLink concept="Selection" href="#concept" className="btn btn-light btn-lg">Today&apos;s idea: Selection<Arrow /></ConceptLink>
                <a href="#together" className="btn btn-outline-light btn-lg">Join a study circle</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot" id="about">
        <div className="wrap foot-grid">
          <div className="foot-about">
            <span className="foot-brand"><BrandMark />Veda Verse</span>
            <p>Learn management one clear idea at a time, and see each idea through India&apos;s classical thought.</p>
          </div>
          <nav className="foot-col" aria-label="Learn">
            <span className="label">Learn</span>
            <a href="#explore">Explore ten areas</a>
            <Link href="/learn">All chapters</Link>
            <Link href="/learn/glossary">Glossary</Link>
            <a href="#inside">Sample concept</a>
            <a href="#practice">For exam students</a>
            <a href="#together">Community</a>
          </nav>
          <nav className="foot-col" aria-label="About">
            <span className="label">About</span>
            <a href="#texts">The ten texts</a>
            <a href="#steps">How concepts are taught</a>
          </nav>
          <nav className="foot-col" aria-label="Contact">
            <span className="label">Contact</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
            <AccountLink />
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
