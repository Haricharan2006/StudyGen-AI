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

  const getBadgeColor = (type) => {
    switch (type) {
      case "notes":
        return "bg-blue-500/20 text-blue-300";
      case "flashcards":
        return "bg-emerald-500/20 text-emerald-300";
      case "quiz":
        return "bg-violet-500/20 text-violet-300";
      case "summary":
        return "bg-orange-500/20 text-orange-300";
      default:
        return "bg-slate-700 text-slate-300";
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "notes":
        return "📝";
      case "flashcards":
        return "🧠";
      case "quiz":
        return "❓";
      case "summary":
        return "📚";
      default:
        return "📄";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">

      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

        <div className="rounded-t-3xl bg-gradient-to-r from-violet-700 via-blue-600 to-cyan-600 p-10">

          <h1 className="text-center text-5xl font-extrabold text-white">
            📜 Study History
          </h1>

          <p className="mt-4 text-center text-lg text-blue-100">
            Access every AI-generated note, quiz, flashcard and summary from one place.
          </p>

        </div>

        <div className="p-8">

          <div className="mb-8">

            <input
              type="text"
              placeholder="🔍 Search your history..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-800 p-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {loading ? (
            <div className="flex justify-center py-20">

              <div className="flex items-center gap-4">

                <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-600 border-t-blue-500"></div>

                <span className="text-xl text-slate-300">
                  Loading History...
                </span>

              </div>

            </div>
          ) : filteredHistory.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-700 py-20 text-center">

              <div className="text-7xl">📂</div>

              <h2 className="mt-6 text-3xl font-bold text-white">
                No History Found
              </h2>

              <p className="mt-3 text-slate-400">
                Generate some study materials to see them here.
              </p>

            </div>

          ) : (

            <div className="space-y-6">

  {filteredHistory.map((item) => (
                <div
                  key={item._id}
                  className="group rounded-2xl border border-slate-700 bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                    <div
                      onClick={() => openHistory(item)}
                      className="flex flex-1 cursor-pointer items-start gap-4"
                    >

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-700 text-3xl">
                        {getIcon(item.type)}
                      </div>

                      <div className="flex-1">

                        <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                          {item.topic}
                        </h2>

                        <div className="mt-3 flex flex-wrap items-center gap-3">

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${getBadgeColor(
                              item.type
                            )}`}
                          >
                            {item.type}
                          </span>

                          <span className="text-sm text-slate-400">
                            {new Date(item.createdAt).toLocaleString()}
                          </span>

                        </div>

                      </div>

                    </div>

                    <button
                      onClick={() => deleteItem(item._id)}
                      className="rounded-xl bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-red-600 hover:to-red-700"
                    >
                      🗑 Delete
                    </button>

                  </div>
                </div>
              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default History;