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
const nodemailer = require('nodemailer');


const app = express();
const PORT = process.env.PORT || 5000;

const User = require("./user");
const Product = require("./product");
const user = require("./user");

//========================================= MONGODB CONNECT

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://soham:thisisthepassword@test-cluster.qybal.mongodb.net/test-cluster?retryWrites=true&w=majority",
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


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fshn.customer.service@gmail.com',
    pass: 'thisisFSHN123!@#'
  }
});

const mailOptions = {
  from: 'fshn.customer.service@gmail.com',
  to: 'soham.de_ug22@ashoka.edu.in',
  subject: 'Sending Email using Node.js',
  text: 'You added something to cart. That was easy!'
};


//========================================= ROUTES

app.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/profile');
  });

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

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
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
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("Welcome to FSHN!");

      const welcomeEmail = {
        from: 'fshn.customer.service@gmail.com',
        to: req.body.email,
        subject: 'Welcome to FSHN! ✨',
        html: `
        <body style="font-family: Arial, Helvetica, sans-serif">
        <center>
        <img src="https://res.cloudinary.com/dl6m7txan/image/upload/v1602013956/3_rlqeb0.png" style="width: 100%;" >
        <h1 style="background-color: black; color: #edca0d;">Welcome to FSHN!</h1>
        <br>
        <b>Hello, ${req.body.username}!</b> We're so excited to have you on board! <br><br>
        <span style="color: #edca0d; font-weight: 600"> FSHN </span> (pronounced <i>fashion</i>) stands for <b>"Fashionable, Sustainable, Haute & Nouveau."</b>
        We strive to make quality design available to everyone in an affordable and sustainable way.<br><br>     
        Based in New York, FSHN is an international fashion brand, offering the latest styles and inspiration for all — always.
        Customers will find everything from fashion pieces and unique designer collaborations to affordable wardrobe essentials, complete-the-look accessories, and motivational workout wear.
        All seasons, all styles, all welcome! But FSHN is more than just apparel.
        With price, quality and sustainability deeply rooted in its DNA, FSHN is not only a possibility for everyone to explore their personal style, but it also offers a chance to create a more sustainable fashion future.<br><br>
        <b>Be sure to look out for:</b><br>
        ⭐ Our monthly free giveaways! If you made a purchase with us of over $50 (USD) you directly qualify for that month's giveaway where we gift select random customers some of the hottest outfits of the season!<br>
        ⭐ Our half-yearly sales that take place every summer and winter. Get the best clothes at the best prices!<br>
        ⭐ Our exciting emails that glam up your inbox and might help inspire your next look.<br>
        <br><br>
        <img src="https://res.cloudinary.com/dfymeww45/image/upload/v1603122141/welcome.jpg" style="width: 100%">
        <h1><b>Experience <span style="color: #edca0d;">FSHN.</span></b></h1>
      </body>`
      };
    
      transporter.sendMail(welcomeEmail, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
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

app.post("/changeprice", (req, res) => {
  
  Product.findOne({_id: req.body.productId}, async(err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {

      let wishers = doc.wishers;
      for(var i = 0; i < wishers.length; i++){
        User.findOne({_id:wishers[i]}, (err,user) => {
          if (err) throw err;
          if(user){

              const changeEmail = {
              from: 'fshn.customer.service@gmail.com',
              to: user.email,
              subject: 'FSHN: Some item(s) in your wishlist have changed prices',
              text: 'An item in your wishlist has recently changed price.'
            };
          
            transporter.sendMail(changeEmail, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });

          }
        })
      }

      doc.price = req.body.newprice
      await doc.save();
      res.send("Product updated");
    }
  })
  

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
  //transporter.sendMail(mailOptions, function(error, info){
  //  if (error) {
  //    console.log(error);
  //  } else {
  //    console.log('Email sent: ' + info.response);
  //  }
  //});

  if (!req.user){
    res.send("Please login first!")
  }
  else{

    Product.findOne({_id: req.body.productId}, async (err,doc) => {
      if (err) throw err;
      if (doc){
          if (doc.wishers.includes(req.user._id)){
            await res.send("Product already exists in your wishlist!");
          }
          else if(doc.buyers.includes(req.user._id)){
            res.send("Product already purchased once!");
          }
          else if(req.user.cart.includes(req.body.productId)){
            res.send("Product already exists in your cart!");
          }
          else{
            User.findOne({ username: req.user.username }, async (err, doc) => {
              if (err) throw err;
              if (!doc) res.send("User does not exist!");
              if (doc) {
                doc.cart.push(req.body.productId);
                await doc.save();
                res.send("Product successfully added to cart!");
              }
            });
          }
        }

    })
    
  }
  
});

