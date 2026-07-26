function Topbar() {
  return (
    <header className="bg-white shadow p-6 flex justify-between items-center">

      <div>
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Welcome back! Ready to study?
        </p>
      </div>

      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
        HC
      </div>

    </header>
  );
}

export default Topbar;