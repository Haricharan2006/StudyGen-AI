import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24">

      <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl sm:h-96 sm:w-96"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">

        <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 text-center shadow-2xl sm:p-10 lg:p-12">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 sm:px-5 sm:text-sm">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            Start Learning Today
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Study
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {" "}Smarter?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            Join thousands of students using StudyGen AI to
            generate intelligent notes, quizzes, flashcards,
            and summaries within seconds. Improve your
            productivity and prepare for exams with confidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

            <Link
              to="/generate"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30 sm:text-lg"
            >
              Generate Now
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/70 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800 sm:text-lg"
            >
              Create Free Account
            </Link>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-extrabold text-cyan-400">
                10K+
              </h3>
              <p className="mt-2 text-slate-400">
                AI Study Materials Generated
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-extrabold text-violet-400">
                5K+
              </h3>
              <p className="mt-2 text-slate-400">
                Active Learners
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-md sm:col-span-2 lg:col-span-1">
              <h3 className="text-3xl font-extrabold text-emerald-400">
                99%
              </h3>
              <p className="mt-2 text-slate-400">
                Student Satisfaction
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;