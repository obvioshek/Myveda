// The arrow used on links and buttons (Lucide's arrows, at the design system's
// stroke). "down" is for links that move within the page, "back" for a link
// to what came before, and "out" for one that opens another site or tab.
const PATHS = {
  right: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  down: <><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></>,
  back: <><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></>,
  out: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
};

export default function Arrow({ size = 16, dir = "right" }: { size?: number; dir?: keyof typeof PATHS }) {
  return (
    <svg className={dir === "right" ? "arw" : `arw ${dir}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[dir]}
    </svg>
  );
}

// A link that opens in a new tab says so: the arrow out, and the words for
// screen readers.
export function NewTab() {
  return <><Arrow size={14} dir="out" /><span className="sr-only"> (opens in a new tab)</span></>;
}
