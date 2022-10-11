const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: [true, "Please add your username"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
