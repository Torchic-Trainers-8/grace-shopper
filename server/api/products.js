const router = require('express').Router()
const Product = require('../db/models/Product')

//PRODUCTS GET ROUTER

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.send(products)
  } catch (error) {
    console.error('No products found')
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.id },
    })
    res.send(product)
  } catch (error) {
    console.error('No product found')
  }
})

module.exports = router
