import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950">

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3 text-white shadow-lg">

                <Sparkles size={22} />

              </div>

              <div>

                <h2 className="text-3xl font-extrabold text-white">

                  StudyGen AI

                </h2>

                <p className="text-sm text-slate-400">

                  AI Powered Learning Platform

                </p>

              </div>

            </div>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">

              StudyGen AI helps students learn smarter by
              generating AI-powered notes, flashcards,
              quizzes, and summaries within seconds.
              Designed to save time and improve academic
              performance.

            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:contact@studygenai.com"
                className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-emerald-500 hover:text-emerald-400"
              >
                <FaEnvelope size={20} />
              </a>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-bold text-white">

              Quick Links

            </h3>

            <ul className="mt-6 space-y-4">

              <li>

                <Link
                  to="/"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Home
                </Link>

              </li>

              <li>

                <Link
                  to="/generate"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Generate
                </Link>

              </li>

              <li>

                <Link
                  to="/flashcards"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Flashcards
                </Link>

              </li>

              <li>

                <Link
                  to="/quiz"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Quiz
                </Link>

              </li>

              <li>

                <Link
                  to="/history"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  History
                </Link>

              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold text-white">

              Contact

            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3 text-slate-400">

                <FaEnvelope className="text-cyan-400" />

                <span>contact@studygenai.com</span>

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <FaGithub className="text-cyan-400" />

                <span>GitHub</span>

              </div>

              <div className="flex items-center gap-3 text-slate-400">

                <FaLinkedin className="text-cyan-400" />

                <span>LinkedIn</span>

              </div>

            </div>

          </div>

        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

          <p>

            © {new Date().getFullYear()} StudyGen AI. All rights reserved.

          </p>

          <div className="flex gap-6">

            <Link
              to="/"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="transition hover:text-cyan-400"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;