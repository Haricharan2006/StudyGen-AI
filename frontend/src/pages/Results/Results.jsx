import { useLocation, useNavigate } from "react-router-dom";

function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const notes =
    location.state?.notes || "No study material generated yet.";

  const topic =
    location.state?.topic || "Unknown Topic";

  const type =
    location.state?.type || "Notes";

  const copyNotes = async () => {
    await navigator.clipboard.writeText(notes);
    alert("Notes copied successfully!");
  };

  const downloadNotes = () => {
    const blob = new Blob([notes], {
      type: "text/plain;charset=utf-8",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${topic}-${type}.txt`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">

      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

        <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 px-6 py-8 text-center sm:px-8 sm:py-10">

          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            📚 Generated Study Material
          </h1>

          <p className="mt-4 text-sm text-blue-100 sm:text-base lg:text-lg">
            Review, copy or download your AI-generated study content.
          </p>

        </div>

        <div className="p-5 sm:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="min-w-0">

              <h2 className="break-words text-2xl font-bold text-white sm:text-3xl">
                {topic}
              </h2>

              <p className="mt-3 text-slate-400">
                <span className="font-semibold text-slate-200">
                  Output:
                </span>{" "}
                {type}
              </p>

            </div>

            <button
              onClick={() => navigate("/generate")}
              className="w-full rounded-2xl bg-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-600 lg:w-auto"
            >
              ← Generate Again
            </button>

          </div>

          <div className="mt-8 max-h-[65vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-800 p-5 text-sm leading-7 text-slate-200 whitespace-pre-wrap sm:p-6 sm:text-base sm:leading-8">
            {notes}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

            <button
              onClick={copyNotes}
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
            >
              📋 Copy Notes
            </button>

            <button
              onClick={downloadNotes}
              className="rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/30"
            >
              📥 Download Notes
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Results;