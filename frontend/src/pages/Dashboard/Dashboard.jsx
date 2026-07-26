import Topbar from "../../components/dashboard/Topbar";
import StatsCard from "../../components/dashboard/StatsCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";

function Dashboard() {
  return (
    <>
      <Topbar />

      <div className="p-8">

        <div className="grid md:grid-cols-4 gap-6">

          <StatsCard
            title="Notes"
            value="24"
            color="bg-blue-600"
          />

          <StatsCard
            title="Flashcards"
            value="120"
            color="bg-green-600"
          />

          <StatsCard
            title="Quizzes"
            value="15"
            color="bg-purple-600"
          />

          <StatsCard
            title="Study Hours"
            value="82"
            color="bg-orange-600"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <RecentActivity />

          <QuickActions />

        </div>

      </div>
    </>
  );
}

export default Dashboard;