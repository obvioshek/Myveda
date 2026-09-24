const fs = require('fs');
const js = fs.readFileSync('scratch/true-original-js.js', 'utf8');
const lines = js.split('\n');

const REMOVE_RANGES = [
  [849, 941],    // 21. PURVAPAKSA & 23. SAMVAD
  [1073, 1262],  // 19. THE FEED & 20. WATCH
  [1358, 1588]   // 30. FOLLOW TOPICS onwards (end of file)
];

const keepLines = [];
for (let i = 0; i < lines.length; i++) {
  let skip = false;
  for (const [start, end] of REMOVE_RANGES) {
    if (i >= start && i <= end) {
      skip = true;
      break;
    }
  }
  if (!skip) {
    keepLines.push(lines[i]);
  }
}

// Ensure the closing braces for the IIFE are preserved if we removed them
// Wait, the IIFE starts at line 1. The last line of the script might be inside the 30-33 section.
// Let's just append `})();` to the end if it's missing.
let finalJS = keepLines.join('\n');
if (!finalJS.trim().endsWith('})();')) {
  finalJS += '\n})();\n';
}

fs.writeFileSync('public/engine.js', finalJS);
console.log('Filtered public/engine.js successfully!');
