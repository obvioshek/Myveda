const fs = require('fs');
const lines = fs.readFileSync('pure-dom.html', 'utf8').split('\n');

const chromeHTML = lines.slice(86, 116).join('\n');
const chromeCode = '"use client";\n\nexport default function SiteChrome() {\n  return (\n    ' + chromeHTML + '\n  );\n}\n';
fs.writeFileSync('components/SiteChrome.tsx', chromeCode);

const sheetHTML = lines.slice(117, 137).join('\n');
const sheetCode = '"use client";\n\nexport default function SettingsSheet() {\n  return (\n    ' + sheetHTML + '\n  );\n}\n';
fs.writeFileSync('components/SettingsSheet.tsx', sheetCode);

console.log('Created SiteChrome and SettingsSheet');
