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
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">

      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

        <div className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-700 px-6 py-8 sm:px-8 sm:py-10">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                🧠 AI Flashcards
              </h1>

              <p className="mt-3 break-words text-sm text-cyan-100 sm:text-lg">
                {topic}
              </p>

            </div>

            <button
              onClick={() => navigate("/generate")}
              className="w-full rounded-2xl bg-white/15 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/25 lg:w-auto"
            >
              ← Generate Again
            </button>

          </div>

        </div>

        <div className="p-5 sm:p-8">

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
              />

            </div>

          </div>

          <p className="mb-8 text-center text-sm text-slate-400 sm:text-base">
            Click the flashcard to reveal the answer.
          </p>

          <div
            onClick={() => setFlipped(!flipped)}
            className="group flex min-h-[260px] cursor-pointer items-center justify-center rounded-3xl border border-slate-700 bg-slate-800 p-6 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-cyan-500/20 sm:min-h-[360px] sm:p-12"
          >

            <div>

              <div className="mb-6 text-5xl transition-transform duration-300 group-hover:scale-110 sm:text-6xl">
                {flipped ? "💡" : "❓"}
              </div>

              <h2 className="whitespace-pre-wrap break-words text-xl font-bold leading-relaxed text-white sm:text-2xl lg:text-3xl">
                {flipped ? answer : question}
              </h2>

              <p className="mt-8 text-sm text-slate-400 sm:text-lg">
                {flipped
                  ? "Answer"
                  : "Question (Click to Reveal)"}
              </p>

            </div>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

            <button
              onClick={prevCard}
              className="rounded-2xl bg-slate-800 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700"
            >
              ⬅ Previous
            </button>

            <button
              onClick={nextCard}
              className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
            >
              Next ➜
            </button>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">

            <button
              onClick={copyFlashcards}
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30 sm:py-5 sm:text-lg"
            >
              📋 Copy Flashcards
            </button>

            <button
              onClick={downloadFlashcards}
              className="rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/30 sm:py-5 sm:text-lg"
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