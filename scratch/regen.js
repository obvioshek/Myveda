const fs = require('fs');
const dir = 'components/';
// 1. extract
require('./extract.js');

// 2. run fix-jsx logic directly in node
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
    .replace(/maxlength="([^"]+)"/g, 'maxLength={$1}')
    .replace(/aria-valuemin="([^"]+)"/g, 'aria-valuemin={$1}')
    .replace(/aria-valuemax="([^"]+)"/g, 'aria-valuemax={$1}')
    .replace(/aria-valuenow="([^"]+)"/g, 'aria-valuenow={$1}')
    .replace(/rows="([^"]+)"/g, 'rows={$1}')
    .replace(/autocomplete=/g, 'autoComplete=')
    .replace(/inputmode=/g, 'inputMode=')
    .replace(/novalidate/g, 'noValidate')
    .replace(/style="([^"]+)"/g, (match, p1) => {
      const parts = p1.split(';').filter(Boolean).map(s => s.trim());
      const styleObj = {};
      parts.forEach(p => {
        const [k, v] = p.split(':').map(s => s.trim());
        if (k && v) {
          let outK = k;
          if (!k.startsWith('--')) {
            outK = k.replace(/-([a-z])/g, g => g[1].toUpperCase());
          }
          styleObj[outK] = v;
        }
      });
      return 'style={{' + Object.keys(styleObj).map(k => '"' + k + '":"' + styleObj[k] + '"').join(',') + '} as React.CSSProperties}';
    })
    .replace(/<input([^>]*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return '<input' + p1 + ' />';
    })
    .replace(/<br>/g, '<br />')
    // Fix HTML comments
    .replace(/<!--([^]*?)-->/g, '{/*$1*/}')
    // Remove box drawing characters
    .replace(/═/g, '=');
}

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
for(const file of files) {
  if (file === 'SpriteSheet.tsx' || file === 'CosmosCanvas.tsx') continue;
  let content = fs.readFileSync(dir + file, 'utf8');
  content = htmlToJsx(content);
  fs.writeFileSync(dir + file, content);
}
console.log('Regenerated and fixed all components');
