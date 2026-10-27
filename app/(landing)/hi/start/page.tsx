import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import HiNav, { HiTag } from "@/components/hi/HiNav";
import { HI_GLOSSARY_PATH, HI_START_PATH, hiWalk } from "@/content/hi";
import { deva } from "@/content/learn";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const title = "यहाँ से शुरू करें: पाँच विचार, दो तरह से पढ़े गए · वेद वर्स";
const description = "शास्त्रीय ग्रंथों को प्रबंध के विचारों के साथ पढ़ना नया है? पाँच छोटे चरण, हर एक में एक आधुनिक विचार और एक अंश, और यह कि पुराने पाठ को आज की समस्या पर विचारक की तरह कैसे पढ़ें।";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: HI_START_PATH, languages: { "en-IN": "/learn/start", "hi-IN": HI_START_PATH } },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: HI_START_PATH, siteName: "Veda Verse", locale: "hi_IN", type: "article" },
};

const html = (__html: string) => ({ __html });

// The five-step walk in Hindi (content/hi). The passages' original text and
// references come from the English chapters.
export default function HindiWalk() {
  const steps = hiWalk();
  return (
    <PageShell wide note="कोई त्रुटि दिखी?">
      <div lang="hi" className="hi">
        <HiNav here={HI_START_PATH} en="/learn/start" />
        <header className="wrap ci-hero pr-hero">
          <span className="eyebrow"><i className="sq" aria-hidden="true" />पाँच चरणों की सैर</span>
          <h1><span>पाँच विचार,</span><span className="red">दो तरह से पढ़े गए।</span></h1>
          <p className="lede">यदि आपने कभी किसी शास्त्रीय ग्रंथ को प्रबंध के किसी विचार के साथ नहीं पढ़ा है, तो यहाँ से शुरू करें। हर चरण एक आधुनिक विचार को उस अंश के पास रखता है जिसने बहुत पहले वही समस्या देखी, और दोनों को साथ पढ़ने की एक बात दिखाता है। लगभग पंद्रह मिनट।</p>
        </header>

        <ol className="wrap wk">
          {steps.map((s, i) => (
            <li key={s.href} className="wk-step" aria-labelledby={`hk-${i}`}>
              <div className="wk-head">
                <span className="wk-n" lang="sa" aria-hidden="true">{deva(i + 1)}</span>
                <div>
                  <span className="label red">चरण {i + 1} / {steps.length}</span>
                  <h2 id={`hk-${i}`} className="h-sm">{s.step}</h2>
                </div>
              </div>
              <p className="wk-notice"><b>ध्यान दें।</b> {s.notice}</p>
              <div className="wk-pair">
                <p className="ca-pair"><b>{s.modern}</b><span aria-hidden="true"> ↔ </span><span className="sr-only"> और </span>{s.classic}</p>
                <blockquote className={`lp-q hi-q${s.kind === "view" ? " view" : ""}`} dangerouslySetInnerHTML={html(s.quoteHtml)} />
                <p className="wk-how">{s.how}</p>
                <dl className="ca-notes">
                  <div><dt>यह क्या जोड़ता है</dt><dd>{s.adds}</dd></div>
                  <div><dt>दोनों कहाँ अलग हैं</dt><dd>{s.differs}</dd></div>
                </dl>
                <div className="ca-foot">
                  <HiTag kind={s.kind} />
                  <Link className="more" href={s.href} prefetch={false}>पूरा पाठ पढ़ें (अंग्रेज़ी में): <span lang="en">{s.concept}, {s.chapter}</span><Arrow /></Link>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <section className="wrap wk-next" aria-labelledby="hk-next">
          <h2 id="hk-next" className="h-xs">आगे कहाँ जाएँ</h2>
          <ul>
            <li><Link className="link" href="/learn" prefetch={false}>अध्याय (अंग्रेज़ी में)</Link>: हर अवधारणा, जहाँ कोई अंश उससे मिलता है वहाँ उसके साथ।</li>
            <li><Link className="link" href={HI_GLOSSARY_PATH} prefetch={false}>शब्दावली</Link>: इकाई 1 के शब्द, और धर्म, अर्थ, कर्म जैसे शब्दों का अर्थ।</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
