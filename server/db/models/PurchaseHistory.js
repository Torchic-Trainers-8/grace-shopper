const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const PurchaseHistory = db.define ('purchaseHistory', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validator: {
      notEmpty: true
    }
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validator: {
      notEmpty: true
    }
  }
});

module.exports = PurchaseHistory;
