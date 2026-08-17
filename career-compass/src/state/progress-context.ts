import { createContext } from "react";
import type { BadgeTier } from "@/data/types";

/** A completed action, keyed as `<kind>:<id>` so it is stable across releases. */
export type ActionKey = string;

export type Reward = {
  key: string;
  units: number;
  /** What the learner actually did, in their own terms. */
  label: string;
  /** What changed as a result — the "visible effort" half of the feedback. */
  effect: string;
  tierUnlocked?: BadgeTier;
};

export type ProgressState = {
  units: number;
  completed: Record<ActionKey, number>;
};

export type ProgressContextValue = ProgressState & {
  /** True once this exact action has been completed. */
  hasCompleted: (key: ActionKey) => boolean;
  /**
   * Award units for a concrete action. Repeating the same action never awards
   * twice, so the total always reflects real work.
   */
  complete: (input: { key: ActionKey; units: number; label: string; effect: string }) => void;
  reset: () => void;
  rewards: Reward[];
  dismissReward: (key: string) => void;
};

export const ProgressContext = createContext<ProgressContextValue | null>(null);

/** Units carried in from the pre-programme scholarship interview. */
export const STARTING_UNITS = 2450;
export const STORAGE_KEY = "career-compass:progress:v1";
