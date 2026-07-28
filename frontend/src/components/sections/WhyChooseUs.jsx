import {
  FaBolt,
  FaRobot,
  FaClock,
  FaChartLine,
} from "react-icons/fa";
import { ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <FaBolt className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Lightning Fast",
    description:
      "Generate AI-powered notes, quizzes, flashcards, and summaries in just a few seconds.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <FaRobot className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "AI Powered",
    description:
      "Advanced AI creates accurate, structured, and personalized study materials.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <FaClock className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Save Time",
    description:
      "Spend more time learning and less time preparing notes manually.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: <FaChartLine className="h-8 w-8 sm:h-10 sm:w-10" />,
    title: "Track Progress",
    description:
      "Review previous generations, practice quizzes, and improve consistently.",
    color: "from-emerald-500 to-green-600",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24">

      <div className="absolute left-0 top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80"></div>

      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl sm:h-96 sm:w-96"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 sm:px-5 sm:text-sm">
            <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
            Why Choose Us
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Why Students Love
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}StudyGen AI
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            Our AI-powered platform helps students study
            smarter with intelligent automation, saving time
            while improving understanding and retention.
          </p>

        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 xl:grid-cols-4">

          {benefits.map((benefit, index) => (

            <div
              key={index}
              className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10 sm:p-8"
            >

              <div
                className={`inline-flex w-fit rounded-2xl bg-gradient-to-r ${benefit.color} p-4 text-white shadow-xl sm:p-5`}
              >
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white sm:mt-8">
                {benefit.title}
              </h3>

              <p className="mt-4 flex-grow text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
                {benefit.description}
              </p>

              <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></div>

            </div>

          ))}

        </div>

        <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-6 text-center sm:mt-20 sm:p-10">

          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            🚀 Study Faster. Score Higher.
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
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