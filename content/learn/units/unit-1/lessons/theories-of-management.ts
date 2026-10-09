import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "classical-school",
    name: "Classical school",
    intro: "Efficiency, structure and productivity.",
    before: {
      q: "Is there one best way to do a job, found by study rather than habit?",
      choices: [
        { label: "Yes, find it by study", reveal: "That was the classical school's central idea: replace rule of thumb with systematic management." },
        { label: "No, it depends", reveal: "That is a later view, the contingency approach. The classical school held that systematic study could replace rule of thumb." },
      ],
    },
    lead: "The classical school treats management like engineering: study the task, find the best method, and design the structure for efficiency.",
    check: [
      ask("Which pair of names belongs to the classical school?", "F. W. Taylor and Henri Fayol", ["Elton Mayo and Chester Barnard", "Fred Fiedler and Jay Lorsch", "W. Edwards Deming and Peter Drucker"], "Taylor and Fayol wrote from the late 19th to the early 20th century. Mayo belongs to the neoclassical school and Barnard to the systems approach, so that tempting pair mixes two later schools."),
      ask("A plant manager wants to know what every manager does, from planning to controlling, and which principles should run the whole firm. Whose work should she read?", "Henri Fayol's administrative management", ["F. W. Taylor's scientific management", "Elton Mayo's human relations", "Max Weber's types of authority"], "Fayol worked from the top down: the functions of management and principles such as unity of command. Taylor worked from the bottom up, on one task and the best method for it."),
      ask("Under a differential piece-rate, the standard is 80 pieces: ₹6 a piece at or above it, ₹5 below. What does a worker earn for 75 pieces, and for 80?", "₹375 and ₹480", ["₹450 and ₹480", "₹375 and ₹400", "₹450 and ₹400"], "75 is below standard, so 75 × ₹5 = ₹375; 80 meets it, so 80 × ₹6 = ₹480. ₹450 wrongly pays the higher rate below standard; the jump at the standard is the whole point of the scheme."),
    ],
    lens: [
      { pairing: 0, adds: "A written-down structure of departments, each with duties and checks, roughly two thousand years ago.", differs: "Book 2 sets out departments of a state. The classical school's own claim is that work can be studied and a best method found." },
    ],
    reflect: "Where in your own work is a task still done by habit rather than by studying the best method?",
    summary: {
      points: [
        "Late 19th to early 20th century. Key names: F. W. Taylor and Henri Fayol. Focus: efficiency, structure and productivity.",
        "Three streams: scientific management (Taylor), administrative management (Fayol) and bureaucracy (Weber).",
        "Taylor: time and motion studies, standard methods, differential piece-rate, functional foremanship.",
        "Fayol: five functions of management; principles such as division of work, unity of command and scalar chain.",
        "Weakness: workers treated as economic beings; principles drawn from experience, not tested.",
      ],
      memory: "Taylor from the shop floor up; Fayol from the top down.",
    },
  },
  {
    blockId: "webers-bureaucracy",
    name: "Weber's bureaucracy",
    intro: "Organisation by rules and offices, not persons.",
    before: {
      q: "In a bureaucracy, whom do you obey?",
      choices: [
        { label: "The person in charge", reveal: "Not in Weber's model. Authority is rational-legal: you obey the rules and the office, whoever holds it." },
        { label: "The rules and the office", reveal: "Right. Weber's authority is rational-legal: you obey the rules and the office, whoever holds it." },
      ],
    },
    lead: "A bureaucracy runs on written rules and offices, so the decision depends on the rule, not on who asks or who decides.",
    check: [
      ask("Weber's bureaucracy rests on which kind of authority?", "Rational-legal", ["Traditional", "Charismatic", "Personal"], "Authority belongs to lawful rules and to offices. Charismatic authority, the tempting choice, rests on a leader's personal qualities, the opposite of an impersonal office."),
      ask("At a municipal office, the clerk processes a licence the same way whether or not he knows the applicant. Which feature of bureaucracy is this?", "Impersonality", ["Division of labour", "Career", "Hierarchy"], "Decisions follow rules, not personal feelings. Hierarchy is about who supervises whom; it says nothing about treating applicants alike."),
      ask("Staff in an office insist on a form being filled in triplicate even when it delays urgent help to the public. What does Merton call this?", "Goal displacement: the rule has become an end in itself", ["Rational-legal authority working as intended", "Charismatic authority", "Merit-based selection"], "Merton argued that people trained to follow rules can treat them as ends. Rational-legal authority is the basis of bureaucracy, but serving the rule over its purpose is its failure, not its design."),
    ],
    lens: [],
    reflect: "Think of an office you have dealt with. Which of Weber's features helped you, and which got in your way?",
    summary: {
      points: [
        "Max Weber (1864–1920): bureaucracy as the most rational way to organise large-scale work, an ideal type.",
        "Three types of authority: traditional, charismatic and rational-legal; bureaucracy rests on rational-legal.",
        "Features: hierarchy, division of labour, rules, impersonality, merit, career, records.",
        "Strengths: predictability, fairness, accountability. Weaknesses: rigidity, red tape, goal displacement.",
      ],
      memory: "The office, not the person; the rule, not the mood.",
    },
  },
  {
    blockId: "neoclassical-school",
    name: "Neoclassical school",
    intro: "Human relations, motivation, communication, teamwork and morale.",
    before: {
      q: "Do physical working conditions alone decide how much people produce?",
      choices: [
        { label: "Yes", reveal: "The Hawthorne studies found otherwise: productivity follows social and psychological factors, not physical conditions alone." },
        { label: "No", reveal: "Right. The Hawthorne studies found that productivity follows social and psychological factors, not physical conditions alone." },
      ],
    },
    lead: "Workers are people with feelings and friendships, and these shape how hard they work.",
    check: [
      ask("How does the neoclassical school see the worker?", "As a social and emotional being", ["As an economic being moved mainly by pay", "As a part in a machine", "As an office-holder bound by rules"], "That is the human relations view. The economic being moved by pay is the classical view it reacted against."),
      ask("A mill raises piece rates, but output stays flat because workers have agreed among themselves on a fair day's work. What does the neoclassical school say is at work?", "An informal group setting its own norm", ["Too little pay", "Poor lighting", "A weak scalar chain"], "The group's own norm limits output whatever the incentive. Too little pay is the classical explanation, and the rise in rates rules it out here."),
      ask("A manager says, \"Keep staff happy and output will always rise.\" Is that a fair reading of the evidence?", "No: the link between satisfaction and performance is real but only moderate", ["Yes: happy workers are always productive", "No: satisfaction has no effect at all", "Yes: pay no longer matters"], "Research finds a moderate link, not a guarantee. Saying satisfaction has no effect overcorrects; the school's lasting point is that feelings and groups matter alongside pay and methods."),
    ],
    lens: [
      { pairing: 1, adds: "A shared prayer for protection, nourishment and effort, and a portrait of friendliness and compassion toward all beings.", differs: "The invocation is a teacher-and-student prayer and the Gītā verse a portrait of the dear devotee. Neither reports a study of workers." },
    ],
    reflect: "What has raised or lowered morale in a group you belonged to, besides pay and conditions?",
    summary: {
      points: [
        "1920s to 1930s. Key name: Elton Mayo. Built on the Hawthorne studies.",
        "Focus: human relations, motivation, communication, teamwork and morale.",
        "The worker is a social being; informal groups and attention shape output.",
        "Participative leadership and attention to relationships matter.",
        "Limits: satisfaction links only moderately to performance; structure and conflict neglected.",
      ],
      memory: "From tasks and structure to people.",
    },
  },
  {
    blockId: "hawthorne-experiments",
    name: "The Hawthorne experiments",
    intro: "Four phases that moved management from lighting to people.",
    before: {
      q: "Lighting in a test room is turned down, and output still rises. Why?",
      choices: [
        { label: "Dimmer light is better", reveal: "No. Output rose whether the lights went up or down. The workers responded to being studied and to the attention, not to the light." },
        { label: "Something besides light", reveal: "Yes. Output rose whether the lights went up or down. The workers responded to being studied and to the attention, not to the light." },
      ],
    },
    lead: "People often work differently when they know someone is watching: attention, morale and the group shape output as much as pay and conditions.",
    check: [
      ask("Which phase found that a work group sets its own output norm?", "Bank wiring observation room", ["Illumination experiments", "Relay assembly test room", "Mass interviewing"], "The bank wiring group pressed members to keep to its norm, whatever the incentive. The relay room is the tempting choice, but it showed output rising with attention, not a group holding it down."),
      ask("A regional manager announces a visit, and that week a bank branch's queues move faster. Which idea explains it?", "The Hawthorne effect", ["The halo effect", "Groupthink", "Social loafing"], "Staff changed their behaviour because they knew they were being observed. The halo effect is about a judge's rating being coloured by one trait, not about the people being watched."),
      ask("A new branch layout cuts service time by a fifth in a one-month trial watched closely by head office. What is the soundest next step?", "Run it longer and compare with a branch that gets attention but not the layout", ["Roll it out to every branch at once", "Drop it, since the gain must be the Hawthorne effect", "Repeat the same trial with even closer observation"], "Part of the gain may come from attention. A longer trial with a comparison separates the two. Dropping it assumes the whole gain is attention, which the trial cannot show either."),
    ],
    lens: [],
    reflect: "When has someone paying attention to your work changed how hard you worked?",
    summary: {
      points: [
        "Western Electric, Hawthorne Works, 1924–1932; Mayo, Roethlisberger and Dickson.",
        "Illumination: output rose either way. Relay assembly: attention and morale mattered.",
        "Interviews: being heard mattered. Bank wiring: the group sets its own norm.",
        "Hawthorne effect: behaviour changes when people know they are observed.",
        "Critics: tiny groups, pay and staff changes in the relay room, smaller effects on reanalysis.",
      ],
      memory: "Light, relay, listen, wire: people, not lamps.",
    },
  },
  {
    blockId: "theory-x-theory-y-and-theory-z",
    name: "Theory X, Theory Y and Theory Z",
    intro: "A manager's style follows from assumptions about people.",
    before: {
      q: "A manager checks every task and every hour. Which assumption about people is at work?",
      choices: [
        { label: "Theory X", reveal: "Yes. Theory X assumes people dislike work and must be controlled, so supervision is close." },
        { label: "Theory Y", reveal: "No. Theory Y assumes people direct themselves; close checking comes from Theory X, which assumes people dislike work." },
      ],
    },
    lead: "A manager's style follows from beliefs about people: X, that they must be pushed; Y, that they will commit. Ouchi's Theory Z is a separate, Japanese-style model.",
    check: [
      ask("Which assumption belongs to Theory Y?", "People seek responsibility under the right conditions", ["People avoid work", "People must be threatened", "Security matters most"], "McGregor's Theory Y holds that committed people direct themselves. Security mattering most sounds mild, but it is a Theory X assumption about little ambition."),
      ask("A manager sets clear targets, then lets each officer plan how to meet them and reviews results monthly. Which theory is she acting on?", "Theory Y, with targets still in place", ["Theory X, because there are targets", "Theory Z, because results are reviewed", "Neither, because there is no supervision"], "Theory Y does not mean no control: people check their own progress toward shared goals. Targets alone do not make it Theory X; close step-by-step checking would."),
      ask("A manager watches staff closely, and they stop taking initiative, which seems to prove they need watching. What does this show?", "Assumptions about people can prove themselves", ["Theory X has been proved true", "Theory Z works better than Theory Y", "The staff were unskilled"], "Close control removes room for initiative, so people wait to be told. That looks like proof of Theory X but was produced by it."),
    ],
    lens: [],
    reflect: "Which theory do your own habits as a team member or leader assume, X or Y?",
    summary: {
      points: [
        "McGregor, The Human Side of Enterprise (1960).",
        "Theory X: people dislike work, avoid responsibility, need control.",
        "Theory Y: work is natural; people direct themselves and seek responsibility. Not the absence of control.",
        "Assumptions tend to prove themselves through the style they produce.",
        "Theory Z: Ouchi (1981), long-term employment and collective decisions; Maslow used the name in 1969.",
      ],
      memory: "X controls, Y trusts, Z commits for the long term.",
    },
  },
  {
    blockId: "systems-approach",
    name: "Systems approach",
    intro: "The organisation as an open system of interdependent subsystems.",
    before: {
      q: "If one department changes how it works, are the others affected?",
      choices: [
        { label: "No, they work apart", reveal: "The systems approach disagrees: a change in one subsystem affects the rest." },
        { label: "Yes", reveal: "That is the systems view: the organisation is an open system of interdependent subsystems, and a change in one affects the rest." },
      ],
    },
    lead: "An organisation is parts that depend on each other and on the world outside, so manage the whole, not one piece.",
    check: [
      ask("In the systems approach, an organisation is…", "An open system of interdependent subsystems interacting with its environment", ["A set of independent departments", "A closed system with fixed parts", "A single chain of command"], "Subsystems such as production, finance and HR interact with each other and with the environment. A closed system ignores the environment, which is how the classical school in effect treated the firm."),
      ask("Customer complaints about late deliveries lead a plant to change its suppliers. In systems terms, the complaints are…", "Feedback", ["An input", "The transformation process", "Synergy"], "Results returning to shape the next inputs are feedback. The new suppliers are inputs; the complaints are what prompted the change."),
      ask("A plant's sales, production and stores teams plan together and can now promise delivery dates they keep, which none could do alone. What is this?", "Synergy", ["Differentiation", "Unity of command", "Goal displacement"], "The whole achieves more than the parts separately. Differentiation, the tempting term, is Lawrence and Lorsch's word for departments becoming different, not for working together."),
    ],
    lens: [
      { pairing: 2, adds: "The part and the whole as inseparable, and beings and the forces of nature sustaining one another in a cycle.", differs: "The Upaniṣad and the Gītā speak of the whole and of mutual nourishment in general terms. They do not describe departments or a firm's environment." },
    ],
    reflect: "Think of one change in a team you know. Which other parts of the work did it touch?",
    summary: {
      points: [
        "Mid-20th century to the present. Key names: Chester Barnard and Ludwig von Bertalanffy.",
        "An open system of interdependent subsystems interacting with its environment; a change in one affects the rest.",
        "Five parts: inputs, transformation, outputs, feedback, environment.",
        "Key words: interdependence, integration, coordination, feedback and synergy.",
        "Limit: abstract; it says everything connects, not what to do.",
      ],
      memory: "The whole, not isolated parts.",
    },
  },
  {
    blockId: "contingency-approach",
    name: "Contingency approach",
    intro: "No single best way: the fit decides.",
    before: {
      q: "Is there a single best way to organise every business?",
      choices: [
        { label: "Yes", reveal: "The contingency approach says there is not: effectiveness depends on the fit between structure, environment, technology and people." },
        { label: "No", reveal: "That is the contingency view: there is no single best way to manage. Effectiveness depends on the fit between structure, environment, technology and people." },
      ],
    },
    lead: "The right way to manage depends on the situation: diagnose first, then choose the structure and style.",
    check: [
      ask("Effectiveness, in the contingency approach, depends on the fit between…", "Structure, environment, technology and people", ["Price, quantity and income", "Planning, organising and staffing", "Principles, authority and order"], "Matching structure to the situation is the whole idea. Planning, organising and staffing are functions of management, which every manager performs whatever the situation."),
      ask("A firm's market changes every few months. Which structure does the contingency approach suggest?", "Flexible roles, open communication and decisions close to the work", ["Fixed roles and central decisions", "More layers of approval", "Close supervision of every task"], "An uncertain environment needs an organic structure that adapts quickly. Fixed roles and central decisions suit a stable environment."),
      ask("An auto-parts plant with tight procedures sets up a small team to design parts for electric vehicles. What would the contingency approach advise?", "Give the new team a flexible structure and link it to the main line", ["Apply the plant's procedures to the team", "Make the whole plant flexible", "Let the team copy a rival's structure"], "Different tasks in one firm can need different structures. Applying the line's procedures ignores the team's uncertain work; making the whole plant flexible ignores the stable line."),
    ],
    lens: [
      { pairing: 3, adds: "A three-part test of place, time and recipient: the situation decides.", differs: "The Gītā applies the test to a gift, in its list of kinds of giving. It is not a theory of how to organise a firm." },
    ],
    reflect: "Think of a rule that worked in one place and failed in another. What about the situation was different?",
    summary: {
      points: [
        "1960s to the present. Key names: Fred Fiedler, Paul Lawrence and Jay Lorsch.",
        "There is no single best way to manage: if this, then that.",
        "Effectiveness depends on the fit between structure, environment, technology and people.",
        "Stable settings suit rules and central control; changing ones suit flexible roles.",
        "Limit: \"it depends\" can be vague about how to weigh the factors.",
      ],
      memory: "It depends: structure, environment, technology, people.",
    },
  },
  {
    blockId: "contemporary-approaches",
    name: "Contemporary approaches",
    intro: "Quality through continuous improvement, and knowledge as a resource.",
    before: {
      q: "Is what a firm's people know a resource, or just something they carry in their heads?",
      choices: [
        { label: "Just in their heads", reveal: "Contemporary theory disagrees: knowledge management creates, shares and uses knowledge so that it becomes a competitive resource." },
        { label: "A resource", reveal: "Yes. Knowledge management treats creating, sharing and using knowledge as a competitive resource." },
      ],
    },
    lead: "Two streams: everyone improving the work a little at a time (TQM), and sharing what people know so it is not lost (knowledge management).",
    check: [
      ask("What does Total Quality Management stress?", "Continuous improvement and customer satisfaction through teamwork", ["Catching defects at final inspection", "Dual reporting lines", "Price control"], "TQM prevents defects by improving the process, and makes quality everyone's job. Final inspection only sorts good from bad after the work is done."),
      ask("A senior bank clerk knows from experience which documents hold up loan applications, but has never written it down. What kind of knowledge is this?", "Tacit knowledge", ["Explicit knowledge", "Data in a database", "A standard operating rule"], "It lives in her experience and is hard to put into words. Once she helps write a checklist, part of it becomes explicit."),
      ask("A plant ships 1,000 brackets a day and 20 fail inspection. What is the defect rate, and what would TQM do?", "2%; find and fix the cause in the process", ["2%; add more inspectors", "20%; find and fix the cause in the process", "0.2%; scrap the faulty ones"], "20 ÷ 1,000 = 2%. More inspectors catch defects after they happen; TQM asks the people doing the work to remove the cause."),
    ],
    lens: [
      { pairing: 4, adds: "Repeated practice, with detachment, as the way steadiness is gained.", differs: "The verse is about bringing an unsteady mind under control. It does not speak of customers, teamwork or measured quality." },
      { pairing: 5, adds: "Knowledge passed on through humility, questioning and service, in a relationship.", differs: "The Gītā verse describes a student learning from a teacher. Knowledge management is about an organisation creating and sharing knowledge." },
    ],
    reflect: "What does your team know that nobody has written down, and how could it be shared?",
    summary: {
      points: [
        "Late 20th century to the present. Key names: W. Edwards Deming, Peter Drucker and Ikujiro Nonaka.",
        "TQM: continuous improvement and customer satisfaction through teamwork; the Plan–Do–Check–Act cycle.",
        "Knowledge management: create, share and use knowledge, tacit and explicit, as a competitive resource.",
        "TQM is not inspection; knowledge management is not an IT system.",
      ],
      memory: "Plan, do, check, act. Share what you know.",
    },
  },
  {
    blockId: "from-one-school-to-the-next",
    name: "From one school to the next",
    intro: "Each school responds to the limits of the one before.",
    before: {
      q: "Which came first in management thought: attention to tasks and structure, or attention to people?",
      choices: [
        { label: "Tasks and structure", reveal: "Yes. The sequence moved from tasks and structure to people, then on to the interconnected organisation." },
        { label: "People", reveal: "Not first. The sequence moved from tasks and structure to people." },
      ],
    },
    lead: "Each school fixed the blind spot of the one before, and modern firms use all five at once.",
    check: [
      ask("Which school followed the neoclassical school in the sequence?", "Systems (modern)", ["Contingency", "Contemporary", "Classical"], "People gave way to the interconnected organisation. Contingency came next, asking what fits where, after the systems view had shown that everything connects."),
      ask("Customers complain about queues at a bank branch. A manager checks whether a slow server at head office is holding up the counter. Which school's lens is she using?", "Systems", ["Classical", "Neoclassical", "Contingency"], "She is tracing how another part of the organisation affects this one. A classical lens would study the steps of each transaction instead."),
      ask("Which statement about the five schools is most accurate?", "Later schools added to earlier ones; firms still use ideas from all five", ["Each school proved the one before it wrong", "Only the contemporary school is still in use", "The schools appeared one at a time, with no overlap in dates"], "Time standards, rules, attention to teams, systems views, fit and quality cycles coexist today. The dates overlap too: Barnard's systems thinking appeared in 1938."),
    ],
    lens: [],
    reflect: "Which school's way of thinking is closest to how your own workplace is run?",
    summary: {
      points: [
        "Classical: efficiency and structure. Neoclassical: people. Systems: the interconnected organisation.",
        "Contingency: situation-specific management. Contemporary: continuous improvement and knowledge.",
        "Each is a response to the limits of the one before.",
        "The schools overlap and coexist; they did not replace one another.",
      ],
      memory: "Tasks, people, the whole, the situation, improvement.",
    },
  },
];

export default lessons;
