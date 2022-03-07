const router = require('express').Router();
const Product = require('../db/models/Product');

//PRODUCTS GET ROUTER

//make a middleware for admin auth
// const ensureAdmin = function (req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   } else {
//     return res.redirect('/');
//   }
// };

// /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
    if (!products) {
      res.status(404).send('There are no Products to show');
    }
  } catch (error) {
    console.error('No products found');
  }
});

// /api/products/create
router.post('/create', async (req, res, next) => {
  try {
    const product = await Product.create({
      ...req.body,
      image: 'https://brownsheep.com/wp-content/uploads/2020/01/wildfoote.jpg',
      quantity: 0,
    });
    res.status(201).send(product);
  } catch (err) {
    next(err);
  }
});

// /api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    // o: make sure to check for the case when resource is not found
    const product = await Product.findOne({
      where: { id: req.params.id },
    });
    if (!product) {
      res.status(404).send('There is no Product with that ID');
    }
    res.send(product);
  } catch (error) {
    console.error('No product found');
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.id },
    });
    await product.update(req.body);
    res.status(200).send(product);
  } catch (error) {
    console.error('No product found to update');
  }
});

router.put('/:id/update', async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({
      where: { id },
    });
    if (!product) {
      res.status(404).send('There is no Product with that ID');
    }
    const updatedProduct = await product.update(req.body);
    res.status(200).send(updatedProduct);
  } catch (error) {
    console.error('No product to increment');
  }
});

router.put('/:id/update/increase', async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({
      where: { id },
    });
    if (!product) {
      res.status(404).send('There is no Product with that ID');
    }
    const updatedProduct = await product.update({
      quantity: product.quantity + 1,
    });
    res.status(200).send(updatedProduct);
  } catch (error) {
    console.error('No product to increment');
  }
});

router.put('/:id/update/decrease', async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({
      where: { id },
    });
    if (!product) {
      res.status(404).send('There is no product with that ID');
    }
    const updatedProduct = await product.update({
      quantity: product.quantity - 1,
    });
    res.status(200).send(updatedProduct);
  } catch (error) {
    console.error('No product to decrement');
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.id },
    });
    if (!product) {
      res.status(404).send('There is no product with that ID');
    }
    await product.destroy(req.params.id);
    res.send(product);
  } catch (error) {
    console.error('No product to delete');
  }
});

module.exports = router;
