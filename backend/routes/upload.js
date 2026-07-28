const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const { extractText } = require("../services/fileService");
const { generateFromDocument } = require("../services/groqService");
const { addHistory } = require("../services/historyService");

router.post(
  "/",
  authMiddleware,
  upload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded.",
        });
      }

      const { type } = req.body;

      const text = await extractText(
        req.file.path,
        req.file.mimetype
      );

      const content = await generateFromDocument(
        text,
        type
      );

      await addHistory(req.user.id, {
        topic: req.file.originalname,
        type,
        content,
      });

      console.log("========== AI RESPONSE ==========");
      console.log(content);
      console.log("================================");

      res.json({
        success: true,
        content,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

module.exports = router;