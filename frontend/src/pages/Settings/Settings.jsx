import { useState } from "react";

function Settings() {
  const [name, setName] = useState("Haricharan");
  const [email, setEmail] = useState("haricharan@example.com");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

        <div className="rounded-t-3xl bg-gradient-to-r from-violet-600 via-cyan-600 to-blue-700 p-10">

          <h1 className="text-5xl font-extrabold text-white">
            ⚙️ Settings
          </h1>

          <p className="mt-3 text-lg text-cyan-100">
            Manage your profile and personalize your StudyGen AI experience.
          </p>

        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-slate-800 bg-slate-800 p-8">

            <h2 className="mb-6 text-2xl font-bold text-white">
              👤 Profile Information
            </h2>

            <div className="space-y-6">

              <div>
                <label className="mb-2 block font-semibold text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none transition focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none transition focus:border-cyan-500"
                />
              </div>

            </div>

          </div>

          <div className="space-y-6">

            <div className="rounded-3xl border border-slate-800 bg-slate-800 p-6">

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-xl font-bold text-white">
                    🌙 Dark Mode
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Enable the dark appearance for the application.
                  </p>
                </div>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative h-8 w-16 rounded-full transition ${
                    darkMode
                      ? "bg-cyan-500"
                      : "bg-slate-600"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                      darkMode
                        ? "left-9"
                        : "left-1"
                    }`}
                  ></span>
                </button>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-800 p-6">

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-xl font-bold text-white">
                    🔔 Notifications
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Receive notifications and important updates.
                  </p>
                </div>

                <button
                  onClick={() =>
                    setNotifications(!notifications)
                  }
                  className={`relative h-8 w-16 rounded-full transition ${
                    notifications
                      ? "bg-emerald-500"
                      : "bg-slate-600"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${
                      notifications
                        ? "left-9"
                        : "left-1"
                    }`}
                  ></span>
                </button>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-800 p-6">

              <h3 className="mb-4 text-xl font-bold text-white">
                📊 Account Overview
              </h3>

              <div className="space-y-3 text-slate-300">

                <div className="flex justify-between">
                  <span>Status</span>
                  <span className="font-semibold text-emerald-400">
                    Active
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>AI Features</span>
                  <span className="font-semibold text-cyan-400">
                    Enabled
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Version</span>
                  <span className="font-semibold">
                    StudyGen AI v1.0
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 p-8">

          <button
            onClick={handleSave}
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
          >
            💾 Save Settings
          </button>

        </div>

      </div>
    </div>
  );
}

export default Settings;