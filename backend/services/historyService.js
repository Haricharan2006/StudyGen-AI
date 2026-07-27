const History = require("../models/History");

async function addHistory(userId, item) {
  try {
    console.log("History model:", History);
    console.log("userId:", userId);
    console.log("item:", item);

    const saved = await History.create({
      user: userId,
      topic: item.topic || "Untitled",
      type: item.type,
      content: item.content,
    });

    console.log("Saved:", saved);

    return saved;
  } catch (err) {
    console.error("ERROR INSIDE addHistory:");
    console.error(err);
    throw err;
  }
}

async function getHistory(userId) {
  return await History.find({ user: userId }).sort({ createdAt: -1 });
}

async function deleteHistory(userId, historyId) {
  return await History.findOneAndDelete({
    _id: historyId,
    user: userId,
  });
}

module.exports = {
  addHistory,
  getHistory,
  deleteHistory,
};