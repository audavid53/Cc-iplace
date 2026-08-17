import { NavLink } from "react-router-dom";
import { PRIMARY_NAV } from "./nav-items";
import { cn } from "@/lib/cn";

/**
 * Persistent bottom navigation. It stays on desktop as a floating capsule
 * because the mobile-style interaction language is deliberate for this
 * audience — but it never becomes the only way to reach a destination, since
 * the sidebar carries the same links for pointer and screen-reader users.
 */
export function BottomNav() {
  return (
    <nav
      aria-label="Quick navigation"
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur",
        "pb-[env(safe-area-inset-bottom)]",
        "lg:inset-x-auto lg:bottom-6 lg:left-1/2 lg:w-auto lg:-translate-x-1/2 lg:rounded-pill lg:border lg:shadow-nav",
      )}
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-between gap-1 px-2 py-2 lg:max-w-none lg:gap-2 lg:px-2">
        {PRIMARY_NAV.map(({ to, label, icon: Icon }) => (
          <li key={to} className="flex-1 lg:flex-none">
            <NavLink
              to={to}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center gap-1 rounded-2xl px-3 py-2 text-[0.6875rem] font-semibold transition-colors",
                  "lg:flex-row lg:gap-2 lg:rounded-pill lg:px-4 lg:text-sm",
                  isActive ? "bg-brand-50 text-brand-700" : "text-muted hover:text-ink",
                )
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    aria-hidden="true"
                    className="size-5 shrink-0 lg:size-4.5"
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span>{label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
