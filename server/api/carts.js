const router = require('express').Router();
const Cart = require('../db/models/Cart');
const Product = require('../db/models/Product');
const User = require('../db/models/User');

//PRODUCTS GET ROUTER

// /api/carts
router.get('/', async (req, res, next) => {
  try {
    const carts = await Cart.findAll();
    res.send(carts);
  } catch (error) {
    console.error('No carts found');
  }
});

// /api/carts/:id
router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    const cart = await Cart.findAll({
      where: { userId },
    });
    res.send(cart);
  } catch (error) {
    console.error('No user cart found');
  }
});

// router.get('/:id/products', async (req, res, next) => {
//   try {
//     const cart = await Cart.findOne({
//       where: { id: req.params.id },
//     });
//     res.send(cart.getProducts());
//   } catch (error) {
//     console.error('No product found');
//   }
// });

module.exports = router;
