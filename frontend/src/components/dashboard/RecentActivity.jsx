function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <ul className="space-y-4 text-gray-600">
        <li>📄 Generated AI Notes</li>
        <li>🧠 Reviewed Flashcards</li>
        <li>❓ Completed Quiz</li>
        <li>📚 Studied Machine Learning</li>
      </ul>
    </div>
  );
}

export default RecentActivity;