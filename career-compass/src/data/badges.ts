import type { BadgeTier } from "./types";

/**
 * Thirteen tiers. Each one is tied to a concrete amount of earned Units and
 * unlocks something real — a perk, a room, an opportunity — so the badge is a
 * door rather than a sticker.
 */
export const BADGE_TIERS: BadgeTier[] = [
  { level: 1, name: "Starter", glyph: "1", from: "#9ca3af", to: "#6b7280", unitsRequired: 0, perk: "Access to the cohort community" },
  { level: 2, name: "Explorer", glyph: "2", from: "#8a63f4", to: "#5525e8", unitsRequired: 300, perk: "Unlocks the full assessment suite" },
  { level: 3, name: "Pathfinder", glyph: "3", from: "#5525e8", to: "#3b18a6", unitsRequired: 700, perk: "Unlocks weekly community challenges" },
  { level: 4, name: "Builder", glyph: "4", from: "#0f6ed4", to: "#0b4f9c", unitsRequired: 1200, perk: "Project feedback from a reviewer" },
  { level: 5, name: "Connector", glyph: "5", from: "#0d9488", to: "#0f766e", unitsRequired: 1800, perk: "Ask professionals direct questions" },
  { level: 6, name: "Practitioner", glyph: "6", from: "#0e8f4d", to: "#0a6e3b", unitsRequired: 2500, perk: "Portfolio review with a mentor" },
  { level: 7, name: "Strategist", glyph: "7", from: "#f0a202", to: "#c07d00", unitsRequired: 3300, perk: "Access to the Dream Team rooms" },
  { level: 8, name: "Specialist", glyph: "8", from: "#d9480f", to: "#a63a0c", unitsRequired: 4200, perk: "Priority seat in live sector sessions" },
  { level: 9, name: "Mentor-in-Training", glyph: "9", from: "#c22d59", to: "#8f1f41", unitsRequired: 5200, perk: "Can mentor cohort newcomers" },
  { level: 10, name: "Industry Ready", glyph: "10", from: "#7c3aed", to: "#5b21b6", unitsRequired: 6300, perk: "Profile shared with hiring partners" },
  { level: 11, name: "Trailblazer", glyph: "11", from: "#0891b2", to: "#155e75", unitsRequired: 7500, perk: "Invitation to partner interviews" },
  { level: 12, name: "Standard Bearer", glyph: "12", from: "#b45309", to: "#7c3d06", unitsRequired: 8800, perk: "Referral to open roles" },
  { level: 13, name: "Compass", glyph: "13", from: "#5525e8", to: "#f0a202", unitsRequired: 10200, perk: "Alumni network and cohort leadership" },
];

const FIRST_TIER = BADGE_TIERS[0]!;
const LAST_TIER = BADGE_TIERS[BADGE_TIERS.length - 1]!;

export function tierFor(units: number): BadgeTier {
  let current = FIRST_TIER;
  for (const tier of BADGE_TIERS) {
    if (units >= tier.unitsRequired) current = tier;
  }
  return current;
}

export function nextTierFor(units: number): BadgeTier | null {
  return BADGE_TIERS.find((tier) => tier.unitsRequired > units) ?? null;
}

/** Percentage of the way from the current tier to the next one. */
export function tierProgress(units: number): number {
  const current = tierFor(units);
  const next = nextTierFor(units);
  if (!next) return 100;
  const span = next.unitsRequired - current.unitsRequired;
  return Math.round(((units - current.unitsRequired) / span) * 100);
}

export function unitsToNextTier(units: number): number {
  const next = nextTierFor(units);
  return next ? next.unitsRequired - units : 0;
}

export { LAST_TIER };
