function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-8 py-5 backdrop-blur-xl">

      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Welcome back! Ready to generate smarter study materials?
        </p>
      </div>

      <div className="flex items-center gap-5">

        <div className="hidden md:flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-2">
          <span className="mr-2 text-lg">🤖</span>

          <span className="text-sm font-medium text-slate-300">
            StudyGen AI
          </span>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/40 bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-110">
          HC
        </div>

      </div>

    </header>
  );
}

export default Topbar;