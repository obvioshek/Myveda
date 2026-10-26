import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import HiNav from "@/components/hi/HiNav";
import { HI_GLOSSARY_PATH, hiGlossary, hiWords } from "@/content/hi";
import { GLOSSARY_PATH } from "@/content/learn";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const terms = hiGlossary();
const title = "शब्दावली: प्रबंध और प्रबंधकीय अर्थशास्त्र के शब्द हिंदी में · वेद वर्स";
const description = `इकाई 1 के ${terms.length} शब्द, सरल हिंदी परिभाषाओं और अंग्रेज़ी शब्दों के साथ, और धर्म, अर्थ, कर्म जैसे शब्द जिनका अनुवाद ठीक से नहीं होता।`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: HI_GLOSSARY_PATH, languages: { "en-IN": GLOSSARY_PATH, "hi-IN": HI_GLOSSARY_PATH } },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: HI_GLOSSARY_PATH, siteName: "Veda Verse", locale: "hi_IN", type: "website" },
};

// Unit 1's glossary in Hindi, after the words that don't translate.
// Grouped by each Hindi term's first letter.
export default function HindiGlossary() {
  const groups = new Map<string, typeof terms>();
  for (const t of terms) {
    const k = [...t.term][0];
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k)!.push(t);
  }
  const words = hiWords();
  return (
    <PageShell wide note="कोई त्रुटि दिखी?">
      <div lang="hi" className="hi">
        <HiNav here={HI_GLOSSARY_PATH} en={GLOSSARY_PATH} />
        <header className="wrap ci-hero">
          <span className="eyebrow"><i className="sq" aria-hidden="true" />संदर्भ</span>
          <h1><span>शब्दावली।</span><span className="red">इकाई 1, हिंदी में।</span></h1>
          <p className="lede">इकाई 1, प्रबंध और प्रबंधकीय अर्थशास्त्र, के {terms.length} शब्द सरल हिंदी परिभाषाओं के साथ। हर शब्द के साथ अंग्रेज़ी शब्द भी है, क्योंकि परीक्षाएँ दोनों का उपयोग करती हैं, और वह अध्याय भी जहाँ विचार पूरा समझाया गया है (अंग्रेज़ी में)। बाक़ी इकाइयाँ आगे आएँगी।</p>
          <nav className="btn-row" aria-label="इस पन्ने पर">
            <a className="btn btn-secondary" href="#words">शब्द जिनका अनुवाद नहीं होता</a>
            <a className="btn btn-secondary" href="#terms">इकाई 1 के शब्द</a>
          </nav>
        </header>

        <section className="wrap tx-sec" id="words" aria-labelledby="hg-w">
          <h2 id="hg-w" className="h-sm">शब्द जिनका अनुवाद नहीं होता</h2>
          <p className="ci-fine">कुछ शब्दों में किसी एक अंग्रेज़ी शब्द से कहीं अधिक अर्थ है। अध्याय इन्हें मूल रूप में रखते हैं; यहाँ उनका अर्थ है, और वह अंग्रेज़ी अनुवाद जो सबसे अधिक भ्रम पैदा करता है।</p>
          <ol className="rg-words">
            {words.map(w => (
              <li key={w.id} id={w.id} className="rg-word">
                <h3 className="rg-term"><span lang={w.lang}>{w.original}</span><span className="rg-og" lang="sa-Latn">{w.term}</span></h3>
                <p>{w.means}</p>
                <p className="rg-not"><b>पूरा अर्थ नहीं:</b> {w.notQuite}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="wrap tx-sec" id="terms" aria-labelledby="hg-t">
          <h2 id="hg-t" className="h-sm">इकाई 1 के शब्द</h2>
          <nav className="hg-letters" aria-label="अक्षर">{[...groups.keys()].map(k => <a key={k} href={`#hg-${k}`}>{k}</a>)}</nav>
          {[...groups].map(([k, list]) => (
            <section key={k} id={`hg-${k}`} className="hg-group" aria-label={k}>
              <h3 className="hg-l">{k}</h3>
              <dl className="hg-list">
                {list.map(t => (
                  <div key={t.id} id={t.id}>
                    <dt><b>{t.term}</b> <span lang="en" className="hg-en">{t.en}</span></dt>
                    <dd>{t.def} <Link href={t.href} prefetch={false} className="hg-ch"><span lang="en">{t.chapter}</span></Link></dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </section>
      </div>
    </PageShell>
  );
}
