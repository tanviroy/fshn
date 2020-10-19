// This is a Mongoose schema (model) for a product

const mongoose = require("mongoose");
const product = new mongoose.Schema({

  name: String,
  description: String,
  category: [{ type: String }],
  color: [{type: String}],
  gender: [{type: String}],
  imageurl: String,
  price: Number,
  rating: [{ type: Number }],
  reviews: [{ body: String, user: String, verified: String }],
  buyers: [{ type: String }],
  wishers: [{ type: String }],
});

module.exports = mongoose.model("Product", product);