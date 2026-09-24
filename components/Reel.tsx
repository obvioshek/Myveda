"use client";

import React, { useState, useEffect, useRef } from "react";
import ArtScene from "@/components/ArtScene";

export default function Reel({ initialReels = [] }: { initialReels?: any[] }) {
  const [index, setIndex] = useState(0);
  const reelRef = useRef<HTMLDivElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (index < initialReels.length) {
      setIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const reel = reelRef.current;
    const nextB = nextBtnRef.current;
    const prevB = prevBtnRef.current;
    const endB = endRef.current;
    if (!reel || !nextB || !prevB || !endB) return;

    let x0 = 0, y0 = 0, dx = 0, w = 260, down = false, live = false, gave = false, moved = false;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function setVal(v: number, o: number) {
      reel!.style.setProperty("--dx", v.toFixed(1) + "px");
      reel!.style.setProperty("--dop", o.toFixed(3));
    }
    
    function atEnd() { 
      return nextB!.disabled || endB!.classList.contains("on"); 
    }
    
    function step(dir: number) {
      const btn = dir < 0 ? nextB : prevB;
      if (btn!.disabled) return false;
      if (reduce) { btn!.click(); return true; }
      
      reel!.classList.add("settling"); 
      setVal(dir * w * 0.62, 0);
      
      setTimeout(function() {
        btn!.click();
        reel!.classList.remove("settling"); 
        setVal(-dir * w * 0.5, 0);
        requestAnimationFrame(function() { 
          requestAnimationFrame(function() {
            reel!.classList.add("settling"); 
            setVal(0, 1);
          });
        });
      }, 210);
      return true;
    }
    
    function home() { 
      reel!.classList.add("settling"); 
      setVal(0, 1); 
    }
    
    function used() { 
      if (phoneRef.current) phoneRef.current.classList.add("used"); 
    }

    const onDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest(".reel-end")) return;
      down = true; live = false; gave = false; moved = false;
      x0 = e.clientX; y0 = e.clientY; dx = 0; w = reel.clientWidth || 260;
      reel.classList.remove("settling");
    };

    const onMove = (e: PointerEvent) => {
      if (!down || gave) return;
      const ax = e.clientX - x0;
      const ay = e.clientY - y0;
      if (!live) {
        if (Math.abs(ax) < 4 && Math.abs(ay) < 4) return;
        /* mostly vertical: this was a page scroll, not a swipe */
        if (Math.abs(ay) > Math.abs(ax)) { gave = true; return; }
        live = true; 
        reel.classList.add("dragging"); 
        used();
        try { reel.setPointerCapture(e.pointerId); } catch(err) {}
      }
      moved = true; dx = ax;
      /* resistance at the two ends of the stack */
      if ((dx > 0 && prevB!.disabled) || (dx < 0 && atEnd())) dx *= 0.3;
      setVal(dx, 1 - Math.min(1, Math.abs(dx) / w) * 0.4);
    };

    const onUp = () => {
      if (!down) return;
      down = false;
      if (!live) return;
      live = false; 
      reel.classList.remove("dragging");
      const far = Math.abs(dx) > Math.max(38, w * 0.2);
      if (!far || !step(dx < 0 ? -1 : 1)) home();
      setTimeout(function() { moved = false; }, 60);
    };

    const onCancel = () => {
      down = false; live = false;
      reel.classList.remove("dragging"); 
      home();
    };

    /* a swipe must not also read as the tap that advances the reel */
    const onClick = (e: MouseEvent) => {
      if (moved) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { prevB!.click(); used(); }
      if (e.key === "ArrowRight") { nextB!.click(); used(); }
    };

    reel.addEventListener("pointerdown", onDown);
    reel.addEventListener("pointermove", onMove);
    reel.addEventListener("pointerup", onUp);
    reel.addEventListener("pointercancel", onCancel);
    reel.addEventListener("click", onClick, true); // capture phase
    reel.addEventListener("keydown", onKeyDown);

    return () => {
      reel.removeEventListener("pointerdown", onDown);
      reel.removeEventListener("pointermove", onMove);
      reel.removeEventListener("pointerup", onUp);
      reel.removeEventListener("pointercancel", onCancel);
      reel.removeEventListener("click", onClick, true);
      reel.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const isAtEnd = initialReels.length === 0 || index >= initialReels.length;
  const current = isAtEnd ? initialReels[initialReels.length - 1] : initialReels[index];
  const seed = `reel${Math.min(index, Math.max(0, initialReels.length - 1))}`;

  return (
    <div className="reelphone" ref={phoneRef}>
      <div 
        ref={reelRef}
        className={`reel ${isAtEnd ? 'settling' : ''}`} 
        id="reel" 
        tabIndex={0} 
        role="group" 
        aria-label="Short-video set—swipe or use the arrow keys"
      >
        <div className="scene" id="reelScene" aria-hidden="true">
          <ArtScene seed={seed} />
        </div>
        <div className="stack" id="reelStack" aria-hidden="true">
          {initialReels.map((_, i) => (
            <i key={i} className={i <= index ? "on" : ""}></i>
          ))}
        </div>
        
        {current && (
          <div className="cap" id="reelCap">
            <b>{current.title}</b>
            <span>{current.subtitle} · {current.duration}</span>
          </div>
        )}
        
        <div className={`reel-end ${isAtEnd ? 'on' : ''}`} id="reelEnd" ref={endRef}>
          <div>
            <svg width="28" height="28" aria-hidden="true"><use href="#i-bowl"/></svg>
            <b>That is the set.</b>
            <p>Twelve for today, the size you chose. Nothing extra is waiting underneath.</p>
          </div>
        </div>
      </div>
      
      <div className="reelbar">
        <button 
          ref={prevBtnRef}
          id="reelPrev" 
          type="button" 
          aria-label="Previous item" 
          disabled={index === 0}
          onClick={handlePrev}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 6 9 12l6 6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span id="reelCount" aria-live="polite">
          {isAtEnd ? "the bottom" : `${index + 1} of ${initialReels.length}`}
        </span>
        <button 
          ref={nextBtnRef}
          id="reelNext" 
          type="button" 
          aria-label="Next item"
          disabled={isAtEnd}
          onClick={handleNext}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <span className="swipehint" aria-hidden="true">Swipe, or use ← →</span>
    </div>
  );
}
