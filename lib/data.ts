
export interface Reaction {
  0: string; // name
  1: string; // type
  2: string; // text
}

export interface Post {
  who?: string;
  name?: string; // some posts use name instead of who
  topic: string;
  type: string;
  k: string;
  when: string;
  title?: string;
  body?: string | string[];
  art?: string;
  cap?: string;
  rp?: any[];
  p?: string; // id
  m?: string; // url
  said?: string[];
  poll?: any;
  sgi?: boolean;
  kind?: string;
  mark?: string | boolean;
  n?: string;
  src?: string;
  why?: string;
}

export const POSTS: Post[] = [
 {who:"Simran Kaur",topic:"Food",type:"Image",k:"exp",when:"1 hour ago",
  title:"Made this at home for the first time.",
  body:"My mother's rajma, cooked over a video call with her correcting me at every step. Two hours, one slightly burnt pan, and completely worth it.",
  art:"dish",cap:"Photo · taken by Simran",
  rp:[["Sneha Kulkarni","exp","The burnt pan is how you know it was really made at home. My first try at my grandmother's sambar went exactly the same way."],
      ["Siddharth Kamble","q","Did she let you skip soaking the beans overnight, or is that non-negotiable?"]],
  said:["Sneha","Siddharth","Harleen","Samyak"],n:"2.3K"},
 {who:"Karan Mehta",topic:"Cities",type:"Question",k:"q",when:"3 hours ago",
  title:"What is one local problem your city should fix?",
  body:"Mine: footpaths that disappear halfway down the road. I walk to work and spend half the walk on the edge of traffic. What would you fix first where you live?",
  rp:[["Ananya Krishnan","exp","Streetlights near bus stops. People on our road wait in the dark after eight."],
      ["Parth Kothari","ctx","Many city wards publish their budgets online. Worth checking before proposing a fix, because some repairs are already approved and simply delayed."]],
  said:["Ananya","Parth","Sarah"],n:"8.4K"},
 {who:"Rachel Divekar",topic:"Education",type:"Poll",k:"q",when:"5 hours ago",
  title:"Should we teach financial literacy in school?",
  body:"Budgets, loans, and saving came up in my first job, not in any classroom. Where should it be taught?",
  poll:[["Yes, as its own subject",46],["Yes, inside maths classes",29],["It is better learned at home",15],["Not sure yet",10]],
  said:["Daniel","Neha"],n:"12K"},
 {who:"Daniel Kolet",topic:"Books",type:"Text",k:"exp",when:"yesterday",
  title:"Finally finished this book. Here's what stayed with me.",
  body:"A novel about three generations of one family in Kolkata, read in short evening sittings over four months. What stayed with me: most of the arguments in it were really about someone feeling unheard.",
  rp:[["Lakshmi Rao","int","I read it the same way. Almost every fight in the book softens the moment someone asks a question instead of defending themselves."],
      ["Imran Sheikh","q","Adding it to my list. Does the ending feel earned?"]],
  said:["Lakshmi","Imran","Pema"],n:"431"},
 {who:"Sonam Dorjee",topic:"Everyday life",type:"Image",k:"exp",when:"yesterday",
  title:"Learned to swim at thirty-four. Here's what surprised me.",
  body:"The hardest part was not the water. It was being the only adult in a beginners' class. By week three two more had joined, and one told me they signed up after seeing me there.",
  art:"swim-dawn",sgi:true,
  rp:[["Meera Iyer","exp","I started learning the sitar at forty. Being a beginner in public takes its own small courage."]],
  said:["Meera","Ezra"],n:"5.1K"}
];

export const ORGS: Post[] = [
 {name:"Morning Ledger India",kind:"News & media",mark:"ML",topic:"Cities",type:"Link",k:"fact",when:"2 hours ago",
  title:"Why do footpaths in growing cities stop halfway?",
  body:"We read three years of ward budget documents. Most gaps are not unplanned: repairs are approved, then split across departments that finish at different times.",
  src:"Ward budget documents, 2023–2025",why:"Because you follow Cities",n:"41K"},
 {name:"Amaltas Group",kind:"Company",mark:"AG",topic:"Education",type:"Text",k:"fact",when:"6 hours ago",
  title:"We are funding money-basics workshops in 40 government schools.",
  body:"Budgeting, saving, and how loans work, taught by the schools' own teachers. No logos in classrooms, and the full curriculum is open for anyone to use.",
  src:"Curriculum and list of schools",why:"Because you follow Education",n:"9.2K"},
 {name:"Handi Kitchen Foods",kind:"Brand",mark:"HK",topic:"Food",type:"Video",k:"exp",when:"yesterday",
  title:"Rajma three ways, from Jammu, Punjab, and Himachal.",
  body:"Our test kitchen cooked all three alongside home cooks from each region. The biggest difference was not the spices. It was how long the beans were soaked.",
  why:"Because you follow Food",n:"22K"},
 {name:"Pustak Setu Public Library",kind:"Public library",mark:"PS",topic:"Books",type:"Text",k:"ctx",when:"yesterday",
  title:"Longer weekend hours, and this month's reading picks.",
  body:"The reading room now stays open until nine on Saturdays and Sundays. Three novels and one book of essays are on the shared shelf by the entrance.",
  why:"Because you follow Books",n:"3.4K"}
];

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
