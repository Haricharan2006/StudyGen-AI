import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/images/hero-image.jpg";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-slate-950">

      <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl sm:h-[30rem] sm:w-[30rem]"></div>

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl sm:h-[32rem] sm:w-[32rem]"></div>

      <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl sm:h-80 sm:w-80"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-14 sm:px-8 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}

          <div className="text-center lg:text-left">

            <span className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 sm:px-5 sm:text-sm">
              🚀 AI Powered Learning Platform
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">

              Learn

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Smarter
              </span>

              <br />

              with

              <span className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-transparent">
                {" "}StudyGen AI
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl lg:mx-0">
              Generate AI-powered notes, quizzes,
              flashcards, and summaries within seconds.
              Study faster, retain more, and prepare
              confidently for every exam.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

              <button
                onClick={() => navigate("/signup")}
                className="rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
              >
                🚀 Get Started
              </button>

              <button
                onClick={() => navigate("/login")}
                className="rounded-2xl border border-slate-600 bg-slate-900/70 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800"
              >
                Login
              </button>

            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-md">

                <h3 className="text-3xl font-extrabold text-cyan-400">
                  10K+
                </h3>

                <p className="mt-2 text-slate-400">
                  AI Notes Generated
                </p>

              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-md">

                <h3 className="text-3xl font-extrabold text-violet-400">
                  5K+
                </h3>

                <p className="mt-2 text-slate-400">
                  Happy Students
                </p>

              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-md">

                <h3 className="text-3xl font-extrabold text-emerald-400">
                  99%
                </h3>

                <p className="mt-2 text-slate-400">
                  Satisfaction
                </p>

              </div>

            </div>

          </div>

          {/* Right Image */}

          <div className="relative flex justify-center">

            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl">

              <img
                src={heroImage}
                alt="AI Study Assistant"
                className="relative z-10 w-full rounded-[2rem] border border-slate-700 shadow-2xl"
              />

              <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-3xl"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;