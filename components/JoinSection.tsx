"use client";

export default function JoinSection() {
  return (
    <section className="sec" id="join" aria-labelledby="h-join">
  <div className="wrap">
    <span className="eyebrow rv">07 — Join</span>
    <h2 id="h-join" className="big rv">Be here <em>from the start.</em></h2>
    <p className="deck rv">We are opening in stages. The first members start the first communities and set the tone for everyone who joins after them.</p>

    <div className="joinbox rv">
      <div className="ji">
       <div>
        <h3>Join the early list, <em>and we will email you when your invitation is ready.</em></h3>
        <p>One email address. No profile form, no phone number, no unnecessary questions. You will hear from us when there is something real to join.</p>

        <label className="jlab" htmlFor="joinmail">Your email address</label>
        <form className="joinform" id="joinform" autoComplete="off" noValidate>
          <input id="joinmail" type="email" inputMode="email" placeholder="you@example.com" autoComplete="email" aria-describedby="joinsay" />
          <button className="btn btn-p" type="submit"><span>Join the early list</span><span className="arw" aria-hidden="true">→</span></button>
        </form>
        <output className="jsay" id="joinsay" htmlFor="joinmail" aria-live="polite"></output>

        <ul className="jterms">
          <li>One confirmation, one launch message</li>
          <li className="no">No drip campaign</li>
          <li>Unsubscribe in one click</li>
          <li className="no">No tracking pixel</li>
          <li>Delete the address when you ask, subject to legal requirements</li>
          <li className="no">Never sold or used to identify you elsewhere</li>
        </ul>
       </div>
      </div>
      <p className="jfoot"><b>Said plainly:</b> This page is a design concept and the list is not live yet. Until it is, this form should not store anything. When it opens, you will confirm from your inbox before the address is retained. Questions? Write to <a href="mailto:admin@myvedaverse.in">admin@myvedaverse.in</a>.</p>
    </div>

    <ul className="facts stag" aria-label="About the project">
      <li><b>Who is building it</b><span>An independent team based in India.</span></li>
      <li><b>Stage</b><span>Design prototype. Nothing is live yet; this page shows how the product is meant to work.</span></li>
      <li><b>Where it will run</b><span>On the web first, then Android and iOS.</span></li>
      <li><b>Contact</b><span><a href="mailto:admin@myvedaverse.in">admin@myvedaverse.in</a></span></li>
    </ul>

    <h3 className="h3s rv">Your first <em>ten minutes.</em></h3>
    <p className="deck rv">Four short steps. No birth date, no contact upload, no personality quiz.</p>

    <div className="demo rv">
      <div className="pick" id="stepPick" role="tablist" aria-label="The four steps">
        <button role="tab" aria-selected="true" data-s="0">1 · Interests</button>
        <button role="tab" aria-selected="false" data-s="1">2 · Delivery windows</button>
        <button role="tab" aria-selected="false" data-s="2">3 · First question</button>
        <button role="tab" aria-selected="false" data-s="3">4 · Privacy</button>
      </div>
      <div className="bar" aria-hidden="true"><i id="stepBar"></i></div>

      <div className="pane on" data-p="0">
        <div>
          <span className="kicker">Instead of an empty feed</span>
          <h3>Choose a few topics</h3>
          <p>Choose what genuinely interests you—culture, work, science, books, relationships, local life, and more. Your first feed starts there.</p>
          <div className="reveal-box"><b>What you see</b>A small set of real questions, each with a simple explanation of why it reached you.</div>
        </div>
        <figure><svg viewBox="0 0 200 200" aria-hidden="true">
          <g fill="none" stroke="var(--line)" strokeWidth="1.4"><rect x="22" y="46" width="70" height="28" rx="14"/><rect x="104" y="46" width="74" height="28" rx="14"/><rect x="34" y="126" width="62" height="28" rx="14"/></g>
          <rect x="40" y="86" width="84" height="28" rx="14" fill="var(--accent)"/>
          <rect x="108" y="126" width="60" height="28" rx="14" fill="var(--accent)" opacity=".75"/>
        </svg></figure>
      </div>

      <div className="pane" data-p="1">
        <div>
          <span className="kicker">Instead of “allow all notifications?”</span>
          <h3>Choose your delivery windows</h3>
          <p>Morning, lunch, evening, or your own schedule. Messages arrive together, and people can see when they will reach you.</p>
          <div className="reveal-box"><b>What you see</b>A simple day-long timeline. Choose a window, and the next person messaging you sees the delivery time before they send.</div>
        </div>
        <figure><svg viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="74" fill="none" stroke="var(--line)"/>
          <path d="M40 124h120" stroke="var(--ink-3)" strokeOpacity=".5" strokeWidth="1.2" strokeLinecap="round"/>
          <g fill="var(--accent)"><circle cx="62" cy="124" r="8"/><circle cx="104" cy="124" r="8"/><circle cx="146" cy="124" r="8"/></g>
          <g stroke="var(--accent)" strokeOpacity=".45" strokeWidth="1.2" strokeLinecap="round"><path d="M62 108v-12M104 108v-12M146 108v-12"/></g>
          <path d="M84 70c0-12 32-12 32 0" fill="none" stroke="var(--ink-3)" strokeOpacity=".6" strokeWidth="1.4" strokeLinecap="round"/>
        </svg></figure>
      </div>

      <div className="pane" data-p="2">
        <div>
          <span className="kicker">Start with a question</span>
          <h3>Ask your first question</h3>
          <p>Anything you have genuinely wondered. Why do some families keep recipes by memory? Is AI changing how we create? What makes a good manager?</p>
          <div className="reveal-box"><b>What you see</b>It reaches people who follow the topic, and a welcoming member helps make sure your first question gets a real response.</div>
        </div>
        <figure><svg viewBox="0 0 200 200" aria-hidden="true">
          <rect x="34" y="40" width="132" height="64" rx="16" fill="none" stroke="var(--accent)" strokeWidth="1.6"/>
          <path d="M92 60c0-9 16-9 16 0 0 7-8 7-8 14M100 84v1" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round"/>
          <g fill="var(--leaf)"><circle cx="64" cy="140" r="9"/><circle cx="100" cy="150" r="9"/><circle cx="136" cy="140" r="9"/></g>
          <path d="M70 132 92 108M100 140v-36M130 132 108 108" stroke="var(--line)" strokeDasharray="2 4"/>
        </svg></figure>
      </div>

      <div className="pane" data-p="3">
        <div>
          <span className="kicker">Privacy you can understand</span>
          <h3>One object, five visibility rings</h3>
          <p>Instead of burying privacy in settings, you can explore it directly through the same object you move to set visibility.</p>
          <div className="reveal-box"><b>What you see</b>Move it outward to share more broadly; move it inward to keep it private. The interaction makes the permission visible before you choose it. ↑</div>
        </div>
        <figure><svg viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="84" fill="none" stroke="var(--line)"/>
          <circle cx="100" cy="100" r="62" fill="none" stroke="var(--line)"/>
          <circle cx="100" cy="100" r="40" fill="none" stroke="var(--line)"/>
          <circle cx="100" cy="100" r="18" fill="none" stroke="var(--accent)" strokeOpacity=".8"/>
          <circle cx="100" cy="38" r="13" fill="var(--accent)"/>
        </svg></figure>
      </div>

      <div className="nav-b">
        <button id="sPrev" type="button" disabled>← Back</button>
        <button id="sNext" type="button">Next →</button>
      </div>
    </div>

    <h3 className="h3s rv">Questions people ask.</h3>

    <div className="faq3 stag">
      <div>
        <h4>When can I sign in?</h4>
        <p>Invitations go out in stages, starting with the early list. You will get <b>one email</b> when yours is ready, and nothing before then.</p>
      </div>
      <div>
        <h4>Do I need to know anything about Indian culture?</h4>
        <p>No. Most conversations are about everyday life — food, books, work, cities, family, and ideas. Indian life and traditions come up naturally, because they are part of many members' lives. <b>If you are curious, you are welcome.</b></p>
      </div>
      <div>
        <h4>Is this a religious app?</h4>
        <p>No. It is a social platform. People talk about everyday life, culture, science, work, and values without being asked to adopt any worldview. <b>Nobody is asked to believe anything</b>, and nobody is mocked for what they believe.</p>
      </div>
      <div>
        <h4>No ads and no data sales. So how is it paid for?</h4>
        <p>Joining and taking part stay free. The platform is meant to be funded by <b>members and patrons who choose to support it</b>, with open finances. If that means staying smaller, we would rather stay smaller than become an attention business.</p>
      </div>
    </div>
  </div>
</section>
  );
}
