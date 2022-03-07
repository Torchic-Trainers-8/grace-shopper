const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../db')

const Product = db.define(
  'product',
  {
    SKU: {
      type: Sequelize.INTEGER,
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
    // o: should be a DECIMAL with precision of 2 **
    price: {
      type: Sequelize.DECIMAL(2),
    },
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
      },
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
  },
  { timestamps: false }
)

module.exports = Product
