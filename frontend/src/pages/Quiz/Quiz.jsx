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

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">
            No Quiz Available
          </h1>

          <button
            onClick={() => navigate("/generate")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
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

const selectedLetter = selected.charAt(0).toUpperCase();
const correctLetter = questions[current].answer.charAt(0).toUpperCase();

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
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-lg w-full">
          <h1 className="text-4xl font-bold mb-4">
            Quiz Completed 🎉
          </h1>

          <p className="text-gray-500 mb-6">
            Topic: {topic}
          </p>

          <h2 className="text-5xl font-bold text-blue-600 mb-8">
            {score} / {questions.length}
          </h2>

          <button
            onClick={() => {
              setCurrent(0);
              setSelected("");
              setScore(0);
              setFinished(false);
            }}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
          >
            Restart Quiz
          </button>

          <button
            onClick={() => navigate("/generate")}
            className="ml-4 bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-800"
          >
            Generate Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          AI Quiz
        </h1>

        <p className="text-center text-gray-500 mb-8">
          {topic}
        </p>

        <p className="text-lg font-semibold mb-6">
          Question {current + 1} of {questions.length}
        </p>

        <h2 className="text-2xl font-bold mb-8">
          {questions[current].question}
        </h2>

        <div className="space-y-4">
          {questions[current].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelected(option)}
              className={`w-full text-left p-4 rounded-xl border transition ${
                selected === option
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="mt-8 w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700"
        >
          {current === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;