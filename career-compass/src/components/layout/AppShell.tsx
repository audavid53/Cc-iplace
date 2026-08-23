import { Suspense, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Bell, Zap } from "lucide-react";
import { RewardFeedback } from "@/components/gamification/RewardFeedback";
import { GradientDefs } from "@/components/ui/GradientIcon";
import { PageSkeleton } from "@/components/ui/Feedback";
import { Avatar } from "@/components/ui/Avatar";
import { tierFor } from "@/data/badges";
import { CURRENT_LEVEL } from "@/data/programme";
import { useProgress } from "@/state/useProgress";
import { BottomNav } from "./BottomNav";
import { Sidebar } from "./Sidebar";

/** Send focus and scroll to the top of the new page on every navigation. */
function useRouteChangeFocus() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname]);
}

/** Compact status bar shown where the sidebar is hidden. */
function MobileTopBar() {
  const { xp } = useProgress();
  const tier = tierFor(xp);

  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-line bg-surface/90 px-4 py-3 backdrop-blur lg:hidden">
      <Link to="/profile" aria-label={`Your profile — ${tier.name} badge`}>
        <Avatar name="Mary Sokoh" size="sm" ring />
      </Link>
      <div className="min-w-0">
        <p className="truncate text-sm font-extrabold tracking-tight text-ink">Mary Sokoh</p>
        <p className="inline-flex items-center gap-1 text-xs font-semibold text-muted">
          <Zap aria-hidden="true" className="size-3.5 text-xp" fill="currentColor" />
          Level {CURRENT_LEVEL} · {xp.toLocaleString("en-NG")} XP
        </p>
      </div>
      <Link
        to="/community"
        aria-label="Notifications"
        className="relative ml-auto grid size-10 shrink-0 place-items-center rounded-full border border-line bg-surface"
      >
        <Bell aria-hidden="true" className="size-4.5 text-ink" strokeWidth={2.4} />
        <span
          aria-hidden="true"
          className="absolute top-2 right-2.5 size-2 rounded-full bg-danger ring-2 ring-surface"
        />
      </Link>
    </header>
  );
}

export function AppShell() {
  useRouteChangeFocus();

  return (
    <div className="flex min-h-dvh bg-canvas">
      <a href="#main" className="skip-link rounded-pill bg-brand-500 px-4 py-2 text-sm font-bold text-white">
        Skip to main content
      </a>

      <GradientDefs />
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <MobileTopBar />
        <main
          id="main"
          tabIndex={-1}
          className="mx-auto w-full max-w-5xl flex-1 px-4 pt-5 pb-32 outline-none sm:px-6 lg:pb-28"
        >
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </main>
      </div>

      <BottomNav />
      <RewardFeedback />
    </div>
  );
}
