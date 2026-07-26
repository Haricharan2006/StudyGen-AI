const express = require("express");
const router = express.Router();

const { generateContent } = require("../services/groqService");

router.post("/", async (req, res) => {
  try {
    const { topic, type } = req.body;

    const content = await generateContent(topic, type);

    res.json({
      success: true,
      content,
    });
  } catch (error) {
    console.error("Groq Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;