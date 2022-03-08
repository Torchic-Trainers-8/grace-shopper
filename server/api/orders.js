const router = require('express').Router();
const Cart = require('../db/models/Cart');
const Product = require('../db/models/Product');
const User = require('../db/models/User');
const Order = require('../db/models/Order');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');

//PRODUCTS GET ROUTER

// /api/orders
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.send(orders);
  } catch (error) {
    console.error('No orders found');
  }
});

//What compare req.user.id too. Compare with id from order?
router.put('/purchase', requireToken, async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        isPurchased: false,
      },
    });
    res.send(await order.update({ ...order, isPurchased: true }));
  } catch (error) {
    console.error('No orders found');
  }
});

// /api/orders/:id
router.get('/details/:id', requireToken, async (req, res, next) => {
  console.log('I made it to order details');
  try {
    const userId = req.user.id;
    let userOrderDetails = await User.findOne({
      where: { id: userId },
      include: {
        model: Order,
        where: { isPurchased: false },
        include: {
          model: Product,
        },
      },
    });
    res.json(userOrderDetails);
  } catch (error) {
    console.error('No order details found');
  }
});

router.get(
  '/findOrCreateOrder/:userId',
  requireToken,
  async (req, res, next) => {
    try {
      const userId = req.user.id;
      const [order, created] = await Order.findOrCreate({
        where: {
          userId,
          isPurchased: false,
        },
      });

      if (created) {
        res.status(201).json(await Order.create(order));
      }

      res.status(201).json(order);
    } catch (error) {
      console.error('No Order found');
    }
  }
);

module.exports = router;
