import { ArrowRight, Check, Lock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Pill } from "@/components/ui/Pill";
import { PILLAR_BY_ID } from "@/data/pillars";
import type { Mission } from "@/data/types";
import { useProgress } from "@/state/useProgress";
import { cn } from "@/lib/cn";

type MissionCardProps = {
  mission: Mission;
  locked?: boolean;
  /** The single most important thing to do next gets extra visual weight. */
  featured?: boolean;
};

export function MissionCard({ mission, locked = false, featured = false }: MissionCardProps) {
  const { hasCompleted } = useProgress();
  const pillar = PILLAR_BY_ID[mission.pillar];
  const done = hasCompleted(`mission:${mission.id}`);

  const body = (
    <>
      <div className="flex items-start gap-3">
        <img
          src={pillar.art}
          alt=""
          width={44}
          height={44}
          loading="lazy"
          decoding="async"
          className={cn("size-11 shrink-0", locked && "opacity-40 grayscale")}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <Pill tone={featured ? "brand" : "neutral"} size="sm">
              Week {mission.week}
            </Pill>
            <Pill tone="xp" size="sm" icon={<Sparkles />}>
              +{mission.units} Units
            </Pill>
            <Pill tone="neutral" size="sm">
              {pillar.shortName}
            </Pill>
          </div>
          <h3
            className={cn(
              "mt-2 font-bold text-ink",
              featured ? "text-lg sm:text-xl" : "text-base",
            )}
          >
            {mission.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{mission.description}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {done ? (
          <Pill tone="success" icon={<Check />}>
            Completed
          </Pill>
        ) : locked ? (
          <Pill tone="neutral" icon={<Lock />}>
            Unlocks in week {mission.week}
          </Pill>
        ) : (
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-pill px-4 py-2 text-sm font-semibold",
              featured ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-700",
            )}
          >
            {mission.cta}
            <ArrowRight aria-hidden="true" className="size-4" />
          </span>
        )}
      </div>
    </>
  );

  const shell = cn(
    "block rounded-card border bg-surface p-5 text-left shadow-card transition-[transform,box-shadow] duration-200",
    featured ? "border-brand-200 ring-1 ring-brand-100" : "border-line",
    locked && "border-dashed border-line-strong shadow-none",
    !locked && "hover:-translate-y-0.5 hover:shadow-raised",
  );

  if (locked) {
    return (
      <div className={shell} aria-disabled="true">
        {body}
      </div>
    );
  }

  return (
    <Link to={mission.href} className={shell}>
      {body}
    </Link>
  );
}
