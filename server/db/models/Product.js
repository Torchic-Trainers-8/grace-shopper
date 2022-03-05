const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  // o: should be a DECIMAL with precision of 2
  price: {
    type: Sequelize.DECIMAL(2),
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://brownsheep.com/wp-content/uploads/2020/01/wildfoote.jpg',
  },
  weight: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
})

module.exports = Product
