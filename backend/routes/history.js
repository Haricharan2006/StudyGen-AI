const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  addHistory,
  getHistory,
  deleteHistory,
} = require("../services/historyService");

// Get History
router.get("/", authMiddleware, async (req, res) => {
  try {
    const history = await getHistory(req.user.id);

    res.json({
      success: true,
      history,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch history.",
    });
  }
});

// Save History
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { topic, type, content } = req.body;

    if (!type || !content) {
      return res.status(400).json({
        success: false,
        message: "Type and content are required.",
      });
    }

    const newHistory = await addHistory(req.user.id, {
      topic: topic || "Untitled",
      type,
      content,
    });

    res.status(201).json({
      success: true,
      history: newHistory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to save history.",
    });
  }
});

// Delete History
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await deleteHistory(req.user.id, req.params.id);

    res.json({
      success: true,
      message: "History deleted successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete history.",
    });
  }
});

module.exports = router;