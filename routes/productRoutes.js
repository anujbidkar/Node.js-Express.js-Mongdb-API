const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getAllproduct,
  getProduct,
} = require("../controller/productController");



router.param("productId", getProductById); //param : parameter 
router.get("/product/:productId", getProduct);




router.post("/product/create",createProduct);

router.get("/product",getAllproduct);




// router.delete("/product/:productId",deleteProduct);



module.exports = router;
