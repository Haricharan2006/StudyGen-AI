import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();

  const topic = location.state?.topic || "Quiz";
  const content = location.state?.notes || "";

  const parseQuiz = (text) => {
    if (!text) return [];

    const cleanedText = text.replace(
      /^.*?(Question\s*1:)/is,
      "$1"
    );

    const matches = cleanedText.match(
      /Question\s*\d+:[\s\S]*?(?=Question\s*\d+:|$)/gi
    );

    if (!matches) return [];

    return matches.map((block) => {
      const lines = block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      const questionIndex = lines.findIndex((line) =>
        /^Question\s*\d+:/i.test(line)
      );

      let question = "";

      if (questionIndex !== -1) {
        const sameLine = lines[questionIndex]
          .replace(/^Question\s*\d+:\s*/i, "")
          .trim();

        if (sameLine) {
          question = sameLine;
        } else {
          question = lines[questionIndex + 1] || "";
        }
      }

      const options = lines.filter((line) =>
        /^[A-D][.)]/i.test(line)
      );

      const answerLine =
        lines.find((line) =>
          /^Answer:/i.test(line)
        ) || "";

      const answer = answerLine
        .replace(/^Answer:/i, "")
        .trim();

      return {
        question,
        options,
        answer,
      };
    });
  };

  const questions = parseQuiz(content);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const progress =
    questions.length > 0
      ? ((current + 1) / questions.length) * 100
      : 0;

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

        <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">

          <div className="mb-6 text-6xl">
            ❓
          </div>

          <h1 className="text-4xl font-bold text-white">
            No Quiz Available
          </h1>

          <p className="mt-4 text-slate-400">
            Generate notes first to create quiz questions.
          </p>

          <button
            onClick={() => navigate("/generate")}
            className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Generate Quiz
          </button>

        </div>

      </div>
    );
  }

  const handleNext = () => {
    if (!selected) {
      alert("Please select an option.");
      return;
    }

    const selectedLetter =
      selected.charAt(0).toUpperCase();

    const correctLetter =
      questions[current].answer
        .charAt(0)
        .toUpperCase();

    if (selectedLetter === correctLetter) {
      setScore((prev) => prev + 1);
    }

    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((prev) => prev + 1);
      setSelected("");
    }
  };

  if (finished) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

        <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">

          <div className="mb-6 text-7xl">
            🏆
          </div>

          <h1 className="text-5xl font-bold text-white">
            Quiz Completed
          </h1>

          <p className="mt-3 text-slate-400">
            {topic}
          </p>

          <div className="my-10">

            <div className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {score} / {questions.length}
            </div>

            <p className="mt-3 text-slate-400">
              Your Final Score
            </p>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            <button
              onClick={() => {
                setCurrent(0);
                setSelected("");
                setScore(0);
                setFinished(false);
              }}
              className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white transition hover:scale-105"
            >
              Restart Quiz
            </button>

            <button
              onClick={() => navigate("/generate")}
              className="rounded-2xl bg-slate-800 px-6 py-4 font-semibold text-white transition hover:bg-slate-700"
            >
              Generate Again
            </button>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">

      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

        <div className="rounded-t-3xl bg-gradient-to-r from-violet-600 via-cyan-600 to-blue-700 p-10">

          <h1 className="text-5xl font-extrabold text-white">
            🧠 AI Quiz
          </h1>

          <p className="mt-3 text-lg text-cyan-100">
            {topic}
          </p>

        </div>

        <div className="p-8">

          <div className="mb-8">

            <div className="mb-3 flex justify-between">

              <span className="font-semibold text-slate-300">
                Progress
              </span>

              <span className="font-semibold text-cyan-400">
                {current + 1} / {questions.length}
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">

              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>

            </div>

          </div>

          <h2 className="mb-8 text-3xl font-bold text-white leading-relaxed">
            {questions[current].question}
          </h2>

          <div className="space-y-4">

            {questions[current].options.map((option, index) => (

              <button
                key={index}
                onClick={() => setSelected(option)}
                className={`w-full rounded-2xl border p-5 text-left text-lg font-medium transition-all duration-300 ${
                  selected === option
                    ? "border-cyan-500 bg-cyan-600 text-white shadow-lg shadow-cyan-500/20"
                    : "border-slate-700 bg-slate-800 text-slate-200 hover:border-cyan-500 hover:bg-slate-700"
                }`}
              >
                {option}
              </button>

            ))}
          </div>
                    <button
            onClick={handleNext}
            className="mt-10 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/30"
          >
            {current === questions.length - 1
              ? "🎉 Finish Quiz"
              : "➡ Next Question"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Quiz;