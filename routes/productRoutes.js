const express = require("express");
const router = express.Router();

const {
  // getProductById,
  createProduct,
  // getAllproduct,
  // getProduct,
} = require("../controller/productController");



// router.param("productId", getProductById);


router.post("/product/create",createProduct);

// router.get("/product",getAllproduct);


// router.get("/product/:productId", getProduct);


// router.delete("/product/:productId",deleteProduct);



module.exports = router;
