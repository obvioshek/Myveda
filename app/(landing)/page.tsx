import Link from "next/link";
import Header, { type Account } from "@/components/landing/Header";
import Stamp from "@/components/landing/Stamp";
import Reactions from "@/components/landing/Reactions";
import Poll from "@/components/landing/Poll";
import Tour from "@/components/landing/Tour";
import JoinForm from "@/components/landing/JoinForm";
import { currentMember, demoLoginEnabled } from "@/lib/app/session";
import { hasSupabase } from "@/lib/backend";
import { siteUrl } from "@/lib/site";
import { CIRCLES, CLAIMS, CONTACT_EMAIL, FAQ, FIRST_TEN, LABEL_EXAMPLES, ROADMAP, SWAPS } from "@/content/landing";

// Invited members sign in from here; a signed-in member goes straight back in.
async function account(): Promise<Account | null> {
  const me = await currentMember();
  if (me) return { href: me.onboardedAt ? "/home" : "/welcome", label: "Open Veda Verse" };
  return hasSupabase() || demoLoginEnabled() ? { href: "/signin", label: "Sign in" } : null;
}

const av = (c: string) => ({ "--c": c }) as React.CSSProperties;
const stage = (i: number) => ({ "--i": i }) as React.CSSProperties;

function Tick() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.8" />
    </svg>
  );
}

function SwapUi({ ui }: { ui: (typeof SWAPS)[number]["ui"] }) {
  if (ui === "reaction") return <span className="mini"><span className="chip" aria-hidden="true" style={{ pointerEvents: "none", color: "var(--accent)", borderColor: "var(--accent)", background: "var(--accent-soft)" }}>Helpful</span> Sent to Simran privately</span>;
  if (ui === "end") return <span className="mini"><b>You&apos;re all caught up.</b> New posts tomorrow.</span>;
  if (ui === "labels") return <span className="mini"><Stamp k="documented" /><Stamp k="told" /></span>;
  if (ui === "share") return <span className="mini"><span>“Worth reading before the ward meeting.”</span><span className="quote">Karan Mehta · What should your city fix…</span></span>;
  return <span className="mini">✓ Devika accepted your restatement</span>;
}

