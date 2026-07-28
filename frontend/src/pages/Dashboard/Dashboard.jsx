import { useEffect, useState } from "react";
import Topbar from "../../components/dashboard/Topbar";
import StatsCard from "../../components/dashboard/StatsCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";
import api from "../../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    notes: 0,
    flashcards: 0,
    quizzes: 0,
    total: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get("/history");
      const history = response.data.history;

      setStats({
        notes: history.filter((item) => item.type === "notes").length,
        flashcards: history.filter((item) => item.type === "flashcards").length,
        quizzes: history.filter((item) => item.type === "quiz").length,
        total: history.length,
      });
    } catch (error) {
      console.error("Failed to fetch dashboard stats:", error);
    }
  };

  return (
    <>
      <Topbar />

      <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 md:px-8 lg:px-10 lg:py-8">

        {/* Welcome Section */}
        <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Welcome Back 👋
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Manage your AI study materials from one beautiful dashboard.
            </p>

          </div>

          <div className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-xl sm:w-auto sm:min-w-[240px]">

            <p className="text-sm text-slate-400">
              Total AI Generations
            </p>

            <h2 className="mt-2 text-3xl font-bold text-cyan-400 sm:text-4xl">
              {stats.total}
            </h2>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

          <StatsCard
            title="Notes"
            value={stats.notes}
            color="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500"
          />

          <StatsCard
            title="Flashcards"
            value={stats.flashcards}
            color="bg-gradient-to-br from-emerald-600 via-green-500 to-lime-500"
          />

          <StatsCard
            title="Quizzes"
            value={stats.quizzes}
            color="bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500"
          />

          <StatsCard
            title="Total Generations"
            value={stats.total}
            color="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500"
          />

        </div>

        {/* Bottom Section */}

        <div className="mt-8 grid grid-cols-1 gap-6 xl:mt-10 xl:grid-cols-2 xl:gap-8">

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-xl sm:p-6">
            <RecentActivity />
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-xl sm:p-6">
            <QuickActions />
          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;