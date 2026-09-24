import { LABEL_ICON, LABEL_NAME, type LabelKey } from "@/content/landing";

// A post's label: what it rests on. Works on the server and in client demos.
export default function Stamp({ k, lg }: { k: LabelKey; lg?: boolean }) {
  return (
    <span className={lg ? "stamp lg" : "stamp"} data-k={k}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={LABEL_ICON[k]} />
      </svg>
      {LABEL_NAME[k]}
    </span>
  );
}
