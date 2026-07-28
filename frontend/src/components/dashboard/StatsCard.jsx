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
        p-5
        shadow-xl
        transition-all
        duration-300
        cursor-pointer
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-2xl
        sm:p-6
      `}
    >
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/10 blur-3xl sm:h-32 sm:w-32"></div>

      <div className="relative z-10 flex items-start justify-between gap-4">

        <div className="min-w-0 flex-1">

          <p className="text-xs font-semibold uppercase tracking-widest text-white/80 sm:text-sm">
            {title}
          </p>

          <h2 className="mt-3 break-words text-3xl font-extrabold text-white sm:mt-4 sm:text-4xl lg:text-5xl">
            {value}
          </h2>

          <p className="mt-3 text-xs text-white/80 sm:mt-4 sm:text-sm">
            Updated in real time
          </p>

        </div>

        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl backdrop-blur-sm sm:h-14 sm:w-14 sm:text-3xl">
          {getIcon()}
        </div>

      </div>

      <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/20 sm:mt-6">
        <div className="h-full w-2/3 rounded-full bg-white"></div>
      </div>

    </div>
  );
}

export default StatsCard;