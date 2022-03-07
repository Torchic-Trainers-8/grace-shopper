const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');

// o: rename this file Order
const Order = db.define('order', {
  isPurchased: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  // o: these are defined for you I'm pretty sure, you don't need to specify
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = Order;
