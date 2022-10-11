const asyncHandler = require("express-async-handler");
const Category = require("../models/categoryModel");

// @route        GET /api/posts
// @access       Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  res.status(200).json(categories);
});

// @route        GET /api/posts
// @access       Public
const createCategory = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add a category");
  }

  const category = await Category.create({
    name: req.body.name,
  });

  res.status(200).json(category);
});

module.exports = { getCategories, createCategory };
