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
    lead: "The classical school replaced rule of thumb with systematic management.",
    check: [
      ask("Which pair of names belongs to the classical school?", "F. W. Taylor and Henri Fayol", ["Elton Mayo and Chester Barnard", "Fred Fiedler and Jay Lorsch", "W. Edwards Deming and Peter Drucker"], "Taylor and Fayol, writing from the late 19th to the early 20th century."),
      ask("What is the classical school's central idea?", "Replace rule of thumb with systematic management", ["Productivity follows social and psychological factors", "There is no single best way to manage", "Create, share and use knowledge as a resource"], "The others belong to the neoclassical, contingency and contemporary schools."),
    ],
    lens: [
      { pairing: 0, adds: "A written-down structure of departments, each with duties and checks, roughly two thousand years ago.", differs: "Book 2 sets out departments of a state. The classical school's own claim is that work can be studied and a best method found." },
    ],
    reflect: "Where in your own work is a task still done by habit rather than by studying the best method?",
    summary: {
      points: [
        "Late 19th to early 20th century. Key names: F. W. Taylor and Henri Fayol.",
        "Focus: efficiency, structure and productivity.",
        "Scientific study of work, time and motion studies, differential piece-rate, administrative principles, division of work, unity of command and scalar chain.",
      ],
      memory: "Classical: efficiency and structure.",
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
    lead: "People are social and emotional beings, so morale, communication and teamwork shape results.",
    check: [
      ask("What did the Hawthorne studies find?", "Productivity follows social and psychological factors, not physical conditions alone", ["Productivity follows physical conditions alone", "Productivity follows pay alone", "Productivity follows the length of the hierarchy"], "That finding is the heart of the neoclassical school."),
      ask("Which name belongs to the neoclassical school?", "Elton Mayo", ["F. W. Taylor", "Henri Fayol", "Peter Drucker"], "Elton Mayo, in the 1920s and 1930s."),
      ask("Which style of leadership does the school favour?", "Participative leadership, with attention to relationships", ["Strict one-way command", "Leadership by rule of thumb", "No leadership at all"], "Employees are social and emotional beings, so participative leadership and attention to relationships matter."),
    ],
    lens: [
      { pairing: 1, adds: "A shared prayer for protection, nourishment and effort, and a portrait of friendliness and compassion toward all beings.", differs: "The invocation is a teacher-and-student prayer and the Gītā verse a portrait of the dear devotee. Neither reports a study of workers." },
    ],
    reflect: "What has raised or lowered morale in a group you belonged to, besides pay and conditions?",
    summary: {
      points: [
        "1920s to 1930s. Key name: Elton Mayo.",
        "Focus: human relations, motivation, communication, teamwork and morale.",
        "The Hawthorne studies found that productivity follows social and psychological factors.",
        "Participative leadership and attention to relationships matter.",
      ],
      memory: "From tasks and structure to people.",
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
    lead: "Think of the whole, not of isolated parts.",
    check: [
      ask("In the systems approach, an organisation is…", "An open system of interdependent subsystems interacting with its environment", ["A set of independent departments", "A machine with fixed parts", "A single chain of command"], "Subsystems such as production, finance and HR interact with each other and with the environment."),
      ask("Which is a key word of the systems approach?", "Synergy", ["Scalar chain", "Piece-rate", "Foremanship"], "The key words are interdependence, integration, coordination, feedback and synergy."),
      ask("Which names belong to the systems approach?", "Chester Barnard and Ludwig von Bertalanffy", ["Fred Fiedler and Paul Lawrence", "Elton Mayo and Henri Fayol", "W. Edwards Deming and Ikujiro Nonaka"], "From the mid-20th century to the present."),
    ],
    lens: [
      { pairing: 2, adds: "The part and the whole as inseparable, and beings and the forces of nature sustaining one another in a cycle.", differs: "The Upaniṣad and the Gītā speak of the whole and of mutual nourishment in general terms. They do not describe departments or a firm's environment." },
    ],
    reflect: "Think of one change in a team you know. Which other parts of the work did it touch?",
    summary: {
      points: [
        "Mid-20th century to the present. Key names: Chester Barnard and Ludwig von Bertalanffy.",
        "An open system of interdependent subsystems (production, finance, HR and others) interacting with its environment.",
        "A change in one subsystem affects the rest.",
        "Key words: interdependence, integration, coordination, feedback and synergy.",
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
    lead: "There is no single best way to manage: fit the approach to the situation.",
    check: [
      ask("Effectiveness, in the contingency approach, depends on the fit between…", "Structure, environment, technology and people", ["Price, quantity and income", "Planning, organising and staffing", "Principles, authority and order"], "Matching structure to the situation is the whole idea."),
      ask("What does the manager do?", "Analyses the situation, adapts the approach, and improves results", ["Applies one proven method everywhere", "Waits for fixed rules", "Copies the nearest rival"], "That is the manager's task under this approach."),
      ask("Which names belong to the contingency approach?", "Fred Fiedler, Paul Lawrence and Jay Lorsch", ["F. W. Taylor and Henri Fayol", "Elton Mayo and Chester Barnard", "W. Edwards Deming and Peter Drucker"], "From the 1960s to the present."),
    ],
    lens: [
      { pairing: 3, adds: "A three-part test of place, time and recipient: the situation decides.", differs: "The Gītā applies the test to a gift, in its list of kinds of giving. It is not a theory of how to organise a firm." },
    ],
    reflect: "Think of a rule that worked in one place and failed in another. What about the situation was different?",
    summary: {
      points: [
        "1960s to the present. Key names: Fred Fiedler, Paul Lawrence and Jay Lorsch.",
        "There is no single best way to manage.",
        "Effectiveness depends on the fit between structure, environment, technology and people.",
        "The manager analyses the situation, adapts the approach and improves results.",
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
    lead: "Two streams: continuous improvement in quality, and knowledge as a competitive resource.",
    check: [
      ask("What does Total Quality Management stress?", "Continuous improvement and customer satisfaction through teamwork", ["One best method found by study", "Dual reporting lines", "Price control"], "That is the first stream of contemporary theory."),
      ask("Which names belong to the contemporary school?", "W. Edwards Deming, Peter Drucker and Ikujiro Nonaka", ["F. W. Taylor and Henri Fayol", "Elton Mayo and Chester Barnard", "Fred Fiedler and Jay Lorsch"], "From the late 20th century to the present."),
      ask("Knowledge management aims to…", "Create, share and use knowledge so it becomes a competitive resource", ["Standardise tools and methods", "Narrow the span of control", "Fix prices"], "That is the second stream."),
    ],
    lens: [
      { pairing: 4, adds: "Repeated practice, with detachment, as the way steadiness is gained.", differs: "The verse is about bringing an unsteady mind under control. It does not speak of customers, teamwork or measured quality." },
      { pairing: 5, adds: "Knowledge passed on through humility, questioning and service, in a relationship.", differs: "The Gītā verse describes a student learning from a teacher. Knowledge management is about an organisation creating and sharing knowledge." },
    ],
    reflect: "What does your team know that nobody has written down, and how could it be shared?",
    summary: {
      points: [
        "Late 20th century to the present. Key names: W. Edwards Deming, Peter Drucker and Ikujiro Nonaka.",
        "Total Quality Management: continuous improvement and customer satisfaction through teamwork.",
        "Knowledge management: create, share and use knowledge so it becomes a competitive resource.",
        "Together: learning culture, innovation, adaptability, customer trust and employee contribution.",
      ],
      memory: "Improve continuously. Share what you know.",
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
    lead: "The five schools read as a series of shifts, each answering the limits of the one before.",
    check: [
      ask("The shifts begin from tasks and structure. Where do they go first?", "To people", ["To situation-specific management", "To continuous improvement and knowledge", "To the interconnected organisation"], "From tasks and structure to people; from people to the interconnected organisation; then to situation-specific management; then to continuous improvement and knowledge."),
      ask("Which school followed the neoclassical school in the sequence?", "Systems (modern)", ["Contingency", "Contemporary", "Classical"], "People gave way to the interconnected organisation."),
    ],
    lens: [],
    reflect: "Which school's way of thinking is closest to how your own workplace is run?",
    summary: {
      points: [
        "Classical: efficiency and structure. Neoclassical: people. Systems: the interconnected organisation.",
        "Contingency: situation-specific management. Contemporary: continuous improvement and knowledge.",
        "Each is a response to the limits of the one before.",
      ],
      memory: "Tasks, people, the whole, the situation, improvement.",
    },
  },
];

export default lessons;
