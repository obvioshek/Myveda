const fs = require('fs');

function htmlToJsx(html) {
  return html
    .replace(/class=/g, 'className=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/stroke-dasharray=/g, 'strokeDasharray=')
    .replace(/stroke-opacity=/g, 'strokeOpacity=')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/tabindex="([^"]+)"/g, 'tabIndex={$1}')
    .replace(/ for=/g, ' htmlFor=')
    .replace(/maxlength=/g, 'maxLength=')
    .replace(/autocomplete=/g, 'autoComplete=')
    .replace(/inputmode=/g, 'inputMode=')
    .replace(/novalidate/g, 'noValidate')
    .replace(/style="([^"]+)"/g, (match, p1) => {
      const parts = p1.split(';').filter(Boolean).map(s => s.trim());
      const styleObj = {};
      parts.forEach(p => {
        const [k, v] = p.split(':').map(s => s.trim());
        if (k && v) {
          const camelK = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
          styleObj[camelK] = v;
        }
      });
      return `style={${JSON.stringify(styleObj)}}`;
    })
    .replace(/<img([^>]*?)(?<!\/)>/g, (match, p1) => p1.endsWith('/') ? match : `<img${p1} />`)
    .replace(/<input([^>]*?)(?<!\/)>/g, (match, p1) => p1.endsWith('/') ? match : `<input${p1} />`)
    .replace(/<br>/g, '<br />');
}

const file = process.argv[2];
if (!file) {
  console.error('No file provided');
  process.exit(1);
}
let code = fs.readFileSync(file, 'utf8');
code = htmlToJsx(code);
fs.writeFileSync(file, code);
console.log('Fixed JSX in', file);
