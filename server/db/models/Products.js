const Sequelize = require('sequelize')
const db = require('../db')


const Products = db.define('products', {
  productId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.DOUBLE,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: "https://brownsheep.com/wp-content/uploads/2020/01/wildfoote.jpg"
  },
  weight: {
    type: Sequelize.STRING,
  },
  color: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true
  }
});

module.exports = Products;
