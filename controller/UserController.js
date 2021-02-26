const User = require("../model/UserModel");
const { check, validationResult } = require("express-validator");
// var jwt = require("jsonwebtoken");
// var expressJwt = require("express-jwt");


exports.register = (req, res) => 
{
    const errors = validationResult(req);
  
    if (!errors.isEmpty())
     {
      return res.status(422).json({
        error: errors.array()[0].msg
      });
    }

  
    const user = new User(req.body);
   
    user.save((err, userData) => 
    {
      
        if (err) 
      {
        return res.status(400).json({
          err: "NOT able to save user in DB"
        });
      }
      
      res.json({
        name: userData.name,
        email: userData.email,
        id: userData._id
      });
    });
  };


  exports.login = (req, res) => 
  {
     const { email, password } = req.body;
   
  
   
     User.findOne({ email }, (err, user) => 
     {
       if (err || !user) {
         return res.status(400).json({
           error: "USER email does not exists"
         });
       }
   
       if (!user.autheticate(password)) {
         return res.status(401).json({
           error: "Email and password do not match"
         });
       }

       const { _id, name, email } = user;
       return res.json({  user: { _id, name, email } });
     });
   };
   
  

