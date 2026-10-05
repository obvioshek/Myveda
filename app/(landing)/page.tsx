import Link from "next/link";
import Header, { type Account } from "@/components/landing/Header";
import SectionRail from "@/components/landing/SectionRail";
import HeroCard from "@/components/landing/HeroCard";
import SampleConcept from "@/components/landing/SampleConcept";
import HowTaught from "@/components/landing/HowTaught";
import AreaSearch from "@/components/landing/AreaSearch";
import TextShelf from "@/components/landing/TextShelf";
import ConceptLink from "@/components/landing/ConceptLink";
import Toast from "@/components/landing/Toast";
import Arrow from "@/components/landing/Arrow";
import { currentMember, demoLoginEnabled } from "@/lib/app/session";
import { hasSupabase } from "@/lib/backend";
import { siteUrl } from "@/lib/site";
import { CONTACT_EMAIL, PRACTICE, QUESTIONS, SECTIONS } from "@/content/landing";

// Signing in is optional. A member who is already in is offered the way back
// into the product; with sign-in switched off, nothing is offered at all.
async function account(): Promise<Account | null> {
  const me = await currentMember();
  if (me) return { href: me.onboardedAt ? "/home" : "/welcome", label: "Open Veda Verse" };
  return hasSupabase() || demoLoginEnabled() ? { href: "/signin", label: "Sign in" } : null;
}

function SectionTop({ i, label }: { i: number; label: string }) {
  return (
    <div className="sec-top">
      <span className="num" lang="sa" aria-hidden="true">{SECTIONS[i].num}</span>
      <span className="eyebrow">{label}</span>
    </div>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
  );
}

