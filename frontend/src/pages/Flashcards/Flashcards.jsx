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

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              AI Flashcards
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

        <p className="text-center text-gray-500 mb-8">
          Click the card to reveal the answer.
        </p>

        <div
          onClick={() => setFlipped(!flipped)}
          className="bg-white rounded-2xl shadow-lg p-10 cursor-pointer min-h-[320px] flex items-center justify-center text-center hover:shadow-xl transition"
        >
          <div>
            <h2 className="text-2xl font-bold whitespace-pre-wrap">
              {flipped ? answer : question}
            </h2>

            <p className="text-gray-500 mt-6">
              {flipped ? "Answer" : "Question"}
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-8">

          <button
            onClick={prevCard}
            className="bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-800"
          >
            ← Previous
          </button>

          <button
            onClick={nextCard}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
          >
            Next →
          </button>

        </div>

        <div className="text-center mt-6 text-lg font-semibold">
          Card {current + 1} of {flashcards.length}
        </div>

        <div className="flex justify-center gap-4 mt-8">

          <button
            onClick={copyFlashcards}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            📋 Copy
          </button>

          <button
            onClick={downloadFlashcards}
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
          >
            📥 Download
          </button>

        </div>

      </div>
    </div>
  );
}

export default Flashcards;