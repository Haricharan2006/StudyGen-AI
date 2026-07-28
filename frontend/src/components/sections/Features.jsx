import {
  BookOpen,
  Brain,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <BookOpen size={42} />,
      title: "AI Notes",
      description:
        "Generate well-structured and comprehensive notes from any topic within seconds using advanced AI.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Brain size={42} />,
      title: "Smart Flashcards",
      description:
        "Revise efficiently with AI-generated flashcards designed to improve memory retention.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: <ClipboardCheck size={42} />,
      title: "AI Quiz Generator",
      description:
        "Practice with intelligent quizzes automatically created from your study notes.",
      color: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            <Sparkles size={18} />
            Premium Features
          </span>

          <h2 className="mt-8 text-5xl font-extrabold text-white md:text-6xl">
            Everything You Need
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              to Study Smarter
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
            StudyGen AI combines powerful AI tools into one
            platform, helping you generate notes,
            flashcards, quizzes, and summaries with
            exceptional speed and accuracy.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {features.map((feature, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10"
            >

              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${feature.color} p-5 text-white shadow-lg`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {feature.description}
              </p>

              <div className="mt-8 flex items-center font-semibold text-cyan-400 transition group-hover:translate-x-2">
                Learn More →
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;