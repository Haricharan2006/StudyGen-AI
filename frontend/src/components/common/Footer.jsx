import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              StudyGen AI
            </h2>

            <p className="mt-4 text-gray-400">
              AI-powered study assistant that generates notes, flashcards,
              quizzes, and summaries to help students learn faster.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/generate" className="hover:text-blue-400">
                  Generate
                </Link>
              </li>

              <li>
                <Link to="/flashcards" className="hover:text-blue-400">
                  Flashcards
                </Link>
              </li>

              <li>
                <Link to="/quiz" className="hover:text-blue-400">
                  Quiz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>contact@studygenai.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaGithub />
                <span>GitHub</span>
              </div>

              <div className="flex items-center gap-3">
                <FaLinkedin />
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} StudyGen AI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;