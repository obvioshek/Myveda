import { notFound } from "next/navigation";
import { db } from "@/src/prisma/db";
import ProfileView from "@/components/app/ProfileView";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { loadProfile } from "@/lib/app/profile";

const TABS = { answers: "Answers", questions: "Questions" } as const;

export default async function ProfilePage({ params, searchParams }: {
  params: Promise<{ handle: string }>; searchParams: Promise<{ tab?: string }>;
}) {
  const { handle } = await params;
  const { tab } = await searchParams;
  const me = await requireMember();
  const [pr, topics] = await Promise.all([
    loadProfile(await viewerContext(me), decodeURIComponent(handle)),
    db.orm.public.Topic.orderBy(t => t.name.asc()).all(),
  ]);
  if (!pr) notFound();
  const t = (tab && tab in TABS ? TABS[tab as keyof typeof TABS] : "Posts") as "Posts" | "Answers" | "Questions";
  return <ProfileView pr={pr} tab={t} topics={topics.map(x => x.name)} />;
}

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const u = await db.orm.public.User.select("name").where({ handle: decodeURIComponent(handle) }).first().catch(() => null);
  return { title: u?.name ?? "Profile" };
}
