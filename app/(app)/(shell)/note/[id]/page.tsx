import { notFound } from "next/navigation";
import ReaderView from "@/components/app/ReaderView";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { loadNote } from "@/lib/app/reader";
import { recordRead } from "@/actions/app/library";
import { clip } from "@/lib/app/notify";

export const metadata = { title: "Read" };

export default async function NotePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const me = await requireMember();
  const r = await loadNote(await viewerContext(me), id);
  if (!r) notFound();
  await recordRead("note", r.id, clip(r.paras.map(p => p.text).join(" "), 120));
  return <ReaderView r={r} />;
}
