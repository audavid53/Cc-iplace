import { ArrowRight, CheckCircle2, PlayCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { BadgeArt } from "@/components/art/BadgeArt";
import { ChallengeBanner } from "@/components/gamification/ChallengeBanner";
import { MissionCard } from "@/components/gamification/MissionCard";
import { RoadmapTrail } from "@/components/gamification/RoadmapTrail";
import { AvatarGroup, Avatar } from "@/components/ui/Avatar";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { ProgressBar, ProgressRing } from "@/components/ui/Progress";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { nextTierFor, tierFor, tierProgress, unitsToNextTier } from "@/data/badges";
import { MENTORS } from "@/data/mentors";
import { PILLARS, priorityPillar, previousReadinessScore, readinessScore } from "@/data/pillars";
import { CHALLENGES, CURRENT_WEEK, DREAM_TEAM, FEED, MISSIONS, ROADMAP } from "@/data/programme";
import { useProgress } from "@/state/useProgress";

const LEARNER_FIRST_NAME = "Mary";

function greeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export default function Dashboard() {
  const { units, hasCompleted } = useProgress();
  const tier = tierFor(units);
  const next = nextTierFor(units);

  const score = readinessScore();
  const previous = previousReadinessScore();
  const delta = score - previous;
  const priority = priorityPillar();

  const nextMission =
    MISSIONS.find((mission) => mission.week <= CURRENT_WEEK && !hasCompleted(`mission:${mission.id}`)) ??
    MISSIONS[0]!;
  const laterMissions = MISSIONS.filter((mission) => mission.id !== nextMission.id).slice(0, 2);
  const upcomingSession = MENTORS.find((mentor) => !mentor.watched) ?? MENTORS[0]!;
  const challenge = CHALLENGES[0]!;

  return (
    <div className="space-y-10">
      {/* 1 — Who you are and where you are ------------------------------- */}
      <header>
        <p className="text-sm font-semibold text-muted">
          {greeting()}, {LEARNER_FIRST_NAME} 👋
        </p>
        <h1 className="mt-1 text-title text-ink">Week {CURRENT_WEEK}: Explore Industries</h1>
        <p className="mt-2 max-w-2xl text-muted">
          You are two weeks into the journey and moving. One action today keeps the streak going.
        </p>
      </header>

      <Card className="flex flex-wrap items-center gap-5">
        <BadgeArt from={tier.from} to={tier.to} glyph={tier.glyph} size={64} />
        <div className="min-w-[12rem] flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-bold text-ink">
              Level {tier.level} · {tier.name}
            </h2>
            <Pill tone="xp" icon={<Sparkles />}>
              {units.toLocaleString("en-NG")} Units
            </Pill>
          </div>
          <ProgressBar
            className="mt-3"
            value={tierProgress(units)}
            label={next ? `Progress to ${next.name}` : "Highest badge reached"}
            color="var(--color-xp)"
          />
          <p className="mt-2 text-sm text-muted">
            {next
              ? `${unitsToNextTier(units).toLocaleString("en-NG")} Units to ${next.name} — unlocks ${next.perk.toLowerCase()}.`
              : "You have reached the final badge."}
          </p>
        </div>
        {next ? (
          <div className="flex items-center gap-3 rounded-card bg-canvas px-4 py-3">
            <BadgeArt from={next.from} to={next.to} glyph={next.glyph} size={40} locked />
            <div>
              <p className="text-xs font-semibold text-muted">Next badge</p>
              <p className="text-sm font-bold text-ink">{next.name}</p>
            </div>
          </div>
        ) : null}
      </Card>

      {/* 2 — What should I do next? -------------------------------------- */}
      <section aria-labelledby="next-up">
        <SectionHeader
          id="next-up"
          title="Do this next"
          description="One clear action, chosen from where your score has the most room to move."
        />
        <MissionCard mission={nextMission} featured />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Card interactive className="flex min-w-0 flex-col">
            <CardHeader
              title="Continue learning"
              description={`${priority.shortName} · ${priority.lessons[0]!.title}`}
            />
            <ProgressBar
              value={priority.score}
              label={`${priority.name} progress`}
              color={priority.color}
              showLabel
            />
            <ButtonLink
              to={`/learning/${priority.id}`}
              variant="secondary"
              size="sm"
              className="mt-4 self-start"
            >
              <PlayCircle aria-hidden="true" className="size-4" />
              Resume lesson
            </ButtonLink>
          </Card>

          <Card interactive className="flex min-w-0 flex-col">
            <CardHeader
              title="Upcoming industry session"
              description={`${upcomingSession.sector} · ${upcomingSession.duration}`}
            />
            <div className="flex items-center gap-3">
              <Avatar name={upcomingSession.name} size="md" />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-ink">{upcomingSession.sessionTitle}</p>
                <p className="truncate text-sm text-muted">
                  {upcomingSession.name}, {upcomingSession.role}
                </p>
              </div>
            </div>
            <ButtonLink
              to={`/mentorship/${upcomingSession.id}`}
              variant="secondary"
              size="sm"
              className="mt-4 self-start"
            >
              Watch session
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </Card>
        </div>
      </section>

      {/* 3 — How am I progressing? --------------------------------------- */}
      <section aria-labelledby="readiness">
        <SectionHeader
          id="readiness"
          title="Career readiness snapshot"
          description="Your average across the seven pillars."
          action={
            <Link
              to="/learning"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Open Learning Centre →
            </Link>
          }
        />
        <Card className="flex flex-wrap items-center gap-6">
          <ProgressRing value={score} label="Career readiness score" size={132}>
            <span>
              <span className="block text-3xl font-extrabold text-brand-500">{score}%</span>
              <span className="block text-xs font-semibold text-muted">ready</span>
            </span>
          </ProgressRing>
          <div className="min-w-[14rem] flex-1">
            <Pill tone={delta >= 0 ? "success" : "danger"}>
              {delta >= 0 ? "↑" : "↓"} {Math.abs(delta)}% since your last assessment
            </Pill>
            <ul className="mt-4 space-y-2.5">
              {PILLARS.slice(0, 4).map((pillar) => (
                <li key={pillar.id} className="flex items-center gap-3">
                  <img src={pillar.art} alt="" width={28} height={28} className="size-7 shrink-0" />
                  <span className="min-w-0 flex-1 truncate text-sm font-medium text-ink-soft">
                    {pillar.shortName}
                  </span>
                  <ProgressBar
                    className="max-w-32 flex-1"
                    size="sm"
                    value={pillar.score}
                    label={`${pillar.name} score`}
                    color={pillar.color}
                  />
                  <span className="w-9 text-right text-sm font-bold tabular-nums text-ink">
                    {pillar.score}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </section>

      {/* 4 — The path ---------------------------------------------------- */}
      <section aria-labelledby="roadmap">
        <SectionHeader
          id="roadmap"
          title="Your programme path"
          description="Eight stages across four weeks. Each one unlocks the next."
        />
        <RoadmapTrail stages={ROADMAP} />
      </section>

      {/* 5 — Community --------------------------------------------------- */}
      <section aria-labelledby="challenge">
        <SectionHeader id="challenge" title="This week in your cohort" />
        <ChallengeBanner challenge={challenge} compact />

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader
              title="Your Dream Team"
              description="Four people who see your progress and hold you to it."
              action={<AvatarGroup people={DREAM_TEAM} label="Dream Team members" />}
            />
            <ul className="space-y-3">
              {FEED.slice(0, 3).map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />
                  <p className="text-sm text-ink-soft">
                    <span className="font-semibold text-ink">{item.person}</span> {item.action}{" "}
                    {item.detail}
                    <span className="ml-1 text-muted">· {item.timeAgo}</span>
                  </p>
                </li>
              ))}
            </ul>
            <ButtonLink to="/community" variant="ghost" size="sm" className="mt-4 -ml-2">
              See the full feed
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </Card>

          <div>
            <CardHeader title="Coming up" description="Missions waiting for you." />
            <div className="space-y-3">
              {laterMissions.map((mission) => (
                <MissionCard
                  key={mission.id}
                  mission={mission}
                  locked={mission.week > CURRENT_WEEK}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
