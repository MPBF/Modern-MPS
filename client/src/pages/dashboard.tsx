import PageLayout from "../components/layout/PageLayout";
import DashboardStats from "../components/dashboard/DashboardStats";
import Shortcuts from "../components/dashboard/Shortcuts";
import QuickNotes from "../components/dashboard/QuickNotes";

export default function Dashboard() {
  return (
    <PageLayout>
      <div className="space-y-6">
        <Shortcuts />
        <DashboardStats />
        <QuickNotes />
      </div>
    </PageLayout>
  );
}
