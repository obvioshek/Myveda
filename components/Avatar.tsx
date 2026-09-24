import React from 'react';

const AV_INK = ["#E0A063","#C98BA0","#9FD6C8","#A3B0EE","#F0B36B","#D98A5F","#C7B27A","#B9A2D6"];
const AV_BG = ["#2E211A","#28202F","#2C2420","#222A29","#312718"];

function hashStr(s: string) {
  let h = 2166136261;
  for(let i=0; i<s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// NextJS SSR means we can't use a global incrementing AVN without hydration mismatches.
// Using a hash of the name for the ID ensures stability across SSR and Client.
export default function Avatar({ name }: { name: string }) {
  if (!name) return null;
  const h = hashStr(name);
  const ink = AV_INK[h % AV_INK.length];
  const bg = AV_BG[(h >> 4) % AV_BG.length];
  const petals = 5 + ((h >> 8) % 4); /* 5..8 */
  const rot = (h >> 12) % 72;
  const id = `av${h.toString(36)}`;
  
  const petalEls = [];
  for(let j=0; j<petals; j++){
    const b = (j/petals) * 6.2832 - 1.5708;
    const cx = (20 + Math.cos(b) * 10.2);
    const cy = (20 + Math.sin(b) * 10.2);
    const dg = (b * 57.2958).toFixed(1);
    petalEls.push(
      <ellipse 
        key={j} 
        cx={cx.toFixed(2)} 
        cy={cy.toFixed(2)} 
        rx="3.9" 
        ry="2.5" 
        fill={ink} 
        fillOpacity=".9" 
        transform={`rotate(${dg} ${cx.toFixed(2)} ${cy.toFixed(2)})`} 
      />
    );
  }

  return (
    <div className="av" data-av={name}>
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <radialGradient id={id} cx="50%" cy="32%" r="78%">
            <stop offset="0" stopColor={ink} stopOpacity=".40"/>
            <stop offset="62%" stopColor={ink} stopOpacity=".13"/>
            <stop offset="100%" stopColor={bg}/>
          </radialGradient>
        </defs>
        <rect width="40" height="40" fill={bg}/>
        <rect width="40" height="40" fill={`url(#${id})`}/>
        <g transform={`rotate(${rot} 20 20)`}>
          <circle cx="20" cy="20" r="15" fill="none" stroke={ink} strokeOpacity=".38" strokeWidth="1.1"/>
          {petalEls}
          <circle cx="20" cy="20" r="5.6" fill="none" stroke={ink} strokeOpacity=".55" strokeWidth="1.1"/>
          <circle cx="20" cy="20" r="2.6" fill={ink}/>
        </g>
      </svg>
    </div>
  );
}
