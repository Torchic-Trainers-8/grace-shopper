const router = require("express").Router();
const Product = require("../db/models/Product");

//PRODUCTS GET ROUTER

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    console.error("No products found");
  }
});

module.exports = router;
