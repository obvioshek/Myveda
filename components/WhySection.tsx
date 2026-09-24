"use client";

export default function WhySection() {
  return (
    <section className="sec" id="why" aria-labelledby="h-why">
  <div className="wrap">
    <span className="eyebrow rv">02 — Why we are building this</span>
    <h2 id="h-why" className="big rv">Social media got loud. <em>It does not have to stay that way.</em></h2>
    <p className="deck rv">Most feeds are designed to keep you scrolling, and what spreads fastest is often what makes people angriest. The good parts of being online — sharing, learning, meeting people — deserve a better place.</p>

    <ul className="probs stag" aria-label="What goes wrong today">
      <li><span>Rewards time spent</span><b>Noise</b><p>Endless feeds, autoplay, and alerts compete for every spare minute.</p></li>
      <li><span>Rewards numbers</span><b>Performance</b><p>Likes and follower counts turn sharing into keeping score.</p></li>
      <li><span>Rewards reactions</span><b>Outrage</b><p>The sharpest reply travels furthest, so conversations turn into contests.</p></li>
    </ul>

    <h3 className="h3s rv">A better way <em>to be online.</em></h3>
    <ol className="ees stag" aria-label="How we hope people take part">
      <li><span className="ee-i"><svg aria-hidden="true"><use href="#i-hand"/></svg></span><b className="ee-h">Express thoughtfully</b><p>Post what you mean, with a little context, so people know what they are reading.</p></li>
      <li><span className="ee-i"><svg aria-hidden="true"><use href="#i-bridge"/></svg></span><b className="ee-h">Engage meaningfully</b><p>Reply to understand, ask a follow-up, and disagree without making it personal.</p></li>
      <li><span className="ee-i"><svg aria-hidden="true"><use href="#i-panch"/></svg></span><b className="ee-h">Share responsibly</b><p>Pass things on with your own take, and keep the original context attached.</p></li>
    </ol>

    <div className="vs-wrap rv">
      <table className="vs">
        <caption className="vh">How My Veda Verse is built differently</caption>
        <thead><tr><th scope="col">Most social platforms</th><th scope="col">My Veda Verse</th></tr></thead>
        <tbody>
          <tr><td>Built to hold your attention</td><td><b>Built around useful contributions</b><span>Success means people found what they came for</span></td></tr>
          <tr><td>A feed that never ends</td><td><b>A feed with a natural end</b><span>When you are caught up, it tells you so</span></td></tr>
          <tr><td>Opinion and fact look the same</td><td><b>Posts and replies say what they are</b><span>A fact with a source, an experience, an interpretation, or a question</span></td></tr>
          <tr><td>The most reactive posts travel furthest</td><td><b>Helpful replies travel further</b><span>Especially when people who usually disagree both find them useful</span></td></tr>
          <tr><td>Resharing strips context</td><td><b>Sharing keeps the original</b><span>Your take travels with the post, not instead of it</span></td></tr>
          <tr><td>Likes and follower counts</td><td><b>Reputation through contribution</b><span>What you have helped people with, not how many follow you</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
  );
}
