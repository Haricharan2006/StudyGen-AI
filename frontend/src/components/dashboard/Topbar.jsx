function Topbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        <div className="min-w-0">

          <h1 className="truncate text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-1 hidden text-sm text-slate-400 sm:block">
            Welcome back! Ready to generate smarter study materials?
          </p>

        </div>

        <div className="flex items-center gap-3 sm:gap-5">

          <div className="hidden items-center rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 md:flex">

            <span className="mr-2 text-lg">
              🤖
            </span>

            <span className="text-sm font-medium text-slate-300">
              StudyGen AI
            </span>

          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/40 bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-cyan-500/30 transition duration-300 hover:scale-110 sm:h-12 sm:w-12 sm:text-base">
            HC
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;