export default async function LandingPage() {
  const acct = await account();
  const base = siteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${base}/#org`, name: "Veda Verse", url: `${base}/`, email: CONTACT_EMAIL, description: "An independent team in India explaining management concepts alongside India's classical thought." },
      { "@type": "WebSite", "@id": `${base}/#site`, name: "Veda Verse", url: `${base}/`, publisher: { "@id": `${base}/#org` }, inLanguage: "en-IN" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <a className="skip" href="#top">Skip to content</a>
      <SectionRail />
      <Header account={acct} />

      <main id="top">
        <section className="hero" aria-labelledby="hero-h">
          <div className="hero-copy">
            <span className="eyebrow">Management, explained, with India&apos;s classical thought</span>
            <h1 id="hero-h"><span>Learn the idea.</span><span className="em">Then see how the classics saw it.</span></h1>
            <p className="lede">Clear explanations of motivation, leadership, strategy, finance and more, each read alongside the Arthashastra, the Gita or the Thirukkural, with every verse checked against its source.</p>
            <div className="hero-cta">
              <ConceptLink concept="Delegation" className="btn btn-primary btn-lg">Start with today&apos;s idea</ConceptLink>
              <a href="#s2" className="btn btn-secondary btn-lg">Read a sample concept</a>
            </div>
            <div className="promise">
              <span>Open to everyone</span><i aria-hidden="true" />
              <span>No sign-in needed</span><i aria-hidden="true" />
              <span>English &amp; <span lang="hi" style={{ fontFamily: "var(--font-deva)" }}>हिन्दी</span></span>
            </div>
          </div>
          <div className="hero-art"><HeroCard /></div>
        </section>

        <section className="sec" id="s1" aria-labelledby="s1-h">
          <SectionTop i={0} label="Questions worth a second look" />
          <h2 id="s1-h" className="gap" style={{ maxWidth: "22ch" }}>Some questions are older than management. <span className="em">Their answers still argue with ours.</span></h2>
          <div className="qgrid">
            {QUESTIONS.map(c => (
              <article key={c.concept} className={c.tone === "sage" ? "qcard sage" : "qcard"}>
                <span className="qdot" aria-hidden="true" />
                <p className="qfact">{c.fact}</p>
                <p className="qq">{c.question}</p>
                <ConceptLink concept={c.concept} href="#s2" className="qlink">
                  <span><b>{c.concept}</b><span>{c.ref}</span></span>
                  <span className="qgo"><Arrow /></span>
                </ConceptLink>
              </article>
            ))}
          </div>
        </section>

        <section className="sec" id="s2" aria-labelledby="s2-h">
          <SectionTop i={1} label="A look inside" />
          <h2 id="s2-h">A look inside: <span className="em">Choosing the right person</span></h2>
          <p className="sub">A shortened concept page. Read it the way every page on the site is read.</p>
          <SampleConcept />
        </section>

        <section className="sec" id="s3" aria-labelledby="s3-h">
          <SectionTop i={2} label="How every concept is taught" />
          <h2 id="s3-h" className="gap" style={{ maxWidth: "24ch" }}>Five steps. <span className="em">The same every time, so you always know where you are.</span></h2>
          <HowTaught />
        </section>

        <section className="sec" id="s4" aria-labelledby="s4-h">
          <SectionTop i={3} label="Explore" />
          <h2 id="s4-h">Ten areas. <span className="em">One connected whole.</span></h2>
          <p className="sub" style={{ marginBottom: 32 }}>Start anywhere. Every area links to the others, the way real decisions do.</p>
          <AreaSearch />
        </section>

        <section className="sec" id="s5" aria-labelledby="s5-h">
          <SectionTop i={4} label="Ancient Lens" />
          <h2 id="s5-h" style={{ maxWidth: "22ch" }}>Ten texts, <span className="em">read the way one reads Aristotle or Confucius.</span></h2>
          <p className="sub">Every verse is shown with its original, a transliteration, a credited translation and an exact reference.</p>
          <TextShelf />
        </section>

        <section className="sec" id="s6" aria-labelledby="s6-h">
          <SectionTop i={5} label="Together" />
          <h2 id="s6-h" className="gap" style={{ maxWidth: "22ch" }}>You understand an idea best <span className="em">when you explain it to someone else.</span></h2>
          <div className="tgrid">
            <article className="tcard">
              <span className="ticon"><Icon><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></Icon></span>
              <h3 className="tname">Concept discussions</h3>
              <p>Ask a doubt, share an example, or explain it in your own words. The clearest explanation is pinned to the page.</p>
            </article>
            <article className="tcard">
              <span className="ticon sage"><Icon><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /></Icon></span>
              <h3 className="tname">Study circles <i lang="sa-Latn">(Saṅgha)</i></h3>
              <p>Small groups that work through one area together, on a shared schedule.</p>
            </article>
            <article className="tcard">
              <span className="ticon"><Icon><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></Icon></span>
              <h3 className="tname">Structured debates <i lang="sa-Latn">(Śāstrārtha)</i></h3>
              <p>Opposing view, reply, conclusion: the classical way to argue well.</p>
              <div className="debate" aria-hidden="true">
                <div><div className="dl"><i /><b /></div><span lang="sa-Latn">pūrvapakṣa</span></div>
                <div className="b"><div className="dl"><i /><b /></div><span lang="sa-Latn">uttarapakṣa</span></div>
                <div className="c"><div className="dl"><i /></div><span lang="sa-Latn">siddhānta</span></div>
              </div>
            </article>
          </div>
          <p className="principles">No sign-in needed to read, appreciate, comment or share. No follower counts. No endless feed. The most useful contributions rise first.</p>
        </section>

        <section className="sec" aria-labelledby="practice-h">
          <div className="practice">
            <div className="practice-copy">
              <h2 id="practice-h">Studying for an exam or a course? <span className="em">The same pages hold up when the stakes are higher.</span></h2>
              <p>Every concept covers what a postgraduate management course expects, from first principles to strategy.</p>
              <a href="#s3" className="btn btn-primary btn-lg">See how practice works</a>
            </div>
            <ul className="ticks">
              {PRACTICE.map(p => (
                <li key={p}>
                  <span><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-h">
          <figure className="motto">
            <div className="motto-rings" aria-hidden="true"><div><div><div /></div></div></div>
            <div className="motto-holes" aria-hidden="true"><i /><i /></div>
            <blockquote style={{ margin: 0 }}>
              <p className="motto-en">“Let noble thoughts come to us from every side.”</p>
            </blockquote>
            <div className="motto-mean">
              <span className="eyebrow sage">What it means</span>
              <p>Stay open to good ideas wherever they come from, old or new, near or far.</p>
            </div>
            <figcaption className="motto-sa">
              <span className="sa" lang="sa">आ नो भद्राः क्रतवो यन्तु विश्वतः</span>
              <span className="tr" lang="sa-Latn">ā no bhadrāḥ kratavo yantu viśvataḥ <small>· Ṛgveda 1.89.1</small></span>
            </figcaption>
          </figure>
          <h2 id="closing-h">Start with one idea today.</h2>
          <div className="closing-cta">
            <ConceptLink concept="Delegation" className="btn btn-primary btn-xl">Today&apos;s idea: Delegation<Arrow /></ConceptLink>
            <a href="#s6" className="btn btn-secondary btn-xl">Join a study circle</a>
          </div>
        </section>
      </main>

      <footer className="foot" id="about">
        <div className="foot-in">
          <div className="about">
            <span className="name">Veda Verse</span>
            <p>Learn management one clear idea at a time, and see each idea through India&apos;s classical thought.</p>
            <nav className="links" aria-label="Footer">
              <Link href="/privacy">Privacy</Link>
              <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
            </nav>
          </div>
          <p>Covers the full breadth of a postgraduate management curriculum, from first principles to strategy.</p>
          <p>Set in Caprasimo, Figtree and Tiro Devanagari Sanskrit.</p>
        </div>
      </footer>

      <Toast />
    </>
  );
}
