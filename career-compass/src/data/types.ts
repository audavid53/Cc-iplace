export type PillarId =
  | "self-knowledge"
  | "financial-awareness"
  | "curiosity"
  | "social-skills"
  | "skill-stacking"
  | "physical-energy"
  | "adaptability";

export type PillarStatus = "strong" | "average" | "needs-work";

export type Pillar = {
  id: PillarId;
  name: string;
  shortName: string;
  /** One plain sentence a 19-year-old can act on. */
  summary: string;
  color: string;
  art: string;
  score: number;
  previousScore: number;
  lessons: Lesson[];
  project: Project;
};

export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  units: number;
  format: "video" | "reading" | "practice";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  units: number;
  deliverable: string;
};

export type Mission = {
  id: string;
  title: string;
  description: string;
  units: number;
  pillar: PillarId;
  /** Where completing this mission takes the learner. */
  href: string;
  cta: string;
  week: number;
};

export type Mentor = {
  id: string;
  name: string;
  role: string;
  company: string;
  sector: Sector;
  avatar?: string;
  bio: string;
  sessionTitle: string;
  duration: string;
  units: number;
  watched: boolean;
  takeaways: string[];
  quiz: QuizQuestion[];
  questionsAnswered: number;
};

export type Sector =
  | "Technology"
  | "Finance"
  | "Health"
  | "Creative & Media"
  | "Energy"
  | "Agriculture"
  | "Education"
  | "Law"
  | "Public Sector"
  | "Logistics"
  | "Retail & FMCG"
  | "Construction"
  | "Hospitality"
  | "Social Impact";

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  /** Shown after answering, right or wrong. */
  explanation: string;
};

export type BadgeTier = {
  level: number;
  name: string;
  glyph: string;
  from: string;
  to: string;
  unitsRequired: number;
  perk: string;
};

export type Challenge = {
  id: string;
  title: string;
  description: string;
  units: number;
  endsIn: string;
  participants: number;
  progress: number;
  goal: number;
};

export type FeedItem = {
  id: string;
  person: string;
  avatar?: string;
  action: string;
  detail: string;
  timeAgo: string;
  units?: number;
  kind: "mission" | "badge" | "project" | "question" | "challenge";
};

export type RoadmapStage = {
  id: string;
  week: number;
  title: string;
  description: string;
  perk: string;
  units: number;
  state: "done" | "current" | "locked";
};

export type Assessment = {
  id: string;
  title: string;
  tagline: string;
  why: string;
  minutes: number;
  units: number;
  questionCount: number;
  aiAssisted: boolean;
  aiExplainer?: string;
  questions: AssessmentQuestion[];
  outcome: AssessmentOutcome;
};

export type AssessmentQuestion = {
  id: string;
  prompt: string;
  options: string[];
};

export type AssessmentOutcome = {
  headline: string;
  summary: string;
  highlights: { label: string; value: string }[];
  nextActions: { label: string; href: string }[];
};
