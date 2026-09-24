const fs = require('fs');

let how = fs.readFileSync('components/HowSection.tsx', 'utf8');
how = how.replace('"use client";', '"use client";\n\nimport Composer from "@/components/Composer";\nimport Reel from "@/components/Reel";');
fs.writeFileSync('components/HowSection.tsx', how);

let data = fs.readFileSync('lib/data.ts', 'utf8');
if (!data.includes('export const REELS')) {
  data += `
export const REELS: [string, string][] = [
  ["A two-minute stretch for long workdays","Health · 48s"],
  ["One budgeting rule that actually sticks","Money · 1:01"],
  ["Why some families still greet elders differently","Culture · 39s"],
  ["Procrastination without the self-judgment","Psychology · 55s"],
  ["Is AI changing how we create?","Technology · 44s"],
  ["A family recipe, and why it gets passed on","Food · 52s"],
  ["What makes a good first-time manager?","Work · 1:10"],
  ["Photographing your street in morning light","Photography · 36s"],
  ["Three stories worth reading with children","Books · 47s"],
  ["Why shared meals still matter","Everyday life · 33s"],
  ["How one neighbourhood fixed its streetlights","Cities · 58s"],
  ["Listening before replying: a small experiment","Ideas · 1:04"]
];
`;
  fs.writeFileSync('lib/data.ts', data);
}
console.log("Patched!");
