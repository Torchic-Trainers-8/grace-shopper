const router = require("express").Router();
const Cart = require("../db/models/Cart");
const Product = require("../db/models/Product");
const User = require("../db/models/User");
const { requireToken, isAdmin } = require("./gatekeepingMiddleware");

//PRODUCTS GET ROUTER

// /api/carts
router.get("/", requireToken, isAdmin, async (req, res, next) => {
  try {
    const carts = await Cart.findAll();
    res.send(carts);
  } catch (error) {
    console.error("No carts found");
  }
});

// /api/carts
router.put("/addToCart/:orderId/:productId", async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const productId = req.params.productId;
    const [cart, created] = await Cart.findOrCreate({
      where: { orderId, productId },
    });
    res
      .status(200)
      .send(await cart.update({ ...cart, cartQty: cart.cartQty + 1 }));
  } catch (error) {
    console.error("Errored on add to cart");
  }
});

//in redux determine if it exists, if it does direct to put, if it doesn't direct to create
router.put("/increaseCart/:orderId/:productId", async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const productId = req.params.productId;
    const cart = await Cart.findOne({
      where: {
        orderId,
        productId,
      },
    });
    const newCart = await cart.update({
      orderId,
      productId,
      cartQty: cart.cartQty + 1,
    });
    res.status(200).send(newCart);
  } catch (error) {
    console.error("No product found");
  }
});

router.put("/decreaseCart/:orderId/:productId", async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const productId = req.params.productId;
    const cart = await Cart.findOne({
      where: {
        orderId,
        productId,
      },
    });
    const newCart = await cart.update({
      orderId,
      productId,
      cartQty: cart.cartQty - 1,
    });
    res.status(200).send(newCart);
  } catch (error) {
    console.error("No product found");
  }
});

router.delete("/deleteCart/:orderId/:productId", async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const productId = req.params.productId;
    const cart = await Cart.findOne({
      where: {
        orderId,
        productId,
      },
    });
    const newCart = await cart.destroy();
    res.status(204).send(`Deleted ${productId} from ${orderId}`);
  } catch (error) {
    console.error("No product found");
  }
});

// /api/carts/:userId
// grabs all carts, do a filter after the fact
// on order history page filter by isPlaced true
// on cart pages filter by isPlaced false
// use to get total qty of all items in cart

// cart has 3 items. Each item has qty, we add the qty of each item, and return it as the cart total qty.

// place total qty in "Go to Cart(#)" link in nav
// total qty calculation in cart view
// o: you don't need to pass the userId in since you already have req.user

//might not use.
// router.get('/:id', requireToken, async (req, res, next) => {
//   try {
//     if (req.user.id === req.params.id) {
//       const userId = req.params.id;
//       const cart = await Cart.findAll({
//         where: { userId },
//       });
//       res.send(cart);
//     }
//   } catch (error) {
//     console.error('No user cart found');
//   }
// });

module.exports = router;
