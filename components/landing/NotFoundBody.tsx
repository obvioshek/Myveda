import Link from "next/link";
import Arrow from "./Arrow";
import SiteSearch from "@/components/learn/SiteSearch";
import ReportProblem from "@/components/learn/ReportProblem";

const WAYS = [
  { href: "/learn", label: "All chapters", note: "Every unit and chapter, with where you left off." },
  { href: "/learn/start", label: "Start here", note: "Five ideas, each read beside a classical passage." },
  { href: "/learn/glossary", label: "Glossary", note: "Every term, in plain language." },
  { href: "/learn/practice", label: "Practice", note: "Questions from all the chapters, and your review." },
];

// What a missing page says: that it isn't here, how to find what the reader
// came for, and how to tell us if one of our own links led here.
export default function NotFoundBody() {
  return (
    <div className="wrap nf">
      <span className="eyebrow"><i className="sq" aria-hidden="true" />Page not found</span>
      <h1><span>This page isn&apos;t here.</span><span className="red">The ideas still are.</span></h1>
      <p className="lede">The address may be mistyped, or the page may have moved. Search for the concept you wanted, or pick up from one of these.</p>
      <div className="nf-search"><SiteSearch /><span className="ci-fine">Search any concept, term, chapter or text.</span></div>
      <ul className="grid g2 nf-ways">
        {WAYS.map(w => (
          <li key={w.href}>
            <Link className="cell nf-way" href={w.href} prefetch={false}><b>{w.label}<Arrow /></b><span>{w.note}</span></Link>
          </li>
        ))}
      </ul>
      <p className="ci-fine">Followed a link on this site to get here? <ReportProblem what="A link that led to a missing page" label="Tell us which one" /></p>
    </div>
  );
}
