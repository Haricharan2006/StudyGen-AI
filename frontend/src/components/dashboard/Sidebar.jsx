import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaLayerGroup,
  FaQuestionCircle,
  FaHistory,
  FaCog,
  FaSignOutAlt,
  FaRobot,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navClass = ({ isActive }) =>
    `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950 text-white shadow-2xl">

      {/* Logo */}
      <div className="border-b border-slate-800 p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-2xl shadow-lg">
            <FaRobot />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-wide">
              StudyGen AI
            </h1>

            <p className="text-sm text-slate-400">
              AI Study Assistant
            </p>
          </div>

        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-3 p-6">

        <NavLink to="/dashboard" className={navClass}>
          <FaHome className="text-lg" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/generate" className={navClass}>
          <FaBook className="text-lg" />
          <span>AI Notes</span>
        </NavLink>

        <NavLink to="/flashcards" className={navClass}>
          <FaLayerGroup className="text-lg" />
          <span>Flashcards</span>
        </NavLink>

        <NavLink to="/quiz" className={navClass}>
          <FaQuestionCircle className="text-lg" />
          <span>Quiz</span>
        </NavLink>

        <NavLink to="/history" className={navClass}>
          <FaHistory className="text-lg" />
          <span>History</span>
        </NavLink>

        <NavLink to="/settings" className={navClass}>
          <FaCog className="text-lg" />
          <span>Settings</span>
        </NavLink>

      </nav>

      {/* Bottom Section */}
      <div className="border-t border-slate-800 p-6">

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-600"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;