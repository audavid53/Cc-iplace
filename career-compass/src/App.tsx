import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";

// Route-level code splitting: the landing page is the only chunk most first-time
// visitors download, and each in-app area loads on demand.
const Landing = lazy(() => import("@/pages/Landing"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const LearningCentre = lazy(() => import("@/pages/LearningCentre"));
const PillarDetail = lazy(() => import("@/pages/PillarDetail"));
const Mentorship = lazy(() => import("@/pages/Mentorship"));
const MentorSession = lazy(() => import("@/pages/MentorSession"));
const Community = lazy(() => import("@/pages/Community"));
const Assessments = lazy(() => import("@/pages/Assessments"));
const AssessmentRunner = lazy(() => import("@/pages/AssessmentRunner"));
const Profile = lazy(() => import("@/pages/Profile"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<AppShell />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/learning" element={<LearningCentre />} />
        <Route path="/learning/:pillarId" element={<PillarDetail />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/mentorship/:mentorId" element={<MentorSession />} />
        <Route path="/community" element={<Community />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/assessments/:assessmentId" element={<AssessmentRunner />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
