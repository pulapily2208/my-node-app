const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    description: {
      type: String,
      default: null, 
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true // tạo tự động createdAt và updatedAt
  }
);

const CategoryModel = mongoose.model("Categories", categorySchema, "categories");

module.exports = CategoryModel;
