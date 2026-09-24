"use client";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="h-top">
  <div className="wrap hero-in">
    <div className="hero-copy">
      <p className="kick">Express thoughtfully. Engage meaningfully. Share responsibly.</p>
      <h1 id="h-top">A social platform built for <em>better conversations.</em></h1>
      <p className="deck">Share moments from your day, ask questions, and follow the people, topics, and communities you care about — without like counts, follower scoreboards, or a feed that never ends.</p>
      <p className="hero-name">Open to everyone, for everyday conversation. The name comes from an old Indian idea — that knowledge grows when people think together. No religious or cultural background needed.</p>
      <div className="cta">
        <a className="btn btn-p" href="#join"><span>Join the early list</span><span className="arw" aria-hidden="true">→</span></a>
        <a className="btn btn-g" href="#how"><span>See how it works</span></a>
      </div>
      <p className="cta-note">Free to join · Member-supported · Opening in stages</p>
    </div>

    <figure className="hero-demo">
      <div className="app">
        <div className="app-bar" aria-hidden="true">
          <span className="app-dots"><i></i><i></i><i></i></span>
          <span className="app-search"><svg><use href="#i-search"/></svg>Search people, topics, communities</span>
          <span className="app-bell"><svg><use href="#i-bell"/></svg><i>2</i></span>
          <span className="av app-me" data-av="Ananya Krishnan"></span>
        </div>
        <div className="app-body">
          <ul className="app-rail" aria-hidden="true">
            <li className="on"><svg><use href="#i-home"/></svg>Home</li>
            <li><svg><use href="#i-compass"/></svg>Explore</li>
            <li><svg><use href="#i-people"/></svg>Communities</li>
            <li><svg><use href="#i-bookmark"/></svg>Saved</li>
            <li><svg><use href="#i-bell"/></svg>Notifications</li>
          </ul>
          <div className="app-main">
            <div className="app-tabs" aria-hidden="true"><span>Following</span><span className="on">From the house</span><span>Everyday life</span><span>Books</span><span>Food</span></div>
            <article className="apost house" aria-label="From the house of Veda Verse: why rangoli was drawn with rice flour">
              <div className="apost-h"><span className="hm" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4.4 11.9C4.4 19.3 19.6 19.3 19.6 11.9" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/><circle cx="12" cy="6.3" r="2.5" fill="currentColor"/></svg></span><div className="am"><b>From the house of Veda Verse</b><span>Everyday life · 6 min read</span></div><span className="kind k-trad">Tradition</span></div>
              <p className="apost-t">Why was rangoli traditionally drawn with rice flour?</p>
              <p className="apost-b">Before bright powders, many homes drew it with rice or wheat flour. By noon, ants, sparrows, and squirrels had eaten the edges — a small share left at the door for other lives.</p>
              <div className="apost-img"><svg viewBox="0 0 320 120" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A rice-flour rangoli at a doorstep, with a line of ants carrying grains away"><defs><linearGradient id="klA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4A3830"/><stop offset="1" stopColor="#2B201B"/></linearGradient></defs><rect width="320" height="120" fill="url(#klA)"/><rect y="108" width="320" height="12" fill="#57443A"/><g fill="none" stroke="#F3EBDD" strokeWidth="2" strokeLinecap="round" strokeOpacity=".92"><path d="M160 20 198 58 160 96 122 58Z"/><path d="M160 32 186 58 160 84 134 58Z"/><circle cx="160" cy="58" r="8"/><path d="M122 58c-18-18-18 18 0 0M198 58c18-18 18 18 0 0M160 20c-18-16 18-16 0 0M160 96c-18 16 18 16 0 0"/></g><g fill="#F3EBDD"><circle cx="141" cy="39" r="2.2"/><circle cx="179" cy="39" r="2.2"/><circle cx="141" cy="77" r="2.2"/><circle cx="179" cy="77" r="2.2"/><circle cx="160" cy="58" r="2.2"/><circle cx="206" cy="74" r=".9" fillOpacity=".7"/><circle cx="210" cy="71" r=".8" fillOpacity=".6"/></g><g fill="#140F0C"><ellipse cx="214" cy="79.0" rx="2.4" ry="1.4"/><ellipse cx="217" cy="79.6" rx="1.8" ry="1.2"/><ellipse cx="228" cy="84.0" rx="2.4" ry="1.4"/><ellipse cx="231" cy="84.6" rx="1.8" ry="1.2"/><ellipse cx="242" cy="89.0" rx="2.4" ry="1.4"/><ellipse cx="245" cy="89.6" rx="1.8" ry="1.2"/><ellipse cx="256" cy="93.5" rx="2.4" ry="1.4"/><ellipse cx="259" cy="94.1" rx="1.8" ry="1.2"/><ellipse cx="270" cy="98.0" rx="2.4" ry="1.4"/><ellipse cx="273" cy="98.6" rx="1.8" ry="1.2"/><ellipse cx="284" cy="102.0" rx="2.4" ry="1.4"/><ellipse cx="287" cy="102.6" rx="1.8" ry="1.2"/></g><g fill="#F3EBDD"><circle cx="219.4" cy="77.4" r="1"/><circle cx="247.4" cy="87.4" r="1"/><circle cx="275.4" cy="96.4" r="1"/></g></svg></div>
              <div className="apost-f" aria-hidden="true">
                <span className="rx on"><svg><use href="#i-bulb"/></svg>Helpful</span>
                <span className="rx"><svg><use href="#i-reply"/></svg>Reply</span>
                <span className="rx"><svg><use href="#i-repost"/></svg>Share</span>
                <span className="rx sv on"><svg><use href="#i-bookmark"/></svg>Saved</span>
              </div>
              <p className="apost-who">Harleen, Ezra and 14 others replied</p>
            </article>
            <article className="apost house" aria-label="From the house of Veda Verse: did India's independence wait for midnight?">
              <div className="apost-h"><span className="hm" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4.4 11.9C4.4 19.3 19.6 19.3 19.6 11.9" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/><circle cx="12" cy="6.3" r="2.5" fill="currentColor"/></svg></span><div className="am"><b>From the house of Veda Verse</b><span>History · 5 min read</span></div><span className="kind k-ctx">Context</span></div>
              <p className="apost-t">Did India's independence wait for midnight because of the stars?</p>
              <p className="apost-b">The date came from a law and a viceroy; the hour, many say, from astrologers. And one country freed by the same Act did not wait for the clock. Can you guess which?</p>
              <div className="apost-r"><span className="av" data-av="Ezra Samson"></span><p><b>Ezra</b><span className="kind k-q">Question</span>I have a guess. Which parts are recorded, and which are only told?</p></div>
            </article>
          </div>
        </div>
      </div>
      <div className="app-toast"><span className="av" data-av="Meera Iyer"></span><p><b>Meera</b> replied to your question: “Should we teach financial literacy in school?”</p></div>
      <figcaption>A preview of the app: reads from the house of Veda Verse in their own tab, replies that say what they are, and no like counts.</figcaption>
    </figure>
  </div>
</section>
  );
}
