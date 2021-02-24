const Product = require("../model/productModel");
// const formidable = require("formidable");
// const _ = require("lodash");
// const fs = require("fs");


exports.createProduct = 
(req, res) =>
 {
 
  const product = new Product(req.body);
 
  product.save((err, category) => 
  {
    if (err) 
    {

      if(err.code === 11000 || err.code === 11001)
      {
        return res.status(400).json({
          error: "Duplicate Value " +req.body.name +",Value must be unique",
         
        });
      }
      else
      {
        return res.status(400).json({
          error: "NOT able to save category in DBs",
          messgae : err
         
        });
      }
      }

     
    res.json({ category });
  });
};


// exports.getAllproduct =
//    (req, res) => 
//   {
//     Product.find().exec((err, product) => {
//       if (err) {
//         return res.status(400).json({
//           error: "NO categories found"
//         });
//       }
//       res.json(product);
//     });
//   };


// exports.getProductById = (req, res, next, id) => {
//   Product.findById(id)
//     .populate("category")
//     .exec((err, product) => {
//       if (err) {
//         return res.status(400).json({
//           error: "Product not found"
//         });
//       }
//       req.product = product;
//       next();
//     });
// };


// exports.getProduct = (req, res) => {
//     req.product.photo = undefined;
//     return res.json(req.product);
//   };
// // // delete controllers
// exports.deleteProduct = (req, res) => {
//   let product = req.product;
//   product.remove((err, deletedProduct) => {
//     if (err) {
//       return res.status(400).json({
//         error: "Failed to delete the product"
//       });
//     }
//     res.json({
//       message: "Deletion was a success",
//       deletedProduct
//     });
//   });
// };

// // delete controllers







