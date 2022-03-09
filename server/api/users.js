const router = require('express').Router()
const {
  models: { User, Product },
} = require('../db')
module.exports = router
const { requireToken, isAdmin } = require('./gatekeepingMiddleware')

router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'role'],
    })
    if (!users) {
      res.status(404).send('No Users')
    }
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
})

// api/users/id (preferences and junk)
router.get('/:id', requireToken, async (req, res, next) => {
  try {
    if (req.user.id) {
      const user = await User.findOne({
        where: { id: req.params.id },
        include: Product,
      })
      if (!user) {
        res.status(404).send('Cannot find User')
      }
      res.json(user)
    } else {
      res.status(403).send('This is not you!')
    }
  } catch (error) {
    next(error)
  }
})

//create a new user
//api/users/create
router.post('/create', async (req, res, next) => {
  try {
    const user = await User.create({ ...req.body, role: 'Customer' })
    res.status(201).send(user)
  } catch (err) {
    next(err)
  }
})

// o: you actually don't need to pass in the user id here since you can grab
//  from req.user

// j: ??? not sure what the comment from omar means. Need to get with Hannah.
// H: I think he is saying that user should be on state and we don't need to find it because we should already have it. Can we look at what the objects look like together? The route should just be '/cart'

router.get('/:id/cart', requireToken, async (req, res, next) => {
  try {
    // o: make sure to check for the case when resource is not found
    if (req.user.id === req.params.id) {
      const user = await User.findOne({
        where: {
          userId: req.user.id,
        },
      })
      const userCart = await user.getProducts()
      res.json(userCart)
    }
  } catch (err) {
    next(err)
  }
})