export default async function LandingPage() {
  const acct = await account();
  const base = siteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${base}/#org`, name: "My Veda Verse", url: `${base}/`, email: CONTACT_EMAIL, description: "An independent team in India building a social platform for thoughtful conversation." },
      { "@type": "WebSite", "@id": `${base}/#site`, name: "My Veda Verse", url: `${base}/`, publisher: { "@id": `${base}/#org` }, inLanguage: "en-IN" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <a className="skip" href="#main">Skip to content</a>
      <Header account={acct} />

      <main id="main">
        <div className="hero">
          <div className="wrap">
            <div>
              <p className="status-line"><span className="dot" aria-hidden="true" />Early access. Opening in stages.</p>
              <h1>Social media without the scoreboard.</h1>
              <p className="lede">A place to share moments, ask real questions and talk them through. <b>Posts say what they rest on, reactions reach people privately, and your feed ends when you&apos;re caught up.</b></p>
              <JoinForm variant="inline" />
              <div className="hero-foot">
                <span>Free to join. No ads.</span>
                <a className="link" href="#try">Try the product first</a>
              </div>
            </div>

            <article className="feed stage" aria-label="Example feed. A demonstration: these people and posts are examples.">
              <header className="feed-top" style={stage(0)}><span><b>Your feed</b> · from people and topics you follow</span><span className="demo-tag">Demo</span></header>

              <div className="post" style={stage(1)}>
                <div className="post-head"><span className="av" style={av("#F0C9BF")} aria-hidden="true">SK</span><span className="who"><b>Simran Kaur</b>Food · 1 hour ago</span><Stamp k="lived" /></div>
                <p className="post-body">Made my mother&apos;s rajma for the first time, over a video call with her correcting me at every step. Two hours, one slightly burnt pan, completely worth it.</p>
                <div className="reply-prev"><div className="rp-head"><b>Siddharth</b><Stamp k="asking" /></div>Did she let you skip soaking the beans overnight, or is that non-negotiable?</div>
                <Reactions person="Simran" />
              </div>

              <div className="post" style={stage(2)}>
                <div className="post-head"><span className="av" style={av("#BFD7EA")} aria-hidden="true">RD</span><span className="who"><b>Rachel Divekar</b>Education · poll · 5 hours ago</span><Stamp k="asking" /></div>
                <p className="post-title">Should financial literacy be taught in school?</p>
                <Poll />
              </div>

              <div className="post" style={stage(3)}>
                <div className="post-head"><span className="av" style={av("#C6E2CF")} aria-hidden="true">KM</span><span className="who"><b>Karan Mehta</b>Cities · 3 hours ago</span><Stamp k="asking" /></div>
                <p className="post-title">What should your city fix before it builds anything new?</p>
                <div className="reply-prev"><div className="rp-head"><b>Parth</b><Stamp k="lived" /></div>Our ward&apos;s budget is online. Half the repairs people asked for were already approved, just stuck between departments.</div>
              </div>

              <div className="feed-end" style={stage(4)}>
                <h3><Tick />You&apos;re all caught up.</h3>
                <p>That&apos;s everything from the people and topics you follow. New posts arrive tomorrow. Nothing extra is waiting underneath.</p>
              </div>
            </article>
          </div>
        </div>

        <section className="alt" id="different" aria-labelledby="diff-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="diff-h">Built from different assumptions.</h2>
              <p>Most feeds are tuned to hold attention, so the loudest posts travel furthest. We&apos;re trying a different model: keep what people love about being online, and change the defaults that turn it into a contest.</p>
            </div>
            <ul className="swaps">
              {SWAPS.map(s => (
                <li key={s.title} className="swap">
                  <p className="was">Common default: <s>{s.was}</s></p>
                  <div><h3>{s.title}</h3><p className="how">{s.how}</p></div>
                  <div className="ui"><SwapUi ui={s.ui} /></div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="labels" aria-labelledby="labels-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="labels-h">A study, a memory and an opinion can all be true to you. They are not the same kind of true.</h2>
              <p>So every post and reply carries one of five labels, chosen when you write. Readers see it before they read a word. Stories stay welcome; nothing handed down is passed off as a finding.</p>
            </div>
            <div className="labels">
              {LABEL_EXAMPLES.map(l => (
                <div key={l.k} className="label-item"><Stamp k={l.k} lg /><p>{l.what}</p><blockquote>“{l.example}”</blockquote></div>
              ))}
            </div>
          </div>
        </section>

        <section className="alt" id="try" aria-labelledby="try-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="try-h">Try it here first.</h2>
              <p>Five things you&apos;d do on any social app, each with one small change. These are working demonstrations: nothing you type leaves this page.</p>
            </div>
            <Tour />
          </div>
        </section>

        <section id="communities" aria-labelledby="com-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="com-h">Smaller rooms for longer conversations.</h2>
              <p>Circles are small groups with named hosts and one prompt a week. Each says up front who can join and how long its notes are kept. Profiles show what you add, not how many people watch.</p>
            </div>
            <div className="two">
              <ul className="circles" aria-label="Example circles">
                {CIRCLES.map(c => (
                  <li key={c.name} className="circle">
                    <h3>{c.name}</h3><span className="fmt">{c.fmt}</span>
                    <p className="week">This week: {c.week}</p>
                    <p className="hosts">Hosted by {c.hosts}</p>
                  </li>
                ))}
              </ul>
              <article className="profile" aria-label="Example profile">
                <span className="demo-tag" style={{ float: "right" }}>Example profile</span>
                <h3>Meera Nair</h3>
                <p className="role">Teaches physics to Class 11 in Kochi. Likes slow arguments.</p>
                <h4>Ask me about</h4>
                <div className="tags"><span>Physics</span><span>Teaching</span><span>Chess</span></div>
                <h4>Curious about</h4>
                <div className="tags"><span>Cities</span><span>Books</span><span>Food</span></div>
                <h4>Pinned answer</h4>
                <p className="pinned">“Drop a phone and a flat sheet of paper together, then crumple the paper and try again. Air resistance explains itself.”</p>
                <p className="absent">Not shown here, or anywhere: follower count, like total, rank or score.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="band" id="trust" aria-labelledby="trust-h">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="trust-h">How it&apos;s run, said plainly.</h2>
              <p>What we collect, who decides when things go wrong, what the software does, and how it&apos;s meant to be paid for.</p>
            </div>
            <div className="tgrid">
              <div className="titem">
                <h3>Your data</h3>
                <p>Collect as little as practical. You choose who sees each thing you share. <Link className="link" href="/privacy">Privacy notice</Link></p>
                <div className="bbox cols">
                  <div><h4>We ask for</h4><ul><li>An email, to join the list</li><li>Members: a name, what you post, topics you follow</li></ul></div>
                  <div className="no"><h4>We don&apos;t ask for</h4><ul><li>Phone number or birth date</li><li>Your contacts</li><li>Location history</li></ul></div>
                </div>
              </div>
              <div className="titem">
                <h3>People decide, and explain.</h3>
                <p>Software can flag and summarise a report. It never removes anything on its own.</p>
                <ol className="flow">
                  <li><b>Report</b>From any member</li>
                  <li><b>Screening</b>Software gathers context</li>
                  <li><b>Review</b>People decide and explain why</li>
                  <li><b>Appeal</b>A wider panel looks again</li>
                </ol>
              </div>
              <div className="titem">
                <h3>An assistant, clearly marked.</h3>
                <p>It can summarise a long thread, explain a term or help you start a reply. It won&apos;t tell you what to believe, score people, or post for you.</p>
                <div className="bbox ai"><span className="tag">Written by software</span><br />Twenty-six replies. Most say that asking what the other person hoped for changed the conversation. Two disagree: listening can become a way to avoid deciding. No sources were cited.</div>
              </div>
              <div className="titem">
                <h3>Paid for by people who want it to exist.</h3>
                <p>Free to join and take part. The plan is to be funded by members who choose to support it, with open finances. No ads, no selling data, and no one can pay for reach. If that means staying smaller, we&apos;d rather stay smaller.</p>
                <div className="bbox"><ul><li>Free to join and take part</li><li>Member-supported, with open finances</li><li>No ads, no data sales, no paid reach</li></ul></div>
              </div>
            </div>
            <div className="claims">
              <h3>What would prove us wrong.</h3>
              <p>Good intentions aren&apos;t evidence. These are claims we&apos;ll test with people who consent, and the results that would make us change the design. Findings get published, including the ones that go against us.</p>
              <ul className="claim-list">
                {CLAIMS.map(c => <li key={c.claim}><b>{c.claim}</b><p>{c.test}</p></li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="join" aria-labelledby="join-h">
          <div className="wrap stage-grid">
            <div>
              <div className="sec-head" style={{ gridTemplateColumns: "1fr", marginBottom: 28 }}>
                <h2>Being built carefully, in the open.</h2>
                <p>The first members are using it now, by invitation. We&apos;re opening it in small groups, and we won&apos;t pretend it&apos;s finished. Joining early means helping set the tone for everyone who comes after.</p>
              </div>
              <ol className="road" aria-label="Roadmap">
                {ROADMAP.map(r => <li key={r.title} className={r.now ? "now" : undefined}><b>{r.title}</b><p>{r.body}</p></li>)}
              </ol>
              <dl className="facts">
                <dt>Built by</dt><dd>An independent team in India</dd>
                <dt>Contact</dt><dd><a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd>
              </dl>
            </div>
            <div className="join-box">
              <h2 id="join-h">Be here from the start.</h2>
              <p>One email address. You&apos;ll hear from us when your invitation is ready.</p>
              <JoinForm variant="box" />
              <ul className="promise">
                <li>You confirm from your inbox before we keep the address</li>
                <li>One launch email. No drip campaign, no tracking pixel</li>
                <li>Remove it any time; unconfirmed addresses are deleted after 30 days</li>
              </ul>
              <p className="fine" style={{ marginTop: 12 }}>
                How we handle your email: <Link href="/privacy">privacy notice</Link>.
                {acct?.label === "Sign in" && <> Already invited? <a href="/signin">Sign in</a>.</>}
              </p>
              <h3 className="f10-h">Your first ten minutes</h3>
              <ol className="first10">
                {FIRST_TEN.map(f => <li key={f.title}><b>{f.title}</b>{f.body}</li>)}
              </ol>
            </div>
          </div>
        </section>

        <section className="alt" id="faq" aria-labelledby="faq-h">
          <div className="wrap">
            <div className="sec-head" style={{ gridTemplateColumns: "1fr" }}><h2 id="faq-h">Questions people ask.</h2></div>
            <div className="faq">
              {FAQ.map(f => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  {f.etymology
                    ? <p><span lang="sa">Veda</span> comes from the Sanskrit root <i>vid</i>, to know. Verse comes from the Latin <i>versus</i>, a turning or a line. We liked the idea of knowing things one turn at a time, together.</p>
                    : <p>{f.a}</p>}
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="end" aria-labelledby="end-h">
          <div className="wrap">
            <h2 id="end-h">You&apos;ve reached the end. That&apos;s on purpose.</h2>
            <p>The feed ends the same way. When you&apos;re caught up, it says so, and the rest of your day is yours.</p>
            <div className="row"><a className="btn btn-primary" href="#join">Join the early list</a><a className="btn btn-quiet" href="#top">Back to the top</a></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="name">
            <p><span className="deva" lang="sa">वेद</span> Veda, from the Sanskrit <i>vid</i>: to know.</p>
            <p>Verse, from the Latin <i>versus</i>: a turning, a line.</p>
            <p className="line">Knowing, one turn at a time.</p>
          </div>
          <nav className="fnav" aria-label="Footer">
            <a className="link" href="#different">What&apos;s different</a>
            <a className="link" href="#trust">How it&apos;s run</a>
            <Link className="link" href="/privacy">Privacy</Link>
            <a className="link" href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
