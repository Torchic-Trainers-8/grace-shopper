const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
  // o: remove this if not being used
  // username: {
  //   type: Sequelize.STRING,
  //   foreignKey: true,
  //   allowNull: false,
  // },
  // productId: {
  //   type: Sequelize.INTEGER,
  //   foreignKey: true,
  //   allowNull: false,
  // },
  cartQty: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = Cart;
