import CommunityCards from "@/components/app/CommunityCards";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { listCommunities } from "@/lib/app/community";

export const metadata = { title: "Communities" };

export default async function CommunitiesPage() {
  const me = await requireMember();
  const v = await viewerContext(me);
  const all = await listCommunities(v);
  const mine = all.filter(c => c.status !== "none");
  const others = all.filter(c => c.status === "none");
  return (
    <div className="col w820" style={{ gap: 26 }}>
      <h1 className="page-title desk-only">Communities</h1>
      <p className="muted" style={{ fontSize: 15, maxWidth: "60ch" }}>
        Each one says how it works: a circle reads together, a board fades after a week, a cohort keeps its conversations inside, a practice group corrects in replies.
      </p>
      {mine.length > 0 && (
        <section className="stack" style={{ gap: 10 }}>
          <h2 className="h2s">Yours</h2>
          <CommunityCards items={mine} />
        </section>
      )}
      {others.length > 0 && (
        <section className="stack" style={{ gap: 10 }}>
          <h2 className="h2s">More to join</h2>
          <CommunityCards items={others} />
        </section>
      )}
    </div>
  );
}
