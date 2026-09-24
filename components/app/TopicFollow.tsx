"use client";

import { useState } from "react";
import { useApp } from "@/components/app/AppProvider";
import { setTopicFollow } from "@/actions/app/marks";

export default function TopicFollow({ name, following }: { name: string; following: boolean }) {
  const { run } = useApp();
  const [on, setOn] = useState(following);
  return (
    <button className="btn btn-secondary" type="button" aria-pressed={on} onClick={async () => {
      setOn(!on); const r = await run(setTopicFollow(name, !on)); if (!r.ok) setOn(on);
    }}>{on ? "Following" : "Follow topic"}</button>
  );
}
