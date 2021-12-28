var express = require("express");
const { response } = require("../app");
var router = express.Router();
//var jwt = require("jsonwebtoken");
// const AuthController = require("../controllers/authController");
const UserModel = require("../database/models/user");

// router.get("/user", (req, res) => res.send("User route"));

router.get("/register", function (req, res, next) {
  res.render("register", { title: "Create account" });
});

// Register function
// Route POST api/auth/register
// router.post("/register", AuthController.createAccount);
router.post("/register", async function (req, res, next) {
  const { username, password, email } = req.body;

  // Simple validatetion
  if (!username || !password || !email)
    return res
      .status(400)
      .json({ state: false, message: "Missing username, password or email" });
  try {
    // Check for existing account
    const account = await UserModel.findOne({ username });

    if (account)
      return res
        .status(400)
        .json({ state: false, message: "Username already taken" });

    // All info good
    const newAccount = new UserModel({ username, password, email });
    await newAccount.save();
    // res.json({
    //   state: true,
    //   message: "Account created successfully",
    //   newAccount,
    // });
    console.log("Create account successfully");
    console.log(newAccount);
    res.render("login", { title: "Shopee" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ state: false, message: "Server error" });
  }
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login page" });
});

// Login function
// Route POST api/auth/login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Simple validatetion
  if (!username || !password){
    // return res.render("login",{errTitle:"Lỗi Đăng nhập"});
    return res.render("login",{errTitle:"Lỗi Đăng nhập"});
  }
  
  
    // return res
    //   .status(400)
    //   .json({ state: false, message: "Missing username or password" });

  // try {
  //   // Check for existing account
  //   const account = await UserModel.findOne({ username });
  //   if (!account)
  //     return res
  //       .status(400)
  //       .json({ state: false, message: "Incorrect username and password." });

  //   // Check password
  //   if (!password)
  //     returnres
  //       .status(400)
  //       .json({ state: false, message: "Incorrect username and password." });

  //   if (username)
  //     // res.json({
  //     //   state: true,
  //     //   message: "Logined successfully",
  //     //   account,
  //     // });
  //     console.log(account);
  //   res.render("home", { title: "Shopee" });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json({ state: false, message: "Server error" });
  // }
});



// Export router
module.exports = router;