// This is a Mongoose schema (model) for a user.

const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  googleId: String,
  email: String,
  password: String,
  address: { type: String, default: "home" },
  mobile: Number,
  orders: [{ type: String }],
  cart: [{ type: String }],
  wishlist: [{ type: String }],
});

module.exports = mongoose.model("User", user);
