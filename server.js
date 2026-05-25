require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const internRoutes = require("./routes/internRoutes");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);

app.use("/api/interns", internRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Internship Verification System API is running");
});

// DB connect
connectDB().then(() => {
  console.log("MongoDB Connected");
});

// only local run
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;