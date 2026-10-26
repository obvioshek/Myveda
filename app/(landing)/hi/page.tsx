import Link from "next/link";
import type { Metadata } from "next";
import PageShell from "@/components/landing/PageShell";
import Arrow from "@/components/landing/Arrow";
import HiNav, { HiTag } from "@/components/hi/HiNav";
import ReportProblem from "@/components/learn/ReportProblem";
import { HI_GLOSSARY_PATH, HI_PATH, HI_START_PATH } from "@/content/hi";
import { TEXTS_PATH, textPath } from "@/content/learn/text-refs";
import { DEFAULT_OG_IMAGES } from "@/lib/meta";

const title = "वेद वर्स: पहले विचार समझें, फिर देखें शास्त्रों ने उसे कैसे देखा";
const description = "प्रबंध की अवधारणाएँ सरल भाषा में, एक-एक विचार करके, और उनके साथ भारत के शास्त्रीय ग्रंथों के अंश, संदर्भ सहित। हिंदी संस्करण का पहला भाग।";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: HI_PATH },
  openGraph: { images: DEFAULT_OG_IMAGES, title, description, url: HI_PATH, siteName: "Veda Verse", locale: "hi_IN", type: "website" },
};

// The Hindi edition's front page: what the site is, how passages are marked,
// and where to begin. The chapters themselves are in English for now.
export default function HindiHome() {
  return (
    <PageShell wide note="कोई त्रुटि दिखी?">
      <div lang="hi" className="hi">
        <HiNav here={HI_PATH} en="/" />
        <header className="wrap ci-hero">
          <span className="eyebrow"><i className="sq" aria-hidden="true" />हिंदी संस्करण · पहला भाग</span>
          <h1><span>पहले विचार समझें।</span><span className="red">फिर देखें शास्त्रों ने उसे कैसे देखा।</span></h1>
          <p className="lede">वेद वर्स प्रबंध की अवधारणाओं को सरल भाषा में, एक-एक विचार करके समझाता है। जहाँ भारत का कोई शास्त्रीय ग्रंथ उसी समस्या से मिलता है, वहाँ उस अंश को उसके संदर्भ के साथ विचार के पास रखता है, ताकि आप देख सकें कि बात कितनी पुरानी है, पुराना पाठ क्या जोड़ता है और दोनों कहाँ अलग हैं। यह सबके लिए खुला है; साइन-इन की ज़रूरत नहीं।</p>
          <div className="btn-row">
            <Link className="btn btn-primary" href={HI_START_PATH} prefetch={false}>पाँच चरणों की सैर से शुरू करें<Arrow /></Link>
            <Link className="btn btn-secondary" href={HI_GLOSSARY_PATH} prefetch={false}>शब्दावली</Link>
          </div>
        </header>

        <section className="wrap tx-sec" aria-labelledby="hi-now">
          <h2 id="hi-now" className="h-xs">अभी हिंदी में क्या है</h2>
          <p className="hi-p">यह हिंदी संस्करण का पहला भाग है: यह परिचय, पाँच चरणों की सैर, कुछ शब्द जिनका अनुवाद ठीक से नहीं होता, और इकाई 1 (प्रबंध और प्रबंधकीय अर्थशास्त्र) की पूरी शब्दावली। अध्याय, अभ्यास और बाक़ी उपकरण अभी अंग्रेज़ी में हैं। अनुवाद की समीक्षा चल रही है; कोई त्रुटि दिखे तो बताएँ। <ReportProblem what="हिंदी संस्करण" label="त्रुटि बताएँ" /></p>
        </section>

        <section className="wrap tx-sec" aria-labelledby="hi-marks">
          <h2 id="hi-marks" className="h-xs">अंश कैसे चिह्नित हैं</h2>
          <dl className="hi-marks">
            <div><dt><HiTag kind="documented" /></dt><dd>अंश किसी नामित ग्रंथ में है, और आधुनिक अवधारणा उसकी उचित व्याख्या है।</dd></div>
            <div><dt><HiTag kind="view" /></dt><dd>एक व्याख्यात्मक समानता। ग्रंथ आधुनिक अवधारणा की बात नहीं करता; यह संबंध चिंतन के लिए दी गई एक व्याख्या है, लेखकों के आशय का दावा नहीं।</dd></div>
          </dl>
          <p className="ci-fine">अनुवाद भावानुवाद हैं। किसी अंश को कहीं उद्धृत करने से पहले उसका संदर्भ अपने संस्करण से मिला लें।</p>
        </section>

        <section className="wrap tx-sec" aria-labelledby="hi-texts">
          <h2 id="hi-texts" className="h-xs">ग्रंथ</h2>
          <p className="hi-p">अध्याय 21 ग्रंथों और कवियों से अंश लेते हैं। इनमें तीन सबसे अधिक: <Link className="link" href={textPath("tirukkural")} prefetch={false}>तिरुक्कुऱळ</Link>, <Link className="link" href={textPath("bhagavad-gita")} prefetch={false}>भगवद्गीता</Link> और कौटिल्य का <Link className="link" href={textPath("arthashastra")} prefetch={false}>अर्थशास्त्र</Link>। हर ग्रंथ के पन्ने पर (अंग्रेज़ी में) बताया गया है कि वह क्या है, कब और किसने रचा, उसमें क्या विवादित है, और अध्याय उससे कौन-से अंश लेते हैं।</p>
          <Link className="more" href={TEXTS_PATH} prefetch={false} lang="en">The texts (in English)<Arrow /></Link>
        </section>

        <section className="wrap tx-sec" aria-labelledby="hi-next">
          <h2 id="hi-next" className="h-xs">आगे कहाँ जाएँ</h2>
          <ul className="hi-list">
            <li><Link href={HI_START_PATH} prefetch={false}>पाँच चरणों की सैर</Link>: पाँच आधुनिक विचार, हर एक उस अंश के पास जिसने वही समस्या देखी।</li>
            <li><Link href={HI_GLOSSARY_PATH} prefetch={false}>शब्दावली</Link>: इकाई 1 के शब्द हिंदी और अंग्रेज़ी में, और धर्म, अर्थ, कर्म जैसे शब्दों का अर्थ।</li>
            <li><Link href="/learn" prefetch={false}>अध्याय (अंग्रेज़ी में)</Link>: हर अवधारणा, जहाँ कोई अंश उससे मिलता है वहाँ उस अंश के साथ।</li>
            <li><Link href="/learn/check" prefetch={false}>कहाँ से शुरू करूँ? (अंग्रेज़ी में)</Link>: हर इकाई से कुछ प्रश्न, फिर बताया जाता है कि कहाँ से पढ़ना शुरू करें।</li>
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
