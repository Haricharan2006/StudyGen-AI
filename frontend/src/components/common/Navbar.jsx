import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          StudyGen AI
        </Link>

        {!token ? (
          <div className="flex items-center gap-8 text-lg">

            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>

            <a
              href="#features"
              className="hover:text-blue-600 transition"
            >
              Features
            </a>

            <Link
              to="/login"
              className="hover:text-blue-600 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>

          </div>
        ) : (
          <div className="flex items-center gap-8 text-lg">

            <Link
              to="/dashboard"
              className="hover:text-blue-600 transition"
            >
              Dashboard
            </Link>

            <Link
              to="/history"
              className="hover:text-blue-600 transition"
            >
              History
            </Link>

            <Link
              to="/settings"
              className="hover:text-blue-600 transition"
            >
              Settings
            </Link>

            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 transition"
            >
              Logout
            </button>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;