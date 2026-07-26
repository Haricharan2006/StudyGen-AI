import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          StudyGen AI
        </Link>

        <div className="flex gap-8 text-lg">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/generate"
            className="hover:text-blue-600 transition"
          >
            Generate
          </Link>

          <Link
            to="/flashcards"
            className="hover:text-blue-600 transition"
          >
            Flashcards
          </Link>

          <Link
            to="/quiz"
            className="hover:text-blue-600 transition"
          >
            Quiz
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;