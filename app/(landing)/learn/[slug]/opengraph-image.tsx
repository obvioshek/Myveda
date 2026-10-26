import { ImageResponse } from "next/og";
import { CHAPTERS, chapterBySlug } from "@/content/learn";
import { textsInChapter } from "@/content/learn/texts";
import { OG, OG_SIZE, clip, ogFonts, ogText } from "@/lib/og";

// The card shown when a chapter is shared: its unit, its title, what it
// covers, and the classical texts it reads beside the ideas.
export const alt = "A chapter of Veda Verse";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return CHAPTERS.map(c => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const c = chapterBySlug((await params).slug)!;
  const texts = textsInChapter(c.slug).map(t => ogText(t.name));
  const name = ogText(c.title), scope = ogText(c.scope);
  const passages = c.pairings.length;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: OG.BG, padding: "60px 72px", fontFamily: "Archivo", color: OG.INK }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 32, fontWeight: 800 }}>
            <div style={{ width: 22, height: 22, background: OG.RED }} />
            Veda Verse
          </div>
          <div style={{ display: "flex", fontSize: 24, fontWeight: 800, color: OG.RED_D, letterSpacing: 2 }}>{`UNIT ${c.unitN} · CHAPTER ${c.n}`}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: name.length > 48 ? 64 : 80, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>{name}</div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 400, lineHeight: 1.35, color: OG.SOFT, maxWidth: 1000 }}>{clip(scope, 150)}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 22, borderTop: `4px solid ${OG.INK}`, fontSize: 26, fontWeight: 800 }}>
          {passages > 0
            ? <span style={{ display: "flex", color: OG.RED_D }}>{clip(`${passages} ${passages === 1 ? "passage" : "passages"} from the ${texts.slice(0, 3).join(", ")}${texts.length > 3 ? " and more" : ""}`, 80)}</span>
            : <span style={{ display: "flex" }}>Explained in plain language, with checks and examples</span>}
          <span style={{ display: "flex", marginLeft: "auto", color: OG.SOFT, fontWeight: 400 }}>myvedaverse.in</span>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
