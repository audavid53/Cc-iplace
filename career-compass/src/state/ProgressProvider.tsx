import { useCallback, useEffect, useMemo, useState } from "react";
import { tierFor } from "@/data/badges";
import {
  ProgressContext,
  STARTING_UNITS,
  STORAGE_KEY,
  type ProgressState,
  type Reward,
} from "./progress-context";

const EMPTY: ProgressState = { units: STARTING_UNITS, completed: {} };

function readStored(): ProgressState {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    if (typeof parsed.units !== "number" || typeof parsed.completed !== "object") return EMPTY;
    return { units: parsed.units, completed: parsed.completed ?? {} };
  } catch {
    // Corrupted or unavailable storage should never break the app.
    return EMPTY;
  }
}

/**
 * Holds everything the learner has earned. There is no backend, so progress is
 * persisted to localStorage — the shape is versioned so a future API can adopt
 * it without a migration.
 */
export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(readStored);
  const [rewards, setRewards] = useState<Reward[]>([]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Private-mode or quota errors are non-fatal; the session still works.
    }
  }, [state]);

  const complete = useCallback(
    ({
      key,
      units,
      label,
      effect,
    }: {
      key: string;
      units: number;
      label: string;
      effect: string;
    }) => {
      setState((previous) => {
        if (previous.completed[key]) return previous;

        const nextUnits = previous.units + units;
        const before = tierFor(previous.units);
        const after = tierFor(nextUnits);

        setRewards((queue) => [
          ...queue,
          {
            key: `${key}:${Date.now()}`,
            units,
            label,
            effect,
            ...(after.level > before.level ? { tierUnlocked: after } : {}),
          },
        ]);

        return {
          units: nextUnits,
          completed: { ...previous.completed, [key]: Date.now() },
        };
      });
    },
    [],
  );

  const hasCompleted = useCallback((key: string) => Boolean(state.completed[key]), [state.completed]);

  const dismissReward = useCallback((key: string) => {
    setRewards((queue) => queue.filter((reward) => reward.key !== key));
  }, []);

  const reset = useCallback(() => {
    setState(EMPTY);
    setRewards([]);
  }, []);

  const value = useMemo(
    () => ({ ...state, hasCompleted, complete, reset, rewards, dismissReward }),
    [state, hasCompleted, complete, reset, rewards, dismissReward],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
