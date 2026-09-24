const fs = require('fs');
const html = fs.readFileSync('pure-dom.html', 'utf8');

function extract(startStr, endStr, componentName) {
  const startIdx = html.indexOf(startStr);
  if(startIdx === -1) { console.error('Not found:', startStr); return; }
  
  let endIdx = html.length;
  if (endStr) {
    endIdx = html.indexOf(endStr, startIdx);
    if(endIdx === -1) { console.error('End not found:', endStr); return; }
    endIdx += endStr.length;
  }
  
  const content = html.substring(startIdx, endIdx);
  const code = '"use client";\n\nexport default function ' + componentName + '() {\n  return (\n    ' + content + '\n  );\n}\n';
  fs.writeFileSync('components/' + componentName + '.tsx', code);
  console.log('Created ' + componentName);
}

extract('<section class="hero" id="top"', '</section>', 'Hero');
extract('<section class="sec" id="explore"', '</section>', 'ExploreSection');
extract('<section class="sec" id="why"', '</section>', 'WhySection');
extract('<section class="sec" id="how"', '</section>', 'HowSection');
extract('<section class="sec" id="communities"', '</section>', 'CommunitiesSection');
extract('<section class="sec" id="house"', '</section>', 'HouseSection');
extract('<section class="sec" id="principles"', '</section>', 'PrinciplesSection');
extract('<section class="sec" id="join"', '</section>', 'JoinSection');
extract('<section class="end"', '</section>', 'ClosingSection');
