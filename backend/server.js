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
const PORT = 5000;

const User = require("./user");
const Product = require("./product");

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
    if (!user) res.send("User does not exist!");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully logged in!");
        //console.log(req.user);
      });
    }
  })(req, res, next);
});

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User already exists, please login");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        mobile: req.body.mobile,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("Welcome to FSHN!");
    }
  });
});

// =================== Add new product to DB ROUTE:

app.post("/addproduct", (req, res) => {
  
      const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        imageurl: req.body.imageurl,
        price: req.body.price,
        rating: req.body.rating,
      });
      newProduct.save();
      res.send("New product added");
    
});

// =================== Update User Details ROUTES:

app.post("/update/number", (req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.mobile = req.body.mobile;
      await doc.save();
      res.send("User mobile updated.");
    }
  });
});

app.post("/update/address", (req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.address = req.body.address;
      await doc.save();
      res.send("User address updated.");
    }
  });
});

// =================== Main shopping (Cart/ Wishlist/ Buy) ROUTES:

app.post("/addtocart", (req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.cart.push(req.body.productId);
      await doc.save();
      res.send("Product successfully added to cart!");
    }
  });
});

app.post("/removefromcart", (req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.cart.pull(req.body.productId);
      await doc.save();
      res.send("Product removed from cart.");
    }
  });
});

app.get("/getcartitems", (req, res) => {
  //const productId = req.params.id;
  if (!req.user) alert("Please log in to proceed!")
  if (req.user){
    Product.find({_id : {$in: req.user.cart}}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
        console.log(doc)
      }
    });
  }
});

app.post("/addtowishlist", (req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.wishlist.push(req.body.productId);
      await doc.save();
      res.send("Product added to wishlist");
    }
  });
});

app.post("/movetowishlist", (req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.wishlist.push(req.body.productId);
      doc.cart.pull(req.body.productId);
      await doc.save();
      res.send("Product moved to wishlist");
    }
  });
});

app.get("/getwishlistitems", (req, res) => {
  if (!req.user) alert("Please log in to proceed!")
  if (req.user){
    Product.find({_id : {$in: req.user.wishlist}}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
        console.log(doc)
      }
    });
  }
});

app.post("/buyproduct", (req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.orders.push(req.body.productId);
      doc.cart.pull(req.body.productId);
      await doc.save();
      res.send("New order made!");
    }
  });
  Product.findOne({ _id: req.body.productId}, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Product does not exist!");
    if (doc) {
      doc.buyers.push(req.user._id);
      await doc.save();
      res.send("New buyer added!");
    }
  })
});

app.get("/getorderitems", (req, res) => {
  if (!req.user) console.alert("Please log in to proceed!")
  if (req.user){
    Product.find({_id : {$in: req.user.orders}}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
        console.log(doc)
      }
    });
  }
});

// =================== Some more product ROUTES

app.get("/getproducts", (req, res) => {
  Product.find({}, async (err, doc) =>{
    if (err) throw err;
    if (doc){
      await res.send(doc);
    }
  });
});

app.get("/getproductbyid/:id", (req, res) => {
  const productId = req.params.id;
  Product.find({_id : productId}, async (err, doc) =>{
    if (err) throw err;
    if (doc){
      await res.send(doc);
    }
  });
});

app.get("/user", (req, res) => {
  res.send(req.user);
  //console.log(req.user); // req.user stores the deserealized user that has been authenticated inside it
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//========================================= SERVER STARTING

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});