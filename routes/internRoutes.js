const express=require("express");
const router=express.Router()
const { generateVerificationCode } = require("../controllers/internController");
const{ verifyCode,getAllInterns }=require("../controllers/internController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/generate",generateVerificationCode);
router.get("/verify/:code", verifyCode);
router.get("/all", authMiddleware, getAllInterns);
module.exports=router;
