import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaLayerGroup,
  FaQuestionCircle,
  FaHistory,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-blue-700 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        StudyGen AI
      </h1>

      <nav className="space-y-5">

        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 hover:text-yellow-300"
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/generate"
          className="flex items-center gap-3 hover:text-yellow-300"
        >
          <FaBook />
          AI Notes
        </NavLink>

        <NavLink
          to="/flashcards"
          className="flex items-center gap-3 hover:text-yellow-300"
        >
          <FaLayerGroup />
          Flashcards
        </NavLink>

        <NavLink
          to="/quiz"
          className="flex items-center gap-3 hover:text-yellow-300"
        >
          <FaQuestionCircle />
          Quiz
        </NavLink>

        <NavLink
          to="/history"
          className="flex items-center gap-3 hover:text-yellow-300"
        >
          <FaHistory />
          History
        </NavLink>

        <NavLink
          to="/settings"
          className="flex items-center gap-3 hover:text-yellow-300"
        >
          <FaCog />
          Settings
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 hover:text-red-300 mt-10"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;