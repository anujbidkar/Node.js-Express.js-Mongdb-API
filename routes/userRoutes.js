var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { register,login } = require("../controller/UserController");

router.post("/register",
[
    check("name", "name should be at least 3 char").isLength({ min: 3 }), // form validation
    check("email", "your entered wrong email ").isEmail(),  // check  email validation
    check("password", "password should be at least 3 char").isLength({ min: 3 })
  ],
  register
);

router.post(
  "/login",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 3 })
  ],
  login
);


module.exports = router;
