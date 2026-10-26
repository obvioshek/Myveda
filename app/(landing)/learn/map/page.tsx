import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import MapExplorer, { type MapNode } from "@/components/learn/MapExplorer";
import { CHAPTERS, UNITS, chapterPath } from "@/content/learn";
import { allConnections } from "@/content/learn/connections";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const MAP_PATH = "/learn/map";
const title = "How the chapters connect: a map · Veda Verse";
const description = "Which chapters build on which, from the terms they share: how the units lean on each other, the chapters most build on, and each chapter's neighbours.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: MAP_PATH },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: MAP_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
};

// A chapter "builds on" another when its text uses at least two of the other
// chapter's glossary terms (content/learn/connections.ts).
export default function MapPage() {
  const links = allConnections();
  const unitOf = new Map(CHAPTERS.map(c => [c.slug, c.unitN]));
  const cell = (from: number, to: number) => links.filter(l => unitOf.get(l.from) === from && unitOf.get(l.to) === to).length;
  const max = Math.max(1, ...UNITS.flatMap(a => UNITS.map(b => cell(a.n, b.n))));
  const degree = new Map<string, number>();
  for (const l of links) degree.set(l.to, (degree.get(l.to) ?? 0) + 1);
  const hubs = [...degree].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([slug, n]) => ({ c: CHAPTERS.find(x => x.slug === slug)!, n }));
  const nodes: MapNode[] = CHAPTERS.map(c => ({
    slug: c.slug, title: c.short ?? c.title, unitN: c.unitN,
    uses: links.filter(l => l.from === c.slug).sort((a, b) => b.n - a.n).map(l => ({ slug: l.to, n: l.n })),
    usedBy: links.filter(l => l.to === c.slug).sort((a, b) => b.n - a.n).map(l => ({ slug: l.from, n: l.n })),
  }));

  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Reference</span>
        <h1><span>The map.</span><span className="red">How the chapters connect.</span></h1>
        <p className="lede">A chapter builds on another when it uses that chapter&apos;s ideas: here, when its text uses at least two of the other chapter&apos;s glossary terms. {links.length} such links join the {CHAPTERS.length} chapters. Use the map to see what to read first, and where an idea leads.</p>
      </header>

      <section className="wrap tx-sec" aria-labelledby="mx-explore-h">
        <h2 id="mx-explore-h" className="h-xs">Any chapter&apos;s neighbours</h2>
        <MapExplorer nodes={nodes} start={hubs[0]?.c.slug ?? CHAPTERS[0].slug} />
      </section>

      <section className="wrap tx-sec" aria-labelledby="mx-hubs-h">
        <h2 id="mx-hubs-h" className="h-xs">The chapters most others build on</h2>
        <p className="ci-fine">Good chapters to read early: many later ideas lean on them.</p>
        <ol className="grid g2 mx-hubs">
          {hubs.map(({ c, n }) => (
            <li key={c.slug} className="cell"><Link href={chapterPath(c.slug)} prefetch={false}><span className="label">Unit {c.unitN}</span><b>{c.short ?? c.title}<Arrow /></b><span className="ci-fine">{n} chapters build on it</span></Link></li>
          ))}
        </ol>
      </section>

      <section className="wrap tx-sec" aria-labelledby="mx-units-h">
        <h2 id="mx-units-h" className="h-xs">How the units lean on each other</h2>
        <p className="ci-fine">Each number counts links from a chapter in the row&apos;s unit to a chapter in the column&apos;s unit. The diagonal is links within a unit.</p>
        <div className="prose"><div className="tb" tabIndex={0} role="region" aria-label="Links between units">
          <table className="mx-m">
            <thead><tr><th scope="col">Chapters in…</th>{UNITS.map(u => <th key={u.id} scope="col">build on Unit {u.n}</th>)}</tr></thead>
            <tbody>
              {UNITS.map(a => (
                <tr key={a.id}>
                  <th scope="row">Unit {a.n} · {a.short}</th>
                  {UNITS.map(b => { const v = cell(a.n, b.n); return <td key={b.id} style={{ "--mx": v / max } as React.CSSProperties} className={v ? "on" : ""}>{v || "–"}</td>; })}
                </tr>
              ))}
            </tbody>
          </table>
        </div></div>
      </section>
    </PageShell>
  );
}
