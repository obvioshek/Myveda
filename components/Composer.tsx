"use client";

import React, { useState, useTransition } from "react";
import Avatar from "@/components/Avatar";
import { createPost } from "@/actions/post";
import { ping } from "@/lib/ping";

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
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* 31. THE COMPOSER — one extra tap: say what kind of post this is. A fact
   cannot post without a source. The preview is built from React text nodes,
   so nothing typed ever becomes markup. */
export default function Composer({ live = false }: { live?: boolean }) {
  const [type, setType] = useState("question");
  const [kind, setKind] = useState<string | null>("q");
  const [topic, setTopic] = useState("Everyday life");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [source, setSource] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [altText, setAltText] = useState("");
  const [captions, setCaptions] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [done, setDone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [isPending, startTransition] = useTransition();

  const t = title.trim();
  const needSrc = kind === "fact" && !source.trim();
  const filledOptions = options.map(o => o.trim()).filter(Boolean);

  let extrasHint = "";
  if (type === "link" && !linkUrl.trim()) extrasHint = "A link post needs a link";
  if (type === "image" && altText.trim().length < 4) extrasHint = "Describe the image for people who cannot see it";
  if (type === "video" && !captions.trim()) extrasHint = "Videos need captions";
  if (type === "poll" && filledOptions.length < 2) extrasHint = "A poll needs at least two options";

  const isValid = t.length >= 6 && !!kind && !needSrc && !extrasHint;
  const hint = done || errorMsg || (
    !t ? "Start with a clear title"
    : t.length < 6 ? "Add a little more to the title"
    : !kind ? "Now add the kind of contribution it is"
    : needSrc ? "A factual post needs a source—where is it from?"
    : extrasHint ? extrasHint
    : `Ready. It goes to people who follow ${topic}.`
  );

  const touch = () => { if (done) setDone(""); if (errorMsg) setErrorMsg(""); };

  const handlePost = () => {
    if (!isValid || isPending) return;
    setErrorMsg("");
    ping(5);
    if (!live) {
      setDone(`This is a preview, so nothing was published. In the product, ${type === "question"
        ? "a welcomer makes sure every question gets a real answer."
        : `people who follow ${topic} would see it.`}`);
      return;
    }
    startTransition(async () => {
      try {
        await createPost({
          title: t,
          body,
          type: type.toUpperCase(),
          kind: kind!,
          topicName: topic,
          source,
          linkUrl,
          altText,
          captions,
          pollOptions: type === "poll" ? filledOptions : undefined
        });
        setTitle("");
        setBody("");
        setSource("");
        setLinkUrl("");
        setAltText("");
        setCaptions("");
        setOptions(["", ""]);
        setDone(`Posted. People who follow ${topic} will see it in their next feed.`);
      } catch (err: unknown) {
        setErrorMsg(err instanceof Error ? err.message : "That did not post. Try again in a moment.");
      }
    });
  };

  const handleType = (next: string) => {
    setType(next);
    if (next === "question") setKind("q");
    touch();
    ping(1);
  };

  const typeIndex = TYPES.indexOf(type);

  return (
    <>
      <div className="pick" id="ptype" role="tablist" aria-label="Type of post">
        {TYPES.map((ty, i) => (
          <button
            key={ty}
            id={`ptype-t${i}`}
            type="button"
            role="tab"
            aria-selected={type === ty}
            aria-controls="composeForm"
            data-p={ty}
            onClick={() => handleType(ty)}
          >
            {cap(ty)}
          </button>
        ))}
      </div>
      <div className="cgrid" id="composeForm" role="tabpanel" aria-labelledby={`ptype-t${typeIndex}`}>
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
            onChange={e => { setTitle(e.target.value); touch(); }}
          />

          <label className="clab" htmlFor="cbody">Details <span>— optional</span></label>
          <textarea
            id="cbody"
            className="cin"
            rows={3}
            placeholder={PH[type][1]}
            value={body}
            onChange={e => { setBody(e.target.value); touch(); }}
          />

          <div className="cextra" id="cextra">
            {type === "poll" && options.map((o, i) => (
              <input
                key={i}
                className="cin"
                type="text"
                maxLength={80}
                aria-label={i === 0 ? "Option one" : i === 1 ? "Option two" : `Option ${i + 1}`}
                placeholder={i === 0 ? "Option one" : i === 1 ? "Option two" : `Option ${i + 1}`}
                value={o}
                onChange={e => {
                  const next = [...options];
                  next[i] = e.target.value;
                  // a fresh empty box appears once the last one is used, up to four
                  if (i === next.length - 1 && e.target.value.trim() && next.length < 4) next.push("");
                  setOptions(next);
                  touch();
                }}
              />
            ))}
            {type === "image" && (
              <>
                <div className="cdrop">Add an image—and a short description for people who cannot see it</div>
                <input className="cin" type="text" aria-label="Image description" placeholder="Describe the image (at least 4 characters)" value={altText} onChange={e => { setAltText(e.target.value); touch(); }} />
              </>
            )}
            {type === "video" && (
              <>
                <div className="cdrop">Add a short video—captions are required</div>
                <input className="cin" type="text" aria-label="Captions" placeholder="Captions, or a link to the captions file" value={captions} onChange={e => { setCaptions(e.target.value); touch(); }} />
              </>
            )}
            {type === "link" && (
              <input className="cin" type="url" aria-label="Link" placeholder="https://" value={linkUrl} onChange={e => { setLinkUrl(e.target.value); touch(); }} />
            )}
          </div>

          <span className="clab" id="kindLab">What kind of contribution is this?</span>
          <div className="pick ckinds" id="ckind" role="group" aria-labelledby="kindLab">
            {KINDS.map(k => (
              <button
                key={k.k}
                type="button"
                aria-pressed={kind === k.k}
                data-k={k.k}
                onClick={() => { setKind(k.k); touch(); ping(2); }}
              >
                {k.label}
              </button>
            ))}
          </div>

          <div className="csrc" id="csrc" hidden={kind !== "fact"}>
            <label className="clab" htmlFor="csrcin">Where is this from?</label>
            <input
              id="csrcin"
              className="cin"
              type="text"
              autoComplete="off"
              placeholder="A book, article, paper, or person"
              value={source}
              onChange={e => { setSource(e.target.value); touch(); }}
            />
          </div>

          <span className="clab" id="topicLab">Topic</span>
          <div className="chips" id="ctopic" role="group" aria-labelledby="topicLab">
            {TOPICS.map(tp => (
              <button
                key={tp}
                type="button"
                aria-pressed={topic === tp}
                data-t={tp}
                onClick={() => { setTopic(tp); touch(); }}
              >
                {tp}
              </button>
            ))}
          </div>

          <div className="gbar">
            <button className="btn btn-p" id="cgo" type="button" disabled={!isValid || isPending || !!done} onClick={handlePost}>
              <span>{isPending ? "Posting…" : "Post"}</span>
            </button>
            <span className={`cnt${(isValid && !errorMsg) || done ? " ok" : ""}`} id="chint" aria-live="polite">{hint}</span>
          </div>
        </div>

        <div className="cprev">
          <span className="hint">Preview</span>
          <article className="post" id="cprev" aria-live="polite">
            <div className="post-h">
              <Avatar name="You" />
              <div>
                <div className="who">You</div>
                <div className="mt">{topic} · {cap(type)} · just now</div>
              </div>
            </div>
            <b className="ptitle">
              {kind && <span className={`kind k-${kind}`}>{KINDS.find(k => k.k === kind)?.label}</span>}
              {t || "Your title appears here"}
            </b>
            {body.trim() && <div className="body">{body.trim()}</div>}
            {type === "link" && linkUrl.trim() && <div className="post-ctx"><span className="tag src">{linkUrl.trim()}</span></div>}
            {kind === "fact" && source.trim() && <div className="post-ctx"><span className="tag src">Source: {source.trim()}</span></div>}
            {type === "poll" && filledOptions.length > 0 && (
              <div className="poll">
                {filledOptions.map((o, i) => (
                  <button key={i} type="button" aria-pressed="false" tabIndex={-1}><i></i><span>{o}</span><em>0%</em></button>
                ))}
                <span className="poll-n">Tap to vote. Results appear after you choose.</span>
              </div>
            )}
          </article>
        </div>
      </div>
    </>
  );
}
