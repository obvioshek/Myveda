import CommunityCards from "@/components/app/CommunityCards";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { listCommunities } from "@/lib/app/community";
import { COMMUNITY_FORMATS } from "@/lib/app/labels";

export const metadata = { title: "Communities" };

export default async function CommunitiesPage() {
  const me = await requireMember();
  const v = await viewerContext(me);
  const all = await listCommunities(v);
  const mine = all.filter(c => c.status !== "none");
  const others = all.filter(c => c.status === "none");
  return (
    <div className="col w960" style={{ gap: 32 }}>
      <header className="c-intro">
        <h1 className="page-title desk-only">Communities</h1>
        <p>
          Smaller groups that read, ask and practise together. Each one says how it works before you join:
          how often it meets, who can write, and whether its conversations are kept.
        </p>
        <div className="kinds" aria-label="Four kinds of community">
          {Object.entries(COMMUNITY_FORMATS).map(([kind, how]) => (
            <div key={kind}><b><span className="sq" aria-hidden="true" />{kind}</b><span>{how[0].toUpperCase() + how.slice(1)}.</span></div>
          ))}
        </div>
      </header>
      {mine.length > 0 && (
        <section className="stack" style={{ gap: 14 }} aria-labelledby="c-yours">
          <div className="sec-h"><h2 className="h2s" id="c-yours">Yours</h2><span className="muted" style={{ fontSize: 14 }}>{mine.length === 1 ? "1 community" : `${mine.length} communities`}</span></div>
          <CommunityCards items={mine} />
        </section>
      )}
      {others.length > 0 && (
        <section className="stack" style={{ gap: 14 }} aria-labelledby="c-more">
          <div className="sec-h"><h2 className="h2s" id="c-more">More to join</h2><span className="muted" style={{ fontSize: 14 }}>A cohort asks you to apply; the hosts decide.</span></div>
          <CommunityCards items={others} />
        </section>
      )}
    </div>
  );
}
