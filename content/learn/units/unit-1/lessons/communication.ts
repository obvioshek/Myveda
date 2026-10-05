import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-communication-is",
    name: "What communication is",
    intro: "Exchanging ideas, information and feelings to reach mutual understanding.",
    before: {
      q: "Is communication complete once the message has been sent?",
      choices: [
        { label: "Yes", reveal: "Not quite. Communication aims at mutual understanding between people or groups, not just at sending." },
        { label: "No", reveal: "Right. Communication is the exchange of ideas, information and feelings to reach mutual understanding." },
      ],
    },
    lead: "Communication is an exchange that aims at mutual understanding.",
    check: [
      ask("Which are the four forms of communication?", "Verbal, non-verbal, written and digital", ["Formal, informal, upward and downward", "Physical, psychological, language and cultural", "Sender, message, channel and receiver"], "Those are the forms. The others are directions, barriers and parts of the process."),
      ask("Good communication gives an organisation…", "Clarity, coordination, cooperation, better relationships and a shared sense of objectives", ["Lower prices", "A wider span of control", "Higher piece-rates"], "Those are the benefits the chapter names."),
    ],
    lens: [
      { pairing: 2, adds: "Three tests for speech: it should not agitate, it should be true, and it should be pleasant and beneficial.", differs: "The Gītā verse sets a standard for what is said. The management view of communication also covers channels, flow and feedback." },
    ],
    reflect: "Think of a message you sent that was understood differently from how you meant it. What was missing?",
    summary: {
      points: [
        "Communication is the exchange of ideas, information and feelings between people or groups to reach mutual understanding.",
        "Forms: verbal, non-verbal, written and digital.",
        "It gives clarity, coordination, cooperation, better relationships and a shared sense of objectives.",
      ],
      memory: "Send it, and be understood.",
    },
  },
  {
    blockId: "the-communication-process",
    name: "The communication process",
    intro: "Seven steps from an idea to understanding.",
    before: {
      q: "When a message reaches the receiver, is the job done?",
      choices: [
        { label: "Yes", reveal: "Not yet. The receiver decodes the message, and feedback returns to the sender to confirm understanding." },
        { label: "No", reveal: "Right. The receiver decodes it, and feedback returns to the sender to confirm understanding." },
      ],
    },
    lead: "The process carries an idea from the sender to the receiver and back, and noise can interfere at any step.",
    check: [
      ask("In which step does the sender turn an idea into words, gestures or visuals?", "Encoding", ["Decoding", "Feedback", "Noise"], "Encoding. The receiver's matching step is decoding."),
      ask("What is noise?", "Interference at any step: physical, psychological or semantic", ["The channel a message travels by", "The message itself", "The receiver's reply"], "Noise comes in three kinds: physical, psychological and semantic."),
      ask("What does feedback do?", "Returns to the sender and confirms understanding", ["Forms the idea", "Chooses the channel", "Decodes the message"], "Feedback closes the loop."),
    ],
    lens: [
      { pairing: 0, adds: "Speech shaped deliberately by the mind, like grain sifted through a sieve.", differs: "The hymn describes the wise shaping speech. Bhartṛhari's later stages map only loosely onto idea, encoding and transmission." },
      { pairing: 1, adds: "The receiver's own work: to listen, to reflect, then to absorb.", differs: "The text describes a person's path to understanding. It does not describe a reply returning to the speaker." },
    ],
    reflect: "Think of a recent conversation. At which step did the message change?",
    summary: {
      points: [
        "The sender forms an idea and encodes it into words, gestures or visuals.",
        "The message travels through a channel: spoken, written or electronic.",
        "The receiver decodes it, and feedback returns to confirm understanding.",
        "Noise (physical, psychological or semantic) can interfere at any step. The goal is to minimise distortion and maximise understanding.",
      ],
      memory: "Encode, send, decode, reply.",
    },
  },
  {
    blockId: "models-of-communication",
    name: "Models of communication",
    intro: "Three models, each adding what the last left out.",
    before: {
      q: "Is communication a one-way delivery from sender to receiver?",
      choices: [
        { label: "Yes", reveal: "That is how the first model drew it. Schramm showed both parties encode and decode, sharing meaning through a common field of experience." },
        { label: "No", reveal: "Right. Schramm showed both parties encode and decode, sharing meaning through a common field of experience." },
      ],
    },
    lead: "Shannon and Weaver add noise, Schramm adds shared experience and two-way exchange, and Berlo adds the human factors in each element.",
    check: [
      ask("Which model is often called the mother of all models?", "Shannon and Weaver", ["Berlo", "Schramm", "Lasswell"], "Built for telephone engineering in 1949 and later applied to human communication."),
      ask("SMCR in Berlo's model stands for…", "Source, message, channel, receiver", ["Sender, medium, code, response", "Signal, meaning, context, reply", "Source, medium, channel, response"], "Each is shaped by skills, attitudes, knowledge, social system and culture."),
      ask("Schramm said meaning is shared through an overlapping…", "Field of experience", ["Channel", "Hierarchy", "Code book"], "The more the two fields overlap, the easier the understanding."),
    ],
    lens: [],
    reflect: "Think of a misunderstanding you had. Which model best explains what went wrong?",
    summary: {
      points: [
        "Shannon and Weaver (1949): source to destination, with noise.",
        "Schramm (1954): two-way, through a shared field of experience.",
        "Berlo (1960): SMCR, each element shaped by human factors.",
      ],
      memory: "Noise, then shared experience, then the human factors.",
    },
  },
  {
    blockId: "formal-and-informal-communication",
    name: "Formal and informal communication",
    intro: "Official channels and natural ones.",
    before: {
      q: "Should an organisation rely only on formal channels?",
      choices: [
        { label: "Yes", reveal: "Formal channels give consistency, clarity and accountability, but informal ones build relationships and speed up the exchange of ideas." },
        { label: "No", reveal: "Right. Formal communication gives consistency, clarity and accountability; informal communication builds relationships and a quick exchange of ideas." },
      ],
    },
    lead: "Formal channels follow the hierarchy. Informal ones follow people.",
    check: [
      ask("Which direction of formal communication carries grievances?", "Upward", ["Downward", "Horizontal", "External"], "Upward. Circulars go downward, joint forums run horizontally and annual reports are external."),
      ask("Which is an example of external formal communication?", "Annual reports", ["Circulars", "The grapevine", "Joint forums"], "Annual reports reach people outside the organisation."),
      ask("How is the grapevine described?", "Unofficial, fast and often inaccurate", ["Official and slow", "Written and archived", "Always directed downward"], "It is one of five common informal forms."),
    ],
    lens: [],
    reflect: "Which informal channel do you rely on most at work, and how far do you trust it?",
    summary: {
      points: [
        "Formal: official channels and the hierarchy. Strength: consistency, clarity and accountability. Examples: reports, memos, meetings.",
        "Informal: natural, unstructured channels. Strength: relationship building and a quick exchange of ideas.",
        "Formal flows downward, upward, horizontally and externally.",
        "Informal takes five common forms: grapevine, face-to-face, social media, telephone and non-verbal signals.",
      ],
      memory: "Formal: consistent and accountable. Informal: quick and personal.",
    },
  },
  {
    blockId: "directions-of-communication",
    name: "Directions of communication",
    intro: "Downward, upward, horizontal and diagonal.",
    before: {
      q: "A finance executive asks the marketing head directly for next quarter's expenses. Which direction is that?",
      choices: [
        { label: "Horizontal", reveal: "Close, but they work at different levels in different departments, which makes it diagonal. It saves time but bypasses the chain of command." },
        { label: "Diagonal", reveal: "Yes. Different levels, different departments. It saves time but bypasses the chain of command." },
      ],
    },
    lead: "Downward carries authority, upward carries feedback, horizontal coordinates, diagonal saves time.",
    check: [
      ask("Grievances and suggestions travel…", "Upward", ["Downward", "Horizontally", "Diagonally"], "From subordinates to superiors."),
      ask("Which direction can bypass unity of command?", "Diagonal", ["Downward", "Upward", "Horizontal"], "It crosses both levels and departments."),
    ],
    lens: [],
    reflect: "In an organisation you know, which direction of communication is weakest, and what does it cost?",
    summary: {
      points: [
        "Downward: orders, policies, instructions; risk of delay and filtering.",
        "Upward: reports, suggestions, grievances; risk of fear and distortion.",
        "Horizontal: peers coordinating; diagonal: across levels and departments, fast but bypasses the chain.",
      ],
      memory: "Down commands, up informs, across coordinates, diagonal hurries.",
    },
  },
  {
    blockId: "communication-networks",
    name: "Communication networks and the grapevine",
    intro: "The patterns messages follow, formal and informal.",
    before: {
      q: "Is the grapevine something managers should try to stamp out?",
      choices: [
        { label: "Yes", reveal: "It can't be stamped out, and it has uses: it is fast and shows how people feel. It works best alongside open formal channels, which starve rumour." },
        { label: "No", reveal: "Right. It is fast and shows how people feel. It works best alongside open formal channels, which starve rumour." },
      ],
    },
    lead: "Formal networks run as chain, wheel, circle and all-channel; the grapevine spreads mostly in clusters.",
    check: [
      ask("In which network does one central person communicate with each member?", "Wheel", ["Chain", "Circle", "All-channel"], "It is the fastest for simple tasks and the most centralised."),
      ask("According to Keith Davis, the most common grapevine pattern is…", "Cluster", ["Single strand", "Gossip", "Probability"], "Each tells a few trusted people, who pass it on selectively."),
      ask("Which network gives members the highest satisfaction?", "All-channel", ["Wheel", "Chain", "Circle"], "Everyone can talk to everyone, though it is slow to reach a decision."),
    ],
    lens: [],
    reflect: "How did you hear the last big piece of news at work or college: a formal channel or the grapevine?",
    summary: {
      points: [
        "Formal networks: chain, wheel, circle, all-channel.",
        "Wheel is fastest for simple tasks; all-channel satisfies most and suits complex problems.",
        "Grapevine patterns (Keith Davis): single strand, gossip, probability, cluster.",
        "Cluster is the most common.",
      ],
      memory: "Chain, wheel, circle, all; strand, gossip, chance, cluster.",
    },
  },
  {
    blockId: "oral-and-written-communication",
    name: "Oral and written communication",
    intro: "Speed and warmth against record and precision.",
    before: {
      q: "A change to the leave policy must reach 2,000 staff. Oral or written?",
      choices: [
        { label: "Oral", reveal: "Not alone. A policy change needs a permanent record that fixes responsibility, so it should be written, perhaps with a meeting to explain it." },
        { label: "Written", reveal: "Yes. A policy change needs a permanent record that fixes responsibility; a meeting can add the explanation." },
      ],
    },
    lead: "Oral communication is quick and personal; written communication is a precise, permanent record.",
    check: [
      ask("Which is a strength of written communication?", "It serves as a permanent record and legal evidence", ["Immediate feedback", "A personal touch", "Low cost"], "Oral communication gives immediate feedback and a personal touch."),
      ask("Oral and written communication are both forms of…", "Verbal communication", ["Non-verbal communication", "Visual communication", "Diagonal communication"], "Both use words; non-verbal communication uses gesture, expression and tone."),
    ],
    lens: [],
    reflect: "What did you last put in writing that you should have said in person, or the other way round?",
    summary: {
      points: [
        "Oral: quick, flexible, personal, immediate feedback; no record.",
        "Written: permanent record, precise, fixes responsibility; slow and impersonal.",
        "Both are verbal; non-verbal cues carry the feeling behind them.",
      ],
      memory: "Say it for speed; write it to keep it.",
    },
  },
  {
    blockId: "barriers-to-communication",
    name: "Barriers to communication",
    intro: "Seven things that distort or block a message.",
    before: {
      q: "Can a rigid hierarchy get in the way of a message?",
      choices: [
        { label: "No", reveal: "It can. Rigid hierarchy and poor coordination are organisational barriers." },
        { label: "Yes", reveal: "Yes. Rigid hierarchy and poor coordination are organisational barriers to communication." },
      ],
    },
    lead: "Seven kinds of barrier distort or block a message.",
    check: [
      ask("Stress, fear and bias are which kind of barrier?", "Psychological", ["Physical", "Cultural", "Attitudinal"], "Psychological. Physical barriers are noise, distance and poor infrastructure."),
      ask("Vocabulary, jargon and dialect are which kind of barrier?", "Language", ["Perceptual", "Cultural", "Physical"], "Language barriers."),
      ask("Negative behaviour, dominance and lack of respect are which kind of barrier?", "Attitudinal", ["Organisational", "Physical", "Perceptual"], "Attitudinal. Organisational barriers are rigid hierarchy and poor coordination."),
    ],
    lens: [
      { pairing: 3, adds: "A short chain from anger to confusion, from confusion to loss of memory, and from that to loss of judgement.", differs: "The Gītā verse traces how strong emotion clouds a person's mind in general. It is not a list of barriers to communication." },
    ],
    reflect: "Which barrier gets in the way most often in your own conversations?",
    summary: {
      points: [
        "Physical: noise, distance, poor infrastructure. Psychological: stress, fear, bias.",
        "Language: vocabulary, jargon, dialect. Cultural: beliefs, traditions, practices.",
        "Perceptual: different interpretations, experience, attitudes.",
        "Organisational: rigid hierarchy, poor coordination. Attitudinal: negative behaviour, dominance, lack of respect.",
      ],
      memory: "Physical, psychological, language, cultural, perceptual, organisational, attitudinal.",
    },
  },
];

export default lessons;
