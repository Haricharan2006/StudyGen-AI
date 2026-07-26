import { useLocation, useNavigate } from "react-router-dom";

function Summary() {
  const location = useLocation();
  const navigate = useNavigate();

  const topic = location.state?.topic || "Summary";
  const summary =
    location.state?.notes || "No summary generated.";

  const copySummary = async () => {
    await navigator.clipboard.writeText(summary);
    alert("Summary copied successfully!");
  };

  const downloadSummary = () => {
    const blob = new Blob([summary], {
      type: "text/plain",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${topic}-Summary.txt`;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              AI Summary
            </h1>

            <p className="text-gray-500 mt-2">
              Topic: {topic}
            </p>
          </div>

          <button
            onClick={() => navigate("/generate")}
            className="bg-gray-700 text-white px-5 py-3 rounded-xl hover:bg-gray-800"
          >
            ← Generate Again
          </button>

        </div>

        <div className="bg-gray-100 rounded-xl border p-6 whitespace-pre-wrap leading-8">
          {summary}
        </div>

        <div className="flex gap-4 mt-8">

          <button
            onClick={copySummary}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            📋 Copy
          </button>

          <button
            onClick={downloadSummary}
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
          >
            📥 Download
          </button>

        </div>

      </div>
    </div>
  );
}

export default Summary;