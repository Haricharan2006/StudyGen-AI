import {
  FaBolt,
  FaRobot,
  FaClock,
  FaChartLine,
} from "react-icons/fa";
import { ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <FaBolt size={40} />,
    title: "Lightning Fast",
    description:
      "Generate AI-powered notes, quizzes, flashcards, and summaries in just a few seconds.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <FaRobot size={40} />,
    title: "AI Powered",
    description:
      "Advanced AI creates accurate, structured, and personalized study materials.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <FaClock size={40} />,
    title: "Save Time",
    description:
      "Spend more time learning and less time preparing notes manually.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Track Progress",
    description:
      "Review previous generations, practice quizzes, and improve consistently.",
    color: "from-emerald-500 to-green-600",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">

            <ShieldCheck size={18} />

            Why Choose Us

          </span>

          <h2 className="mt-8 text-5xl font-extrabold text-white md:text-6xl">

            Why Students Love
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              StudyGen AI
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">

            Our AI-powered platform helps students study
            smarter with intelligent automation, saving time
            while improving understanding and retention.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {benefits.map((benefit, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10"
            >

              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${benefit.color} p-5 text-white shadow-xl`}
              >
                {benefit.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {benefit.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {benefit.description}
              </p>

              <div className="mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></div>

            </div>

          ))}

        </div>

        <div className="mt-20 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-10 text-center">

          <h3 className="text-3xl font-bold text-white">
            🚀 Study Faster. Score Higher.
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

            Join thousands of learners using StudyGen AI to
            simplify revision, improve productivity, and prepare
            confidently for exams with intelligent AI assistance.

          </p>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;