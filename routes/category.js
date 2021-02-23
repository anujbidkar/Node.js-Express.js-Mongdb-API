const express = require('express')

const router = express.Router();

const {createCategory} = require("../controller/category.js");


router.post("/category/create/",createCategory);



module.exports = router;