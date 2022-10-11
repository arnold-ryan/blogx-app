const asyncHandler = require("express-async-handler");

const Post = require("../models/postModel");

// @description  Get posts
// @route        GET /api/posts
// @access       Public
const getPosts = asyncHandler(async (req, res) => {
  // const posts = await Post.find({ user: req.user.id });
  const username = req.query.user;
  const categoryName = req.query.cat;
  let posts;

  if (username && !categoryName) {
    posts = await Post.find({ username });
  } else if (!username && categoryName) {
    posts = await Post.find({
      categories: {
        $in: [categoryName],
      },
    });
  } else {
    posts = await Post.find();
  }

  res.status(200).json(posts);
});

// @description  Get post
// @route        GET /api/posts
// @access       Public
const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.status(200).json(post);
});

// @description  Create post
// @route        POST /api/posts
// @access       Private
const createPost = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a title field");
  }

  const post = await Post.create({
    title: req.body.title,
    description: req.body.description,
    user: req.user.id,
    photo: req.body.photo,
    username: req.body.username,
    categories: req.body.categories,
  });

  res.status(200).json(post);
});

// @description  Update post
// @route        PUT /api/posts/:id
// @access       Private
const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  // CHECK IF POST IS FOUND
  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }

  // CHECK IF USER EXISTS
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // CHECK USER MATCHES POST USER
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPost);
});

// @description  Delete posts
// @route        DELETE /api/posts/:id
// @access       Private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  // CHECK IF POST IS FOUND
  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }

  // CHECK IF USER EXISTS
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // CHECK USER MATCHES POST USER
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await post.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
