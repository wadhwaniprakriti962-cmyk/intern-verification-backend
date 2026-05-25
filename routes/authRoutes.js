const express = require("express");

const router = express.Router();

const {
    registerUser,loginUser
} = require("../controllers/authControllers");
const authMiddleware = require("../middleware/authMiddleware");


// REGISTER ROUTE
router.post("/register", registerUser);
//LOGIN ROUTE
router.post("/login", loginUser);

module.exports = router;