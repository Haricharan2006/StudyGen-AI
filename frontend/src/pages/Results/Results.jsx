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
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              Generated Study Material
            </h1>

            <p className="text-gray-500 mt-2">
              <span className="font-semibold">Topic:</span> {topic}
            </p>

            <p className="text-gray-500">
              <span className="font-semibold">Output:</span> {type}
            </p>
          </div>

          <button
            onClick={() => navigate("/generate")}
            className="bg-gray-700 text-white px-5 py-3 rounded-xl hover:bg-gray-800"
          >
            ← Generate Again
          </button>
        </div>

        <div className="bg-gray-100 rounded-xl p-6 whitespace-pre-wrap leading-8 text-gray-800 border">
          {notes}
        </div>

        <div className="flex flex-wrap gap-4 mt-8">

          <button
            onClick={copyNotes}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
          >
            📋 Copy Notes
          </button>

          <button
            onClick={downloadNotes}
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
          >
            📥 Download Notes
          </button>

        </div>

      </div>
    </div>
  );
}

export default Results;