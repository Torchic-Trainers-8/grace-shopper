const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Wishlist = db.define('wishlist', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validator: {
      notEmpty: true
    }
  }
});

module.exports = Wishlist;
