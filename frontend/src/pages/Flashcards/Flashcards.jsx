import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Flashcards() {
  const location = useLocation();
  const navigate = useNavigate();

  const topic = location.state?.topic || "Flashcards";
  const content =
    location.state?.notes || "No flashcards generated yet.";

  const flashcards = content
    .split(/\n\s*\n/)
    .filter((card) => card.trim() !== "");

  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextCard = () => {
    setFlipped(false);
    setCurrent((prev) =>
      prev === flashcards.length - 1 ? 0 : prev + 1
    );
  };

  const prevCard = () => {
    setFlipped(false);
    setCurrent((prev) =>
      prev === 0 ? flashcards.length - 1 : prev - 1
    );
  };

  const currentCard = flashcards[current] || "";

  const question =
    currentCard.match(/Q:(.*?)(A:|$)/is)?.[1]?.trim() ||
    currentCard;

  const answer =
    currentCard.match(/A:(.*)/is)?.[1]?.trim() ||
    "Answer not available.";

  const copyFlashcards = async () => {
    await navigator.clipboard.writeText(content);
    alert("Flashcards copied successfully!");
  };

  const downloadFlashcards = () => {
    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${topic}-Flashcards.txt`;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const progress =
    flashcards.length > 0
      ? ((current + 1) / flashcards.length) * 100
      : 0;

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">

      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

        <div className="rounded-t-3xl bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-700 p-10">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <h1 className="text-5xl font-extrabold text-white">
                🧠 AI Flashcards
              </h1>

              <p className="mt-3 text-lg text-cyan-100">
                {topic}
              </p>

            </div>

            <button
              onClick={() => navigate("/generate")}
              className="rounded-2xl bg-white/15 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/25"
            >
              ← Generate Again
            </button>

          </div>

        </div>

        <div className="p-8">

          <div className="mb-8">

            <div className="mb-3 flex justify-between">

              <span className="font-semibold text-slate-300">
                Progress
              </span>

              <span className="font-semibold text-cyan-400">
                {current + 1} / {flashcards.length}
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">

              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>

            </div>

          </div>

          <p className="mb-8 text-center text-slate-400">
            Click the flashcard to reveal the answer.
          </p>

          <div
            onClick={() => setFlipped(!flipped)}
            className="group flex min-h-[360px] cursor-pointer items-center justify-center rounded-3xl border border-slate-700 bg-slate-800 p-12 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-cyan-500/20"
          >

            <div>

              <div className="mb-6 text-6xl transition-transform duration-300 group-hover:scale-110">
                {flipped ? "💡" : "❓"}
              </div>

              <h2 className="whitespace-pre-wrap text-3xl font-bold text-white leading-relaxed">
                {flipped ? answer : question}
              </h2>

              <p className="mt-8 text-lg text-slate-400">
                {flipped
                  ? "Answer"
                  : "Question (Click to Reveal)"}
              </p>

            </div>

          </div>
                    <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <button
              onClick={prevCard}
              className="rounded-2xl bg-slate-800 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700"
            >
              ⬅ Previous
            </button>

            <button
              onClick={nextCard}
              className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
            >
              Next ➜
            </button>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <button
              onClick={copyFlashcards}
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-5 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
            >
              📋 Copy Flashcards
            </button>

            <button
              onClick={downloadFlashcards}
              className="rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-5 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/30"
            >
              📥 Download Flashcards
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Flashcards;