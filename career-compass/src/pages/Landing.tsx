import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { CompassArt } from "@/components/art/Illustration";
import { BadgeArt } from "@/components/art/BadgeArt";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { BADGE_TIERS } from "@/data/badges";
import { PILLARS } from "@/data/pillars";
import { SECTORS } from "@/data/mentors";

const STEPS = [
  {
    week: "Week 1",
    title: "Know yourself",
    body: "Three assessments give you a readiness baseline and a straight answer about what suits you.",
  },
  {
    week: "Week 2",
    title: "Explore and connect",
    body: "Sessions with professionals across 14 Nigerian sectors, then five real conversations of your own.",
  },
  {
    week: "Week 3",
    title: "Build the proof",
    body: "Practical projects that leave you with work you can actually show an employer.",
  },
  {
    week: "Week 4",
    title: "Launch",
    body: "Mock interviews, a re-assessment that shows how far you moved, and a 90-day plan.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-dvh bg-canvas">
      <a href="#content" className="skip-link rounded-pill bg-brand-500 px-4 py-2 text-sm font-bold text-white">
        Skip to main content
      </a>

      <header className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-5 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-brand-500 text-sm font-extrabold text-white">
            CC
          </span>
          <span className="text-base font-extrabold tracking-tight">Career Compass</span>
        </Link>
        <nav aria-label="Landing" className="ml-auto flex items-center gap-2">
          <Link
            to="/assessments"
            className="hidden rounded-pill px-4 py-2 text-sm font-semibold text-muted transition-colors hover:text-ink sm:inline-flex"
          >
            Assessments
          </Link>
          <ButtonLink to="/dashboard" size="sm">
            Enter the app
          </ButtonLink>
        </nav>
      </header>

      <main id="content" tabIndex={-1} className="outline-none">
        {/* Hero ------------------------------------------------------------ */}
        <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pt-8 pb-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:pt-16">
          <div>
            <Pill tone="brand">Four weeks · cohort-based · built in Nigeria</Pill>
            <h1 className="mt-4 text-display text-ink text-balance">
              From career confusion to a plan you can act on.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Career Compass moves young Nigerians from “I don’t know where to start” to clear
              direction — through assessments, sessions with working professionals, practical
              projects and a cohort that keeps you moving.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ButtonLink to="/assessments/career-clarity" size="lg">
                Take the free clarity assessment
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <ButtonLink to="/dashboard" size="lg" variant="secondary">
                See the programme
              </ButtonLink>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {["No cost to start", "11 minutes", "Results you can use immediately"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check aria-hidden="true" className="size-4 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <Card className="relative z-10 mx-auto max-w-sm" padded>
              <div className="flex items-center gap-4">
                <CompassArt size={84} />
                <div>
                  <p className="text-sm font-semibold text-muted">Your readiness score</p>
                  <p className="text-title text-brand-500">65%</p>
                  <p className="text-sm font-semibold text-success">↑ 8% since your last check</p>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                {PILLARS.slice(0, 3).map((pillar) => (
                  <div key={pillar.id} className="flex items-center gap-3">
                    <img src={pillar.art} alt="" width={32} height={32} className="size-8" />
                    <span className="min-w-0 flex-1 truncate text-sm font-medium text-ink-soft">
                      {pillar.shortName}
                    </span>
                    <span className="text-sm font-bold tabular-nums text-ink">{pillar.score}%</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-xl bg-brand-50 px-3 py-2.5 text-sm font-medium text-brand-700">
                Next: send three networking messages · +90 Units
              </p>
            </Card>
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-0 hidden rounded-panel bg-linear-to-br from-brand-100 to-transparent blur-2xl sm:block"
            />
          </div>
        </section>

        {/* Pillars --------------------------------------------------------- */}
        <section
          aria-labelledby="pillars"
          className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6"
        >
          <h2 id="pillars" className="text-title text-ink">
            The 7 Pillars of Career Readiness
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Every lesson, project and mission in the programme strengthens one of these. Your score
            in each is measured at the start and again at the end, so progress is evidence, not a
            feeling.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar) => (
              <Card as="li" key={pillar.id} interactive>
                <img src={pillar.art} alt="" width={44} height={44} className="size-11" />
                <h3 className="mt-3 text-base font-bold text-ink">{pillar.name}</h3>
                <p className="mt-1 text-sm text-muted">{pillar.summary}</p>
              </Card>
            ))}
          </ul>
        </section>

        {/* Journey --------------------------------------------------------- */}
        <section aria-labelledby="journey" className="bg-surface py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <h2 id="journey" className="text-title text-ink">
              Four weeks, one direction
            </h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step, index) => (
                <li key={step.title} className="rounded-card border border-line p-5">
                  <span className="grid size-9 place-items-center rounded-full bg-brand-50 text-sm font-extrabold text-brand-700">
                    {index + 1}
                  </span>
                  <p className="mt-3 text-xs font-bold tracking-wide text-brand-500 uppercase">
                    {step.week}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Progression ----------------------------------------------------- */}
        <section aria-labelledby="progression" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <h2 id="progression" className="text-title text-ink">
            Effort you can see
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            You earn Units for concrete actions — an assessment completed, a lesson finished, a
            project shipped, a professional contacted. Units move you through thirteen badges, and
            each badge unlocks something real.
          </p>
          <ul className="mt-8 flex flex-wrap gap-4">
            {BADGE_TIERS.map((tier, index) => (
              <li key={tier.level} className="flex w-28 flex-col items-center text-center">
                <BadgeArt
                  from={tier.from}
                  to={tier.to}
                  glyph={tier.glyph}
                  size={56}
                  locked={index > 4}
                />
                <span className="mt-1.5 text-xs font-bold text-ink">{tier.name}</span>
                <span className="text-[0.6875rem] text-muted">{tier.perk}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sectors --------------------------------------------------------- */}
        <section aria-labelledby="sectors" className="bg-surface py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <h2 id="sectors" className="text-title text-ink">
              Insight from 14 Nigerian sectors
            </h2>
            <p className="mt-2 max-w-2xl text-muted">
              Video sessions with people doing the work now — what they were not told, how they got
              in, and what they would skip if they were starting again.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {SECTORS.map((sector) => (
                <li key={sector}>
                  <Pill tone="brand">{sector}</Pill>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA ------------------------------------------------------------- */}
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-panel bg-linear-to-br from-brand-600 to-brand-800 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="text-title text-balance">Start with one honest assessment.</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Eleven minutes, no cost, and you leave with three sectors worth exploring and a first
              action to take this week.
            </p>
            <ButtonLink
              to="/assessments/career-clarity"
              size="lg"
              className="mt-7 bg-white text-brand-700 hover:bg-brand-50"
            >
              Begin now
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-surface py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 text-sm text-muted sm:px-6">
          <p className="font-semibold text-ink">Career Compass</p>
          <p>Career readiness for young Nigerians.</p>
          <p className="ml-auto">© {new Date().getFullYear()} Career Compass</p>
        </div>
      </footer>
    </div>
  );
}
