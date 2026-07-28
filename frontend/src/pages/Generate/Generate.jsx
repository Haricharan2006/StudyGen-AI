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

  const cardClass = (name, active, activeStyle, hoverStyle) =>
    `rounded-2xl border p-5 sm:p-6 text-left transition-all duration-300 ${
      active === name
        ? activeStyle
        : `border-slate-700 bg-slate-800 text-slate-300 ${hoverStyle}`
    }`;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">

      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

        <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 px-6 py-8 text-center sm:px-8 sm:py-10">

          <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            🚀 AI Study Generator
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm text-blue-100 sm:text-base lg:text-lg">
            Generate AI-powered Notes, Flashcards, Quizzes and
            Summaries instantly from a topic or uploaded document.
          </p>

        </div>

        <div className="p-5 sm:p-8">

          <label className="mb-3 block text-base font-semibold text-white sm:text-lg">
            Study Topic
          </label>

          <input
            type="text"
            placeholder="Example: Machine Learning"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mb-8 w-full rounded-2xl border border-slate-700 bg-slate-800 p-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="mb-4 block text-base font-semibold text-white sm:text-lg">
            Upload PDF / DOCX
          </label>

          <label className="group flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-500 bg-slate-800 px-6 py-10 text-center transition-all duration-300 hover:border-cyan-400 hover:bg-slate-700 sm:px-10 sm:py-12">

            <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110 sm:text-7xl">
              📄
            </div>

            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Drag & Drop or Click to Upload
            </h2>

            <p className="mt-3 text-sm text-slate-400 sm:text-base">
              Supports PDF and DOCX files (Max 10 MB)
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />

          </label>

          {file && (
            <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">

              <p className="font-bold text-emerald-400">
                ✅ File Selected
              </p>

              <p className="mt-2 break-all text-white">
                {file.name}
              </p>

            </div>
          )}

          <label className="mb-4 mt-10 block text-base font-semibold text-white sm:text-lg">
            Choose Output Type
          </label>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

            <button
              onClick={() => setType("notes")}
              className={cardClass(
                "notes",
                type,
                "border-blue-500 bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-xl",
                "hover:border-blue-500 hover:bg-slate-700"
              )}
            >
              <div className="text-4xl">📝</div>
              <h3 className="mt-4 text-lg font-bold sm:text-xl">Notes</h3>
              <p className="mt-2 text-sm opacity-80">
                Detailed AI generated notes.
              </p>
            </button>

            <button
              onClick={() => setType("flashcards")}
              className={cardClass(
                "flashcards",
                type,
                "border-emerald-500 bg-gradient-to-br from-emerald-600 to-green-500 text-white shadow-xl",
                "hover:border-emerald-500 hover:bg-slate-700"
              )}
            >
              <div className="text-4xl">🧠</div>
              <h3 className="mt-4 text-lg font-bold sm:text-xl">
                Flashcards
              </h3>
              <p className="mt-2 text-sm opacity-80">
                Revise quickly with AI cards.
              </p>
            </button>

            <button
              onClick={() => setType("quiz")}
              className={cardClass(
                "quiz",
                type,
                "border-violet-500 bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-xl",
                "hover:border-violet-500 hover:bg-slate-700"
              )}
            >
              <div className="text-4xl">❓</div>
              <h3 className="mt-4 text-lg font-bold sm:text-xl">Quiz</h3>
              <p className="mt-2 text-sm opacity-80">
                Test your understanding.
              </p>
            </button>

            <button
              onClick={() => setType("summary")}
              className={cardClass(
                "summary",
                type,
                "border-orange-500 bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-xl",
                "hover:border-orange-500 hover:bg-slate-700"
              )}
            >
              <div className="text-4xl">📚</div>
              <h3 className="mt-4 text-lg font-bold sm:text-xl">
                Summary
              </h3>
              <p className="mt-2 text-sm opacity-80">
                Short AI powered summaries.
              </p>
            </button>

          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className={`mt-10 w-full rounded-2xl py-4 text-lg font-bold transition-all duration-300 sm:py-5 sm:text-xl ${
              loading
                ? "cursor-not-allowed bg-slate-700 text-slate-300"
                : "bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white shadow-xl hover:-translate-y-1 hover:shadow-blue-500/40"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="h-6 w-6 animate-spin rounded-full border-4 border-white/30 border-t-white"></div>
                Generating Study Material...
              </div>
            ) : (
              "🚀 Generate Study Material"
            )}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Generate;