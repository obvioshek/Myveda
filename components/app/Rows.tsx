import Link from "next/link";
import { Chips } from "@/components/app/bits";
import type { RowItem } from "@/lib/app/types";

// A plain list of rows: labels, the text, and a line of context.
export default function Rows({ items, withChipsAbove = false }: { items: RowItem[]; withChipsAbove?: boolean }) {
  return (
    <>
      {items.map(it => (
        <Link key={it.key} className="row" href={it.href}>
          {withChipsAbove && it.bases.length > 0 && <span className="wrap-chips"><Chips bases={it.bases} /></span>}
          <span style={{ display: "block", marginTop: withChipsAbove && it.bases.length ? 4 : 0 }} className="clamp2">{it.title}</span>
          {it.meta && <span className="sub">{it.meta}</span>}
        </Link>
      ))}
    </>
  );
}
