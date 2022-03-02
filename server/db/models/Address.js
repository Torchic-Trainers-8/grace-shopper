const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
  addressNumber: {
    type: Sequelize.STRING,
  },
  street: {
    type: Sequelize.STRING,
  },
  zipcode: {
    type: Sequelize.INTEGER,
  },
  state: {
    type: Sequelize.STRING,
  },
  country: {
    type: Sequelize.STRING,
  },
  directionsOrInstructions: {
    type: Sequelize.TEXT
  },
  type: {
    type: Sequelize.ENUM('shipping', 'billing')
  }
})

module.exports = Address;
