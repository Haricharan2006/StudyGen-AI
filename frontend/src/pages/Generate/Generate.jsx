import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Generate() {
  const navigate = useNavigate();

  const [topic, setTopic] = useState("");
  const [file, setFile] = useState(null);
  const [type, setType] = useState("notes");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim() && !file) {
      alert("Please enter a topic or upload a PDF/DOCX.");
      return;
    }

    try {
      setLoading(true);

      let response;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("type", type);

        response = await api.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        response = await api.post("/generate", {
          topic,
          type,
        });
      }

      const data = {
        notes: response.data.content,
        topic: file ? file.name : topic,
        type,
      };

      try {
        await api.post("/history", {
          topic: file ? file.name : topic,
          type,
          content: response.data.content,
        });
      } catch (historyError) {
        console.error("History save failed:", historyError);
      }

      switch (type) {
        case "flashcards":
          navigate("/flashcards", { state: data });
          break;

        case "quiz":
          navigate("/quiz", { state: data });
          break;

        case "summary":
          navigate("/summary", { state: data });
          break;

        default:
          navigate("/results", { state: data });
      }
    } catch (error) {
      console.error(error);
      alert("Failed to generate study material.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          Generate Study Material
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Upload a document or enter a topic to generate AI-powered study
          material.
        </p>

        <label className="block text-lg font-semibold mb-2">
          Enter Topic
        </label>

        <input
          type="text"
          placeholder="Machine Learning"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 mb-8"
        />

        <label className="block text-lg font-semibold mb-4">
          Upload PDF / DOCX
        </label>

        <label className="border-2 border-dashed border-blue-400 rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition mb-8">
          <div className="text-6xl mb-4">📄</div>

          <h2 className="text-xl font-semibold">
            Click to Upload
          </h2>

          <p className="text-gray-500 mt-2">
            PDF or DOCX (Max 10 MB)
          </p>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        {file && (
          <div className="bg-green-100 border border-green-300 rounded-xl p-4 mb-8">
            <p className="font-semibold text-green-700">
              Selected File
            </p>

            <p>{file.name}</p>
          </div>
        )}

        <label className="block text-lg font-semibold mb-4">
          Select Output
        </label>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <button
            onClick={() => setType("notes")}
            className={`rounded-xl p-4 font-semibold transition ${
              type === "notes"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            📝 Notes
          </button>

          <button
            onClick={() => setType("flashcards")}
            className={`rounded-xl p-4 font-semibold transition ${
              type === "flashcards"
                ? "bg-green-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            🧠 Flashcards
          </button>

          <button
            onClick={() => setType("quiz")}
            className={`rounded-xl p-4 font-semibold transition ${
              type === "quiz"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            ❓ Quiz
          </button>

          <button
            onClick={() => setType("summary")}
            className={`rounded-xl p-4 font-semibold transition ${
              type === "summary"
                ? "bg-orange-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            📚 Summary
          </button>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`w-full py-4 rounded-xl text-lg font-semibold transition ${
            loading
              ? "bg-gray-500 cursor-not-allowed text-white"
              : "bg-blue-700 hover:bg-blue-800 text-white"
          }`}
        >
          {loading ? "Generating..." : "🚀 Generate Study Material"}
        </button>
      </div>
    </div>
  );
}

export default Generate;