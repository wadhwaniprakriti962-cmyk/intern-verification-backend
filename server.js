require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const internRoutes = require("./routes/internRoutes");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// routes
app.use("/api/interns", internRoutes);
app.use("/api/auth", authRoutes);

// home route
app.get("/", (req, res) => {
  res.send("Internship Verification System API is running");
});

// start server AFTER DB connects
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });
