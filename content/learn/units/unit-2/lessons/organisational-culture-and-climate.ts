import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-organisational-culture-is",
    name: "What organisational culture is",
    intro: "Shared meaning that sets one organisation apart.",
    before: {
      q: "Can two companies in the same industry, with the same products, have different cultures?",
      choices: [
        { label: "No", reveal: "They can. Culture is a system of shared meaning that distinguishes one organisation from another, whatever they make." },
        { label: "Yes", reveal: "Right. Culture is the shared meaning that distinguishes one organisation from another." },
      ],
    },
    lead: "Culture is “the way we do things here”: shared values, beliefs and norms, from visible artefacts down to unspoken assumptions.",
    check: [
      ask("In Schein's model, which level of culture is deepest and hardest to see?", "Basic assumptions", ["Artefacts", "Espoused values", "Written policies"], "Basic assumptions are taken for granted and rarely said aloud. Espoused values are tempting, but they are what people say they value, one level up."),
      ask("A bank says it values owning mistakes, and has an “error of the week” board. Yet clerks still hide errors. Which level is out of line with the others?", "The basic assumptions underneath", ["The artefacts on display", "The espoused values", "None: the culture is consistent"], "The board (artefact) and the slogan (espoused value) both say “report errors”. If clerks still hide them, the unspoken assumption must be that reporting is risky."),
      ask("A start-up rates high on innovation and low on stability; an insurance office rates the reverse. Which judgement fits the seven characteristics?", "Each profile can suit its own work", ["The start-up's culture is better", "The insurance office's culture is better", "Both are weak cultures"], "The seven characteristics describe a culture; they do not rank it. Which profile is best depends on the work and the strategy."),
    ],
    lens: [],
    reflect: "Name one artefact, one espoused value and one unspoken assumption where you work or study.",
    summary: {
      points: [
        "Culture: a system of shared meaning that distinguishes one organisation from another (Robbins and Judge).",
        "Schein's three levels: artefacts, espoused values, basic assumptions.",
        "Seven characteristics: innovation and risk-taking, attention to detail, outcome, people and team orientation, aggressiveness, stability.",
        "When culture and the rule book disagree, people usually follow the culture.",
      ],
      memory: "Culture is how things are done here.",
    },
  },
  {
    blockId: "strength-and-functions-of-culture",
    name: "Strength and functions of culture",
    intro: "Dominant and subcultures, strong and weak, and what culture does.",
    before: {
      q: "Can a sales team have a culture slightly different from the company's?",
      choices: [
        { label: "No", reveal: "It can. Subcultures form within departments, locations or professions, mixing the organisation's values with local experience." },
        { label: "Yes", reveal: "Right. That is a subculture: organisational values combined with local experience." },
      ],
    },
    lead: "A strong culture has core values intensely held and widely shared; it guides behaviour, but it can also resist change.",
    check: [
      ask("Which function of culture acts as social glue?", "Stability", ["Boundary definition", "Identity", "Behaviour guide"], "Stability holds the organisation together. Identity is close, but it is about members' sense of belonging, not the glue between them."),
      ask("In a pharma firm, sales prizes speed while the lab prizes caution, yet both put patient safety first. What are the two styles?", "Subcultures within a dominant culture", ["Two weak cultures", "A strong culture and a weak culture", "Two competing dominant cultures"], "The shared value of patient safety is the dominant culture; the local styles are subcultures. They sit inside it, not against it."),
      ask("A company's culture is intensely held and widely shared, but its core value is never to bring bad news upward. How should it be judged?", "Strong but harmful", ["Weak, because it is harmful", "Strong, and therefore good", "Weak, because it hides things"], "Strength measures how widely and firmly values are held, not whether they are right. Calling it weak confuses strength with quality."),
    ],
    lens: [],
    reflect: "Is the culture where you work or study strong or weak? Is it good? Are those the same answer?",
    summary: {
      points: [
        "Dominant culture: core values most accept. Subcultures: departmental or local variants within it.",
        "Strong culture: core values intensely held and widely shared (Robbins and Judge).",
        "Functions: boundary definition, identity, commitment, stability, behaviour guide.",
        "Strong is not the same as good: strong cultures can block change, diversity and mergers.",
      ],
      memory: "Boundary, identity, commitment, stability, guide.",
    },
  },
  {
    blockId: "how-culture-is-built-and-kept",
    name: "How culture is built and kept",
    intro: "Founders, leaders, reinforcement and socialisation.",
    before: {
      q: "Does a new employee's adjustment to culture start on their first day?",
      choices: [
        { label: "Yes", reveal: "It starts earlier. In the pre-arrival stage, expectations form through interviews, websites and reviews." },
        { label: "Before that", reveal: "Right. Socialisation begins with pre-arrival, then encounter, then metamorphosis." },
      ],
    },
    lead: "Founders start a culture, leaders model it, selection and rewards reinforce it, and socialisation passes it to each newcomer.",
    check: [
      ask("In which socialisation stage do expectations meet reality through orientation and onboarding?", "Encounter", ["Pre-arrival", "Metamorphosis", "Selection"], "Encounter is the reality check. Metamorphosis comes after, when the employee has adapted and fits the norms."),
      ask("A new probationary officer has learned the branch's unwritten rules and now explains them to the next batch. Which stage has she reached?", "Metamorphosis", ["Pre-arrival", "Encounter", "Orientation"], "Teaching the norms to others shows she has become an insider: metamorphosis. Encounter is the earlier stage, when reality first surprised her."),
      ask("A company says “customer first” but pays bonuses only on monthly volume. Which change would most move behaviour toward the stated value?", "Add customer measures, such as returns, to the bonus", ["Put up posters about customers", "Repeat the value in every meeting", "Hire people who say they love customers"], "People learn culture from what is rewarded, not what is announced. Posters and speeches change the espoused value, but the bonus still teaches volume."),
    ],
    lens: [
      { pairing: 0, adds: "When the leader is active, the people are active; when careless, careless.", differs: "Kauṭilya speaks of a ruler and his servants. Culture theory adds founders' philosophy, reinforcement systems and socialisation." },
    ],
    reflect: "What does your manager do, not say, that has shaped how your team works?",
    summary: {
      points: [
        "Built by the founder's philosophy and top management as role models.",
        "Kept by selection, training, performance evaluation, rewards and promotion.",
        "Socialisation: pre-arrival, encounter, metamorphosis. It teaches norms; training teaches skills.",
        "A positive culture builds on strengths and rewards more than it punishes, but still needs objective standards.",
      ],
      memory: "Pre-arrival, encounter, metamorphosis.",
    },
  },
  {
    blockId: "types-of-culture-and-climate",
    name: "Types of culture, and climate",
    intro: "Clan, adhocracy, market, hierarchy, and how work feels.",
    before: {
      q: "Is culture the same thing as how it feels to work somewhere?",
      choices: [
        { label: "Yes", reveal: "Not quite. Culture is shared values and meaning; climate is shared perceptions and feelings about the workplace now." },
        { label: "Not quite", reveal: "Right. Culture asks “How do we do things here?” Climate asks “What does it feel like to work here?”" },
      ],
    },
    lead: "Cultures sort into clan, adhocracy, market and hierarchy; climate is the current feel of the workplace, and changes faster.",
    check: [
      ask("A dynamic, entrepreneurial culture that values innovation and risk-taking is…", "Adhocracy", ["Clan", "Market", "Hierarchy"], "Adhocracy is the flexible, outward-looking corner: it creates. Market also looks outward, but it prizes stability and measurable results."),
      ask("A new head arrives at a government office; within a month people stop speaking up, though rules and values are unchanged. What has changed?", "The climate", ["The culture", "The dominant culture's values", "The type, from clan to market"], "Values and rules are the same, so the culture has not moved. Climate, the shared perception of what work feels like, can shift in weeks."),
      ask("In the competing values framework, which pair of cultures sits in opposite corners?", "Clan and market", ["Clan and adhocracy", "Market and hierarchy", "Adhocracy and market"], "Clan is internal and flexible; market is external and stable, so they are opposite. Clan and adhocracy share flexibility, so they sit side by side."),
    ],
    lens: [
      { pairing: 1, adds: "Fear named as the first thing to remove, before any structure or rule.", differs: "The poem is about a nation's freedom. Climate research studies how members of one organisation perceive it, and measures it." },
    ],
    reflect: "Which of the four culture types fits your organisation best, and what is its climate like this month?",
    summary: {
      points: [
        "Competing values framework (Cameron and Quinn): internal or external focus; flexibility or stability.",
        "Clan collaborates, adhocracy creates, market competes, hierarchy controls.",
        "Climate: shared perceptions of the workplace; people-, rule-, innovation- or goal-oriented.",
        "Culture is values and meaning, long-term; climate is perceptions and feelings, current.",
      ],
      memory: "Clan collaborates, adhocracy creates, market competes, hierarchy controls.",
    },
  },
];

export default lessons;
