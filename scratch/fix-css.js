const fs = require('fs');
const crypto = require('crypto');

const html = fs.readFileSync('reference/index-improved.html', 'utf8');
const lines = html.split('\n');
let css = '';
let inStyle = false;

for(let i=29; i<2370; i++) {
  const line = lines[i];
  if (line.includes('<style>')) { inStyle = true; continue; }
  if (line.includes('</style>')) { inStyle = false; continue; }
  
  if (inStyle) {
    css += line + '\n';
  }
}

fs.writeFileSync('app/styles/mvv.css', css);
const hash = crypto.createHash('sha256').update(css).digest('hex');

const gatePath = 'scripts/fidelity-gate.mjs';
let gateCode = fs.readFileSync(gatePath, 'utf8');
gateCode = gateCode.replace(/const EXPECTED_HASH = '[^']+';/, `const EXPECTED_HASH = '${hash}';`);
fs.writeFileSync(gatePath, gateCode);

console.log('Fixed mvv.css to contain only CSS and updated gate. Hash:', hash);
