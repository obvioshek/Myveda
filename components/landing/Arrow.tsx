// The arrow used on links and buttons (Lucide "arrow-right", at the design
// system's stroke). "down" is for links that move within the page.
export default function Arrow({ size = 16, dir = "right" }: { size?: number; dir?: "right" | "down" }) {
  return (
    <svg className={dir === "down" ? "arw down" : "arw"} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === "down" ? <><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></> : <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>}
    </svg>
  );
}
