import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    setMobileOpen(false);
  };

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-2 text-white shadow-lg">
            <Sparkles size={22} />
          </div>

          <div>

            <h1 className="text-2xl font-extrabold text-white">
              StudyGen AI
            </h1>

            <p className="text-xs text-slate-400">
              AI Powered Learning
            </p>

          </div>

        </Link>

        <div className="hidden items-center gap-8 lg:flex">

          {!token ? (
            <>

              <Link
                to="/"
                className="font-medium text-slate-300 transition hover:text-cyan-400"
              >
                Home
              </Link>

              <a
                href="#features"
                className="font-medium text-slate-300 transition hover:text-cyan-400"
              >
                Features
              </a>

              <Link
                to="/login"
                className="font-medium text-slate-300 transition hover:text-cyan-400"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                Sign Up
              </Link>

            </>
          ) : (
            <>

              <Link
                to="/dashboard"
                className="font-medium text-slate-300 transition hover:text-cyan-400"
              >
                Dashboard
              </Link>

              <Link
                to="/history"
                className="font-medium text-slate-300 transition hover:text-cyan-400"
              >
                History
              </Link>

              <Link
                to="/settings"
                className="font-medium text-slate-300 transition hover:text-cyan-400"
              >
                Settings
              </Link>

              <button
                onClick={handleLogout}
                className="rounded-xl bg-red-500/15 px-5 py-3 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
              >
                Logout
              </button>

            </>
          )}

        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl border border-slate-700 p-2 text-white lg:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {mobileOpen && (

        <div className="border-t border-slate-800 bg-slate-900 lg:hidden">

          <div className="flex flex-col px-6 py-6">

            {!token ? (
              <>

                <Link
                  to="/"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800"
                >
                  Home
                </Link>

                <a
                  href="#features"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800"
                >
                  Features
                </a>

                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="mt-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-center font-semibold text-white"
                >
                  Sign Up
                </Link>

              </>
            ) : (
              <>

                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800"
                >
                  Dashboard
                </Link>

                <Link
                  to="/history"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800"
                >
                  History
                </Link>

                <Link
                  to="/settings"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800"
                >
                  Settings
                </Link>

                <button
                  onClick={handleLogout}
                  className="mt-3 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white"
                >
                  Logout
                </button>

              </>
            )}

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;