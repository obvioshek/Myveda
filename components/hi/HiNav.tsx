import Link from "next/link";
import { HI_GLOSSARY_PATH, HI_PATH, HI_START_PATH } from "@/content/hi";

// The Hindi pages' own short menu, with the way back to English.
export default function HiNav({ here, en }: { here: string; en: string }) {
  const links: [string, string][] = [[HI_PATH, "परिचय"], [HI_START_PATH, "पाँच चरणों की सैर"], [HI_GLOSSARY_PATH, "शब्दावली"]];
  return (
    <nav className="wrap hi-nav" aria-label="हिंदी संस्करण">
      <span className="label red">हिंदी</span>
      {links.map(([href, name]) => <Link key={href} href={href} prefetch={false} aria-current={href === here ? "page" : undefined}>{name}</Link>)}
      <Link href={en} prefetch={false} lang="en" className="hi-en">English</Link>
    </nav>
  );
}

/** A passage tag in Hindi, styled as the English ones are. */
export function HiTag({ kind }: { kind: "documented" | "view" }) {
  return <span className={kind === "documented" ? "lp-tag documented" : "lp-tag view"}>{kind === "documented" ? "प्रलेखित" : "व्याख्या"}</span>;
}
