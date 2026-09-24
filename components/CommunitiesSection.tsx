"use client";

export default function CommunitiesSection() {
  return (
    <section className="sec" id="communities" aria-labelledby="h-communities">
  <div className="wrap">
    <span className="eyebrow rv">04 — Communities</span>
    <h2 id="h-communities" className="big rv">Find your people <em>around what you care about.</em></h2>
    <p className="deck rv">Reading groups, neighbourhoods, young founders, language learners. Join the ones you care about, or start your own. Each community decides its pace, what it keeps, and how it welcomes new members.</p>

    <div className="demo rv">
      <span className="hint">Visit a community</span>
      <div className="pick" id="roomPick">
        <button aria-pressed="true" data-r="prithvi"><svg width="15" height="15" aria-hidden="true"><use href="#i-prithvi"/></svg>Reading Circle</button>
        <button aria-pressed="false" data-r="jal"><svg width="15" height="15" aria-hidden="true"><use href="#i-jal"/></svg>Local Community</button>
        <button aria-pressed="false" data-r="vayu"><svg width="15" height="15" aria-hidden="true"><use href="#i-vayu"/></svg>Young Founders</button>
        <button aria-pressed="false" data-r="akash"><svg width="15" height="15" aria-hidden="true"><use href="#i-akash"/></svg>Language & Culture</button>
      </div>

      <div className="room" id="room" data-el="prithvi" style={{"--rc":"var(--terra-lit)"} as React.CSSProperties}>
        <canvas id="amb" aria-hidden="true"></canvas>
        <div className="room-head">
          <div className="nm"><svg width="19" height="19" style={{"color":"var(--rc)"} as React.CSSProperties} aria-hidden="true"><use href="#i-prithvi" id="rIconUse"/></svg><span id="rName">Reading Circle</span></div>
          <div className="mt" id="rMeta">Reading Circle · kept over time · 2,140 notes</div>
        </div>
        <div className="room-body" id="rBody"></div>
        <div className="room-foot"><span className="lock" id="rMode">Shared record</span><span id="rNote">Useful contributions stay easy to find and build on.</span></div>
      </div>

      <div className="rules">
        <div><b>Format</b><span id="rSpeech">Written, searchable</span></div>
        <div><b>Memory</b><span id="rMem">Kept over time</span></div>
        <div><b>Pace</b><span id="rPace">Thoughtful by design</span></div>
        <div><b>Who can contribute</b><span id="rWho">Everyone in the community</span></div>
      </div>
    </div>

    <h3 className="h3s rv">How communities <em>work.</em></h3>
    <div className="rules cwork stag">
      <div><b>Joining</b><span>Open communities take one tap. Some ask a short question first, so members know why you are there.</span></div>
      <div><b>Starting one</b><span>Any member can propose a community. It opens once a few people agree to steward it.</span></div>
      <div><b>Open or closed</b><span>Each community chooses: open to read, open to join, or members only. You see the choice before you join.</span></div>
      <div><b>In your feed</b><span>Posts from communities you join appear in your feed, marked with the community's name. Mute any community at any time.</span></div>
    </div>

    <div className="rules roles stag">
      <div><b>Stewards</b><span>A few rotating members help keep the space healthy; the role carries responsibility, not status</span></div>
      <div><b>Welcomers</b><span>New members are welcomed with a real response</span></div>
      <div><b>Beginner's thread</b><span>A standing place for basic questions and first steps</span></div>
      <div><b>Community reviewers</b><span>Difficult community decisions are explained openly</span></div>
    </div>


    <h3 className="h3s rv">Profiles show what you add, <em>not your numbers.</em></h3>
    <p className="deck rv">No follower count and no public like total. A profile shows what someone is curious about, where they take part, and how they help.</p>

    <div className="demo rv">
      <div className="pick" id="viewPick">
        <button type="button" aria-pressed="true" data-v="them">As others see it</button>
        <button type="button" aria-pressed="false" data-v="me">As you see it</button>
      </div>
      <div className="idcard" id="gprofile" data-view="them" style={{"--st":"var(--indigo)"} as React.CSSProperties}>
        <div className="id-top">
          <div className="avatar" id="gav" aria-hidden="true"></div>
          <div className="id-name"><b>Ananya Krishnan</b><span>Product designer · joined recently</span><span className="state" id="gstate">Reflective</span></div>
        </div>
        <div className="id-grid">
          <div><h4>Curious about</h4><ul className="tags"><li>Psychology</li><li>Work and leadership</li><li>Food and family traditions</li></ul></div>
          <div><h4>Communities</h4><ul className="tags"><li>First-time managers</li><li>Family recipes</li><li>Everyday science</li></ul></div>
          <div className="id-wide"><h4>Recently asked</h4>
            <ul className="asked"><li>Why do some families have different ways of greeting elders?</li><li>What makes a healthy work ethic without burning out?</li></ul>
          </div>
          <div className="id-wide"><h4>How Ananya takes part</h4>
            <ul className="ledger">
              <li><span className="them">Asks questions that help people think together</span><span className="me">4 questions helped start discussions this month</span></li>
              <li><span className="them">Adds context other people can use</span><span className="me">Added useful sources to 12 replies</span></li>
              <li><span className="them">Shows understanding before disagreeing</span><span className="me">3 restatements accepted by people who initially disagreed</span></li>
            </ul>
          </div>
          <div className="id-wide"><h4>Thanks received</h4>
            <p className="thanks"><span className="them">Private. Only Ananya sees who sent thanks, and what for.</span><span className="me">“Your question helped me have a better conversation with my mother.” — Meera</span></p>
          </div>
        </div>
        <p className="id-rule">Private numbers can help you understand your own participation. Publicly, your profile tells the story through words and contributions.</p>
      </div>
      <div className="id-today">
        <span className="hint">Today, I am…</span>
        <div className="pick" id="gunaPick">
          <button aria-pressed="true" data-g="sattva">Reflective</button>
          <button aria-pressed="false" data-g="rajas">Building</button>
          <button aria-pressed="false" data-g="tamas">Taking a break</button>
          <button aria-pressed="false" data-g="chardi">Here to help</button>
        </div>
        <p className="eff" id="geff">Open to a thoughtful conversation. Slower conversations can be surfaced without pretending everything is urgent.</p>
      </div>
    </div>
  </div>
</section>
  );
}
