import React from 'react';

const SC_INK = [
  ["#3A2130","#7A3B24","#E07A2F","#F8C94F"],
  ["#241C2E","#5A3350","#B44B2A","#F0B36B"],
  ["#1E2430","#3B4A52","#9FD6C8","#F5E9D6"],
  ["#2A1D2E","#4A2A22","#D98A5F","#F8C94F"],
  ["#1F1A2E","#403257","#A3B0EE","#E8DCC6"]
];

function hashStr(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export default function ArtScene({ seed }: { seed: string }) {
  const w = 320;
  const h = 180;
  const r = hashStr(seed);
  const pal = SC_INK[r % SC_INK.length];
  const sunX = (((r >> 5) % 70) + 15) / 100 * w;
  const sunY = (((r >> 11) % 40) + 14) / 100 * h;
  const id = `sg${(r % 99999)}`;

  const paths = [];
  /* ridge lines, receding */
  for (let i = 0; i < 4; i++) {
    const base = h * (0.58 + i * 0.13);
    const amp = h * (0.10 - i * 0.018);
    const ph = (((r >> (i * 3 + 2)) % 100) / 100) * 6.28;
    let d = `M0 ${h} L0 ${base.toFixed(1)}`;
    for (let x = 0; x <= w; x += w / 10) {
      d += ` L${x.toFixed(1)} ${(base + Math.sin(x / w * 3.1 + ph + i) * amp).toFixed(1)}`;
    }
    d += ` L${w} ${h}Z`;
    paths.push(
      <path
        key={`ridge-${i}`}
        d={d}
        fill={pal[i % 2 === 0 ? 1 : 0]}
        fillOpacity={(0.5 + i * 0.13).toFixed(2)}
      />
    );
  }

  const stars = [];
  for (let s = 0; s < 10; s++) {
    const sx = (((r >> (s + 1)) % 1000) / 1000) * w;
    const sy = (((r >> (s + 6)) % 1000) / 1000) * h * 0.5;
    stars.push(
      <circle
        key={`star-${s}`}
        cx={sx.toFixed(1)}
        cy={sy.toFixed(1)}
        r={(0.7 + (s % 3) * 0.4).toFixed(1)}
        fill={pal[3]}
        fillOpacity=".35"
      />
    );
  }

  return (
    <svg viewBox="0 0 320 180" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={pal[0]} />
          <stop offset="55%" stopColor={pal[1]} />
          <stop offset="100%" stopColor={pal[0]} />
        </linearGradient>
        <radialGradient id={`${id}r`}>
          <stop offset="0" stopColor={pal[3]} stopOpacity=".85" />
          <stop offset="100%" stopColor={pal[2]} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width={w} height={h} fill={`url(#${id})`} />
      <circle
        cx={sunX.toFixed(0)}
        cy={sunY.toFixed(0)}
        r={(h * 0.42).toFixed(0)}
        fill={`url(#${id}r)`}
      />
      <circle
        cx={sunX.toFixed(0)}
        cy={sunY.toFixed(0)}
        r={(h * 0.055).toFixed(0)}
        fill={pal[3]}
        fillOpacity=".9"
      />
      {paths}
      {stars}
    </svg>
  );
}
