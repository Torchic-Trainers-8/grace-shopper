const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const PaymentInfo = db.define('paymentinfo', {
  cardNumber : {
    type: Sequelize.STRING,
    validator: {
      isCreditCard: true
    }
  },
  expiration: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true
    }
  },
  // phoneNumber: {
  //   type: DataTypes.VIRTUAL,
  //   get() {
  //     return `${this.phoneNumber}`
  //   }
  // },
  cvv: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validator: {
      notEmpty: true,
      min: 100,
      max: 999
    }
  }
});

module.exports = PaymentInfo;
