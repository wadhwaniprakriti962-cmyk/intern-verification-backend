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

<<<<<<< HEAD
=======
// IMPORTANT: production CORS setup
>>>>>>> 855feed (fix bcryptjs installation)
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

connectDB().then(() => {
  console.log("MongoDB Connected");
});

// ONLY RUN LOCALLY
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

<<<<<<< HEAD
module.exports = app;
=======
module.exports = app;
>>>>>>> 855feed (fix bcryptjs installation)
