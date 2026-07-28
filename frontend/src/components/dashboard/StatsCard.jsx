function StatsCard({ title, value, color }) {
  const getIcon = () => {
    switch (title.toLowerCase()) {
      case "notes":
        return "📝";
      case "flashcards":
        return "🧠";
      case "quizzes":
        return "❓";
      case "total generations":
        return "🚀";
      default:
        return "📊";
    }
  };

  return (
    <div
      className={`
        ${color}
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        p-6
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:scale-[1.02]
        cursor-pointer
      `}
    >
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
            {title}
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            {value}
          </h2>

          <p className="mt-4 text-sm text-white/80">
            Updated in real time
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur-sm">
          {getIcon()}
        </div>
      </div>

      <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
        <div className="h-full w-2/3 rounded-full bg-white"></div>
      </div>
    </div>
  );
}

export default StatsCard;