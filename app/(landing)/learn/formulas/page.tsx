import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import PrintButton from "@/components/learn/PrintButton";
import { FORMULAS_PATH, PRACTICE_PATH, REVISION_PATH, chapterPath, deva } from "@/content/learn";
import { buildFormulaSheet } from "@/content/learn/formulas";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const SHEET = buildFormulaSheet();
const formulas = SHEET.reduce((a, u) => a + u.formulas, 0);
const worked = SHEET.reduce((a, u) => a + u.worked, 0);

const title = "Formula sheet: economics, accounting and finance · Veda Verse";
const description = `${formulas} formulas from the chapters, from elasticity to ratios, CVP, variances, cost of capital and EOQ, with ${worked} worked examples, ready to print.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: FORMULAS_PATH },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: FORMULAS_PATH, siteName: "Veda Verse", locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const html = (__html: string) => ({ __html });

// Every formula the chapters write out, by unit, chapter and concept, each
// linking back to where it is explained. Built from the chapter text itself
// (content/learn/formulas.ts), so it can't drift from it.
export default function FormulasPage() {
  return (
    <PageShell wide note="Spotted a mistake?">
      <header className="wrap ci-hero rv-hero">
        <span className="eyebrow"><i className="sq" aria-hidden="true" />Formula sheet</span>
        <h1><span>Every formula.</span><span className="red">Where it comes from.</span></h1>
        <p className="lede">The {formulas} formulas the chapters use, with {worked} of their worked examples, chapter by chapter. Each links back to the concept that explains it. Print it, or keep it open beside a problem.</p>
        <div className="btn-row no-print">
          <PrintButton />
          <Link className="btn btn-secondary" href={PRACTICE_PATH} prefetch={false}>Test yourself</Link>
          {SHEET.length > 1 && SHEET.map(u => <a key={u.id} className="btn btn-ghost" href={`#${u.id}`}>Unit {u.n}</a>)}
        </div>
      </header>

      {SHEET.map(u => (
        <section key={u.id} id={u.id} className="wrap rv-unit" aria-labelledby={`${u.id}-fx`}>
          <h2 id={`${u.id}-fx`} className="h-sm rv-unit-h"><span className="label red">Unit {u.n}</span>{u.title}</h2>
          {u.chapters.map(c => (
            <section key={c.slug} className="rv-ch fx-ch" aria-labelledby={`fx-${c.slug}`}>
              <h3 id={`fx-${c.slug}`} className="rv-ch-h">
                <span className="rv-n" lang="sa" aria-hidden="true">{deva(c.n)}</span>
                <Link href={chapterPath(c.slug)} prefetch={false}>{c.title}</Link>
              </h3>
              {c.concepts.map(x => (
                <div key={x.blockId} className="fx-concept">
                  <h4><Link href={`${chapterPath(c.slug)}#${x.blockId}`} prefetch={false}>{x.title}</Link></h4>
                  <dl className="fx-list">
                    {x.items.map((it, i) => (
                      <div key={i} className={it.worked ? "fx-row worked" : "fx-row"}>
                        <dt>{it.worked ? <span className="fx-tag">Worked example</span> : it.name ?? <span className="fx-tag">Formula</span>}</dt>
                        <dd dangerouslySetInnerHTML={html(it.html)} />
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </section>
          ))}
        </section>
      ))}
      <p className="wrap ci-fine fx-foot">Gathered from the chapters’ own text. Revising the summaries instead? See the <Link className="link" href={REVISION_PATH}>revision sheets</Link>.</p>
    </PageShell>
  );
}
