const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  isPurchased: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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

module.exports = Order;
