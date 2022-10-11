const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Post = require("../models/postModel");

// @description  Register user
// @route        POST /api/users
// @access       Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, username } = req.body;

  // VALIDATE ALL DATA FIELDS
  if (!name || !email || !password || !username) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // CHECK IF USER EXISTS
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // HASH THE PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // CREATE USER
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    username,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      token: generateToken(user._id),
    }); // 201 (created response code)
  } else {
    res.status(400); // 400 (bad request code)
    throw new Error("Invalid user data");
  }
});

// @description  Authenticate user
// @route        POST /api/users/login
// @access       Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // CHECK FOR USER EMAIL
  const user = await User.findOne({ email });

  // CHECK PASSWORD
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @description  Update user data
// @route        GET /api/users/update
// @access       Private
const updateMe = asyncHandler(async (req, res) => {
  let { name, email, password, username } = req.body;

  if (password) {
    // HASH THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
  }

  // UPDATE USER
  const filter = { email: req.user.email };
  let user = await User.updateOne(filter, {
    $set: { name, email, password, username },
  });

  user = await User.findOne(filter);

  res.status(200).json(user);
});

// @description  Delete user data
// @route        DELETE /api/users/update
// @access       Private
const deleteMe = asyncHandler(async (req, res) => {
  // FIND USER
  const user = req.user;
  if (!user) {
    res.status(400);
    throw new Error("No user found");
  }
  const filter = { email: user.email };

  // FIND & DELETE ALL POSTS
  await Post.deleteMany({ username: user.username });

  // DELETE USER
  // await User.findByIdAndDelete(filter);
  await User.findOneAndDelete(filter);

  res.status(200).json({ message: "User has been deleted" });
});

// @description  Get user data
// @route        GET /api/users/me
// @access       Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// GENERATE JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
  updateMe,
  deleteMe,
  getMe,
};
