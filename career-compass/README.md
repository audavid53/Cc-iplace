# Career Compass

A career-readiness and community platform for young Nigerians. Four weeks, cohort-based, built
around the 7 Pillars of Career Readiness.

This repository is the **front end only** — a static single-page app with no backend, deployed on
Vercel. All content is typed mock data and all learner progress is persisted to `localStorage`.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # typecheck + production build into dist/
pnpm preview    # serve the production build
pnpm lint       # eslint, including jsx-a11y rules
pnpm typecheck  # tsc --build, strict
```

Node 20+ and pnpm are required.

## Deployment

Vercel builds this as a plain Vite static site. `vercel.json` pins the framework, install and build
commands, and adds:

- an SPA rewrite so deep links like `/mentorship/ifeoma-balogun` resolve to `index.html`
- long-lived immutable caching for hashed `/assets/*` bundles
- baseline security headers

No environment variables and no server runtime are needed.

## Architecture

```
src/
  styles/index.css        Design tokens (@theme) + base layer. The single source of visual truth.
  lib/                    cn() class merge helper
  data/                   Typed content: pillars, badges, mentors, missions, assessments, community
  state/                  ProgressProvider — units, completed actions, reward queue (localStorage)
  components/
    ui/                   Primitives: Button, Card, Pill, Progress, Tabs, FilterChips, Avatar, …
    art/                  Illustrated SVG: badge medals, compass mascot, reward burst
    gamification/         MissionCard, ChallengeBanner, RoadmapTrail, ProfileStatusCard, RewardFeedback
    layout/               AppShell, Sidebar, BottomNav, nav config
  pages/                  One file per route, all lazy-loaded
```

### Design system

Every colour, radius, shadow, type step and easing lives in `src/styles/index.css` as a Tailwind v4
`@theme` token and is consumed as a utility (`bg-canvas`, `text-ink`, `rounded-card`,
`shadow-card`). Components do not hard-code hex values — that was the main structural problem with
the Figma-exported screens this replaces, along with sub-10px type and percentage-based layout
columns.

Status colours (`success`, `warn`, `danger`, `info`) each clear **5.7:1** contrast against both
white and their own soft background, so status pills stay legible at pill type sizes.

### Progression model

Units are awarded for concrete actions only — a lesson finished, a project submitted, a session
watched, a quiz passed, a professional contacted, a challenge joined. `ProgressProvider` refuses to
award the same action twice, so the total always reflects real work.

Each award raises a reward card that names **what you did**, **what changed as a result**, and
**what it was worth**, which is what keeps Units from reading as an arbitrary number. Thirteen badge
tiers sit on top of the Unit total, each tied to a perk that unlocks something real.

### Accessibility

- Landmarks, one `<h1>` per route, and a skip link on every page
- Focus is moved and scroll reset on navigation
- A single visible `:focus-visible` treatment product-wide
- Tabs implement the WAI-ARIA pattern (arrow/Home/End keys, roving tabindex); filters that do not
  swap panels are toggle-button groups instead, not fake tablists
- Progress bars and rings expose `role="progressbar"` / `<title>` with real values
- Locked states are conveyed by border and label, never by opacity alone
- `prefers-reduced-motion` disables animation and smooth scrolling
- Verified with axe-core across all ten routes: **0 violations**

### Performance

Routes are code-split with `React.lazy`, React is isolated in its own long-lived chunk, and the
initial payload is roughly 71 kB gzipped with each route chunk under 4 kB.

## What is mocked

There is no API, no auth and no video hosting. Mentor sessions use a play-state placeholder rather
than an embedded player, assessment results are pre-written outcomes rather than a scoring engine,
and the AI-assisted assessment explains what AI *would* do without calling a model. Swapping the
`src/data` modules for API calls is the intended next step; the progress state shape is versioned
so it can move to a server without a migration.
