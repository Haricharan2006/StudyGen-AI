import {
  BookOpen,
  Brain,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: "AI Notes",
      description:
        "Generate well-structured and comprehensive notes from any topic within seconds using advanced AI.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Brain className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: "Smart Flashcards",
      description:
        "Revise efficiently with AI-generated flashcards designed to improve memory retention.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: "AI Quiz Generator",
      description:
        "Practice with intelligent quizzes automatically created from your study notes.",
      color: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl sm:h-72 sm:w-72"></div>

      <div className="absolute bottom-10 right-0 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl sm:h-80 sm:w-80"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        <div className="text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-300 sm:px-5 sm:text-sm">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            Premium Features
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Everything You Need
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}to Study Smarter
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            StudyGen AI combines powerful AI tools into one
            platform, helping you generate notes,
            flashcards, quizzes, and summaries with
            exceptional speed and accuracy.
          </p>

        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (

            <div
              key={index}
              className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10 sm:p-8"
            >

              <div
                className={`inline-flex w-fit rounded-2xl bg-gradient-to-r ${feature.color} p-4 text-white shadow-lg sm:p-5`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white sm:mt-8 sm:text-3xl">
                {feature.title}
              </h3>

              <p className="mt-4 flex-grow text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center font-semibold text-cyan-400 transition group-hover:translate-x-2">
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