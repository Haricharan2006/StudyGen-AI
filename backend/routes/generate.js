const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { generateContent } = require("../services/groqService");
const { addHistory } = require("../services/historyService");

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { topic, type } = req.body;

    const content = await generateContent(topic, type);

    await addHistory(req.user.id, {
      topic,
      type,
      content,
    });

    res.json({
      success: true,
      content,
    });
  } catch (error) {
    console.error("Generate Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;