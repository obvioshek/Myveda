"use client";

import React, { useState, useTransition } from "react";
import Avatar from "@/components/Avatar";
import { createPost } from "@/actions/post";

const PH: Record<string, [string, string]> = {
  question: ["What is one local problem your city should fix?", "What made you think of it?"],
  text: ["Sometimes listening is more useful than winning an argument", "Say it in a few lines"],
  image: ["Made this at home for the first time", "What is the story behind it?"],
  poll: ["Should we teach financial literacy in school?", "Why are you asking?"],
  video: ["Three minutes on taking better photos on a walk", "What will it help people notice?"],
  link: ["An essay on building a better morning routine", "Why is it worth reading?"]
};

const KINDS = [
  { k: "q", label: "Question" },
  { k: "fact", label: "Fact" },
  { k: "ctx", label: "Context" },
  { k: "exp", label: "Experience" },
  { k: "int", label: "Interpretation" },
  { k: "trad", label: "Tradition" },
  { k: "bel", label: "Belief" },
  { k: "spec", label: "Speculation" }
];

const TOPICS = ["Everyday life", "Food", "Books", "Cities", "Education", "Ideas"];
const TYPES = ["question", "text", "image", "poll", "video", "link"];

export default function Composer() {
  const [type, setType] = useState("question");
  const [kind, setKind] = useState("q");
  const [topic, setTopic] = useState("Everyday life");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  const [source, setSource] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [altText, setAltText] = useState("");
  const [captions, setCaptions] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [isPending, startTransition] = useTransition();

  const isFact = kind === "fact";
  const isValidTitle = title.length >= 6;
  const hasSourceIfFact = !isFact || source.trim().length > 0;
  
  let hasExtras = true;
  if (type === "link") hasExtras = linkUrl.trim().length > 0;
  if (type === "image") hasExtras = altText.trim().length >= 4;
  if (type === "video") hasExtras = captions.trim().length > 0;

  const isValid = isValidTitle && hasSourceIfFact && hasExtras;

  const handlePost = () => {
    if (!isValid) return;
    setErrorMsg("");
    startTransition(async () => {
      try {
        await createPost({ 
          title, 
          body, 
          type: type.toUpperCase(), 
          kind, 
          topicName: topic,
          source,
          linkUrl,
          altText,
          captions
        });
        setTitle("");
        setBody("");
        setSource("");
        setLinkUrl("");
        setAltText("");
        setCaptions("");
      } catch (err: any) {
        setErrorMsg(err.message || "Failed to create post.");
      }
    });
  };

  const handleType = (t: string) => {
    setType(t);
    if (t === "question") setKind("q");
  };

  return (
    <div className="demo rv">
      {errorMsg && <div style={{color: "var(--gerua)"}}>{errorMsg}</div>}
      <div className="pick" id="ptype" role="tablist" aria-label="Type of post">
        {TYPES.map(t => (
          <button 
            key={t}
            role="tab" 
            aria-selected={type === t} 
            onClick={() => handleType(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
      <div className="cgrid" id="composeForm" role="tabpanel" aria-labelledby="ptype-t0">
        <div className="cform">
          <label className="clab" htmlFor="ctitle">Your post</label>
          <input 
            id="ctitle" 
            className="cin" 
            type="text" 
            maxLength={120} 
            autoComplete="off" 
            placeholder={PH[type][0]} 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          
          <label className="clab" htmlFor="cbody">Details <span>— optional</span></label>
          <textarea 
            id="cbody" 
            className="cin" 
            rows={3} 
            placeholder={PH[type][1]}
            value={body}
            onChange={e => setBody(e.target.value)}
          />
          
          <div className="cextra" id="cextra">
            {type === "poll" && (
              <>
                <input className="cin" type="text" aria-label="Option one" placeholder="Option one" />
                <input className="cin" type="text" aria-label="Option two" placeholder="Option two" />
              </>
            )}
            {type === "image" && (
              <div className="cdrop" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div>Add an image—and a short description for people who cannot see it</div>
                <input className="cin" type="text" placeholder="Alt text (min 4 chars)" value={altText} onChange={e => setAltText(e.target.value)} />
              </div>
            )}
            {type === "video" && (
              <div className="cdrop" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div>Add a short video—captions are required</div>
                <input className="cin" type="text" placeholder="Captions file path" value={captions} onChange={e => setCaptions(e.target.value)} />
              </div>
            )}
            {type === "link" && (
              <input className="cin" type="url" aria-label="Link" placeholder="https://" value={linkUrl} onChange={e => setLinkUrl(e.target.value)} />
            )}
          </div>
          
          <span className="clab" id="kindLab">What kind of contribution is this?</span>
          <div className="pick ckinds" id="ckind" role="group" aria-labelledby="kindLab">
            {KINDS.map(k => (
              <button 
                key={k.k} 
                type="button" 
                aria-pressed={kind === k.k}
                onClick={() => setKind(k.k)}
              >
                {k.label}
              </button>
            ))}
          </div>
          
          {kind === "fact" && (
            <div className="csrc" id="csrc">
              <label className="clab" htmlFor="csrcin">Where is this from?</label>
              <input 
                id="csrcin" 
                className="cin" 
                type="text" 
                autoComplete="off" 
                placeholder="A book, article, paper, or person" 
                value={source}
                onChange={e => setSource(e.target.value)}
              />
            </div>
          )}
          
          <span className="clab" id="topicLab">Topic</span>
          <div className="chips" id="ctopic" role="group" aria-labelledby="topicLab">
            {TOPICS.map(t => (
              <button 
                key={t}
                type="button" 
                aria-pressed={topic === t}
                onClick={() => setTopic(t)}
              >
                {t}
              </button>
            ))}
          </div>
          
          <div className="gbar">
            <button className="btn btn-p" id="cgo" type="button" disabled={!isValid || isPending} onClick={handlePost}>
              <span>{isPending ? "Posting..." : "Post"}</span>
            </button>
            <span className="cnt" id="chint" aria-live="polite">
              {!isValidTitle ? "Start with a clear title" : 
               kind === "fact" && !hasSourceIfFact ? "A factual post needs a source—where is it from?" :
               !hasExtras ? "Please complete the required fields for this type of post" : "Looks ready to post"}
            </span>
          </div>
        </div>
        
        <div className="cprev">
          <span className="hint">Preview</span>
          <article className="post" id="cprev" aria-live="polite">
            <div className="post-h">
              <Avatar name="You" />
              <div>
                <div className="who">You</div>
                <div className="mt">{topic} · <span className="ptype">{type.charAt(0).toUpperCase() + type.slice(1)}</span> · just now</div>
              </div>
            </div>
            <b className="ptitle">
              <span className={`kind k-${kind}`}>{KINDS.find(k => k.k === kind)?.label}</span>
              {title || PH[type][0]}
            </b>
            {body && <div className="body"><p>{body}</p></div>}
            {type === "link" && linkUrl && <div className="body"><p><a href={linkUrl} target="_blank" rel="noopener noreferrer">{linkUrl}</a></p></div>}
            
            {type === "poll" && (
              <div className="poll">
                <button type="button" aria-pressed="false"><i></i><span>Option one</span><em>50%</em></button>
                <button type="button" aria-pressed="false"><i></i><span>Option two</span><em>50%</em></button>
                <span className="poll-n">Tap to vote. Results appear after you choose.</span>
              </div>
            )}
            
          </article>
        </div>
      </div>
    </div>
  );
}