app.post("/movetocart", (req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.cart.push(req.body.productId);
      doc.wishlist.pull(req.body.productId);
      await doc.save();
      res.send("Product moved from wishlist to cart");
    }
  });
  Product.findOne({ _id: req.body.productId}, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Product does not exist!");
    if (doc) {
      doc.wishers.pull(req.user._id);
      await doc.save();
      res.send("Product moved to cart!");
    }
  })
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
  if (!req.user) {
    res.send("Please log in to proceed!");
    console.log("Please log in to proceed!")}
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
  if(!req.user){
    res.send("Please login first");
  }
  else{
    Product.findOne({_id: req.body.productId}, async (err,doc) => {
      if (err) throw err;
      if (doc){
          if (doc.wishers.includes(req.user._id)){
            await res.send("Product already exists in your wishlist!");
          }
          else if(doc.buyers.includes(req.user._id)){
            res.send("Product already purchased once!");
          }
          else{
            User.findOne({ username: req.user.username }, async (err, doc) => {
              if (err) throw err;
              if (!doc) res.send("User does not exist!");
              if (doc) {
                doc.wishlist.push(req.body.productId);
                await doc.save();
                res.send("Product added to wishlist");
              }
            });
            Product.findOne({ _id: req.body.productId}, async (err, doc) => {
              if (err) throw err;
              if (!doc) res.send("Product does not exist!");
              if (doc) {
                doc.wishers.push(req.user._id);
                await doc.save();
                res.send("New wishlist-er added!");
              }
            });
          }
        
      }
    })
    
  }
  
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
  Product.findOne({ _id: req.body.productId}, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Product does not exist!");
    if (doc) {
      doc.wishers.push(req.user._id);
      await doc.save();
      res.send("New wishlist-er added!");
    }
  })
});

app.post("/removefromwishlist", (req, res) => {
  User.findOne({ username: req.user.username }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.wishlist.pull(req.body.productId);
      await doc.save();
      res.send("Product removed from wishlist.");
    }
  });

  Product.findOne({ _id: req.body.productId}, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("Product does not exist!");
    if (doc) {
      doc.wishers.pull(req.user._id);
      await doc.save();
      res.send("A wishlist-er was removed");
    }
  })
});

app.get("/getwishlistitems", (req, res) => {
  if (!req.user) {
    res.send("Please log in to proceed!");
    console.log("Please log in to proceed!")}
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

app.post("/buyallproducts", (req, res) => {
  User.findOne({ username: req.user.username }, async (err, user) => {
    if (err) throw err;
    if (!user) res.send("User does not exist!");
    if (user) {

      let products = req.user.cart;
      for(var i=0; i<products.length; i++){

        user.orders.push(products[i]);
        user.cart.pull(products[i]);

        Product.findOne({ _id: products[i]}, async (err, doc) => {
          if (err) throw err;
          if (!doc) res.send("Product does not exist!");
          if (doc) {
            doc.buyers.push(req.user._id);
            await doc.save();
            res.send("New buyer added!");
          }
        });

      }

      await user.save();
      res.send("New orders made!");
      
    }
  });
});

app.get("/getorderitems", (req, res) => {
  if (!req.user) res.send([]);
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

app.post("/addreview", (req, res) => {

  if(!req.user){
    res.send("Please login first!");
  }
  else{
    Product.findOne({ _id: req.body.productId}, async (err, doc) => {
      if (err) throw err;
      if (!doc) res.send("Product does not exist!");
      if (!req.user) res.send("Login to continue");
      if (doc && req.user) {
        if (req.user.orders.includes(req.body.productId)){
          var newreview = {body: req.body.review, user: req.user.username, verified: "Y"};
          doc.reviews.push(newreview);
          await doc.save();
          console.log(newreview)
          res.send("New verified review added!");
        }
        else{
          var newreview = {body: req.body.review, user: req.user.username, verified: "N"};
          doc.reviews.push(newreview);
          await doc.save();
          console.log(newreview)
          res.send("New review added!");
        }
        
      }
    })
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
app.get("/getfeaturedproducts", (req, res) => {
  Product.find({featured : "YES"}, async (err, doc) =>{
    if (err) throw err;
    if (doc){
      await res.send(doc);
    }
  });
});
app.get("/productsearch/:term", (req, res) => {
  const searchterm = req.params.term;
  if (searchterm === ""){
    Product.find({}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
        //console.log(doc);
      }
    });
  }
  else{
    Product.find({$or: [{name : {$regex: searchterm, $options: 'i'}}, {category : {$regex: searchterm, $options: 'i'}}] }, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
        //console.log(doc);
      }
    });
  }
  
});
app.get("/productsearchbygender/:gender", (req, res) => {
  const gender = req.params.gender;

  if (gender==="A"){
    Product.find({}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
        //console.log(doc);
      }
    });

  }
  else{
    Product.find({gender: gender}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
        //console.log(doc);
      }
    });
  }
  
});

app.get("/productsearchbycolor/:color", (req, res) => {
  const color = req.params.color;

  
  if (color==="A"){
    Product.find({}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
        //console.log(doc);
      }
    });

  }
  else{
    Product.find({color: color}, async (err, doc) =>{
      if (err) throw err;
      if (doc){
        await res.send(doc);
        //console.log(doc);
      }
    });
  }
  
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
  if(!req.user){
    res.send("Please login first")
  }
  if(req.user){
    res.send(req.user);
  }
  
  //console.log(req.user); // req.user stores the deserealized user that has been authenticated inside it
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//========================================= SERVER STARTING

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'));
}

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
