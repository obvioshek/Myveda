import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "interpersonal-behaviour-and-its-patterns",
    name: "Interpersonal behaviour and its patterns",
    intro: "How people communicate, respond and interact.",
    before: {
      q: "When a colleague is curt with you, does your reply affect how they treat you next?",
      choices: [
        { label: "No", reveal: "It does. Interpersonal behaviour is reciprocal: A's behaviour influences B, and B's response in turn influences A." },
        { label: "Yes", reveal: "Right. That is reciprocal influence: each person's response shapes the other's next move." },
      ],
    },
    lead: "Interpersonal behaviour is how people talk to, listen to and react to one another, and it runs both ways.",
    check: [
      ask("Several employees communicating with one superior is which pattern?", "Many-to-one", ["One-to-many", "One-to-one", "Many-to-many"], "Many people, one listener: many-to-one, which calls for active listening. One-to-many is the reverse, a leader addressing a group."),
      ask("A plant head has to announce a new safety rule that applies to the whole shift. Which pattern suits it, and what does it need?", "One-to-many, with clarity and confidence", ["One-to-one, with trust and privacy", "Many-to-one, with active listening", "Many-to-many, with open discussion"], "A rule for everyone is best given one-to-many, so all hear the same words. One-to-one suits coaching or criticism, not a shared announcement."),
      ask("A bank clerk is curt with customers after being snapped at by the manager. The customers grow sharper, and so does the clerk. What is the quickest way for the clerk to break the loop?", "Change their own response first", ["Wait for the customers to calm down", "Complain about the manager to customers", "Switch to a many-to-many pattern"], "Reciprocal influence means each side shapes the other, and your own response is the half you control. Waiting for the other side to soften first is what keeps the loop going."),
    ],
    lens: [],
    reflect: "Think of a recent exchange that went badly. What did you do that shaped the other person's next move?",
    summary: {
      points: [
        "Interpersonal behaviour includes verbal and non-verbal communication: tone, body language, emotion, gesture.",
        "Patterns: one-to-one (trust), one-to-many (clarity), many-to-one (listening), many-to-many (collaboration).",
        "Reciprocal influence: positive behaviour builds morale and cooperation; negative behaviour erodes them.",
        "Interpersonal is between people; intrapersonal is within one person.",
      ],
      memory: "A shapes B, and B shapes A.",
    },
  },
  {
    blockId: "types-determinants-and-skills",
    name: "Types, determinants and skills",
    intro: "Cooperation, conflict, and the skills that keep them healthy.",
    before: {
      q: "Is conflict between colleagues always harmful?",
      choices: [
        { label: "Always", reveal: "Not always. Managed constructively, conflict brings role clarity, better understanding and innovative solutions." },
        { label: "Not always", reveal: "Right. Managed constructively, it brings role clarity, understanding and new solutions." },
      ],
    },
    lead: "People pull together or pull apart; six determinants shape which, and five skills keep it constructive.",
    check: [
      ask("Which is one of the six determinants of interpersonal behaviour?", "Emotional intelligence", ["Salary level", "Job title", "Office location"], "The six are personality, perception, attitudes, values, emotional intelligence and motivation. A job title may affect who talks to whom, but it is not on the list."),
      ask("Two salespeople keep fighting over customers. The manager gives one the televisions and the other the kitchen appliances, and the fighting stops. What did the conflict produce?", "Role clarity", ["Groupthink", "An ego clash", "Social loafing"], "Conflict managed constructively brings role clarity, which is what splitting the floor gave them. An ego clash is what they had before, not what the manager's fix produced."),
      ask("Which disagreement is most likely to improve a team's decision?", "A moderate disagreement over which method to use", ["A dispute over who is the better worker", "A running clash of personalities", "Silent resentment that no one raises"], "Conflict about the task, kept moderate, can improve decisions. Conflict about personalities, like who is the better worker, rarely helps and drains trust."),
    ],
    lens: [],
    reflect: "Which of the five interpersonal skills would make the biggest difference in your team right now?",
    summary: {
      points: [
        "Cooperative behaviour: shared goals, respect, openness. Conflicting behaviour: different goals, perceptions or misunderstandings.",
        "Determinants: personality, perception, attitudes, values, emotional intelligence, motivation.",
        "Skills: positive thinking, mutual trust, empathy, courtesy, avoiding ego clashes.",
        "Task conflict, kept moderate, can help; personal conflict rarely does.",
      ],
      memory: "Fight about the work, not about each other.",
    },
  },
  {
    blockId: "transactional-analysis",
    name: "Transactional analysis",
    intro: "Johari window, ego states and transactions.",
    before: {
      q: "Is there anything about you that others can see but you cannot?",
      choices: [
        { label: "No", reveal: "The Johari window says there usually is: the blind area, known to others but not to you. Feedback reduces it." },
        { label: "Probably", reveal: "Right. That is the blind area of the Johari window, and feedback is how it shrinks." },
      ],
    },
    lead: "Transactional analysis asks which ego state spoke and which replied; the Johari window maps what you and others know about you.",
    check: [
      ask("Which Johari area is reduced through self-disclosure?", "Hidden", ["Blind", "Open", "Unknown"], "The hidden area holds what you know and others do not, so telling them shrinks it. The blind area is the tempting answer, but it shrinks through feedback from others."),
      ask("A team leader asks, “Has the report been sent?” The reply is, “Why are you always checking on me?” What kind of transaction is this?", "Crossed", ["Complementary", "Ulterior", "A positive stroke"], "The question was Adult to Adult, but the reply came from the Child, an unexpected ego state, so it is crossed. A complementary reply would have answered from the Adult: “Yes, at four.”"),
      ask("A plant's circular says, “Repeated lapses will not be tolerated,” and staff respond with resentment. Which rewrite is most likely to get an Adult reply?", "Give the fact, the reason and the fix in plain terms", ["Add a stronger warning about penalties", "Make the tone warmer and more parental", "Send it again with the boss's signature"], "An Adult message carries facts and reasons, inviting an Adult reply. A stronger warning stays in the Critical Parent and invites the same rebellious Child response."),
    ],
    lens: [
      { pairing: 0, adds: "Friendship's real purpose: stepping in to correct a friend who goes wrong.", differs: "The Kuṟaḷ speaks of a friend's duty. The Johari window is a model of self-awareness that also includes self-disclosure and the unknown area." },
      { pairing: 1, adds: "A picture of the self in which intellect steers mind and senses, as a charioteer steers horses.", differs: "The Upaniṣad describes the self's journey. Berne's ego states describe patterns of communication, so the comparison is a reading." },
      { pairing: 2, adds: "A practical instruction: do not just accept criticism, keep the critic near.", differs: "Kabir speaks of the critic who finds fault. The Johari window asks for feedback of every kind, including what others see as strengths." },
    ],
    reflect: "Ask yourself which ego state you speak from most often in meetings. Is it the one the situation needs?",
    summary: {
      points: [
        "Transactional analysis (Eric Berne) explains interactions through ego states.",
        "Johari window (Luft and Ingham): open, blind, hidden, unknown; feedback shrinks blind, self-disclosure shrinks hidden.",
        "Ego states: Parent (learned values), Adult (logic), Child (emotion).",
        "Transactions: complementary (talk flows), crossed (talk stops), ulterior (a hidden second message).",
      ],
      memory: "Parent is learned values, Adult is logic, Child is emotion.",
    },
  },
  {
    blockId: "life-positions-strokes-and-games",
    name: "Life scripts, life positions, strokes and games",
    intro: "The patterns behind how we treat ourselves and others.",
    before: {
      q: "Is criticism a kind of recognition?",
      choices: [
        { label: "No", reveal: "In transactional analysis it is: a negative stroke. Strokes are any act of recognition, positive or negative." },
        { label: "In a way", reveal: "Right. In TA, criticism is a negative stroke: recognition that may discourage." },
      ],
    },
    lead: "Scripts and life positions shape how we see ourselves and others; strokes and games shape everyday exchanges.",
    check: [
      ask("Which life position is the ideal?", "I'm OK, you're OK", ["I'm OK, you're not OK", "I'm not OK, you're OK", "I'm not OK, you're not OK"], "Positive toward self and others brings healthy relationships. I'm OK, you're not OK can feel confident, but it is superior and blaming, and brings conflict."),
      ask("An officer says to a colleague, “You decide, you know better than me,” on almost every issue. Which life position does this suggest?", "I'm not OK, you're OK", ["I'm OK, you're OK", "I'm OK, you're not OK", "I'm not OK, you're not OK"], "Looking up to others while doubting yourself is the inferior, submissive position, and it leads to dependency. It is not OK–OK, because that position trusts both sides."),
      ask("A colleague asks for ideas, then answers each one with “Yes, but…”. What is the best response?", "Ask what they would suggest", ["Offer more and better solutions", "Point out that they are playing a game", "Give them a negative stroke"], "In “Yes, but…” the hidden aim is to avoid responsibility, so asking for their suggestion hands it back. Offering more solutions keeps the game going; naming it usually makes people defensive."),
    ],
    lens: [],
    reflect: "Which life position do you slip into when things go wrong at work?",
    summary: {
      points: [
        "Life script: an unconscious pattern formed in childhood that shapes later behaviour.",
        "Life positions: I'm OK–you're OK is ideal; the others bring conflict, dependency or disengagement.",
        "Strokes: acts of recognition, positive or negative, conditional or unconditional.",
        "Games: recurring patterns with hidden motives, such as “Yes, but…”.",
      ],
      memory: "I'm OK, you're OK.",
    },
  },
  {
    blockId: "nine-complementary-transactions",
    name: "Nine complementary transactions at work",
    intro: "Every pairing of Parent, Adult and Child between manager and employee.",
    before: {
      q: "A manager says, \u201cLeave the thinking to me,\u201d and the employee agrees. Is that a good exchange?",
      choices: [
        { label: "Yes, it is smooth", reveal: "It is smooth, which makes it complementary. Smooth is not the same as healthy: over time the employee stops thinking for himself." },
        { label: "Not necessarily", reveal: "Right. It is a complementary Parent\u2013Child transaction: the talk flows, but the employee's initiative shrinks." },
      ],
    },
    lead: "Three ego states by three give nine complementary pairs; Adult\u2013Adult is the best, and the rest each carry a cost.",
    check: [
      ask("In a complementary transaction, how does the reply travel?", "Back from the state that was addressed to the state that spoke", ["From the state that spoke, to a different state", "From a hidden state, while the surface stays Adult", "From the Child, whatever the opening message"], "The lines are parallel because the reply simply reverses the opening message. A reply from an unexpected state would cross the lines and make the transaction crossed."),
      ask("A manager says, \u201cLeave the thinking to me; do as I say.\u201d The clerk replies, \u201cYes sir, whatever you say.\u201d Which pair is this, and what is the long-run risk?", "Parent\u2013Child; the employee's initiative shrinks", ["Adult\u2013Adult; the decision becomes too slow", "Child\u2013Parent; the employee ends up controlling the manager", "Parent\u2013Parent; the two begin to compete over rules"], "The manager speaks as Parent to the employee's Child, which suits both at first. Parent\u2013Parent is tempting, but here the clerk gives up judgement instead of pushing rival rules."),
      ask("When is a Parent\u2013Child transaction most defensible?", "In a fire drill, when a supervisor gives short orders to new staff", ["In a monthly review with experienced staff", "In a planning meeting on next year's targets", "In a talk to coach a capable clerk"], "In an emergency, speed matters and new staff need clear orders. In reviews, planning or coaching it builds dependency, and the Adult\u2013Adult default is better."),
    ],
    lens: [],
    reflect: "In your last three conversations with your manager or team, which of the nine pairs was it? Was it the one the task needed?",
    summary: {
      points: [
        "Complementary: the reply reverses the opening message, so the lines are parallel and talk flows.",
        "Three ego states by three give nine pairs; Adult\u2013Adult is generally best, and Parent\u2013Child suits emergencies.",
        "The other pairs bring costs: hostility, frustration, role reversal, whim or rivalry.",
        "Ulterior transactions carry a hidden message and involve at least three ego states.",
      ],
      memory: "Smooth talk is not always good talk.",
    },
  },
  {
    blockId: "scripts-drama-triangle-and-games",
    name: "Life scripts, the drama triangle and why games are played",
    intro: "The plot we follow, the three roles we play in it, and why we play games.",
    before: {
      q: "Have you ever helped someone until you resented it?",
      choices: [
        { label: "Yes", reveal: "That is a common move in the drama triangle: the Rescuer who is not thanked turns Persecutor." },
        { label: "Not sure", reveal: "Watch for it. Helping that keeps the other person dependent is an illegitimate Rescuer role, and it often ends in resentment." },
      ],
    },
    lead: "A life script is learned early; Karpman's triangle shows three roles people play in it, and games run on those roles.",
    check: [
      ask("Who described the drama triangle, and what are its three roles?", "Stephen Karpman: Persecutor, Victim and Rescuer", ["Eric Berne: Parent, Adult and Child", "Thomas Harris: OK, not OK and mixed", "Luft and Ingham: open, blind and hidden"], "Karpman described it in 1968. Berne's Parent, Adult and Child are ego states, a different idea, and the tempting wrong answer."),
      ask("A senior always finishes a junior's work, then snaps when no thanks come. How is this best described?", "An illegitimate Rescuer who keeps the junior dependent, then turns Persecutor", ["A legitimate Rescuer, because helping is always good", "A Victim holding an I'm-not-OK position", "A crossed transaction from the Adult state"], "Help that keeps the junior dependent is a mask, and the switch to Persecutor is typical. A legitimate Rescuer would help the junior become self-reliant."),
      ask("Which statement is NOT true of a psychological game?", "It is a single honest exchange with no hidden message", ["It tends to be repeated", "It makes sense on the surface", "At least one transaction is ulterior"], "A game has three marks: repetition, surface sense and an ulterior transaction. A single honest exchange cannot be a game, because no hidden message is involved."),
    ],
    lens: [],
    reflect: "Which corner of the triangle do you drift to under pressure, and what would moving to Adult look like?",
    summary: {
      points: [
        "Life script (Berne): a programme formed in early childhood under parental influence; it can be rewritten.",
        "Karpman's drama triangle (1968): Persecutor, Victim, Rescuer; players switch corners.",
        "Roles are legitimate when the facts call for them and illegitimate when used as masks.",
        "Games repeat, make surface sense and hold an ulterior transaction; people play for strokes, to reinforce life positions and to avoid intimacy.",
      ],
      memory: "Persecutor, Victim, Rescuer: switch corners, switch to Adult.",
    },
  },
];

export default lessons;
