import { ImageResponse } from "next/og";
import { OG, OG_SIZE, ogFonts } from "@/lib/og";

// The card shown when myvedaverse.in is shared in a chat or a post: the
// headline beside a single ruled question card, in the site's flat red and
// ground, set in Archivo like the site. Served at the home page's
// opengraph-image and at /share.png, the address other pages point to.

export const HOME_CARD_ALT = "Veda Verse: learn the idea, then see how the classical texts saw it.";
const size = OG_SIZE;

const BG = OG.BG, INK = OG.INK, RED = OG.RED, RED_D = OG.RED_D;

/** The site's own card, for the home page and any page without its own. */
export async function homeCard() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: BG, padding: 64, gap: 56, fontFamily: "Archivo" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 34, fontWeight: 800, color: INK }}>
            <div style={{ width: 24, height: 24, background: RED }} />
            Veda Verse
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2, color: INK }}>
            <span>Learn the idea.</span>
            <span style={{ color: RED }}>Then see how</span>
            <span style={{ color: RED }}>the classical</span>
            <span style={{ color: RED }}>texts saw it.</span>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: RED_D }}>myvedaverse.in</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 420, alignSelf: "center", border: `3px solid ${INK}` }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: 30, borderBottom: `3px solid ${INK}` }}>
            <div style={{ display: "flex", fontSize: 18, fontWeight: 800, color: RED_D }}>01</div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 800, lineHeight: 1.2, color: INK }}>Kautilya tested a minister&apos;s integrity in secret before giving him office.</div>
            <div style={{ display: "flex", fontSize: 22, fontWeight: 700, color: RED_D }}>Would his method be acceptable today?</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "24px 30px", background: RED, color: BG }}>
            <div style={{ display: "flex", fontSize: 18, fontWeight: 800, letterSpacing: 1 }}>BHAGAVAD GĪTĀ 2.47</div>
            <div style={{ display: "flex", fontSize: 24, fontWeight: 800, lineHeight: 1.2 }}>Your right is to the action alone, never to its fruits.</div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
