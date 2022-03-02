const router = require('express').Router()
const {
  models: { User, Product },
} = require('../db')
module.exports = router

const Cart = { placholder: 'placeholder' }

// api/users/
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username'],
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// api/users/id (preferences and junk)
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      include: {
        Cart: {
          include: Product,
        },
      },
    })
    res.json(user)
  } catch (error) {
    next(error)
  }
})
