const router = require("express").Router();
const Product = require("../db/models/Product");

//PRODUCTS GET ROUTER

// /api/products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    console.error("No products found");
  }
});

// /api/products/:id
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.id },
    });
    res.send(product);
  } catch (error) {
    console.error("No product found");
  }
});

router.put("/", async (req, res, next) => {
  try {
    const {
      productId,
      title,
      description,
      price,
      quantity,
      image,
      weight,
      color,
    } = req.body;
    const product = await Product.findByPk(productId);
    res.send(
      await product.update({
        productId,
        title,
        description,
        price,
        quantity,
        image,
        weight,
        color,
      })
    );
    console.log(await Product.findByPk(productId));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
