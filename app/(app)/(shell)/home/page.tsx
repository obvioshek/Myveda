import Link from "next/link";
import { db } from "@/src/prisma/db";
import FeedPost from "@/components/app/FeedPost";
import OpenTo from "@/components/app/OpenTo";
import WelcomeToast from "@/components/app/WelcomeToast";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { edition, followingFeed, openQuestionsFor } from "@/lib/app/feed";
import { editionDate, now, visitPhrase } from "@/lib/app/time";

export const metadata = { title: "Home" };

export default async function HomePage({ searchParams }: { searchParams: Promise<{ tab?: string; welcome?: string }> }) {
  const me = await requireMember();
  const { tab, welcome } = await searchParams;
  const following = tab === "following";
  const v = await viewerContext(me);
  const tz = me.timezone || "Asia/Kolkata";
  const lastSeen = me.lastSeenAt;

  const [entries, openQs, myQuestions, weekCircles] = await Promise.all([
    following ? followingFeed(v) : edition(v),
    following ? Promise.resolve([]) : openQuestionsFor(v, 5),
    db.orm.public.Question.where({ askerId: me.id }).include("answers", a => a.count()).orderBy(q => q.createdAt.desc()).limit(3).all(),
    v.circles.length
      ? db.orm.public.Community.where(c => c.id.in([...v.communityIds])).orderBy(c => c.name.asc()).limit(3).all()
      : Promise.resolve([]),
  ]);
  // "since your last visit" is measured from the visit before this one
  await db.orm.public.User.where({ id: me.id }).update({ lastSeenAt: now() });

  const top = entries.filter(e => e.mine);
  const rest = entries.filter(e => !e.mine);
  // the module never repeats a question that is already in the feed
  const inFeed = new Set(entries.filter(e => e.type === "question").map(e => e.id));
  const moduleQs = openQs.filter(q => !inFeed.has(q.id));

  return (
    <div className="home-grid">
      <div className="col">
        <div className="feed-head desk-only">
          <div>
            <h1>{following ? "Following" : "Today's Edition"}</h1>
            <div className="sub">{following ? "Newest first, since your last visit" : `${editionDate(undefined, tz)} · picked for you, with a reason on each`}</div>
          </div>
          <div className="seg" role="tablist" aria-label="Feed">
            <Link role="tab" aria-selected={!following} href="/home">For you</Link>
            <Link role="tab" aria-selected={following} href="/home?tab=following">Following</Link>
          </div>
        </div>
        <div className="seg mob-only" role="tablist" aria-label="Feed" style={{ margin: "8px 0 4px" }}>
          <Link role="tab" aria-selected={!following} href="/home">For you</Link>
          <Link role="tab" aria-selected={following} href="/home?tab=following">Following</Link>
        </div>

        {[...top, ...rest].map((p, i) => (
          <div key={p.key}>
            {!following && i === top.length + 3 && moduleQs.length > 0 && <OpenQuestionsModule qs={moduleQs.slice(0, 2)} />}
            <FeedPost p={p} />
          </div>
        ))}
        {!following && rest.length <= 3 && moduleQs.length > 0 && <OpenQuestionsModule qs={moduleQs.slice(0, 2)} />}
        {entries.length === 0 && (
          <p className="muted" style={{ padding: "24px 0" }}>
            {following ? "Nothing new from the people, topics and circles you follow." : "Your Edition fills as you follow topics, people and circles."}
          </p>
        )}

        <div className="feed-end">
          <h3>{following ? "You're up to date." : "That's today's Edition."}</h3>
          <p>{following
            ? `That's everything since your last visit, ${visitPhrase(lastSeen, tz)}.`
            : "Tomorrow brings a new one. If you want more now, go deeper into a topic or answer a question."}</p>
          <div className="btns">
            {v.topicNames[0] && <Link className="btn btn-secondary" href={`/t/${encodeURIComponent(v.topicNames[0])}`}>Go deeper in {v.topicNames[0]}</Link>}
            <Link className="btn btn-secondary" href="/discover">Questions you could answer</Link>
          </div>
        </div>
      </div>

      <aside className="aside" aria-label="Your questions and circles">
        {myQuestions.length > 0 && (
          <section>
            <div className="kicker">Your questions</div>
            {myQuestions.map(q => (
              <Link key={q.id} className="row" href={`/q/${q.id}`}>
                {q.title}
                <span className="sub" style={{ marginTop: 2 }}>
                  {q.acceptedAnswerId ? "Answered" : (q.answers as number) > 0 ? "Has answers · mark the one that helped" : "Open"}
                </span>
              </Link>
            ))}
          </section>
        )}
        {weekCircles.length > 0 && (
          <section>
            <div className="kicker">This week in your circles</div>
            {weekCircles.map(c => (
              <Link key={c.id} className="row" href={`/c/${c.slug}`}>
                <b>{c.name}</b><span className="sub" style={{ fontSize: 14 }}>{c.weekPrompt}</span>
              </Link>
            ))}
          </section>
        )}
        <OpenTo value={me.openTo} />
      </aside>
      {welcome && <WelcomeToast />}
    </div>
  );
}

function OpenQuestionsModule({ qs }: { qs: { id: string; title: string; meta: string }[] }) {
  return (
    <div className="module">
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div style={{ fontWeight: 700, fontSize: 15 }}>Open questions you could help with</div>
        <div className="muted" style={{ fontSize: 12 }}>Matches your “Ask me about”</div>
      </div>
      {qs.map(q => (
        <div key={q.id} className="module-row">
          <div style={{ flex: 1, minWidth: 0 }}><div className="t">{q.title}</div><div className="sub">{q.meta}</div></div>
          <Link className="btn btn-secondary" href={`/q/${q.id}`}>Answer</Link>
        </div>
      ))}
    </div>
  );
}
