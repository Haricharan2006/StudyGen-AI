import {
  FaUpload,
  FaMagic,
  FaGraduationCap,
} from "react-icons/fa";
import { Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <FaUpload size={38} />,
    title: "Upload",
    description:
      "Upload your notes, PDF, DOCX, or simply enter any study topic to begin.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    number: "02",
    icon: <FaMagic size={38} />,
    title: "Generate",
    description:
      "StudyGen AI instantly creates notes, summaries, flashcards, and quizzes.",
    color: "from-violet-500 to-purple-600",
  },
  {
    number: "03",
    icon: <FaGraduationCap size={38} />,
    title: "Master",
    description:
      "Revise faster, practice quizzes, and retain concepts with AI-powered learning.",
    color: "from-emerald-500 to-green-600",
  },
];

function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">

            <Sparkles size={18} />

            How It Works

          </span>

          <h2 className="mt-8 text-5xl font-extrabold text-white md:text-6xl">

            Three Simple Steps

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">

            Transform the way you study with AI.
            Upload your content, let StudyGen AI
            generate learning material, and start
            mastering concepts in minutes.

          </p>

        </div>

        <div className="relative mt-20 grid gap-8 lg:grid-cols-3">

          {steps.map((step, index) => (

            <div
              key={index}
              className="group relative rounded-3xl border border-slate-800 bg-slate-900/80 p-10 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10"
            >

              <div className="absolute right-6 top-6 text-6xl font-black text-slate-800">

                {step.number}

              </div>

              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${step.color} p-5 text-white shadow-xl`}
              >

                {step.icon}

              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">

                {step.title}

              </h3>

              <p className="mt-5 leading-8 text-slate-400">

                {step.description}

              </p>

              <div className="mt-8 flex items-center font-semibold text-cyan-400 transition group-hover:translate-x-2">

                Step {step.number} →

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;