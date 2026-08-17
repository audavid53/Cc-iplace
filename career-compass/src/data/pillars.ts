import type { Pillar, PillarId, PillarStatus } from "./types";

export const PILLARS: Pillar[] = [
  {
    id: "self-knowledge",
    name: "Self-Knowledge",
    shortName: "Self-Knowledge",
    summary: "Knowing your strengths, values and what work actually suits you.",
    color: "var(--color-pillar-self)",
    art: "/art/frame-104-1.svg",
    score: 78,
    previousScore: 64,
    lessons: [
      { id: "sk-1", title: "Name your top five strengths", minutes: 8, units: 20, format: "video" },
      { id: "sk-2", title: "Values vs. salary: making the trade-off", minutes: 11, units: 25, format: "video" },
      { id: "sk-3", title: "Write your one-line professional identity", minutes: 15, units: 30, format: "practice" },
    ],
    project: {
      id: "sk-p",
      title: "Your Career Identity Statement",
      description: "Draft a 100-word statement that says who you are professionally and the problems you want to solve.",
      units: 60,
      deliverable: "A written statement added to your profile",
    },
  },
  {
    id: "financial-awareness",
    name: "Financial Situational Awareness",
    shortName: "Financial Awareness",
    summary: "Understanding what roles pay, what they cost you, and how to plan around it.",
    color: "var(--color-pillar-finance)",
    art: "/art/frame-104.svg",
    score: 52,
    previousScore: 48,
    lessons: [
      { id: "fa-1", title: "What entry roles really pay in Nigeria", minutes: 12, units: 25, format: "video" },
      { id: "fa-2", title: "Budgeting on a first salary", minutes: 9, units: 20, format: "reading" },
      { id: "fa-3", title: "Negotiating your first offer", minutes: 14, units: 30, format: "video" },
    ],
    project: {
      id: "fa-p",
      title: "12-Month Money Map",
      description: "Build a simple plan covering income, learning costs and savings for your first year of work.",
      units: 60,
      deliverable: "A completed money map worksheet",
    },
  },
  {
    id: "curiosity",
    name: "Curiosity to Explore",
    shortName: "Curiosity",
    summary: "Actively investigating industries instead of guessing from the outside.",
    color: "var(--color-pillar-curiosity)",
    art: "/art/frame-104-3.svg",
    score: 71,
    previousScore: 55,
    lessons: [
      { id: "cu-1", title: "How to research an industry in 30 minutes", minutes: 10, units: 20, format: "video" },
      { id: "cu-2", title: "Reading a job advert like an insider", minutes: 7, units: 20, format: "reading" },
      { id: "cu-3", title: "Run your first informational interview", minutes: 16, units: 35, format: "practice" },
    ],
    project: {
      id: "cu-p",
      title: "Sector Deep-Dive",
      description: "Pick one of the 14 sectors and produce a one-page brief on how people actually enter it.",
      units: 60,
      deliverable: "A one-page sector brief",
    },
  },
  {
    id: "social-skills",
    name: "Social Skills & Networks",
    shortName: "Social & Networks",
    summary: "Building relationships that open doors, and knowing how to ask well.",
    color: "var(--color-pillar-social)",
    art: "/art/frame-104-4.svg",
    score: 44,
    previousScore: 44,
    lessons: [
      { id: "ss-1", title: "The follow-up message that gets replies", minutes: 6, units: 20, format: "video" },
      { id: "ss-2", title: "Introducing yourself in 30 seconds", minutes: 9, units: 20, format: "practice" },
      { id: "ss-3", title: "Keeping a relationship warm without being pushy", minutes: 11, units: 25, format: "video" },
    ],
    project: {
      id: "ss-p",
      title: "Five Real Conversations",
      description: "Reach out to five professionals in your target sector and log what you learned from each.",
      units: 70,
      deliverable: "Five logged conversations",
    },
  },
  {
    id: "skill-stacking",
    name: "Skill Stacking",
    shortName: "Skill Stacking",
    summary: "Combining ordinary skills into a combination that is hard to replace.",
    color: "var(--color-pillar-skills)",
    art: "/art/frame-104-2.svg",
    score: 66,
    previousScore: 58,
    lessons: [
      { id: "st-1", title: "Why specialists stall and stackers grow", minutes: 12, units: 25, format: "video" },
      { id: "st-2", title: "Choosing your second skill", minutes: 10, units: 20, format: "practice" },
      { id: "st-3", title: "Turning coursework into proof", minutes: 13, units: 30, format: "video" },
    ],
    project: {
      id: "st-p",
      title: "Proof-of-Skill Portfolio Piece",
      description: "Ship one small piece of real work that demonstrates your stack to an employer.",
      units: 80,
      deliverable: "A published portfolio piece",
    },
  },
  {
    id: "physical-energy",
    name: "Physical & Energy Capital",
    shortName: "Energy Capital",
    summary: "Protecting the health and routine that your career runs on.",
    color: "var(--color-pillar-energy)",
    art: "/art/frame-104-5.svg",
    score: 61,
    previousScore: 67,
    lessons: [
      { id: "pe-1", title: "Designing a workday you can sustain", minutes: 8, units: 20, format: "video" },
      { id: "pe-2", title: "Sleep, focus and interview performance", minutes: 7, units: 20, format: "reading" },
      { id: "pe-3", title: "Building a 20-minute daily reset", minutes: 10, units: 25, format: "practice" },
    ],
    project: {
      id: "pe-p",
      title: "Two-Week Energy Log",
      description: "Track energy against output for two weeks and identify your two highest-value hours each day.",
      units: 50,
      deliverable: "A completed energy log",
    },
  },
  {
    id: "adaptability",
    name: "Adaptability & Resilience",
    shortName: "Adaptability",
    summary: "Recovering quickly from rejection and changing plans without losing direction.",
    color: "var(--color-pillar-resilience)",
    art: "/art/frame-104-6.svg",
    score: 83,
    previousScore: 75,
    lessons: [
      { id: "ad-1", title: "What to do after a rejection email", minutes: 6, units: 20, format: "video" },
      { id: "ad-2", title: "Changing direction without starting over", minutes: 12, units: 25, format: "video" },
      { id: "ad-3", title: "Building a personal setback protocol", minutes: 9, units: 25, format: "practice" },
    ],
    project: {
      id: "ad-p",
      title: "Setback Playbook",
      description: "Write the three steps you will take the next time a plan falls through, before it happens.",
      units: 50,
      deliverable: "A written personal playbook",
    },
  },
];

