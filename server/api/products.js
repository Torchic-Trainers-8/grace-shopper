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
    console.error("No products found");
  } catch (error) {
    next(error);
  }
});

router.put("/:productId/update/increase", async (req, res, next) => {
  try {
    const id = req.params.productId;
    const products = await Product.findByPk(id);
    if (products === null) {
      res.send("There is no Product by that ID");
    }
    const updatedProduct = await products.update({
      quantity: products.quantity + 1,
    });
    res.status(200).send(updatedProduct);
  } catch (error) {
    console.error("No product to increment");
  }
});

router.put("/:productId/update/decrease", async (req, res, next) => {
  try {
    const id = req.params.productId;
    const products = await Product.findByPk(id);
    if (products == null) {
      res.send("There is no product by that ID");
    }
    const updatedProduct = await products.update({
      quantity: products.quantity - 1,
    });
    res.status(200).send(updatedProduct);
  } catch (error) {
    console.error("No product to decrement");
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
