const fs = require('fs');
const js = fs.readFileSync('scratch/true-original-js.js', 'utf8');

const postsStart = js.indexOf('var POSTS=[');
const postsEnd = js.indexOf('];', postsStart) + 2;
const postsStr = js.substring(postsStart, postsEnd);

const orgStart = js.indexOf('var ORGS=[');
const orgEnd = js.indexOf('];', orgStart) + 2;
const orgStr = js.substring(orgStart, orgEnd);

if (postsStart === -1 || orgStart === -1) {
  console.log('Arrays not found!');
  process.exit(1);
}

// Convert them to valid TypeScript exports
const tsCode = `
export interface Reaction {
  0: string; // name
  1: string; // type
  2: string; // text
}

export interface Post {
  who: string;
  topic: string;
  type: string;
  k: string;
  when: string;
  title: string;
  body: string;
  art?: string;
  cap?: string;
  rp?: Reaction[];
  p?: string; // id
  m?: string; // url
}

export ${postsStr.replace('var POSTS=[', 'const POSTS: Post[] = [')}

export ${orgStr.replace('var ORGS=[', 'const ORGS: Post[] = [')}
`;

fs.mkdirSync('lib', { recursive: true });
fs.writeFileSync('lib/data.ts', tsCode);
console.log('Created lib/data.ts successfully');
