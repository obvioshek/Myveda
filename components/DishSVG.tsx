import React from 'react';

export default function DishSVG() {
  return (
    <svg viewBox="0 0 320 180" role="img" aria-label="A plate of rajma, rice, a roti and salad on a wooden table">
      <defs>
        <radialGradient id="dsT" cx="50%" cy="45%" r="75%">
          <stop offset="0" stopColor="#5A3A2A"/>
          <stop offset="100%" stopColor="#241712"/>
        </radialGradient>
      </defs>
      <rect width="320" height="180" fill="url(#dsT)"/>
      <path d="M0 40h320M0 92h320M0 144h320" stroke="#3A2418" strokeOpacity=".55"/>
      <ellipse cx="160" cy="94" rx="104" ry="72" fill="#D9D2C4"/>
      <ellipse cx="160" cy="94" rx="92" ry="62" fill="#EEE8DC"/>
      <circle cx="126" cy="80" r="30" fill="#B8B0A2"/>
      <circle cx="126" cy="80" r="25" fill="#7A2E1E"/>
      <g fill="#551B12">
        <circle cx="116" cy="74" r="3.4"/>
        <circle cx="129" cy="70" r="3.2"/>
        <circle cx="136" cy="84" r="3.4"/>
        <circle cx="120" cy="88" r="3"/>
        <circle cx="128" cy="80" r="3"/>
      </g>
      <path d="M150 120c10-16 44-20 62-6 4 10-6 20-30 20s-34-4-32-14Z" fill="#FBF6EA"/>
      <circle cx="204" cy="72" r="24" fill="#D6A86A"/>
      <g fill="#9A6A34" fillOpacity=".55">
        <circle cx="196" cy="66" r="2.2"/>
        <circle cx="210" cy="78" r="2.6"/>
        <circle cx="214" cy="64" r="1.8"/>
      </g>
      <circle cx="98" cy="120" r="9" fill="#C84B3A"/>
      <circle cx="112" cy="128" r="7" fill="#7FA35A"/>
      <path d="M84 127h14" stroke="#E9E2C8" strokeWidth="3" strokeLinecap="round"/>
      <path d="M116 44c-4-6 4-10 0-16M130 42c-4-6 4-10 0-16" fill="none" stroke="#F5E9D6" strokeOpacity=".35" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
