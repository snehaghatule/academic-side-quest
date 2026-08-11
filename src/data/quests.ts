/* ------------------------------------------------------------------
 *  All editable content lives here.
 *  Update a quest, swap a resource, change a title — no code needed.
 * ------------------------------------------------------------------ */

export type Quest = {
  number: string;
  title: string;
  date?: string;
  description: string;
  topics: string[];
  note: string;
};

/* ------------------------------- current -------------------------------- */

export const currentQuest = {
  number: "08",
  title: "Why We All Feel Like Everyone Else Has It Figured Out",
  date: "Thursday, 13 August 2026 · 7:15 PM IST",
  tagline: "Social comparison, the spotlight effect, and our very loud inner critic.",
  description:
    "Everyone else seems calm, sorted, and together — so why aren't we? This month we're going down the rabbit hole of social comparison and the sneaky ways our brains inflate how put-together other people are.",
  topics: ["Social comparison", "Impostor syndrome", "The spotlight effect", "Belonging"],
  note: "okay but hear me out",
  registerLabel: "Reserve a spot",
};

/* ------------------------------ previous -------------------------------- */

export const previousQuests: Quest[] = [
  {
    number: "07",
    title: "Why Humans Can't Stop Overthinking",
    description:
      "We followed the spirals — rumination, replaying conversations, and the 3 a.m. brain. What makes our minds loop, and is there any way out?",
    topics: ["Rumination", "Anxiety", "Cognitive load", "Decision fatigue"],
    note: "currently spiralling (academically)",
  },
  {
    number: "06",
    title: "Are We Our Childhood Experiences?",
    description:
      "A session on attachment, early memories, and how the stories we were told (or told ourselves) quietly shape who we become.",
    topics: ["Attachment theory", "Memory", "Narrative identity", "Development"],
    note: "wait, but why?",
  },
  {
    number: "05",
    title: "The Psychology of Belonging",
    description:
      "Why we're wired to find our people, what happens when we don't, and how groups quietly rewrite who we think we are.",
    topics: ["Belonging", "Group dynamics", "Social identity", "Loneliness"],
    note: "adding this to the reading list",
  },
  {
    number: "04",
    title: "The Quiet Science of Habit",
    description:
      "Cues, cravings, and why willpower is overrated. We unpacked how habits actually form — and why they're so hard to break.",
    topics: ["Habit loops", "Reward systems", "Self-regulation", "Behaviour change"],
    note: "one more paper before sleep",
  },
  {
    number: "03",
    title: "Why We Remember What We Remember",
    description:
      "Memory is less a recording and more an improv show. We explored why some moments stick and others vanish.",
    topics: ["Memory", "Attention", "Emotion", "Narrative"],
    note: "the plot thickens",
  },
  {
    number: "02",
    title: "Attention, Interrupted",
    description:
      "A session on focus, distraction, and what our scroll-without-reading habit is doing to our minds.",
    topics: ["Attention", "Digital behaviour", "Flow", "Boredom"],
    note: "brain loading...",
  },
  {
    number: "01",
    title: "The Beginner's Rabbit Hole",
    description:
      "Where it all started — a first, casual session on curiosity itself and why certain questions refuse to leave us alone.",
    topics: ["Curiosity", "Motivation", "Open questions"],
    note: "found a new rabbit hole",
  },
];

/* ------------------------------- founder -------------------------------- */

export const founder = {
  name: "Sneha Ghatule",
  role: "founder & curious human",
  photo: "/images/founder.jpg",
  bio: [
    "Hi, I've always loved teaching, mostly because it gives me an excuse to keep learning.",
    "Over the last few years, I've taught psychology in higher education, worked in mental health, developed curricula, and, most importantly, had conversations with students that rarely stayed neatly inside the syllabus.",
    "Partly because psychology refuses to stay where you put it. It is less a collection of settled facts than a set of complex, evolving models for understanding why people feel, relate, and suffer the way they do. And the best way to learn it, I've found, is by wrestling with those ideas out loud.",
    "In June 2025, I started a psychology club at the college where I taught. Apparently, the conversations were getting a little too interesting to leave in the classroom.",
    "When I eventually left the institution, I assumed those conversations would end too.",
    'Instead, my students asked, "Can we still meet?"',
    "So we did.",
    "What began as an informal psychology club grew into a small research community that now meets twice a month to read papers, unpack ideas, challenge assumptions, share questions, and occasionally disappear spectacularly far down a research rabbit hole.",
    "I've always told my students that the moment you work up the nerve to ask a 'stupid' question, it stops being one. It becomes a question the whole room gets to think about.",
    "That, really, is the point of this space.",
    "Welcome to Academic Side Quest.",
  ],
};

/* ------------------------------ join form ------------------------------- */

export const joinForm = {
  title: "Enter the Side Quest",
  copy: "Curious about psychology? Interested in research? Love questions that lead to even more questions? Join the community.",
  fields: {
    name: "What should we call you?",
    email: "Email (for quest invites only)",
    background: "Background / interests",
    topics: "Topics you want to explore",
  },
  submit: "Drop The Next Quest",
  successTitle: "You're in. (Kind of.)",
  successCopy:
    "Consider this a handshake. We'll send you details for the next quest the moment they're ready.",
};

/* --------------------------------- hero ---------------------------------- */

export const hero = {
  kicker: "a twice-a-month community",
  cta: "Join the Side Quest",
};
