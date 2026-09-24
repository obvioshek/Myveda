// The product's icon set (Lucide-style strokes, as in the product design).
// "fill" turns an outline icon solid: a pressed toggle fills its icon.

const PATHS: Record<string, React.ReactNode> = {
  logo: (<><path d="M4.4 11.9C4.4 19.3 19.6 19.3 19.6 11.9" strokeWidth="2.4" /><circle cx="12" cy="6.3" r="2.5" fill="currentColor" stroke="none" /></>),
  search: (<><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>),
  plus: (<><path d="M5 12h14" strokeWidth="2.4" /><path d="M12 5v14" strokeWidth="2.4" /></>),
  bell: (<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></>),
  back: (<><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></>),
  home: (<><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></>),
  compass: (<><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" /></>),
  people: (<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>),
  library: (<><path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" /></>),
  more: (<><circle cx="12" cy="12" r="1" strokeWidth="2.4" /><circle cx="19" cy="12" r="1" strokeWidth="2.4" /><circle cx="5" cy="12" r="1" strokeWidth="2.4" /></>),
  check: (<path d="M20 6 9 17l-5-5" strokeWidth="2.6" />),
  reply: (<><polyline points="9 17 4 12 9 7" /><path d="M20 18v-2a4 4 0 0 0-4-4H4" /></>),
  bulb: (<><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></>),
  bookmark: (<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />),
  lock: (<><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>),
  user: (<><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></>),
};

export default function Icon({ name, size = 18, fill = false }: { name: keyof typeof PATHS | string; size?: number; fill?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
