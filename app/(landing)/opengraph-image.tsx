import { ImageResponse } from "next/og";

// The card shown when myvedaverse.in is shared in a chat or a post: the
// headline beside a single ruled question card, in the site's flat red and
// ground. The default sans-serif stands in for the site's fonts.
export const alt = "Veda Verse: Learn the idea. Then see how the classics saw it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#F3F2F2", INK = "#201E1D", RED = "#EC3013", RED_D = "#AE1800";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: BG, padding: 64, gap: 56 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 34, fontWeight: 800, color: INK }}>
            <div style={{ width: 24, height: 24, background: RED }} />
            Veda Verse
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2, color: INK }}>
            <span>Learn the idea.</span>
            <span style={{ color: RED }}>Then see how</span>
            <span style={{ color: RED }}>the classics</span>
            <span style={{ color: RED }}>saw it.</span>
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
    size,
  );
}
