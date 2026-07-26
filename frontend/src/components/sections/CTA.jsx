import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-blue-700 py-20 text-white">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Study Smarter?
        </h2>

        <p className="text-lg mb-8">
          Generate AI-powered notes, flashcards, quizzes, and summaries in
          just a few clicks.
        </p>

        <Link
          to="/generate"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition"
        >
          Get Started
        </Link>

      </div>
    </section>
  );
}

export default CTA;