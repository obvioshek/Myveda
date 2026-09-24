import { notFound } from "next/navigation";
import ReaderView from "@/components/app/ReaderView";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { loadArticle } from "@/lib/app/reader";
import { recordRead } from "@/actions/app/library";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const me = await requireMember();
  const r = await loadArticle(await viewerContext(me), decodeURIComponent(slug));
  if (!r) notFound();
  await recordRead("article", r.id, r.title ?? "");
  return <ReaderView r={r} />;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { db } = await import("@/src/prisma/db");
  const a = await db.orm.public.Article.select("title", "dek").where({ slug: decodeURIComponent(slug) }).first().catch(() => null);
  return { title: a?.title ?? "Read", description: a?.dek ?? undefined };
}
