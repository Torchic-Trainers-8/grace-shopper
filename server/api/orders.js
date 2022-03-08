const router = require('express').Router();
const Cart = require('../db/models/Cart');
const Product = require('../db/models/Product');
const User = require('../db/models/User');
const Order = require('../db/models/Order');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware')

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
    if (req.user.id === req.params.id) {
      const order = await Order.findOne({
        where: {
          isPurchased: false,
        },
      });
      res.send(await order.update({ ...order, isPurchased: true }));
    }
  } catch (error) {
    console.error('No orders found');
  }
});

// /api/orders/:id
router.get('/details/:id', requireToken, async (req, res, next) => {
  try {
    if (req.user.id === req.params.id) {
      const userId = req.params.id;
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
    }


    // userOrderDetails = {
    //   ...userOrderDetails,
    //   orders: userOrderDetails.orders[0],
    // };
    // userOrderDetails.id = 5000;
    // if (userOrderDetails.id === userId) {
    //   console.log('Im here');
    //   userOrderDetails.orders = userOrderDetails.orders[0];
    // }
    // res.json(
    //   await userOrderDetails.update({
    //     ...userOrderDetails,
    //     id: 5000,
    //     orders: userOrderDetails.orders[0],
    //   })
    // );
  } catch (error) {
    console.error('No order details found');
  }
});

router.post('/findOrCreateOrder/:userId', requireToken, async (req, res, next) => {
  try {
    if (req.user.id === req.params.id) {
      const userId = req.params.userId;
      const [order, created] = await Order.findOrCreate({
        where: {
          userId,
          isPurchased: false,
        },
      });
      res.status(201).json(order);
    }
  } catch (error) {
    console.error('No Order found');
  }
});

module.exports = router;
