const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
      default: Date,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Book", BookSchema);
