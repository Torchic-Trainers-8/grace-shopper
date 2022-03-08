const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../db');

const Cart = db.define(
  'cart',
  {
    cartQty: {
      type: Sequelize.INTEGER,
      // allowNull: false,
    },
    // o: you should remove the commented out code
    // createdAt: {
    //   type: Sequelize.DATE,
    //   allowNull: true,
    // },
    // updatedAt: {
    //   type: Sequelize.DATE,
    //   allowNull: true,
    // },
  },
  { timestamps: false }
);

module.exports = Cart;
