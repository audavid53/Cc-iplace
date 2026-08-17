import { Suspense, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { RewardFeedback } from "@/components/gamification/RewardFeedback";
import { PageSkeleton } from "@/components/ui/Feedback";
import { Avatar } from "@/components/ui/Avatar";
import { tierFor } from "@/data/badges";
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
  const { units } = useProgress();
  const tier = tierFor(units);

  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-line bg-surface/90 px-4 py-3 backdrop-blur lg:hidden">
      <Link to="/" className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-xl bg-brand-500 text-xs font-extrabold text-white">
          CC
        </span>
        <span className="text-sm font-extrabold tracking-tight">Career Compass</span>
      </Link>
      <span className="ml-auto inline-flex items-center gap-1.5 rounded-pill bg-xp-soft px-2.5 py-1 text-xs font-bold text-warn">
        <Sparkles aria-hidden="true" className="size-3.5" />
        {units.toLocaleString("en-NG")}
        <span className="sr-only">Units earned</span>
      </span>
      <Link to="/profile" aria-label={`Your profile — level ${tier.level}, ${tier.name}`}>
        <Avatar name="Mary Sokoh" size="sm" ring />
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
