const router = require('express').Router()
const Cart = require('../db/models/Cart')
const Product = require('../db/models/Product')
const User = require('../db/models/User')

//PRODUCTS GET ROUTER

// /api/carts
// router.get('/', async (req, res, next) => {
//   try {
//     const carts = await Cart.findAll();
//     res.send(carts);
//   } catch (error) {
//     console.error('No carts found');
//   }
// });

// /api/carts
// o: you don't need to pass the userId in since you already have req.user
router.post('/addToCart/:userId/:productId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const productId = req.params.productId

    // o: what if the cart already exists? try (findOrCreate)
    //  https://sequelize.org/master/manual/model-querying-finders.html
    const newCart = await Cart.create({
      userId,
      productId,
      cartQty: 1,
    })
    res.status(201).send(newCart)
  } catch (error) {
    console.error('No product found')
  }
})

//in redux determine if it exists, if it does direct to put, if it doesn't direct to create
// o: you don't need to pass the userId in since you already have req.user
router.put('/increaseCart/:userId/:productId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const productId = req.params.productId

    // o: check for when resource not found
    const cart = await Cart.findOne({
      where: {
        userId,
        productId,
      },
    })

    const newCart = await cart.update({
      userId,
      productId,
      cartQty: cart.cartQty + 1,
    })
    res.status(200).send(newCart)
  } catch (error) {
    console.error('No product found')
  }
})

// o: you don't need to pass the userId in since you already have req.user
router.put('/decreaseCart/:userId/:productId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const productId = req.params.productId
    const cart = await Cart.findOne({
      where: {
        userId,
        productId,
      },
    })
    const newCart = await cart.update({
      userId,
      productId,
      cartQty: cart.cartQty - 1,
    })
    res.status(200).send(newCart)
  } catch (error) {
    console.error('No product found')
  }
})

// o: you don't need to pass the userId in since you already have req.user
router.delete('/deleteCart/:userId/:productId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const productId = req.params.productId
    const cart = await Cart.findOne({
      where: {
        userId,
        productId,
      },
    })
    const newCart = await cart.destroy()
    res.status(204).send(`Deleted ${productId} from ${userId}`)
  } catch (error) {
    console.error('No product found')
  }
})

// /api/carts/:userId
// grabs all carts, do a filter after the fact
// on order history page filter by isPlaced true
// on cart pages filter by isPlaced false
// use to get total qty of all items in cart

// cart has 3 items. Each item has qty, we add the qty of each item, and return it as the cart total qty.

// place total qty in "Go to Cart(#)" link in nav
// total qty calculation in cart view
// o: you don't need to pass the userId in since you already have req.user
router.get('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const cart = await Cart.findAll({
      where: { userId },
    })
    res.send(cart)
  } catch (error) {
    console.error('No user cart found')
  }
})

module.exports = router
