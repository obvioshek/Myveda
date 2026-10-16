import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-organisational-behaviour-studies",
    name: "What organisational behaviour studies",
    intro: "How people think, feel and act at work, at three levels.",
    before: {
      q: "Does organisational behaviour study only individuals?",
      choices: [
        { label: "Only individuals", reveal: "It studies people at three levels: as individuals, in groups, and as part of the whole organisation." },
        { label: "Individuals, groups and the whole", reveal: "Yes. OB looks at individuals, groups and the whole organisation, to understand, predict and improve behaviour." },
      ],
    },
    lead: "OB studies individuals, groups and the whole organisation, to understand, predict and improve behaviour at work.",
    check: [
      ask("Which description fits organisational behaviour?", "The study of how individuals, groups and structure affect behaviour at work", ["The function of hiring, training, paying and appraising employees", "The study of how markets set prices and wages for labour", "The design of a firm's departments and lines of reporting"], "OB studies behaviour at three levels in order to improve effectiveness. Hiring, training and pay describe HRM, a management function that draws on OB but is not the same thing."),
      ask("After new software arrives, the counter staff quietly agree among themselves to work slowly. Which level of OB does this belong to?", "The group level", ["The individual level", "The organisation level", "The environment level"], "An agreement among the counter staff is a norm the group set, so it sits at the group level. No one person's personality explains it, and head office did not set it, so it is neither individual nor organisational."),
      ask("A manager reads that a bonus scheme raised sales in several North American firms. What is the sound OB response?", "Treat it as a tendency and test it in her own branches first", ["Apply it everywhere at once, since OB findings are laws", "Ignore it, since behaviour at work cannot be predicted", "Apply it only to senior staff, who behave more rationally"], "OB findings hold on average, and much of the research comes from North American and European firms, so they need testing locally. Treating them as laws overstates them; ignoring them throws away the evidence."),
    ],
    lens: [],
    reflect: "Think of one thing at your workplace or college that would make more sense if you understood the behaviour behind it. What is it?",
    summary: {
      points: [
        "OB studies how individuals, groups and structure affect behaviour at work, to understand, predict and improve it.",
        "It draws on psychology, social psychology, sociology, anthropology and political science.",
        "Classical school: efficiency and structure (Taylor, Fayol, Weber).",
        "Behavioural school: people and motivation (Mayo, Maslow, McGregor). Modern school: systems and situations.",
      ],
      memory: "Efficiency, then people, then systems and situations.",
    },
  },
  {
    blockId: "elements-and-disciplines-of-ob",
    name: "Elements, aims and disciplines of OB",
    intro: "The four things OB keeps in view, and the sciences it borrows from.",
    before: {
      q: "When output falls, is the cause always the workers?",
      choices: [
        { label: "Yes, always the workers", reveal: "Not always. The cause may lie in structure, technology or the environment, and a change in one element affects the others." },
        { label: "It can lie elsewhere", reveal: "Yes. OB looks at people together with structure, technology and the environment." },
      ],
    },
    lead: "OB studies people in relation to structure, technology and the environment, to understand, predict and guide behaviour.",
    check: [
      ask("Which list gives the four elements of OB?", "People, structure, technology and environment", ["People, money, markets and machines", "Individuals, groups, teams and leaders", "Planning, organising, leading and controlling"], "The four elements are people, structure, technology and the external environment. Planning, organising, leading and controlling are management functions, not elements of OB."),
      ask("A mill's managers want to know why group decisions on the night shift keep following whatever the senior weaver says. Which discipline's ideas fit most directly?", "Social psychology, which studies how others influence a person", ["Anthropology, which studies cultures across societies", "Political science, which studies how governments are elected", "Psychology, which studies the individual alone"], "Social psychology covers group decision making and how people are influenced by others. Psychology on its own looks at one person, so it cannot explain why a group follows one member."),
      ask("A manager says: \"Luthans's aim of control means I should force workers to follow my orders.\" Is she right?", "No, control here means guiding behaviour toward the goal", ["Yes, control means close supervision of every worker", "Yes, but only for the individual level of OB", "No, because OB seeks only to understand and never to influence"], "In Luthans's aims, control means guiding behaviour toward goals, alongside understanding and prediction. Forcing obedience is the autocratic model, which is not what the aim describes."),
    ],
    lens: [
      { pairing: 2, adds: "When looking for a cause, look at the doer, the means, the effort and the circumstances together.", differs: "The five factors here are the Gītā's own list. OB's four elements are a modern checklist, and OB also draws on psychology, sociology and anthropology to study them." },
    ],
    reflect: "Think of a problem at work or college. Which of the four elements did you blame first, and which did you overlook?",
    summary: {
      points: [
        "Four elements: people, structure, technology and environment; a change in one reaches the others.",
        "Luthans's aims: understanding, prediction and control of behaviour.",
        "OB is multidisciplinary, humanistic, performance-oriented, applications-oriented and uses scientific method.",
        "Psychology: the individual. Social psychology: influence. Sociology: groups. Anthropology: culture. Political science: power.",
      ],
      memory: "People, structure, technology, environment: change one and the rest move.",
    },
  },
  {
    blockId: "five-models-of-ob",
    name: "Five models of OB",
    intro: "Five ways an organisation can treat its people, from power to trust.",
    before: {
      q: "Can a firm keep people loyal just by giving them security and benefits?",
      choices: [
        { label: "Yes, fully", reveal: "Loyalty is gained, but the custodial model brings only passive cooperation, and some staff stay only for the benefits." },
        { label: "Loyal, but not enthusiastic", reveal: "Yes. Security wins dependence on the organisation and passive cooperation, not strong drive." },
      ],
    },
    lead: "Autocratic relies on power, custodial on money, supportive on leadership, collegial on partnership, and system on trust.",
    check: [
      ask("Which model depends on economic resources and meets the employee's need for security?", "Custodial", ["Autocratic", "Supportive", "Collegial"], "The custodial model uses wages and benefits to win security and loyalty. The autocratic model relies on power and meets only subsistence needs."),
      ask("A bank branch manager coaches new officers, listens to their ideas and recognises good work. Which model is she using?", "Supportive", ["Collegial", "Custodial", "Autocratic"], "Leadership that builds participation and meets needs for status and recognition is the supportive model. The collegial model goes further, with partnership and self-discipline, which a coaching manager does not yet claim."),
      ask("A public-sector company has a township, hospital and pension, yet several staff admit they stay only for the benefits. What is the best reading?", "A weakness of the custodial model: security can trap people without raising drive", ["Proof that the system model works, since staff feel secure", "A sign that the autocratic model has been put in place", "A sign that staff are in the collegial model's self-discipline stage"], "Custodial benefits bring dependence and passive cooperation, and can keep staff who would rather leave. The system model aims at psychological ownership, which these staff do not describe."),
    ],
    lens: [],
    reflect: "Which model describes the place where you work or study now? Which would suit the work better?",
    summary: {
      points: [
        "Autocratic: power, obedience, dependence on the boss, subsistence, minimum performance.",
        "Custodial: economic resources, security and benefits, dependence on the organisation, passive cooperation.",
        "Supportive: leadership, participation, status and recognition. Collegial: partnership, self-discipline, self-actualisation.",
        "System: trust and community, psychological ownership, self-motivation, passion and commitment.",
        "The models are not stages; most firms mix them, and the best one depends on the work.",
      ],
      memory: "Power, money, leadership, partnership, trust.",
    },
  },
  {
    blockId: "classical-school-of-management",
    name: "Classical school of management",
    intro: "Efficiency, structure and formal organisation.",
    before: {
      q: "Can rules and a clear hierarchy make an organisation fairer?",
      choices: [
        { label: "No, only slower", reveal: "Weber thought they could: one aim of bureaucracy was to end favouritism, with impersonal rules and appointment by competence." },
        { label: "Yes, fairer", reveal: "That was part of Weber's aim: efficiency and an end to favouritism, through impersonal rules and appointment by competence." },
      ],
    },
    lead: "Three approaches, one aim: efficiency through the best method, clear authority and rules.",
    check: [
      ask("Which is NOT one of Taylor's four principles?", "Unity of command", ["Science, not rule of thumb", "Scientific selection and training", "Cooperation between workers and management"], "Unity of command is one of Fayol's fourteen principles. The tempting confusion is that both men sought efficiency, but Taylor's four principles concern the task, not the chain of command."),
      ask("In a Pune plant, each machinist takes orders from three supervisors who often disagree. Which classical principle is being broken?", "Fayol's unity of command", ["Taylor's science, not rule of thumb", "Weber's impersonality", "Fayol's esprit de corps"], "Unity of command says each worker should take orders from one superior. Esprit de corps, team spirit, may suffer too, but the direct breach is having three bosses."),
      ask("A plant pays ₹50 a piece to workers who reach the standard of 40 pieces a day, and ₹40 a piece to those below it. What does a worker who makes 45 pieces earn?", "₹2,250", ["₹1,800", "₹2,000", "₹2,100"], "45 pieces reaches the standard, so every piece earns the higher rate: 45 × ₹50 = ₹2,250. ₹1,800 applies the lower rate, which is only for workers below 40 pieces."),
    ],
    lens: [
      { pairing: 0, adds: "Registers for every department, a fixed timetable for accounts, and penalties for officials who fail to present them.", differs: "Kauṭilya's office keeps a state's accounts. Weber describes bureaucracy as a general form of organisation, with appointment by competence and impersonal rules." },
    ],
    reflect: "Where have you seen a rule protect people from favouritism, and where has a rule only slowed things down?",
    summary: {
      points: [
        "Taylor (scientific management): find the most efficient way to do a job; four principles; the differential piece-rate.",
        "Fayol (administrative management): five functions and fourteen principles, including unity of command.",
        "Weber (bureaucracy): hierarchy, rules, division of labour, impersonality, appointment by competence; aim: efficiency without favouritism.",
        "Weakness: workers treated as machine parts; feelings, informal groups and the environment ignored.",
      ],
      memory: "Taylor the task, Fayol the manager, Weber the rules.",
    },
  },
  {
    blockId: "behavioural-school-of-management",
    name: "Behavioural school of management",
    intro: "People, needs and relationships at the centre.",
    before: {
      q: "Do workers produce more simply because someone pays attention to them?",
      choices: [
        { label: "No, only pay matters", reveal: "The Hawthorne studies found otherwise: productivity rose when employees felt valued. Attention and social relations change behaviour." },
        { label: "It can help", reveal: "Yes. That is the Hawthorne effect: attention and social relations change behaviour and productivity." },
      ],
    },
    lead: "Productivity depends on how people feel and relate to each other, not only on how work is arranged.",
    check: [
      ask("What did the Hawthorne illumination experiments find?", "Output rose in both groups, whether lighting went up or down", ["Output rose only when the lighting was increased", "Output rose only in the test group, not the control", "Output fell steadily as the lighting was reduced"], "Output rose in the test and control groups alike, so light was not the cause. That pointed the researchers toward attention and social factors."),
      ask("A bank branch manager checks every voucher himself and lets no officer decide anything alone. Which assumptions is he working on?", "Theory X", ["Theory Y", "Theory Z", "The Hawthorne effect"], "Close control and no trust in self-direction are Theory X. Theory Z is Ouchi's later account of Japanese-style management, not part of McGregor's pair."),
      ask("Output in a team rises as soon as researchers start watching it. What should a manager conclude before rolling out the change being tested?", "Part of the rise may be the Hawthorne effect, so compare with an unobserved group", ["The change clearly works and should go everywhere at once", "Attention never affects output, so the change caused it", "The team was hiding effort before and should be disciplined"], "Being observed can itself change behaviour, which is the Hawthorne effect, so a comparison group is needed. Rolling out at once assumes the change alone caused the rise."),
    ],
    lens: [
      { pairing: 1, adds: "Self-direction treated as a human capacity: each person can lift themselves.", differs: "The Gītā speaks of inner discipline and self-effort. McGregor describes a manager's assumptions about employees." },
    ],
    reflect: "Which of your own managers or teachers worked on Theory X assumptions, and which on Theory Y? How did you respond?",
    summary: {
      points: [
        "Hawthorne studies (1924–32, interpreted by Elton Mayo): illumination, relay assembly, interviewing, bank wiring.",
        "Feeling valued raised productivity; the Hawthorne effect is behaviour changed by attention.",
        "Maslow: physiological, safety, social, esteem and self-actualisation needs.",
        "McGregor: Theory X (control) against Theory Y (participation), as assumptions that tend to fulfil themselves.",
      ],
      memory: "Control or participation: X or Y.",
    },
  },
  {
    blockId: "modern-school-of-management",
    name: "Modern school: systems and contingency",
    intro: "The organisation as an open system that must fit its situation.",
    before: {
      q: "Is there one best way to manage every organisation?",
      choices: [
        { label: "Yes", reveal: "Contingency theory says no: practice must be tailored to the environment, technology, structure and workforce." },
        { label: "No", reveal: "Right. Contingency theory holds that effectiveness depends on fitting practice to the situation." },
      ],
    },
    lead: "An organisation is an open system of inputs, transformation, outputs and feedback, and the best practice depends on the situation.",
    check: [
      ask("In systems theory, labour, materials and capital are…", "Inputs", ["Outputs", "Feedback", "The environment"], "Inputs pass through transformation to become outputs such as products and services. The environment surrounds the system; it is not what the system takes in and processes."),
      ask("A milk cooperative changes its pack sizes after shops report that one size goes unsold. In systems terms, the shops' reports are…", "Feedback", ["Inputs", "Outputs", "Transformation"], "Information about outputs that returns to shape the next cycle is feedback. The reports are not inputs in the systems sense of labour, materials and capital."),
      ask("A firm's market changes fast, with new products every few months. Which structure does contingency research suggest?", "An organic one, with flexible roles and loose rules", ["A mechanistic one, with tight rules and hierarchy", "The same structure that works for any well-run firm", "Whichever structure the founder happens to prefer"], "Contingency research found that organic structures suit fast-changing markets and mechanistic ones suit stable markets. Choosing one structure for every firm is exactly what contingency theory rejects."),
    ],
    lens: [],
    reflect: "Think of a practice that worked in one team and failed in another. Which part of the situation was different?",
    summary: {
      points: [
        "Systems theory: inputs, transformation and outputs, with feedback, inside an external environment.",
        "Key ideas: interdependence, interaction, environment and feedback; open, not closed, systems.",
        "Contingency theory: no single best way; fit practice to environment, technology, structure and people.",
        "Mechanistic structures suit stable markets; organic structures suit changing ones.",
      ],
      memory: "It depends on the situation.",
    },
  },
  {
    blockId: "socio-technical-approach",
    name: "Socio-technical approach",
    intro: "Designing the people side and the technical side together.",
    before: {
      q: "If a new system works perfectly on test, will the people who use it accept it?",
      choices: [
        { label: "Yes, if it works", reveal: "Not necessarily. If it does not fit how people work, they find workarounds and the output suffers." },
        { label: "Not necessarily", reveal: "Right. The technical side and the social side must be designed together." },
      ],
    },
    lead: "An organisation is people plus tools inside an environment, and it works best when people and tools are designed together.",
    check: [
      ask("Which three parts does the socio-technical approach see in every organisation?", "The social system, the technical system and the environment", ["Inputs, outputs and feedback", "Planning, organising and controlling", "Structure, strategy and staff"], "The approach pairs people with their tools and places both in an environment. Inputs, outputs and feedback belong to the general systems model, which is the wider idea."),
      ask("A hospital buys records software that nurses cannot use while moving between beds. What does joint optimisation advise?", "Redesign the tools and the nurses' routine together", ["Train the nurses harder and leave the software as it is", "Drop the software, since technology harms the social system", "Let the software supplier decide how wards should work"], "Joint optimisation improves the technical and social systems together. Training alone treats only the social side, and rejecting the software gives up the benefit of the technical side."),
      ask("Which statement correctly separates the socio-technical approach from the systems approach?", "It focuses on designing people and technology together, one application of systems thinking", ["It rejects systems thinking and treats the organisation as a closed system", "It is the same idea with a different name", "It concerns only the external environment and ignores jobs"], "Systems theory describes connected parts in general. The socio-technical approach applies that thinking to the pairing of people and technology. Calling them the same idea loses that focus."),
    ],
    lens: [
      { pairing: 3, adds: "The means and the person are considered together when the work is assigned.", differs: "The couplet picks a person to suit a task. The socio-technical approach also changes the tools and the way work is arranged, so that technology suits people, and not only the other way round." },
    ],
    reflect: "Recall a tool, app or machine that did not suit how people actually worked. What would a joint design have changed?",
    summary: {
      points: [
        "Every organisation has a social system (people), a technical system (tools, methods) and an environment.",
        "Effectiveness needs a balance among them: joint optimisation.",
        "Roots: Trist and the Tavistock Institute's studies of coal mining.",
        "Modern theory has three approaches: systems, socio-technical and contingency.",
      ],
      memory: "Design the people and the tools together.",
    },
  },
];

export default lessons;
