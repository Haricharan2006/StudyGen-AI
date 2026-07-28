import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-12 text-center shadow-2xl">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">

            <Sparkles size={18} />

            Start Learning Today

          </span>

          <h2 className="mt-8 text-5xl font-extrabold text-white md:text-6xl">

            Ready to Study
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Smarter?
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">

            Join thousands of students using StudyGen AI to
            generate intelligent notes, quizzes, flashcards,
            and summaries within seconds. Improve your
            productivity and prepare for exams with confidence.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/generate"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
            >
              Generate Now
              <ArrowRight size={22} />
            </Link>

            <Link
              to="/signup"
              className="inline-flex items-center rounded-2xl border border-slate-700 bg-slate-900/70 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800"
            >
              Create Free Account
            </Link>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

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

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-md">

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