"use client";

import React, { useState, useTransition } from "react";
import { voteInPoll } from "@/actions/polls";
import type { FeedPollOption } from "@/lib/feed";
import { ping } from "@/lib/ping";

export default function Poll({
  postId,
  options = [],
  viewerVotedOptionId,
  live = false
}: {
  postId: string;
  options: FeedPollOption[];
  viewerVotedOptionId?: string | null;
  live?: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const [optimisticVote, setOptimisticVote] = useState<string | null>(viewerVotedOptionId || null);
  const [error, setError] = useState("");

  const hasVoted = optimisticVote !== null;
  // the stored counts already include a vote cast before this page loaded
  const extra = (id: string) => (id === optimisticVote && !viewerVotedOptionId ? 1 : 0);
  const totalVotes = options.reduce((sum, opt) => sum + opt.votes + extra(opt.id), 0);

  const handleVote = (optionId: string) => {
    if (hasVoted) return;
    setError("");
    setOptimisticVote(optionId);
    ping(3);
    if (!live) return;

    startTransition(async () => {
      try {
        await voteInPoll(optionId, postId);
      } catch (e) {
        setOptimisticVote(null); // revert on failure
        setError(e instanceof Error && /logged in/i.test(e.message)
          ? "Sign in to vote. Your vote stays private."
          : "That vote did not go through. Try again in a moment.");
      }
    });
  };

  return (
    <div className={`poll ${hasVoted ? 'voted' : ''}`}>
      {options.map((o) => {
        const isThisVoted = o.id === optimisticVote;
        const percent = totalVotes > 0 ? Math.round(((o.votes + extra(o.id)) / totalVotes) * 100) : 0;

        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={isThisVoted}
            disabled={isPending}
            onClick={() => handleVote(o.id)}
          >
            <i style={{ width: hasVoted ? `${percent}%` : undefined }}></i>
            <span>{o.text}</span>
            <em>{percent}%</em>
          </button>
        );
      })}
      <span className="poll-n" role={error ? "alert" : undefined}>
        {error || (hasVoted
          ? "Your vote is private. This is a snapshot of opinion, not a ranking of people."
          : "Tap to vote. Results appear after you choose.")}
      </span>
    </div>
  );
}
