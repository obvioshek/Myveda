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
    lead: "Communication is passing an idea to someone so that they understand it as it was meant; sending alone is not enough.",
    check: [
      ask("Who called communication \"a bridge of meaning\"?", "Louis Allen", ["Newman and Summer", "Claude Shannon", "Keith Davis"], "Louis Allen called it a bridge of meaning: telling, listening and understanding. Newman and Summer are the tempting answer, but theirs is the \"exchange of facts, ideas, opinions or emotions\" definition."),
      ask("A supervisor shows a new worker how to set a machine. Which function of communication is this?", "Instruct", ["Inform", "Integrate", "Counsel"], "Showing someone how to do a task is instructing. Informing only passes on facts, such as new shift timings, without teaching how to act."),
      ask("A manager pins a notice on the board, but nobody reads it. Has communication taken place?", "No: information was sent, but nobody received or understood it", ["Yes: the notice was sent through an official channel", "Yes: a written notice is always communication", "No: notices are never a form of communication"], "Communication needs understanding, not just sending. A notice can communicate, so \"never\" is wrong; it fails here only because no one read it."),
    ],
    lens: [
      { pairing: 2, adds: "Three tests for speech: it should not agitate, it should be true, and it should be pleasant and beneficial.", differs: "The Gītā verse sets a standard for what is said. The management view of communication also covers channels, flow and feedback." },
    ],
    reflect: "Think of a message you sent that was understood differently from how you meant it. What was missing?",
    summary: {
      points: [
        "Communication is the exchange of facts, ideas, opinions or emotions by two or more persons (Newman and Summer); Louis Allen calls it a bridge of meaning.",
        "Forms: verbal, non-verbal, written and digital.",
        "It is two-way, continuous, pervasive and goal-oriented, and needs a sender and a receiver.",
        "Functions: inform, instruct, persuade and motivate, integrate, counsel, hear grievances, train.",
      ],
      memory: "Sent is not the same as understood.",
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
    lead: "An idea is encoded, sent through a channel, decoded and confirmed by feedback, and noise can interfere at any step.",
    check: [
      ask("In which step does the sender turn an idea into words, gestures or visuals?", "Encoding", ["Decoding", "Feedback", "Channel"], "Encoding is the sender's step. Decoding is the tempting answer, but it is the receiver's matching step: making sense of the message."),
      ask("A supervisor shouts \"forty\" across a loud shop floor and the worker hears \"fourteen\". What kind of noise is this?", "Physical noise", ["Semantic noise", "Psychological noise", "Feedback noise"], "The sound of the machines changed the word in the channel, so the noise is physical. Semantic noise would mean the worker heard \"forty\" but took it in a different sense."),
      ask("Which change would best stop that error happening again?", "Write the setting on the job card and ask the worker to repeat it back", ["Shout louder next time", "Send the instruction by a longer email", "Skip feedback to save time"], "Writing removes the physical noise, and the read-back adds the missing feedback. Shouting louder still leaves no check that the message was understood."),
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
        "The medium is the broad means; the channel is the specific route, such as a phone call or an email.",
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
    lead: "Shannon and Weaver add noise, Schramm adds two-way exchange and shared experience, and Berlo adds the human factors in each element.",
    check: [
      ask("SMCR in Berlo's model stands for…", "Source, message, channel, receiver", ["Sender, medium, code, response", "Signal, meaning, context, reply", "Source, medium, channel, response"], "Berlo's four elements are source, message, channel and receiver. \"Medium\" and \"response\" are tempting, but neither is one of his letters."),
      ask("A dabbawala reads a tiffin's code at a glance; an outsider sees only letters and colours. Which idea explains this best?", "Schramm's field of experience", ["Shannon and Weaver's noise", "Berlo's channel", "Davis's grapevine"], "The message and channel are the same for both; what differs is what each person already knows. That is Schramm's field of experience. Noise would mean the code itself was distorted on the way."),
      ask("A trainee keeps misreading a team's emails. Which step, drawn from Schramm, would help most?", "Widen the shared field of experience, for example by explaining the team's terms", ["Send the emails by a faster channel", "Reduce physical noise in the office", "Send the same email twice"], "The trainee's problem is meaning, not delivery. Explaining terms widens the overlap. A faster channel or less physical noise fixes transmission, which was not the problem."),
    ],
    lens: [],
    reflect: "Think of a misunderstanding you had. Which model best explains what went wrong?",
    summary: {
      points: [
        "Shannon and Weaver (1949): source to destination, with noise; one-way.",
        "Schramm (1954): two-way, through a shared field of experience.",
        "Berlo (1960): SMCR, each element shaped by skills, attitudes, knowledge, social system and culture.",
        "Each model simplifies: Shannon and Weaver measure signals, not meaning; SMCR shows no feedback.",
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
    lead: "Formal communication follows the official lines of the organisation; informal communication follows people's personal links.",
    check: [
      ask("Which is an example of external formal communication?", "An annual report", ["A circular to staff", "The grapevine", "A joint forum of department heads"], "An annual report reaches people outside the organisation. A circular is formal too, but it flows downward inside the organisation."),
      ask("Bank staff discuss rumoured transfers in their own messaging group. This is…", "Informal communication, even though it is written", ["Formal communication, because it is written", "Formal communication, because staff are involved", "Upward communication"], "The test is whether the channel is official, not whether it is written. A staff chat group is not an official channel."),
      ask("A rumour about bonus cuts is spreading. What is the best first step for management?", "Issue a quick, clear formal statement of the facts", ["Ignore it until it dies down", "Ban informal conversation at work", "Reply to the rumour only through the grapevine"], "A clear formal statement takes away the rumour's fuel. Ignoring it lets the half-wrong version spread, and informal talk cannot be banned."),
    ],
    lens: [],
    reflect: "Which informal channel do you rely on most at work, and how far do you trust it?",
    summary: {
      points: [
        "Formal: official channels and the hierarchy. Strength: consistency, clarity and accountability. Examples: reports, memos, meetings.",
        "Informal: natural, unstructured channels. Strength: relationship building and a quick exchange of ideas.",
        "Formal flows downward, upward, horizontally and externally.",
        "Informal travels by the grapevine, casual talk, social media, personal calls and non-verbal signals; the channel, not the medium, makes it informal.",
        "Formal or informal depends on the channel, not on whether words are spoken or written.",
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
      ask("Grievances and suggestions travel…", "Upward", ["Downward", "Horizontally", "Diagonally"], "They go from subordinates to superiors. Horizontal is tempting when a grievance is shared among peers, but raising it with a superior sends it up."),
      ask("A quality inspector phones the purchase manager about a faulty batch. They are in different departments and at different levels. Which direction is this?", "Diagonal", ["Horizontal", "Upward", "Downward"], "Different levels and different departments make it diagonal. Horizontal would need them to be at the same level."),
      ask("A plant head hears of supplier delays weeks after the store-keeper spotted them. What would help most?", "Make upward communication safe and quick, for example through open-door hours", ["Send more downward circulars", "Ban diagonal communication", "Add another level of supervisors"], "The failure is upward: news did not rise. More circulars push information the wrong way, and an extra level adds another filter."),
    ],
    lens: [],
    reflect: "In an organisation you know, which direction of communication is weakest, and what does it cost?",
    summary: {
      points: [
        "Downward: orders, policies, instructions; risk of delay and filtering.",
        "Upward: reports, suggestions, grievances; risk of fear and distortion.",
        "Horizontal: peers at the same level coordinating.",
        "Diagonal: across levels and departments; fast, but bypasses the chain of command.",
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
      ask("According to Keith Davis, the most common grapevine pattern is…", "Cluster", ["Single strand", "Gossip", "Probability"], "In a cluster each person tells a few trusted people, who pass it on selectively. Gossip, one person telling everyone, is the tempting answer but is not the most common."),
      ask("A fest convenor phones each volunteer separately; volunteers never talk to each other. Which network is this?", "Wheel", ["Chain", "Circle", "All-channel"], "One central person linked to every member is a wheel. A chain would pass the message from person to person in a line."),
      ask("A six-person team must redesign a product, a complex problem. Which network should its leader encourage?", "All-channel", ["Wheel", "Chain", "Circle"], "All-channel suits complex problems: everyone hears everyone and ideas surface. The wheel is fastest for simple tasks, but its centre gets overloaded on complex ones."),
    ],
    lens: [],
    reflect: "How did you hear the last big piece of news at work or college: a formal channel or the grapevine?",
    summary: {
      points: [
        "Formal networks: chain, wheel, circle, all-channel.",
        "Wheel is fastest for simple tasks; all-channel satisfies most and suits complex problems.",
        "Grapevine patterns (Keith Davis): single strand, gossip, probability, cluster. Cluster is the most common.",
        "The grapevine is a channel, not the same as rumour; it works best alongside open formal channels.",
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
      ask("Oral and written communication are both forms of…", "Verbal communication", ["Non-verbal communication", "Visual communication", "Diagonal communication"], "Both use words, so both are verbal. Non-verbal is the tempting answer for writing, but non-verbal means no words at all: gesture, expression, tone."),
      ask("A branch manager approves a ₹500 fee waiver by phone. Months later an auditor asks for proof. What was the weakness?", "Oral communication leaves no record", ["Oral communication is too slow", "Written communication is too costly", "Non-verbal cues were missing"], "Speech was quick, but it left no proof of the approval. Speed was never the problem here; the lack of a record was."),
      ask("A convenor must agree a menu with a caterer and avoid a dispute over the bill. What is the best approach?", "Bargain by phone, then confirm the agreed price and date in writing", ["Do everything by phone to save time", "Send only a formal letter and avoid talking", "Agree by phone and trust memory"], "Speech is best for quick bargaining; writing fixes what was agreed. Using only one loses either the speed or the record."),
    ],
    lens: [],
    reflect: "What did you last put in writing that you should have said in person, or the other way round?",
    summary: {
      points: [
        "Oral: quick, flexible, personal, immediate feedback; no record.",
        "Written: permanent record, precise, fixes responsibility; slow and impersonal.",
        "Both are verbal; non-verbal cues carry the feeling behind them.",
        "Discuss it, then write it down.",
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
    lead: "Seven kinds of barrier stop a message arriving or being understood as meant; semantic barriers are a kind of language barrier.",
    check: [
      ask("Stress, fear and bias are which kind of barrier?", "Psychological", ["Physical", "Cultural", "Attitudinal"], "They are states of mind, so the barrier is psychological. Attitudinal is tempting, but it covers behaviour towards others: dominance, lack of respect."),
      ask("Head office asks branches to \"cut costs\". Sales reads it as fewer trips; finance reads it as fewer staff. Which barrier is at work?", "Perceptual", ["Psychological", "Language", "Cultural"], "Each department interprets the same plain words through its own experience, which is a perceptual barrier. Language is tempting, but the words were simple and well known; the readings differed."),
      ask("A circular says \"ensure full compliance by EOD\", and new staff do not understand it. What is the best fix?", "Rewrite it in plain words with a clear time and a contact for questions", ["Send the same circular again", "Make it longer and more formal", "Send it to fewer people"], "The barrier is semantic: jargon and unstated assumptions. Plain words remove it, and a contact adds feedback. Resending the same words repeats the problem."),
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
        "Reduce barriers: clarify, choose the medium, use simple words, listen, ask for feedback.",
      ],
      memory: "Physical, psychological, language, cultural, perceptual, organisational, attitudinal.",
    },
  },
];

export default lessons;
