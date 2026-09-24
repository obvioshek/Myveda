import { notFound } from "next/navigation";
import QuestionView from "@/components/app/QuestionView";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { loadQuestion } from "@/lib/app/question";
import { recordRead } from "@/actions/app/library";

export default async function QuestionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const me = await requireMember();
  const q = await loadQuestion(await viewerContext(me), id);
  if (!q) notFound();
  await recordRead("question", q.id, q.title);
  return <QuestionView q={q} />;
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { db } = await import("@/src/prisma/db");
  const q = await db.orm.public.Question.select("title").where({ id }).first().catch(() => null);
  return { title: q?.title ?? "Question" };
}
