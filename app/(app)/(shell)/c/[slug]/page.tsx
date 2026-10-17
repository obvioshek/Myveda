import { notFound } from "next/navigation";
import CommunityView from "@/components/app/CommunityView";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { loadCommunity } from "@/lib/app/community";
import { decoded, one, pick, type Param } from "@/lib/app/params";

const TABS = { threads: "Threads", archive: "Archive", about: "About" } as const;

export default async function CommunityPage({ params, searchParams }: {
  params: Promise<{ slug: string }>; searchParams: Promise<{ tab?: Param; thread?: Param }>;
}) {
  const { slug } = await params;
  const { tab, thread } = await searchParams;
  const me = await requireMember();
  const s = decoded(slug);
  const c = s === null ? null : await loadCommunity(await viewerContext(me), s, one(thread));
  if (!c) notFound();
  const t = pick(TABS, one(tab)) ?? "Now";
  return <CommunityView c={c} tab={t} />;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { db } = await import("@/src/prisma/db");
  const s = decoded(slug);
  const c = s === null ? null : await db.orm.public.Community.select("name").where({ slug: s }).first().catch(() => null);
  return { title: c?.name ?? "Community" };
}
