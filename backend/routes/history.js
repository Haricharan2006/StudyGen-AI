const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  addHistory,
  getHistory,
  deleteHistory,
} = require("../services/historyService");

// Get History
router.get("/", authMiddleware, (req, res) => {
  try {
    const history = getHistory();

    res.json({
      success: true,
      history,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch history.",
    });
  }
});

// Save History
router.post("/", authMiddleware, (req, res) => {
  try {
    const { topic, type, content } = req.body;

    if (!type || !content) {
      return res.status(400).json({
        success: false,
        message: "Type and content are required.",
      });
    }

    const newHistory = addHistory({
      topic: topic || "Untitled",
      type,
      content,
    });

    res.status(201).json({
      success: true,
      history: newHistory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to save history.",
    });
  }
});

// Delete History
router.delete("/:id", authMiddleware, (req, res) => {
  try {
    deleteHistory(req.params.id);

    res.json({
      success: true,
      message: "History deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete history.",
    });
  }
});

module.exports = router;