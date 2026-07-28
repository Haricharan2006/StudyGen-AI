import {
  FaUpload,
  FaMagic,
  FaGraduationCap,
} from "react-icons/fa";
import { Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <FaUpload className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Upload",
    description:
      "Upload your notes, PDF, DOCX, or simply enter any study topic to begin.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    number: "02",
    icon: <FaMagic className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Generate",
    description:
      "StudyGen AI instantly creates notes, summaries, flashcards, and quizzes.",
    color: "from-violet-500 to-purple-600",
  },
  {
    number: "03",
    icon: <FaGraduationCap className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Master",
    description:
      "Revise faster, practice quizzes, and retain concepts with AI-powered learning.",
    color: "from-emerald-500 to-green-600",
  },
];

function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24">

      <div className="absolute left-0 top-24 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80"></div>

      <div className="absolute bottom-20 right-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl sm:h-80 sm:w-80"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 sm:px-5 sm:text-sm">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            How It Works
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Three Simple Steps
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            Transform the way you study with AI.
            Upload your content, let StudyGen AI
            generate learning material, and start
            mastering concepts in minutes.
          </p>

        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">

          {steps.map((step, index) => (

            <div
              key={index}
              className="group relative flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10 sm:p-8 lg:p-10"
            >

              <div className="absolute right-5 top-5 text-4xl font-black text-slate-800 sm:right-6 sm:top-6 sm:text-5xl lg:text-6xl">
                {step.number}
              </div>

              <div
                className={`inline-flex w-fit rounded-2xl bg-gradient-to-r ${step.color} p-4 text-white shadow-xl sm:p-5`}
              >
                {step.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white sm:mt-8 sm:text-3xl">
                {step.title}
              </h3>

              <p className="mt-4 flex-grow text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
                {step.description}
              </p>

              <div className="mt-6 flex items-center font-semibold text-cyan-400 transition group-hover:translate-x-2">
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