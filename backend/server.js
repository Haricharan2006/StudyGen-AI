require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const generateRoutes = require("./routes/generate");
const uploadRoutes = require("./routes/upload");
const historyRoutes = require("./routes/history");
const authRoutes = require("./routes/auth");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/generate", generateRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/history", historyRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "StudyGen AI Backend is running.",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});