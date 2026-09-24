"use client";

export default function ClosingSection() {
  return (
    <section className="end" aria-labelledby="h-end">
  <div className="wrap">
   <div className="night">
    <svg className="mark" width="56" height="56" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.4 11.9C4.4 19.3 19.6 19.3 19.6 11.9" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/><circle cx="12" cy="6.3" r="2.5" fill="currentColor"/></svg>
    <h2 id="h-end">You have reached the end. <em>That is on purpose.</em></h2>
    <p>The feed ends the same way. When you are caught up, it says so, and the rest of your day is yours.</p>
    <p className="backup"><a href="#join">Join the early list</a> · <a href="#top">Back to the top</a></p>

    <footer>
      <p>My Veda Verse is a social platform in development. Express thoughtfully. Engage meaningfully. Share responsibly.</p>
      <p className="contact">Contact us: <a href="mailto:admin@myvedaverse.in">admin@myvedaverse.in</a></p>
      <div className="ctl" role="group" aria-label="Page settings">
  <div className="ctl">
        <button id="tone" type="button" aria-pressed="false" title="A low drone and slow bells. Silent until you ask, every time.">
          <span className="bars" aria-hidden="true"><i></i><i></i><i></i></span>
          <span id="toneLabel">Sound off</span>
        </button>
        <button id="still" type="button" aria-pressed="false" title="Stops the ambient motion on this page, whatever your device is set to.">
          <span className="dotm" aria-hidden="true"></span><span id="stillLabel">Motion on</span>
        </button>
  </div>
      </div>
      <div className="sig">
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M4.4 11.9C4.4 19.3 19.6 19.3 19.6 11.9" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/><circle cx="12" cy="6.3" r="2.5" fill="currentColor"/></svg>
        My Veda Verse
      </div>
      <span className="dom">myvedaverse.in</span>
    </footer>
   </div>
  </div>
</section>
  );
}
