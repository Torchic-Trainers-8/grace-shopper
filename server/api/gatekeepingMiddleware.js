const User = require("../db/models/User");

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const user = await User.findByToken(token)
    req.user = user
    console.log("req.user", req.user)
    next()
  } catch (error) {
    next(error)
  }
}

const isAdmin = async (req, res, next) => {
  if(req.user.role !== 'Admin') {
    return res.status(403).send('Admin permissions required');
  } else {
    next();
  }
}

module.exports = {
  requireToken,
  isAdmin
}
