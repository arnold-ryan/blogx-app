const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// router.get("/", getPosts);
// router.post("/", createPost);
// router.put("/:id", updatePost);
// router.delete("/:id", deletePost);
// above routes condensed to:
router.route("/").get(getPosts).post(protect, createPost);
router
  .route("/:id")
  .get(getPost)
  .put(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;
