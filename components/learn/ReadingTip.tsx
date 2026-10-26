"use client";

import { useDevice, writeDevice } from "@/components/landing/device";

// What a concept can do that its looks don't fully say, told once at the top
// of an opened concept. It stays away once the reader presses "Got it", opens
// a dotted term (GlossaryTips) or moves with J or K (ReadingBar): they have
// found it.
export const TIP_KEY = "vv-tip-reading";
export const tipLearned = () => writeDevice(TIP_KEY, "1");

export default function ReadingTip() {
  if (useDevice(TIP_KEY)) return null;
  return (
    <p className="ls-tip" role="note">
      <span><b>Tip.</b> A word underlined with dots opens its meaning right here<span className="kb-only">; <kbd>J</kbd> and <kbd>K</kbd> move between concepts, and <kbd>?</kbd> lists every key</span>.</span>
      <button type="button" className="btn btn-ghost" onClick={tipLearned}>Got it</button>
    </p>
  );
}
