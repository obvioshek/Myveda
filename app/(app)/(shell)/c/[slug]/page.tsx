import { notFound } from "next/navigation";
import CommunityView from "@/components/app/CommunityView";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { loadCommunity } from "@/lib/app/community";

const TABS = { threads: "Threads", archive: "Archive", about: "About" } as const;

export default async function CommunityPage({ params, searchParams }: {
  params: Promise<{ slug: string }>; searchParams: Promise<{ tab?: string; thread?: string }>;
}) {
  const { slug } = await params;
  const { tab, thread } = await searchParams;
  const me = await requireMember();
  const c = await loadCommunity(await viewerContext(me), decodeURIComponent(slug), thread);
  if (!c) notFound();
  const t = (tab && tab in TABS ? TABS[tab as keyof typeof TABS] : "Now") as "Now" | "Threads" | "Archive" | "About";
  return <CommunityView c={c} tab={t} />;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { db } = await import("@/src/prisma/db");
  const c = await db.orm.public.Community.select("name").where({ slug: decodeURIComponent(slug) }).first().catch(() => null);
  return { title: c?.name ?? "Community" };
}
