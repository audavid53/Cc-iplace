import { NavLink } from "react-router-dom";
import { ProfileStatusCard } from "@/components/gamification/ProfileStatusCard";
import { PRIMARY_NAV, SECONDARY_NAV } from "./nav-items";
import { cn } from "@/lib/cn";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
    isActive ? "bg-brand-500 text-white" : "text-shell-muted hover:bg-shell-raised hover:text-white",
  );

export function Sidebar() {
  return (
    <aside
      aria-label="Main"
      className="sticky top-0 hidden h-dvh w-72 shrink-0 flex-col gap-6 overflow-y-auto bg-shell px-4 py-6 lg:flex"
    >
      <NavLink
        to="/"
        className="flex items-center gap-2.5 rounded-xl px-1 py-1 text-white"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-500 text-sm font-extrabold">
          CC
        </span>
        <span className="text-base font-extrabold tracking-tight">Career Compass</span>
      </NavLink>

      <nav aria-label="Primary">
        <ul className="flex flex-col gap-1">
          {PRIMARY_NAV.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink to={to} className={linkClass}>
                <Icon aria-hidden="true" className="size-4.5 shrink-0" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label="Secondary">
        <p className="px-3 pb-2 text-[0.6875rem] font-bold tracking-widest text-shell-muted uppercase">
          More
        </p>
        <ul className="flex flex-col gap-0.5">
          {SECONDARY_NAV.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink to={to} className={linkClass}>
                <Icon aria-hidden="true" className="size-4.5 shrink-0" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <ProfileStatusCard className="mt-auto" />
    </aside>
  );
}
