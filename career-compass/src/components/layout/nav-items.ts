import {
  Award,
  Bookmark,
  ClipboardCheck,
  Compass,
  GraduationCap,
  Home,
  Target,
  TrendingUp,
  User,
  Users,
} from "lucide-react";

export type NavItem = {
  to: string;
  label: string;
  icon: typeof Home;
};

/** Primary destinations. Kept to five so the bottom bar stays scannable. */
export const PRIMARY_NAV: NavItem[] = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/learning", label: "Learn", icon: GraduationCap },
  { to: "/mentorship", label: "Mentors", icon: Compass },
  { to: "/community", label: "Community", icon: Users },
  { to: "/profile", label: "Profile", icon: User },
];

/** Secondary areas, revealed in the sidebar rather than the bottom bar. */
export const SECONDARY_NAV: NavItem[] = [
  { to: "/assessments", label: "Assessments", icon: ClipboardCheck },
  { to: "/profile#progress", label: "My progress", icon: TrendingUp },
  { to: "/community#challenges", label: "Challenges", icon: Target },
  { to: "/profile#badges", label: "Achievements", icon: Award },
  { to: "/profile#saved", label: "Saved", icon: Bookmark },
];
