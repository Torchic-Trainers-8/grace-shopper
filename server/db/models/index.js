const db = require('../db');
const Product = require('./Product');
const Tag = require('./Tag');
const User = require('./User');
const PaymentInfo = require('./PaymentInfo');
const Wishlist = require('./Wishlist');
const Address = require('./Address');
const PurchaseHistory = require('./PurchaseHistory');
const Cart = require('./Cart');

module.exports = {
  db,
  Product,
  Tag,
  User,
  PaymentInfo,
  Wishlist,
  Address,
  PurchaseHistory,
  Cart
};
