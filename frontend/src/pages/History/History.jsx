import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function History() {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await api.get("/history");
      setHistory(response.data.history);
    } catch (error) {
      console.error(error);
      alert("Failed to load history.");
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id) => {
    try {
      await api.delete(`/history/${id}`);
      setHistory((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete history.");
    }
  };

  const openHistory = (item) => {
    const data = {
      notes: item.content,
      topic: item.topic,
      type: item.type,
    };

    switch (item.type) {
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
  };

  const filteredHistory = history.filter((item) =>
    item.topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          History
        </h1>

        <p className="text-center text-gray-500 mb-8">
          View your previously generated study materials.
        </p>

        <input
          type="text"
          placeholder="Search history..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl p-4 mb-8 focus:ring-2 focus:ring-blue-500"
        />

        {loading ? (
          <div className="text-center text-xl py-10">
            Loading...
          </div>
        ) : filteredHistory.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No history found.
          </div>
        ) : (
          <div className="space-y-5">
            {filteredHistory.map((item) => (
              <div
                key={item._id}
                className="border rounded-xl p-5 hover:shadow-lg transition bg-white"
              >
                <div className="flex justify-between items-start">
                  <div
                    className="cursor-pointer flex-1"
                    onClick={() => openHistory(item)}
                  >
                    <h2 className="text-xl font-bold text-blue-700">
                      {item.topic}
                    </h2>

                    <p className="text-gray-600 mt-2">
                      <strong>Type:</strong> {item.type}
                    </p>

                    <p className="text-gray-500 mt-1">
                      {new Date(item.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteItem(item._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default History;