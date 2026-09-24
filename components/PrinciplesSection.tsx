"use client";

export default function PrinciplesSection() {
  return (
    <section className="sec" id="principles" aria-labelledby="h-principles">
  <div className="wrap">
    <span className="eyebrow rv">06 — Principles</span>
    <h2 id="h-principles" className="big rv">Principles you can <em>see in the product.</em></h2>
    <p className="deck rv">Good intentions are easy to write down. These are the commitments behind the design, and the places you would notice them.</p>

    <div className="leaf rv">
      <span className="eyebrow">In plain words</span>
      <h3 className="leaf-h">Seven principles <em>we build by.</em></h3>

      <div className="policies">
        <div><b>Agency</b><p>You choose what reaches you and when. No autoplay, no infinite scroll, and no ranking built around keeping you scrolling.</p></div>
        <div><b>Context</b><p>Posts and replies carry context. Sources can stay attached, and sharing adds your perspective instead of stripping the original.</p></div>
        <div><b>Plurality</b><p>No single viewpoint is treated as the default. People can contribute different experiences and perspectives, and useful ideas can travel across disagreement.</p></div>
        <div><b>Contribution</b><p>Recognition comes from what you add to a conversation and the people you help—not from likes or follower totals.</p></div>
        <div><b>Calm</b><p>Messages can arrive in windows you choose. Heated conversations can slow down without turning every pause into a penalty.</p></div>
        <div><b>Privacy</b><p>Collect as little as practical. No ads and no data sales. When you ask for deletion, we tell you what can be removed and what a legal requirement prevents.</p></div>
        <div><b>Community responsibility</b><p>Community standards are applied with accountable human review. Serious legal requests have a separate process and a transparency record.</p></div>
      </div>

      <ol className="laws">
        <li><span className="n">01</span><div><h3>Question ideas, respect people</h3><p>People bring different backgrounds, values, and experiences. Challenge an idea without turning the person behind it into the target.</p></div></li>
        <li><span className="n">02</span><div><h3>No status scoring. Not anywhere.</h3><p>No hidden social score, class, or popularity tier shapes what people can see or how they are treated.</p></div></li>
        <li><span className="n">03</span><div><h3>The product should stay accountable to its purpose</h3><p>The long-term model should protect the product from quietly becoming an attention business. The goal is to be funded by people who want the platform to exist, not by selling their attention or data.</p></div></li>
      </ol>

      <div className="wrong">
        <h3>And here is what could prove us wrong.</h3>
        <p>Good intentions are not evidence. Here are three product claims we would test—and the results that would make us change the design.</p>
        <ol>
          <li><div><b>The claim</b><p>A feed with a clear end can feel better than a feed with no end.</p></div><div><b>What would change it</b><p>If sustained use falls because the feed ends, we revisit the design rather than pretending the measure is wrong.</p></div></li>
          <li><div><b>The claim</b><p>Restating someone's view before replying improves understanding.</p></div><div><b>What would change it</b><p>If independent reviewers cannot distinguish the restatements from a control, we remove the gate.</p></div></li>
          <li><div><b>The claim</b><p>Predictable message windows can reduce distraction without reducing contribution.</p></div><div><b>What would change it</b><p>If contribution drops materially, we change the delivery model rather than defending the friction.</p></div></li>
        </ol>
        <p className="small" style={{"marginTop":"1.2em","color":"var(--ink-3)"} as React.CSSProperties}>When the product is tested, participants should consent, know the purpose, and receive the results. Findings should be published clearly, including outcomes that go against the design.</p>
      </div>

    </div>


    <h3 className="h3s rv">Privacy you can <em>see and set.</em></h3>
    <p className="deck rv">Choose who sees each thing you share. Move an item inward and fewer people can see it.</p>

    <div className="kgrid">
      <div>
        <span className="hint rv">Drag the label—or focus it and use ← →</span>
        <ul className="klist rv" id="klist">
          <li className="on" data-k="0" tabIndex={0}><span className="kn">Layer 01 · public</span><h3>Your public profile</h3><p>Your name, photo, and a short introduction. Enough for people to recognise your contribution, without exposing more than necessary.</p><span className="seen">Anyone</span></li>
          <li data-k="1" tabIndex={0}><span className="kn">Layer 02 · availability</span><h3>Your availability</h3><p>Whether you have room to talk right now — declared by you, never inferred about you.</p><span className="seen">People you have met</span></li>
          <li data-k="2" tabIndex={0}><span className="kn">Layer 03 · posts & communities</span><h3>Your posts and communities</h3><p>Your posts, interests, and communities. Visibility is something you choose, not a default you inherit.</p><span className="seen">Your communities · 23 people</span></li>
          <li data-k="3" tabIndex={0}><span className="kn">Layer 04 · drafts</span><h3>Your drafts & working notes</h3><p>Early ideas and unfinished thoughts you are not ready to share widely.</p><span className="seen">4 people</span></li>
          <li data-k="4" tabIndex={0}><span className="kn">Layer 05 · private</span><h3>Your private space</h3><p>Private reflections, plans, and notes stay yours unless you choose to share them.</p><span className="seen">You alone</span></li>
        </ul>
        <div className="readout rv" id="readout" aria-live="polite">
          <b>Your public profile—the outermost layer</b>
          <span>“Weekend cooking notes” is visible to <span className="cnt">anyone</span>.</span>
        </div>
      </div>

      <div className="rv">
        <div className="stage" id="stage" role="group" aria-label="Privacy sandbox">
          <div className="ring" data-k="0" style={{"width":"98%","height":"98%"} as React.CSSProperties}><span className="ringlab">Anyone</span></div>
          <div className="ring" data-k="1" style={{"width":"79%","height":"79%"} as React.CSSProperties}><span className="ringlab">People you have met</span></div>
          <div className="ring" data-k="2" style={{"width":"59%","height":"59%"} as React.CSSProperties}><span className="ringlab">Your communities</span></div>
          <div className="ring" data-k="3" style={{"width":"39%","height":"39%"} as React.CSSProperties}><span className="ringlab">A small group</span></div>
          <div className="ring" data-k="4" style={{"width":"20%","height":"20%"} as React.CSSProperties}><span className="ringlab">You</span></div>
          <div id="node" tabIndex={0} role="slider" aria-label="Move the item inward to make it more private" aria-valuemin={1} aria-valuemax={5} aria-valuenow={1} aria-valuetext="Your public profile, visible to anyone">Weekend cooking notes</div>
        </div>
        <p className="small" style={{"textAlign":"center","marginTop":"1em"} as React.CSSProperties}>Each layer gives you more privacy. Move inward when a thought, note, or plan belongs with fewer people.</p>
      </div>
    </div>

    <h3 className="h3s rv">When something goes wrong, <em>people stay accountable.</em></h3>
    <p className="deck rv">Moderation decisions are explained, made by people, and open to appeal.</p>

    <div className="pipe rv">
      <div><em>Step 01</em><b>A report</b><span>From anyone, about a community issue.</span></div>
      <div className="arw2" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
      <div className="ai"><em>Step 02 · software</em><b>Screening</b><span>Flags, summarises, and gathers context. Decides nothing on its own.</span></div>
      <div className="arw2" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
      <div className="hum"><em>Step 03 · people</em><b>Community reviewers</b><span>A rotating group reviews the context, explains the decision, and stays accountable for it.</span></div>
      <div className="arw2" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
      <div className="hum"><em>Step 04 · appeal</em><b>Appeal review</b><span>A wider review panel considers the appeal. The process remains human and explainable.</span></div>
    </div>
    <p className="small rv legal">Legal and government requests follow a separate process, handled by staff and recorded in a transparency log where permitted.</p>

    <h3 className="h3s rv">What the built-in assistant does, <em>and will never do.</em></h3>
    <p className="deck rv">It can summarise a long thread, explain an unfamiliar term, or help you start a reply. Anything marked in indigo was done by software.</p>
    <div className="assist rv">
      <span className="assist-h"><svg width="14" height="14" aria-hidden="true"><use href="#i-thought"/></svg>Thread summary · written by software</span>
      <p>Twenty-six replies. Most describe the same turn: asking what the other person hoped for changed the conversation. Two people disagree, saying listening can become a way to avoid a decision. One reply asks what to do when the other person will not listen back. No sources were cited in the thread.</p>
      <span className="assist-f">Each sentence links to the replies it draws from, so you can read them in full.</span>
    </div>
    <ul className="never stag" style={{"marginTop":"1.4em"} as React.CSSProperties}>
      <li><svg width="19" height="19" aria-hidden="true"><use href="#i-ban"/></svg><div><b>Tell you what to believe</b><span>It will not tell you what to believe or act as an authority on someone's values. It helps summarise, clarify, and surface sources.</span></div></li>
      <li><svg width="19" height="19" aria-hidden="true"><use href="#i-ban"/></svg><div><b>Score a person</b><span>It can describe <em style={{"fontStyle":"normal","color":"var(--ink)"} as React.CSSProperties}>writing</em> — how clear, constructive, or contextual a piece of writing is. It should not score the person behind it or infer personal traits.</span></div></li>
      <li><svg width="19" height="19" aria-hidden="true"><use href="#i-ban"/></svg><div><b>Hide generated content</b><span>Generated content should be clearly labelled so people know when software helped create it.</span></div></li>
      <li><svg width="19" height="19" aria-hidden="true"><use href="#i-ban"/></svg><div><b>Invent certainty</b><span>When it makes a factual claim, it shows the source. When it is unsure, or cannot support an answer, it says so.</span></div></li>
    </ul>

  </div>
</section>
  );
}
