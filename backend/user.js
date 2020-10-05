// This is a Mongoose schema (model) for a user. Currently only has username and password

const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  password: String,
  address: { type: String, default: "home" },
  mobile: Number,
  orders: [{ type: String }],
  cart: [{ type: String }],
  wishlist: [{ type: String }],
});

module.exports = mongoose.model("User", user);
