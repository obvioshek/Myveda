import { ImageResponse } from "next/og";
import { CHAPTERS, chapterBySlug } from "@/content/learn";
import { refOf } from "@/content/learn/text-refs";
import { OG, OG_SIZE, clip, ogFonts, ogText, translationOf } from "@/lib/og";

// A passage as an image to share: the modern idea beside the classical one,
// the passage's translation and its reference. /learn/<chapter>/share/<n> is
// the chapter's nth passage, counting from 0; every one is drawn at build time.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return CHAPTERS.flatMap(c => c.pairings.map((p, n) => ({ c, p, n })).filter(x => x.p.quote).map(x => ({ slug: c.slug, n: String(x.n) })));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string; n: string }> }) {
  const { slug, n } = await params;
  const c = chapterBySlug(slug);
  const p = c?.pairings[Number(n)];
  if (!c || !p?.quote) return new Response("Not found", { status: 404 });
  const quote = clip(ogText(translationOf(p.quote)), 230);
  const modern = ogText(p.modern), classic = ogText(p.classic ?? ""), ref = ogText(refOf(p.quote)), chapter = ogText(c.title);
  const view = p.kind === "view";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: OG.BG, padding: "56px 72px", fontFamily: "Archivo", color: OG.INK }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, fontWeight: 800 }}>
            <div style={{ width: 20, height: 20, background: OG.RED }} />
            Veda Verse
          </div>
          <div style={{ display: "flex", padding: view ? "4px 12px" : "6px 14px", fontSize: 20, fontWeight: 800, letterSpacing: 2, ...(view ? { border: `4px solid ${OG.INK}` } : { background: OG.INK, color: OG.BG }) }}>{view ? "A READING" : "DOCUMENTED"}</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 14, fontSize: 40, fontWeight: 800, lineHeight: 1.15, letterSpacing: -1 }}>
          <span style={{ display: "flex" }}>{modern}</span>
          {classic && (
            <svg width="44" height="24" viewBox="0 0 44 24" style={{ alignSelf: "center" }}>
              <path d="M2 12h40M10 4 2 12l8 8M34 4l8 8-8 8" fill="none" stroke={OG.RED} strokeWidth="4" />
            </svg>
          )}
          {classic && <span style={{ display: "flex", color: OG.RED_D }}>{classic}</span>}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "26px 30px", borderLeft: `10px solid ${view ? OG.INK : OG.RED}`, background: view ? OG.SURFACE : "#FFF2EF" }}>
          <div style={{ display: "flex", fontSize: quote.length > 160 ? 32 : 38, fontWeight: 800, lineHeight: 1.3 }}>{quote}</div>
          <div style={{ display: "flex", fontSize: 22, fontWeight: 800, letterSpacing: 1, color: view ? OG.INK : OG.RED_D }}>{clip(ref.toUpperCase(), 70)}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: OG.SOFT }}>
          <span style={{ display: "flex" }}>{clip(chapter, 60)}</span>
          <span style={{ display: "flex" }}>myvedaverse.in</span>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await ogFonts(), headers: { "Cache-Control": "public, max-age=86400" } },
  );
}
