"use client";

import Composer from "@/components/Composer";
import Reel from "@/components/Reel";

export default function HowSection({ reels = [] }: { reels?: any[] }) {
  return (
    <section className="sec" id="how" aria-labelledby="h-how">
  <div className="wrap">
    <span className="eyebrow rv">03 — How it works</span>
    <h2 id="h-how" className="big rv">What you already do online, <em>made a little better.</em></h2>
    <p className="deck rv">Post, discover, read, respond, discuss, share, and message. Each works the way you would expect, with one small change that makes conversations better. Try them below.</p>

    <ol className="flow stag" aria-label="The seven steps">
      <li><a href="#post"><i>1</i><b>Post</b><span>Say what you think, with context</span></a></li>
      <li><a href="#discover"><i>2</i><b>Discover</b><span>Follow topics and people you choose</span></a></li>
      <li><a href="#read"><i>3</i><b>Read</b><span>Threads that show who said what</span></a></li>
      <li><a href="#respond"><i>4</i><b>Respond</b><span>A moment to think when it heats up</span></a></li>
      <li><a href="#discuss"><i>5</i><b>Discuss</b><span>Understand first, then disagree</span></a></li>
      <li><a href="#share"><i>6</i><b>Share</b><span>Pass it on with your take</span></a></li>
      <li><a href="#message"><i>7</i><b>Message</b><span>Private messages, on your schedule</span></a></li>
    </ol>

    <div className="step" id="post">
      <div className="step-h rv"><span className="step-n" aria-hidden="true">1</span><div><h3>Post</h3><p>Ask a question, share a photo or a moment, start a poll, or add a link. One extra tap says what kind of post it is — and a fact needs a source.</p></div></div>
    <div className="demo rv">
      <Composer />
    </div>
    </div>

    <div className="step" id="discover">
      <div className="step-h rv"><span className="step-n" aria-hidden="true">2</span><div><h3>Discover</h3><p>Follow topics and people. Every suggestion tells you why it is there, and every set of recommendations has an end.</p></div></div>
    <div className="demo rv">
      <span className="hint">Follow a few topics</span>
      <div className="chips topics" id="topics" role="group" aria-label="Topics to follow">
        <button type="button" aria-pressed="true">Everyday life</button>
        <button type="button" aria-pressed="false">Food</button>
        <button type="button" aria-pressed="true">Books &amp; writing</button>
        <button type="button" aria-pressed="true">Cities</button>
        <button type="button" aria-pressed="false">Education</button>
        <button type="button" aria-pressed="false">Work</button>
        <button type="button" aria-pressed="false">Photography</button>
        <button type="button" aria-pressed="false">Science</button>
        <button type="button" aria-pressed="false">Technology</button>
        <button type="button" aria-pressed="false">Relationships</button>
        <button type="button" aria-pressed="false">Culture</button>
        <button type="button" aria-pressed="false">Ideas</button>
      </div>
      <p className="small" id="topicSay" aria-live="polite" style={{"marginTop":"1em"} as React.CSSProperties}>Following 3 topics.</p>
    </div>

    <ul className="why3 stag" aria-label="Why this was suggested">
      <li><span className="w-i"><svg aria-hidden="true"><use href="#i-scroll"/></svg></span><div><b>Because you follow Cities</b><span>A civil engineer on why so many footpaths end halfway down the road</span></div></li>
      <li><span className="w-i"><svg aria-hidden="true"><use href="#i-panch"/></svg></span><div><b>From someone you follow</b><span>Meera: the one question I ask before replying to anyone</span></div></li>
      <li><span className="w-i"><svg aria-hidden="true"><use href="#i-bridge"/></svg></span><div><b>A perspective you have not met</b><span>A schoolteacher on which money lessons children actually remember</span></div></li>
    </ul>

    <div className="demo rv">
      <div className="watch">
        <div className="vid">
          <div className="screen">
            <svg viewBox="0 0 320 180" aria-hidden="true">
              <defs><linearGradient id="vg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2A1D2E"/><stop offset="100%" stopColor="#7A3B24"/></linearGradient></defs>
              <rect width="320" height="180" fill="url(#vg1)"/>
              <circle cx="214" cy="80" r="44" fill="#F8C94F" fillOpacity=".12"/>
              <circle cx="214" cy="80" r="22" fill="#F8C94F" fillOpacity=".72"/>
              <path d="M0 132h34v-24h22v14h18v-32h28v42h20v-18h26v18h14v-38h30v38h18v-14h24v14h22v-26h26v26h38v48H0Z" fill="#150E16" fillOpacity=".92"/>
              <g fill="#F8C94F" fillOpacity=".5"><rect x="80" y="96" width="4" height="5"/><rect x="176" y="106" width="4" height="5"/><rect x="250" y="120" width="4" height="5"/></g>
            </svg>
            <div className="play"><i><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-play"/></svg></i></div>
          </div>
          <div className="scrub" id="scrub" aria-hidden="true"></div>
          <div className="meta">
            <b>How to take better photos on an everyday walk</b>
            <span>Photography · Video · 15 min · four chapters</span>
            <ul className="chapters">
              <li><i>00:00</i><span>Light in the first hour of the morning</span></li>
              <li><i>03:10</i><span>Framing an ordinary street</span></li>
              <li><i>07:35</i><span>Photographing people, with their permission</span></li>
              <li><i>11:02</i><span>Editing without overdoing it</span></li>
            </ul>
          </div>
        </div>

        <div>
          <Reel initialReels={reels} />
          <p className="small" style={{"marginTop":"1.1em"} as React.CSSProperties}>The bar at the top shows the whole set, so you always know where it ends.</p>
        </div>
      </div>

      <div className="rules" style={{"marginTop":"1.6em"} as React.CSSProperties}>
        <div><b>Autoplay</b><span>Never</span></div>
        <div><b>Next item</b><span>You choose it</span></div>
        <div><b>Set size</b><span>Yours: 5, 12, or 20</span></div>
        <div><b>Designed for</b><span>Finishing, not minutes watched</span></div>
      </div>
    </div>
    </div>

    <div className="step" id="read">
      <div className="step-h rv"><span className="step-n" aria-hidden="true">3</span><div><h3>Read</h3><p>Threads show who replied and what kind of reply it is. React in words, save posts for later, and get notifications when you choose.</p></div></div>
    <div className="demo rv">
      <div className="rgrid">
        <article className="post tcard" aria-labelledby="tcT">
          <div className="post-h"><div className="av" data-av="Devika Menon"></div><div><div className="who">Devika Menon</div><div className="mt">Ideas · <span className="ptype">Text</span> · 3 hours ago</div></div></div>
          <b className="ptitle" id="tcT"><span className="kind k-exp">Experience</span>Sometimes listening is more useful than winning an argument.</b>
          <div className="body">My brother told me he was leaving his job, and I spent a week arguing with him. Then I asked what he was hoping for. Ten minutes later we were planning it together.</div>
          <div className="rxbar" role="group" aria-label="React to this post">
            <button type="button" aria-pressed="true" data-toggle><svg aria-hidden="true"><use href="#i-bulb"/></svg>Helpful</button>
            <button type="button" aria-pressed="false" data-toggle><svg aria-hidden="true"><use href="#i-thought"/></svg>Made me think</button>
            <button type="button" aria-pressed="false" data-toggle><svg aria-hidden="true"><use href="#i-calm"/></svg>Relatable</button>
            <button type="button" className="sv" aria-pressed="false" data-toggle data-on="Saved" data-off="Save"><svg aria-hidden="true"><use href="#i-bookmark"/></svg><span className="tl">Save</span></button>
          </div>
          <span className="rxnote">Reactions reach Devika privately. Nobody sees a total.</span>
          <div className="replies">
            <div className="rp"><div className="av" data-av="Arjan Singh Gill"></div><p><b>Arjan</b><span className="kind k-exp">Experience</span>Same with my manager. Our meetings got shorter the day I asked what worried her most.</p></div>
            <div className="rp nest"><div className="av" data-av="Devika Menon"></div><p><b>Devika</b><span className="kind k-q">Question</span>Did you tell her afterwards what changed for you?</p></div>
            <div className="rp"><div className="av" data-av="Sarah Penkar"></div><p><b>Sarah</b><span className="kind k-int">Interpretation</span>Listening is not the same as agreeing. It just makes sure you are replying to what was actually said.</p></div>
            <div className="rp"><div className="av" data-av="Siddharth Kamble"></div><p><b>Siddharth</b><span className="kind k-q">Question</span>What do you do when the other person is not listening back?</p></div>
          </div>
          <div className="post-f">
            <span className="said">Arjan, Sarah, Siddharth and 3 others replied</span>
            <span className="act"><a href="#respond">Reply</a><a href="#share">Share with your take</a></span>
          </div>
        </article>

        <div className="rside">
          <div className="notes">
            <h4>Notifications <span>Delivered at 6:00 pm</span></h4>
            <ul>
              <li><div className="av" data-av="Arjan Singh Gill"></div><p><b>Arjan</b> replied to your post about listening<span className="nt">2 hours ago</span></p></li>
              <li><div className="av" data-av="Meera Iyer"></div><p><b>Meera</b> thanked you for your answer on financial literacy<span className="nt">4 hours ago</span></p></li>
              <li><div className="av" data-av="Lakshmi Rao"></div><p><b>Reading Circle</b> has new notes on chapter six<span className="nt">Today</span></p></li>
            </ul>
            <p className="nfoot">No red badges. Notifications arrive together, at times you choose.</p>
          </div>
          <div className="notes">
            <h4>Saved <span>Only you</span></h4>
            <ul>
              <li><svg aria-hidden="true"><use href="#i-bookmark"/></svg><p>What is one local problem your city should fix?<span className="nt">Cities · Karan Mehta</span></p></li>
              <li><svg aria-hidden="true"><use href="#i-bookmark"/></svg><p>Finally finished this book. Here's what stayed with me.<span className="nt">Books · Daniel Kolet</span></p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className="step" id="respond">
      <div className="step-h rv"><span className="step-n" aria-hidden="true">4</span><div><h3>Respond</h3><p>Reply the way you normally would. If a thread heats up and you post several replies in a row, you get a short pause before the next one. Nothing is deleted.</p></div></div>
    <div className="demo rv">
      <div className="flamewrap" style={{"marginTop":"0"} as React.CSSProperties}>
        <div>
          <div className="thread" id="thread">
            <div className="bub"><span className="by">Ira</span>Remote work made informal mentorship harder. Newer colleagues can miss the small lessons that once happened between meetings.</div>
            <div className="bub"><span className="by">Devika</span>Or it showed that mentorship was too dependent on proximity. Maybe the answer is to design more deliberate ways to learn from each other.</div>
          </div>
          <div className="composer" id="composer">
            <input id="cin" type="text" placeholder="Write a reply…" aria-label="Message" autoComplete="off" />
            <button className="btn btn-p" id="cpost" type="button"><span>Post</span></button>
          </div>
          <div className="cool" id="cool" role="status">
            <svg className="bowlsvg" viewBox="0 0 80 80" aria-hidden="true">
              <circle className="trk" cx="40" cy="40" r="33"/>
              <circle className="fil" id="fil" cx="40" cy="40" r="33" strokeDasharray="207.3" stroke-dashoffset="207.3"/>
            </svg>
            <div className="cd">
              <b>A short pause. <i id="ctime">15s</i></b>
              Nothing was deleted. Your draft is still there, waiting for you.
            </div>
          </div>
        </div>
        <div>
          <p className="sub">Why a pause, not a block</p>
          <p className="gnote">A hard stop can feel like punishment. A brief pause creates room to reconsider without taking the conversation away. Same moment of friction, a different invitation.</p>
          <p className="small" style={{"marginTop":"1.2em"} as React.CSSProperties}>Try it: post three replies quickly. The pause here is shortened to fifteen seconds so you can watch it finish.</p>
        </div>
      </div>
    </div>
    </div>

    <div className="step" id="discuss">
      <div className="step-h rv"><span className="step-n" aria-hidden="true">5</span><div><h3>Discuss</h3><p>To disagree, first put the other person's view in your own words. Once they agree it is fair, your reply opens. The argument stays about the idea.</p></div></div>
    <div className="demo rv">
      <span className="hint">Try it—you are about to disagree with Devika</span>
      <div className="gate">
        <div>
          <div className="gstep done" id="gs1">
            <div className="gn"><i>1</i>Her position</div>
            <h4>Devika Menon</h4>
            <p className="quote">In my family, our Sunday meal was never just about food. It was a weekly pause, a way to catch up, share recipes, and make sure everyone had a seat at the table. Calling it simply a “tradition” misses why it mattered.</p>
          </div>

          <div className="gstep now" id="gs2">
            <div className="gn"><i>2</i>Say it back</div>
            <h4>Put her case as fairly as she would</h4>
            <p>Not a summary and not a caricature. If she would not recognise her own point in it, it does not count.</p>
            <textarea id="pvText" rows={3} placeholder="Their position, in your own words…" aria-label="State the other view"></textarea>
            <div className="gbar">
              <button className="btn btn-p" id="pvAsk" type="button" disabled><span>Ask Devika if this is fair</span><span className="arw" aria-hidden="true">→</span></button>
              <span className="cnt" id="pvCnt">0 words · 12 to go</span>
            </div>
          </div>

          <div className="gstep wait" id="gs3">
            <div className="gn"><i>3</i>Her call</div>
            <h4 id="gs3h">Waiting for Devika</h4>
            <p id="gs3p">She sees your restatement before your reply. She can accept it, or send it back with a note.</p>
          </div>
        </div>

        <div>
          <div className="gstep locked" id="rebutBox">
            <div className="veil">
              <div>
                <svg width="26" height="26" aria-hidden="true"><use href="#i-lock"/></svg>
                <span>Your reply opens once the restatement is accepted</span>
              </div>
            </div>
            <div className="gn"><i>4</i>Your reply</div>
            <h4>Now add your perspective</h4>
            <p>Her position is already there in the words she accepted. Build from it.</p>
            <textarea id="rbText" rows={4} placeholder="Your reply…" aria-label="Your reply"></textarea>
            <div className="gbar">
              <button className="btn btn-p" id="rbPost" type="button"><span>Publish</span></button>
              <span className="cnt" id="rbNote">Both parts publish together, in order.</span>
            </div>
          </div>
          <p className="small" style={{"marginTop":"1.1em"} as React.CSSProperties}>The point is simple: understanding the other side should happen before the rebuttal, not after the damage is done.</p>
        </div>
      </div>

      <div className="rules exits">
        <div><b>Only rebuttals pause</b><span>Questions and clarifications never do</span></div>
        <div><b>Sent back twice</b><span>A neutral restatement can be suggested for you</span></div>
        <div><b>No answer in 48 hours</b><span>You can still move on—silence cannot stall the conversation</span></div>
        <div><b>Still stuck?</b><span>Publish anyway, labelled "restatement not yet accepted"</span></div>
      </div>

    </div>
    </div>

    <div className="step" id="share">
      <div className="step-h rv"><span className="step-n" aria-hidden="true">6</span><div><h3>Share</h3><p>Add your take, quote a line, send it to a friend, or save it privately. The original post always travels with it.</p></div></div>
    <div className="demo rv">
      <div className="pick" id="shareOpt">
        <button type="button" aria-pressed="true" data-s="take">Share with your take</button>
        <button type="button" aria-pressed="false" data-s="quote">Quote a line</button>
        <button type="button" aria-pressed="false" data-s="send">Send to a friend</button>
        <button type="button" aria-pressed="false" data-s="save">Save for later</button>
      </div>
      <div className="sgrid">
        <div>
          <label className="clab" htmlFor="stake" id="stakeLab">Your take</label>
          <textarea id="stake" className="cin" rows={3} placeholder="What do you think—and why is it useful to share?"></textarea>
          <div className="gbar">
            <button className="btn btn-p" id="sgo" type="button" disabled><span id="sgoTx">Share</span></button>
            <span className="cnt" id="shint" aria-live="polite">Add a few words of your own</span>
          </div>
        </div>
        <div className="sprev">
          <span className="hint" id="sprevH">What others see</span>
          <article className="post shared">
            <div className="post-h"><div className="av" data-av="Ananya Krishnan"></div><div><div className="who" id="sprevWho">Ananya Krishnan shared</div><div className="mt">Work · just now</div></div></div>
            <div className="body" id="sprevTake">Your words appear here, above the original.</div>
            <div className="qpost">
              <div className="post-h"><div className="av" data-av="Karan Mehta"></div><div><div className="who">Karan Mehta</div><div className="mt">Work · Question</div></div></div>
              <b className="ptitle"><span className="kind k-q">Question</span>What helps a team stay steady when work gets stressful?</b>
              <p>I have found that focusing on the next useful action helps a team more than obsessing over the final outcome. What has worked for you in a high-pressure workplace?</p>
            </div>
          </article>
        </div>
      </div>
    </div>
    </div>

    <div className="step" id="message">
      <div className="step-h rv"><span className="step-n" aria-hidden="true">7</span><div><h3>Message</h3><p>Talk to someone privately. Messages arrive in delivery windows the recipient chooses, senders can see when theirs will land, read receipts are off, and anything urgent can still go through now.</p></div></div>
    <div className="demo rv">
      <div className="inbox">
        <div className="inbox-h">
          <b>Messages</b>
          <span className="win"><svg width="14" height="14" aria-hidden="true"><use href="#i-clock"/></svg>Next delivery window <i id="winAt">6:00 pm</i> · in <i id="winIn">2h 14m</i></span>
        </div>
        <div className="inbox-b" id="inboxBody">
          <div className="held"><div className="av" data-av="Aarav Doshi"></div><div className="bd"><div className="who">Aarav Doshi · waiting</div><div className="tx">Sent you the updated reading list—no rush to reply.</div></div></div>
          <div className="held"><div className="av" data-av="Pema Lhamo"></div><div className="bd"><div className="who">Pema Lhamo · waiting</div><div className="tx">Are you joining the Thursday session? Tomorrow is fine.</div></div></div>
          <div className="mauna" id="mauna">
            <svg width="17" height="17" aria-hidden="true"><use href="#i-mauna"/></svg>
            <span id="maunaTx">Quiet mode is off—messages arrive at the next window</span>
            <button className="sw" id="maunaSw" type="button" role="switch" aria-checked="false" aria-label="Quiet mode"></button>
          </div>
        </div>
        <div className="inbox-f">
          <button type="button" id="sendNow">Send mine now</button>
          <button type="button" id="keepBatched">Keep it for the next window</button>
          <span className="why" id="inboxWhy">Read receipts are off by design. There is no pressure to be instantly available.</span>
        </div>
      </div>
      <p className="small" style={{"marginTop":"1.2em"} as React.CSSProperties}><b style={{"color":"var(--ink)"} as React.CSSProperties}>A calmer rhythm, not silence.</b> Predictable delivery makes it easier to focus without disconnecting.</p>
    </div>
    </div>
  </div>
</section>
  );
}
