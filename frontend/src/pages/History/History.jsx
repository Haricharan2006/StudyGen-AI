import { useState } from "react";

function History() {
  const [history, setHistory] = useState([
    {
      id: 1,
      title: "Machine Learning Notes",
      type: "Notes",
      date: "22 Jul 2026",
    },
    {
      id: 2,
      title: "React Flashcards",
      type: "Flashcards",
      date: "21 Jul 2026",
    },
    {
      id: 3,
      title: "Operating Systems Quiz",
      type: "Quiz",
      date: "20 Jul 2026",
    },
    {
      id: 4,
      title: "DBMS Summary",
      type: "Summary",
      date: "19 Jul 2026",
    },
  ]);

  const [search, setSearch] = useState("");

  const deleteItem = (id) => {
    setHistory(history.filter((item) => item.id !== id));
  };

  const filteredHistory = history.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">

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
          className="w-full border rounded-xl p-4 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {filteredHistory.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No history found.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredHistory.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border rounded-xl p-4 hover:shadow-md transition"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">
                    {item.type} • {item.date}
                  </p>
                </div>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default History;