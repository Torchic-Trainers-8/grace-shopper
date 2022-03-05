const router = require('express').Router()
const req = require('express/lib/request')
const {
  models: { User },
} = require('../db')
module.exports = router

// o: write a middleware
// function isAdmin() {
//   if(req.user.isAdmin) {
//     next()
//   } else {
//     next(new Error("You cannot access this"))
//   }
// }

//make a middleware for admin auth // req.user.role not found.
// const ensureAdmin = function (req, res, next) {
//   if (req.user.role === 'Admin') {
//     return next()
//   } else {
//     return res.redirect('/')
//   }
// }

// api/users/
// o: only admins should be able to do this
// j: implemented incorrectly??? req.user.role not found
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
    })
    if (!user) {
      res.status(404).send('Cannot find User')
    }
    res.json(user)
  } catch (error) {
    next(error)
  }
})

// o: you actually don't need to pass in the user id here since you can grab
//  from req.user

// j: ??? not sure what the comment from omar means. Need to get with Hannah.

router.get('/:id/cart', async (req, res, next) => {
  try {
    // o: make sure to check for the case when resource is not found
    const user = await User.findOne({
      where: {
        userId: req.user.id,
      },
    })
    const userCart = await user.getProducts()
    res.json(userCart)
  } catch (err) {
    next(err)
  }
})
