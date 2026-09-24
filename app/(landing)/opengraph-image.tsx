import { ImageResponse } from "next/og";

// The card shown when myvedaverse.in is shared in a chat or a post.
export const alt = "My Veda Verse — a calm social space for ideas, experiences, questions, and conversations.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: "72px 80px", background: "#161022", color: "#F4EFFA",
          backgroundImage: "radial-gradient(circle at 85% 20%, rgba(248,201,79,0.18), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="6" fill="#2A2040" />
            <path d="M4.4 11.9C4.4 19.3 19.6 19.3 19.6 11.9" fill="none" stroke="#F8C94F" strokeWidth="2.1" strokeLinecap="round" />
            <circle cx="12" cy="6.3" r="2.5" fill="#F8C94F" />
          </svg>
          <div style={{ fontSize: 40 }}>My Veda Verse</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, lineHeight: 1.1, display: "flex", flexDirection: "column" }}>
            <span>A social platform built for</span>
            <span style={{ color: "#F8C94F" }}>better conversations.</span>
          </div>
          <div style={{ fontSize: 30, color: "#C9BEDC" }}>Express thoughtfully. Engage meaningfully. Share responsibly.</div>
        </div>
        <div style={{ fontSize: 28, color: "#F8C94F" }}>myvedaverse.in</div>
      </div>
    ),
    size,
  );
}
