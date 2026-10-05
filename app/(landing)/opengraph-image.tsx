import { ImageResponse } from "next/og";

// The card shown when myvedaverse.in is shared in a chat or a post: the
// headline beside a single question card, in the site's cream, terracotta and
// sage. The default sans-serif stands in for the site's fonts.
export const alt = "Veda Verse: Learn the idea. Then see how the classics saw it.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#F5EAD8", INK = "#201E1D", TERRA = "#C67139", TERRA_D = "#8C491A", TERRA_L = "#FFF2EB", SAGE = "#7A8A5E", SAGE_L = "#F0FAE1", SAGE_D = "#3D472B";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: BG, padding: 64, gap: 48, position: "relative" }}>
        <div style={{ position: "absolute", right: -80, top: -90, width: 420, height: 420, borderRadius: 210, background: "#E1EECC" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 34, color: INK }}>
            <div style={{ display: "flex", position: "relative", width: 56, height: 40 }}>
              <div style={{ position: "absolute", left: 0, top: 0, width: 40, height: 40, borderRadius: 20, background: TERRA }} />
              <div style={{ position: "absolute", left: 16, top: 0, width: 40, height: 40, borderRadius: 20, background: SAGE, opacity: 0.85 }} />
            </div>
            Veda Verse
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.06, color: INK }}>
            <span>Learn the idea.</span>
            <span style={{ color: TERRA }}>Then see how</span>
            <span style={{ color: TERRA }}>the classics</span>
            <span style={{ color: TERRA }}>saw it.</span>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: TERRA_D }}>myvedaverse.in</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 420, alignSelf: "center", position: "relative", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: 30, borderRadius: 36, background: TERRA_L }}>
            <div style={{ display: "flex", width: 14, height: 14, borderRadius: 7, background: TERRA }} />
            <div style={{ display: "flex", fontSize: 26, lineHeight: 1.25, color: INK }}>Kautilya tested a minister&apos;s integrity in secret before giving him office.</div>
            <div style={{ display: "flex", fontSize: 22, fontWeight: 700, color: TERRA_D }}>Would his method be acceptable today?</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "22px 30px", borderRadius: 36, background: SAGE_L }}>
            <div style={{ display: "flex", fontSize: 18, fontWeight: 700, color: SAGE_D, letterSpacing: 1 }}>BHAGAVAD GĪTĀ 2.47</div>
            <div style={{ display: "flex", fontSize: 22, color: INK }}>Your right is to the action alone, never to its fruits.</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
