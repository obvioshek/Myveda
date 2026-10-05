import { ask, type Lesson } from "./types";

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
