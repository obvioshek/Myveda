const fs = require('fs');
const html = fs.readFileSync('reference/index-improved.html', 'utf8');
const lines = html.split('\n');
const start = lines.findIndex(l => l.includes('id="feedList"'));
console.log(lines.slice(start, start + 25).join('\n'));
