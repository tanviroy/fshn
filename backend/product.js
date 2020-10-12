// This is a Mongoose schema (model) for a product

const mongoose = require("mongoose");
const product = new mongoose.Schema({

  name: String,
  description: String,
  category: [{ type: String }],
  imageurl: String,
  price: Number,
  rating: Number,
  reviews: [{ type: String }],
  buyers: [{ type: String }],
});

module.exports = mongoose.model("Product", product);