export const PILLAR_BY_ID = Object.fromEntries(
  PILLARS.map((pillar) => [pillar.id, pillar]),
) as Record<PillarId, Pillar>;

export function statusOf(score: number): PillarStatus {
  if (score >= 70) return "strong";
  if (score >= 50) return "average";
  return "needs-work";
}

export const STATUS_LABEL: Record<PillarStatus, string> = {
  strong: "Strong",
  average: "Average",
  "needs-work": "Needs work",
};

export const STATUS_TONE = {
  strong: "success",
  average: "warn",
  "needs-work": "danger",
} as const;

/** Overall readiness is the mean of the seven pillar scores. */
export function readinessScore(pillars: Pillar[] = PILLARS) {
  const total = pillars.reduce((sum, pillar) => sum + pillar.score, 0);
  return Math.round(total / pillars.length);
}

export function previousReadinessScore(pillars: Pillar[] = PILLARS) {
  const total = pillars.reduce((sum, pillar) => sum + pillar.previousScore, 0);
  return Math.round(total / pillars.length);
}

/** The pillar to push next: lowest score, since that is where effort pays most. */
export function priorityPillar(pillars: Pillar[] = PILLARS) {
  return pillars.reduce((lowest, pillar) => (pillar.score < lowest.score ? pillar : lowest));
}
