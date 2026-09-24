"use client";

import React, { useState, useTransition } from "react";
import { voteInPoll } from "@/actions/polls";

export default function Poll({ 
  postId, 
  options = [], 
  viewerVotedOptionId 
}: { 
  postId: string;
  options: any[];
  viewerVotedOptionId?: string | null;
}) {
  const [isPending, startTransition] = useTransition();
  const [optimisticVote, setOptimisticVote] = useState<string | null>(viewerVotedOptionId || null);
  
  const hasVoted = optimisticVote !== null;

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes + (opt.id === optimisticVote && !viewerVotedOptionId ? 1 : 0), 0);

  const handleVote = (optionId: string) => {
    if (hasVoted) return;
    
    setOptimisticVote(optionId);
    
    startTransition(async () => {
      try {
        await voteInPoll(optionId, postId);
      } catch (e) {
        setOptimisticVote(null); // revert on failure
        console.error(e);
      }
    });
  };

  return (
    <div className={`poll ${hasVoted ? 'voted' : ''}`}>
      {options.map((o) => {
        const isThisVoted = o.id === optimisticVote;
        const currentVotes = o.votes + (isThisVoted && !viewerVotedOptionId ? 1 : 0);
        const percent = totalVotes > 0 ? Math.round((currentVotes / totalVotes) * 100) : 0;
        
        return (
          <button 
            key={o.id} 
            type="button" 
            aria-pressed={isThisVoted} 
            disabled={hasVoted || isPending}
            onClick={() => handleVote(o.id)}
          >
            <i style={{ width: hasVoted ? `${percent}%` : '0%' }}></i>
            <span>{o.text}</span>
            {hasVoted && <em>{percent}%</em>}
          </button>
        );
      })}
      <span className="poll-n">
        {hasVoted 
          ? "Your vote is private. This is a snapshot of opinion, not a ranking of people."
          : "Tap to vote. Results appear after you choose."}
      </span>
    </div>
  );
}
