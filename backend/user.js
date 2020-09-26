// This is a Mongoose schema (model) for a user. Currently only has username and password

const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("User", user);