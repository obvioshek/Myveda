"use client";

import Link from "next/link";
import { saveAsk } from "./ask";

// "Discuss" on a passage: like "Ask the community about this" on a lesson,
// it keeps the passage in this browser and opens the community, whose
// composer starts a question about it (components/app/AppProvider.tsx).
// Nothing is sent until the member posts.
export default function DiscussPassage({ about, chapter }: { about: string; chapter: string }) {
  return (
    <Link className="rp-btn" href="/home" prefetch={false} title="Ask the community about this passage. You'll sign in first if you haven't." onClick={() => saveAsk(about, chapter)}>
      Discuss
    </Link>
  );
}
