const router = require("express").Router();
const Cart = require("../db/models/Cart");
const Product = require("../db/models/Product");
const User = require("../db/models/User");
const Order = require("../db/models/Order_History");

//PRODUCTS GET ROUTER

// /api/orders
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.send(orders);
  } catch (error) {
    console.error("No orders found");
  }
});

// /api/carts/:id
router.get("/:id", async (req, res, next) => {
  try {
    const userId = req.params.id;

    const cart = await Cart.findAll({
      where: { userId },
    });
    res.send(cart);
  } catch (error) {
    console.error("No user cart found");
  }
});

// o: should you be searching for cart by cartId or by userId?
router.get("/:id/products", async (req, res, next) => {
  try {
    // o: check for when cart is not found
    const cart = await Cart.findOne({
      where: { id: req.params.id },
    });
    res.send(cart.getProducts());
  } catch (error) {
    console.error("No product found");
  }
});

module.exports = router;
