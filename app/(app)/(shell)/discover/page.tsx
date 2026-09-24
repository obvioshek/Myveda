import Link from "next/link";
import { db } from "@/src/prisma/db";
import DiscoverSearch from "@/components/app/DiscoverSearch";
import CommunityCards from "@/components/app/CommunityCards";
import Rows from "@/components/app/Rows";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { openQuestionsFor } from "@/lib/app/feed";
import { listCommunities } from "@/lib/app/community";
import { search } from "@/lib/app/search";

export const metadata = { title: "Discover" };

export default async function DiscoverPage({ searchParams }: { searchParams: Promise<{ q?: string; doc?: string }> }) {
  const me = await requireMember();
  const { q = "", doc } = await searchParams;
  const v = await viewerContext(me);
  const query = q.trim();

  if (query) {
    const results = await search(v, query, doc === "1");
    return (
      <div className="col w820" style={{ gap: 26 }}>
        <h1 className="page-title desk-only">Discover</h1>
        <DiscoverSearch q={query} doc={doc === "1"} empty={results.length === 0} />
        {results.map(g => (
          <section key={g.name} className="stack">
            <div className="kicker" style={{ paddingBottom: 6 }}>{g.name}</div>
            <Rows items={g.items} />
          </section>
        ))}
      </div>
    );
  }

  const [openQs, topics, communities, articles] = await Promise.all([
    openQuestionsFor(v, 5),
    db.orm.public.Topic.orderBy(t => t.name.asc()).all(),
    listCommunities(v),
    db.orm.public.Article.orderBy(a => a.publishedAt.desc()).limit(5).all(),
  ]);
  return (
    <div className="col w820" style={{ gap: 26 }}>
      <h1 className="page-title desk-only">Discover</h1>
      <DiscoverSearch q="" doc={false} empty={false} />
      {openQs.length > 0 && (
        <section className="stack">
          <h2 className="h2s" style={{ marginBottom: 6 }}>Open questions you could help with</h2>
          {openQs.map(oq => (
            <div key={oq.id} className="qrow">
              <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: 15, fontWeight: 600 }}>{oq.title}</div><div className="sub">{oq.meta}</div></div>
              <Link className="btn btn-secondary" href={`/q/${oq.id}`}>Answer</Link>
            </div>
          ))}
        </section>
      )}
      <section className="stack" style={{ gap: 10 }}>
        <h2 className="h2s">Topics</h2>
        <div className="wrap-chips" style={{ gap: 8 }}>
          {topics.map(t => <Link key={t.id} className="pill soft" href={`/t/${encodeURIComponent(t.name)}`}>{t.name}</Link>)}
        </div>
      </section>
      <section className="stack" style={{ gap: 10 }}>
        <h2 className="h2s">Circles and communities</h2>
        <CommunityCards items={communities} />
      </section>
      <section className="stack">
        <h2 className="h2s" style={{ marginBottom: 6 }}>From the house</h2>
        {articles.map(a => (
          <Link key={a.id} className="row" href={`/read/${a.slug}`}><b>{a.title}</b><span className="sub">{a.dek}</span></Link>
        ))}
      </section>
    </div>
  );
}
