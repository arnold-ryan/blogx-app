const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  updateMe,
  deleteMe,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.put("/update", protect, updateMe);
router.delete("/delete", protect, deleteMe);
router.get("/me", protect, getMe);

module.exports = router;
