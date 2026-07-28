import { useNavigate } from "react-router-dom";
import {
  FaBook,
  FaLayerGroup,
  FaQuestionCircle,
  FaHistory,
} from "react-icons/fa";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Generate Notes",
      subtitle: "Create AI Notes",
      icon: <FaBook />,
      color: "from-blue-600 to-cyan-500",
      route: "/generate",
    },
    {
      title: "Flashcards",
      subtitle: "Revise Faster",
      icon: <FaLayerGroup />,
      color: "from-emerald-600 to-green-500",
      route: "/flashcards",
    },
    {
      title: "Quiz",
      subtitle: "Test Yourself",
      icon: <FaQuestionCircle />,
      color: "from-violet-600 to-fuchsia-500",
      route: "/quiz",
    },
    {
      title: "History",
      subtitle: "View Past Work",
      icon: <FaHistory />,
      color: "from-orange-500 to-red-500",
      route: "/history",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-xl sm:p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Jump directly to your favorite tools
          </p>

        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-xl shadow-lg sm:h-12 sm:w-12 sm:text-2xl">
          ⚡
        </div>

      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        {actions.map((action) => (

          <button
            key={action.title}
            onClick={() => navigate(action.route)}
            className={`group rounded-2xl bg-gradient-to-r ${action.color} p-4 text-left text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl sm:p-5`}
          >

            <div className="flex items-center justify-between gap-4">

              <div className="min-w-0 flex-1">

                <h3 className="truncate text-lg font-bold">
                  {action.title}
                </h3>

                <p className="mt-1 text-sm text-white/80">
                  {action.subtitle}
                </p>

              </div>

              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 text-xl transition-transform duration-300 group-hover:rotate-12 sm:h-14 sm:w-14 sm:text-2xl">
                {action.icon}
              </div>

            </div>

          </button>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;