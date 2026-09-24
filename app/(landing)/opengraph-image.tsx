import { ImageResponse } from "next/og";

// The card shown when myvedaverse.in is shared in a chat or a post: the
// headline beside a short feed that ends.
export const alt = "A short feed with labelled posts that ends with the words: You're all caught up.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#EEEFEA", INK = "#1E1D22", INK2 = "#54535B", ACCENT = "#4A2548", LINE = "#D6D7CF";

function Label({ text, fg, bg }: { text: string; fg: string; bg: string }) {
  return <div style={{ display: "flex", fontSize: 18, color: fg, background: bg, padding: "4px 10px", borderRadius: 6 }}>{text}</div>;
}

function Post({ who, text, label }: { who: string; text: string; label: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "18px 22px", borderBottom: `1px solid ${LINE}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 20, color: INK }}>{who}{label}</div>
      <div style={{ display: "flex", fontSize: 20, color: INK2 }}>{text}</div>
    </div>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: PAPER, padding: 64, gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 32, color: INK }}>
            <div style={{ width: 52, height: 52, borderRadius: 26, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M4.4 11.9C4.4 19.3 19.6 19.3 19.6 11.9" stroke="white" strokeWidth="2.4" strokeLinecap="round" /><circle cx="12" cy="6.3" r="2.5" fill="white" /></svg>
            </div>
            My Veda Verse
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.05, color: INK }}>
            <span>Social media</span><span>without the</span><span style={{ color: ACCENT }}>scoreboard.</span>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: ACCENT }}>myvedaverse.in</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 460, background: "#FAFAF7", border: `1px solid ${LINE}`, borderRadius: 18, overflow: "hidden", alignSelf: "center" }}>
          <Post who="Simran Kaur" text="Made my mother's rajma over a video call." label={<Label text="Lived" fg="#8A500E" bg="#F4E7D2" />} />
          <Post who="Karan Mehta" text="What should your city fix first?" label={<Label text="Asking" fg="#2F4E9A" bg="#E3E8F5" />} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "20px 22px", background: "#E4E5DF" }}>
            <div style={{ display: "flex", fontSize: 26, color: INK }}>You&apos;re all caught up.</div>
            <div style={{ display: "flex", fontSize: 18, color: INK2 }}>New posts arrive tomorrow.</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
