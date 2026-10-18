import { notFound } from "next/navigation";
import ReaderView from "@/components/app/ReaderView";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { loadArticle } from "@/lib/app/reader";
import { recordRead } from "@/actions/app/library";
import { decoded } from "@/lib/app/params";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const me = await requireMember();
  const s = decoded(slug);
  const r = s === null ? null : await loadArticle(await viewerContext(me), s);
  if (!r) notFound();
  await recordRead("article", r.id, r.title ?? "");
  return <ReaderView r={r} />;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { db } = await import("@/src/prisma/db");
  const s = decoded(slug);
  const a = s === null ? null : await db.orm.public.Article.select("title", "dek").where({ slug: s }).first().catch(() => null);
  return { title: a?.title ?? "Read", description: a?.dek ?? undefined };
}
