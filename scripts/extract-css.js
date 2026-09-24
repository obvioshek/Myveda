const fs = require('fs');
const crypto = require('crypto');

const content = fs.readFileSync('reference/index-improved.html', 'utf8');
const lines = content.split('\n');

// Lines 30 to 2370 means line 31 through 2369 since <style> is at 30 and </style> is at 2370
const cssLines = lines.slice(30, 2369);
const cssContent = cssLines.join('\n') + '\n';

fs.writeFileSync('app/styles/mvv.css', cssContent);

const hash = crypto.createHash('sha256').update(fs.readFileSync('app/styles/mvv.css')).digest('hex');
fs.writeFileSync('app/styles/mvv.css.sha256', hash + '  app/styles/mvv.css\n');

console.log('CSS extracted and hashed successfully.');
