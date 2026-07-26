import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button
          onClick={() => navigate("/generate")}
          className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition"
        >
          Generate Notes
        </button>

        <button
          onClick={() => navigate("/flashcards")}
          className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition"
        >
          Flashcards
        </button>

        <button
          onClick={() => navigate("/quiz")}
          className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition"
        >
          Quiz
        </button>

        <button
          onClick={() => navigate("/history")}
          className="bg-orange-600 text-white p-4 rounded-lg hover:bg-orange-700 transition"
        >
          History
        </button>

      </div>
    </div>
  );
}

export default QuickActions;