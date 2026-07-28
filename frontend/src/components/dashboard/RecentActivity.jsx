import { useEffect, useState } from "react";
import api from "../../services/api";

function RecentActivity() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchRecentActivity();
  }, []);

  const fetchRecentActivity = async () => {
    try {
      const response = await api.get("/history");
      setHistory(response.data.history.slice(0, 5));
    } catch (error) {
      console.error("Failed to load recent activity:", error);
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "notes":
        return "📝";
      case "flashcards":
        return "🧠";
      case "quiz":
        return "❓";
      case "summary":
        return "📚";
      default:
        return "📄";
    }
  };

  const getBadgeColor = (type) => {
    switch (type) {
      case "notes":
        return "bg-blue-500/20 text-blue-300";
      case "flashcards":
        return "bg-emerald-500/20 text-emerald-300";
      case "quiz":
        return "bg-violet-500/20 text-violet-300";
      case "summary":
        return "bg-orange-500/20 text-orange-300";
      default:
        return "bg-slate-700 text-slate-300";
    }
  };

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Your latest AI generated content
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl shadow-lg">
          📈
        </div>
      </div>

      {history.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-700 py-12 text-center">
          <p className="text-slate-400">
            No recent activity available.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 p-4 transition-all duration-300 hover:border-blue-500 hover:bg-slate-850 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700 text-2xl">
                  {getIcon(item.type)}
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {item.topic}
                  </h3>

                  <span
                    className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize ${getBadgeColor(
                      item.type
                    )}`}
                  >
                    {item.type}
                  </span>
                </div>

              </div>

              <div className="text-right">
                <p className="text-sm text-slate-300">
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Generated
                </p>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentActivity;