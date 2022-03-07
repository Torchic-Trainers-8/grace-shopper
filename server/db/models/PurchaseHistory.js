const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const PurchaseHistory = db.define ('purchase_history', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validator: {
      notEmpty: true
    }
  },
  // o: should be a DECIMAL with precision of 2
  price: {
    type: Sequelize.DECIMAL(2),
    allowNull: false,
    validator: {
      notEmpty: true
    }
  }
});

module.exports = PurchaseHistory;
