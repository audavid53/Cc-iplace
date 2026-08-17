import { Check, Lock, Play } from "lucide-react";
import { Pill } from "@/components/ui/Pill";
import type { RoadmapStage } from "@/data/types";
import { cn } from "@/lib/cn";

const NODE_STATE = {
  done: {
    node: "bg-success text-white",
    label: "Completed",
    tone: "success",
  },
  current: {
    node: "bg-brand-500 text-white ring-6 ring-brand-100",
    label: "You are here",
    tone: "brand",
  },
  locked: {
    node: "bg-line text-muted",
    label: "Locked",
    tone: "neutral",
  },
} as const;

/**
 * The programme roadmap, drawn as a winding trail rather than a list: stages
 * alternate sides so the whole path is visible at a glance and the current
 * position is obvious. Semantically it stays an ordered list.
 */
export function RoadmapTrail({ stages }: { stages: RoadmapStage[] }) {
  return (
    <ol className="relative">
      {/* The trail itself — decorative, the list order carries the meaning. */}
      <span
        aria-hidden="true"
        className="absolute inset-y-4 left-6 w-1 rounded-pill bg-line sm:left-1/2 sm:-translate-x-1/2"
      />

      {stages.map((stage, index) => {
        const state = NODE_STATE[stage.state];
        const alignRight = index % 2 === 1;

        return (
          <li
            key={stage.id}
            className={cn(
              "relative flex gap-4 pb-6 sm:w-1/2 sm:gap-6",
              // Pull alternating stages together so the path reads as one trail.
              index > 0 && "sm:-mt-8",
              alignRight ? "sm:ml-auto sm:flex-row sm:pl-8" : "sm:flex-row-reverse sm:pr-8 sm:text-right",
            )}
          >
            <span
              className={cn(
                "z-10 grid size-12 shrink-0 place-items-center rounded-full text-sm font-extrabold",
                state.node,
                alignRight ? "sm:-ml-14" : "sm:-mr-14",
              )}
            >
              {stage.state === "done" ? (
                <Check aria-hidden="true" className="size-5" />
              ) : stage.state === "locked" ? (
                <Lock aria-hidden="true" className="size-4.5" />
              ) : (
                <Play aria-hidden="true" className="size-5 fill-current" />
              )}
              <span className="sr-only">{state.label}</span>
            </span>

            <div
              className={cn(
                "min-w-0 flex-1 rounded-card border bg-surface p-4 shadow-card",
                stage.state === "current" ? "border-brand-200 ring-1 ring-brand-100" : "border-line",
                stage.state === "locked" && "border-dashed border-line-strong shadow-none",
              )}
            >
              <div className={cn("flex flex-wrap items-center gap-1.5", alignRight ? "" : "sm:justify-end")}>
                <Pill tone="neutral" size="sm">
                  Week {stage.week}
                </Pill>
                <Pill tone={state.tone} size="sm">
                  {state.label}
                </Pill>
              </div>
              <h3 className="mt-2 text-base font-bold text-ink">{stage.title}</h3>
              <p className="mt-1 text-sm text-muted">{stage.description}</p>
              <p className="mt-3 text-xs font-semibold text-brand-700">
                Unlocks: {stage.perk} · +{stage.units} Units
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
