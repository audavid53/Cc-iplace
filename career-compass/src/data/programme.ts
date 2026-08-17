import type { Challenge, FeedItem, Mission, RoadmapStage } from "./types";

export const CURRENT_WEEK = 2;

export const MISSIONS: Mission[] = [
  {
    id: "m-1",
    title: "Complete the Career Clarity assessment",
    description: "Twelve questions. It sets the baseline the rest of your journey is measured against.",
    units: 120,
    pillar: "self-knowledge",
    href: "/assessments/career-clarity",
    cta: "Start assessment",
    week: 1,
  },
  {
    id: "m-2",
    title: "Watch one session from your target sector",
    description: "Hear how someone actually got in — and what they would skip if they started again.",
    units: 80,
    pillar: "curiosity",
    href: "/mentorship",
    cta: "Browse sessions",
    week: 2,
  },
  {
    id: "m-3",
    title: "Send three networking messages",
    description: "Your weakest pillar right now. Three messages this week moves it more than any lesson.",
    units: 90,
    pillar: "social-skills",
    href: "/learning/social-skills",
    cta: "Open the lesson",
    week: 2,
  },
  {
    id: "m-4",
    title: "Ship your Proof-of-Skill portfolio piece",
    description: "One small piece of real work beats a long list of courses.",
    units: 150,
    pillar: "skill-stacking",
    href: "/learning/skill-stacking",
    cta: "See the project",
    week: 3,
  },
  {
    id: "m-5",
    title: "Present your plan to your Dream Team",
    description: "Say it out loud to four people who will hold you to it.",
    units: 130,
    pillar: "adaptability",
    href: "/community",
    cta: "Go to community",
    week: 4,
  },
];

export const ROADMAP: RoadmapStage[] = [
  {
    id: "r-1",
    week: 1,
    title: "Orientation",
    description: "Meet your cohort, set up your profile and take your baseline assessments.",
    perk: "Explorer badge",
    units: 300,
    state: "done",
  },
  {
    id: "r-2",
    week: 1,
    title: "Know Yourself",
    description: "Self-Knowledge and Financial Awareness lessons, plus your Career Identity Statement.",
    perk: "Assessment suite unlocked",
    units: 420,
    state: "done",
  },
  {
    id: "r-3",
    week: 2,
    title: "Explore Industries",
    description: "Mentor sessions across 14 Nigerian sectors and your first sector deep-dive.",
    perk: "Weekly challenges unlocked",
    units: 380,
    state: "current",
  },
  {
    id: "r-4",
    week: 2,
    title: "Build Your Network",
    description: "Five real conversations with professionals working in your target sector.",
    perk: "Ask professionals directly",
    units: 400,
    state: "locked",
  },
  {
    id: "r-5",
    week: 3,
    title: "Stack Your Skills",
    description: "Choose your second skill and ship one proof-of-skill portfolio piece.",
    perk: "Project review by a mentor",
    units: 520,
    state: "locked",
  },
  {
    id: "r-6",
    week: 3,
    title: "Practical Projects",
    description: "Two real-world projects assessed against the pillars they strengthen.",
    perk: "Dream Team rooms",
    units: 560,
    state: "locked",
  },
  {
    id: "r-7",
    week: 4,
    title: "Prove It",
    description: "Mock interviews, portfolio review and your final readiness re-assessment.",
    perk: "Profile shared with partners",
    units: 640,
    state: "locked",
  },
  {
    id: "r-8",
    week: 4,
    title: "Launch",
    description: "Your 90-day plan, alumni network access and referral to open roles.",
    perk: "Compass badge",
    units: 700,
    state: "locked",
  },
];

export const CHALLENGES: Challenge[] = [
  {
    id: "c-1",
    title: "The Five Conversations Challenge",
    description:
      "Every learner in the cohort reaches out to five professionals this week. Log each conversation and share one thing you learned.",
    units: 200,
    endsIn: "3 days",
    participants: 486,
    progress: 1720,
    goal: 2500,
  },
  {
    id: "c-2",
    title: "Sector Myth-Buster",
    description:
      "Post one belief about your target sector that turned out to be wrong once you looked closely.",
    units: 90,
    endsIn: "6 days",
    participants: 213,
    progress: 640,
    goal: 1000,
  },
];

export const FEED: FeedItem[] = [
  {
    id: "f-1",
    person: "Chidinma O.",
    action: "completed",
    detail: "Five Real Conversations project",
    timeAgo: "12m ago",
    units: 70,
    kind: "project",
  },
  {
    id: "f-2",
    person: "Tunde A.",
    action: "unlocked",
    detail: "the Pathfinder badge",
    timeAgo: "48m ago",
    kind: "badge",
  },
  {
    id: "f-3",
    person: "Amara N.",
    action: "asked",
    detail: "Ifeoma Balogun a question about breaking into fintech",
    timeAgo: "2h ago",
    kind: "question",
  },
  {
    id: "f-4",
    person: "Segun B.",
    action: "finished",
    detail: "the Sector Deep-Dive mission",
    timeAgo: "3h ago",
    units: 60,
    kind: "mission",
  },
  {
    id: "f-5",
    person: "Halima Y.",
    action: "joined",
    detail: "The Five Conversations Challenge",
    timeAgo: "5h ago",
    kind: "challenge",
  },
];

export const DREAM_TEAM = [
  { name: "Chidinma Okeke" },
  { name: "Tunde Adebayo" },
  { name: "Amara Nwosu" },
  { name: "Segun Bello" },
  { name: "Halima Yusuf" },
];

/** Peers within the same level — comparison stays encouraging, not cut-throat. */
export const LEVEL_PEERS = [
  { name: "Chidinma O.", units: 2860, you: false },
  { name: "You", units: 2450, you: true },
  { name: "Tunde A.", units: 2310, you: false },
  { name: "Amara N.", units: 2180, you: false },
  { name: "Segun B.", units: 2020, you: false },
];
