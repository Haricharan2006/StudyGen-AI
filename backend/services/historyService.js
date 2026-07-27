const fs = require("fs");
const path = require("path");

const historyPath = path.join(__dirname, "..", "data", "history.json");

function readHistory() {
  if (!fs.existsSync(historyPath)) {
    fs.writeFileSync(historyPath, "[]");
  }

  const data = fs.readFileSync(historyPath, "utf8");

  return JSON.parse(data);
}

function saveHistory(history) {
  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2));
}

function addHistory(item) {
  const history = readHistory();

  const newItem = {
    id: Date.now().toString(),
    ...item,
    createdAt: new Date().toISOString(),
  };

  history.unshift(newItem);

  saveHistory(history);

  return newItem;
}

function getHistory() {
  return readHistory();
}

function deleteHistory(id) {
  const history = readHistory();

  const updatedHistory = history.filter(item => item.id !== id);

  saveHistory(updatedHistory);
}

module.exports = {
  addHistory,
  getHistory,
  deleteHistory,
};