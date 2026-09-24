import { notFound } from "next/navigation";
import Rows from "@/components/app/Rows";
import TopicFollow from "@/components/app/TopicFollow";
import { requireMember } from "@/lib/app/session";
import { viewerContext } from "@/lib/app/viewer";
import { loadTopic } from "@/lib/app/search";

export default async function TopicPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const me = await requireMember();
  const t = await loadTopic(await viewerContext(me), decodeURIComponent(name));
  if (!t) notFound();
  return (
    <div className="col w760" style={{ gap: 24 }}>
      <header style={{ display: "flex", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 200 }}><div className="kicker">Topic</div><h1 style={{ fontSize: 36, marginTop: 4 }}>{t.name}</h1></div>
        <TopicFollow name={t.name} following={t.following} />
      </header>
      {t.sections.map(s => (
        <section key={s.name} className="stack">
          <h2 className="h2s" style={{ marginBottom: 6 }}>{s.name}</h2>
          <Rows items={s.items} withChipsAbove />
        </section>
      ))}
      {t.sections.length === 0 && <p className="muted">Nothing here yet. Ask the first question.</p>}
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  return { title: decodeURIComponent(name) };
}
