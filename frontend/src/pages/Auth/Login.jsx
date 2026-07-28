import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl sm:h-96 sm:w-96"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl sm:h-[30rem] sm:w-[30rem]"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 sm:py-10">

        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl lg:grid-cols-2">

          {/* Left Panel */}

          <div className="hidden flex-col justify-center bg-gradient-to-br from-cyan-600 via-blue-700 to-violet-700 p-10 lg:flex xl:p-12">

            <div className="text-6xl">
              🚀
            </div>

            <h1 className="mt-8 text-5xl font-extrabold text-white">
              StudyGen AI
            </h1>

            <p className="mt-6 text-lg leading-8 text-cyan-100">
              Learn smarter with AI-powered study tools designed
              to generate notes, quizzes, summaries, and
              flashcards in seconds.
            </p>

            <div className="mt-10 space-y-5 text-lg text-white">

              <div>✅ AI Notes Generator</div>

              <div>🧠 Smart Flashcards</div>

              <div>🎯 Interactive Quizzes</div>

              <div>📄 Instant Summaries</div>

            </div>

          </div>

          {/* Right Panel */}

          <div className="flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12">

            <div className="w-full max-w-md">

              <div className="mb-8 text-center sm:mb-10">

                <div className="mb-4 text-4xl sm:text-5xl">
                  👋
                </div>

                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Welcome Back
                </h2>

                <p className="mt-3 text-sm text-slate-400 sm:text-base">
                  Sign in to continue using StudyGen AI
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-800 p-4 text-white outline-none transition focus:border-cyan-500"
                    required
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-300">
                    Password
                  </label>

                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-800 p-4 pr-14 text-white outline-none transition focus:border-cyan-500"
                      required
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-slate-400 transition hover:text-white"
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>

                  </div>

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-70 sm:text-lg"
                >
                  {loading ? "Logging In..." : "🚀 Login"}
                </button>

              </form>

              <div className="mt-8 text-center">

                <p className="text-sm text-slate-400 sm:text-base">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    Create Account
                  </Link>
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;