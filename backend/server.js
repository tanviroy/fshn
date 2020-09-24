// This is the entry point for the backend (aka the index.js file).
// All backend dependencies are connected here. Mongoose has to be connected and RESTful routes defined.

//mongodb+srv://soham:thisisthepassword@test-cluster.qybal.mongodb.net/test-cluster?retryWrites=true&w=majority

//========================================= IMPORTS

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

const User = require("./user");
import data from "./data";

//========================================= MONGODB CONNECT

mongoose.connect(
  "mongodb+srv://soham:thisisthepassword@test-cluster.qybal.mongodb.net/test-cluster?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Users Database (MongoDB) is now connected");
  }
);

//========================================= MIDDLEWARE

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // location of react frontend
    credentials: true,
  })
);
app.use(
  expressSession({
    secret: "mondal",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("mondal"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

//========================================= ROUTES

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("User doesn't exist");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("User authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User exists, please login");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("New user created");
    }
  });
});
app.get("/user", (req, res) => {
  res.send(req.user); // req.user stores the complete user that has been authenticated inside it
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

//========================================= SERVER STARTING
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
