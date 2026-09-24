import { redirect } from "next/navigation";
import { db } from "@/src/prisma/db";
import Onboarding from "@/components/app/Onboarding";
import { requireMember } from "@/lib/app/session";
import { personRef, viewerContext } from "@/lib/app/viewer";

export const metadata = { title: "Welcome" };

export default async function WelcomePage({ searchParams }: { searchParams: Promise<{ replay?: string }> }) {
  const me = await requireMember();
  const { replay } = await searchParams;
  if (me.onboardedAt && !replay) redirect("/home");
  const v = await viewerContext(me);

  const [topics, hosts, communities] = await Promise.all([
    db.orm.public.Topic.orderBy(t => t.name.asc()).all(),
    db.orm.public.Membership.where({ isSteward: true }).include("user").all(),
    db.orm.public.Community.include("topics", t => t.include("topic")).orderBy(c => c.createdAt.asc()).all(),
  ]);
  // people worth following first: hosts and members with a verified credential
  const seen = new Set<string>();
  const people = hosts
    .map(h => h.user)
    .filter((u): u is NonNullable<typeof u> => !!u && u.id !== me.id && !seen.has(u.id) && !!seen.add(u.id))
    .slice(0, 4)
    .map(u => ({ ...personRef(u), line: u.line ?? "" }));

  return (
    <Onboarding
      replay={!!replay}
      topics={topics.map(t => t.name)}
      initial={{
        topics: v.topicNames,
        askAbout: v.expertiseNames,
        brings: me.brings ?? "Asking",
        follows: people.filter(p => v.following.has(p.id)).map(p => p.id),
        circle: v.circles[0]?.id ?? null,
      }}
      people={people}
      circles={communities
        .filter(c => c.format !== "Cohort")
        .map(c => ({ id: c.id, name: c.name, week: c.weekPrompt ?? "", topics: (c.topics ?? []).map(t => t.topic?.name ?? "") }))}
    />
  );
}
