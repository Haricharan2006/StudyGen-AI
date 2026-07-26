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
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-center mb-2">
          Settings
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Manage your profile and application preferences.
        </p>

        <div className="space-y-6">

          <div>
            <label className="block font-semibold mb-2">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center border rounded-xl p-4">
            <div>
              <h2 className="font-semibold">Dark Mode</h2>
              <p className="text-gray-500 text-sm">
                Enable dark theme.
              </p>
            </div>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="w-5 h-5"
            />
          </div>

          <div className="flex justify-between items-center border rounded-xl p-4">
            <div>
              <h2 className="font-semibold">Notifications</h2>
              <p className="text-gray-500 text-sm">
                Receive app notifications.
              </p>
            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-700 text-white py-4 rounded-xl hover:bg-blue-800 transition"
          >
            Save Settings
          </button>

        </div>

      </div>
    </div>
  );
}

export default Settings;