const db = require('../db');
const Product = require('./Product');
const Tag = require('./Tag');
const User = require('./User');
const PaymentInfo = require('./PaymentInfo');
const Wishlist = require('./Wishlist');
const Address = require('./Address');
const PurchaseHistory = require('./PurchaseHistory');
const Cart = require('./Cart');

User.hasOne(Cart);
Cart.belongsTo(User);
Product.hasMany(Cart);

User.hasOne(PurchaseHistory);
PurchaseHistory.belongsTo(User);
Product.hasMany(PurchaseHistory);

User.hasMany(Tag);
Tag.belongsTo(User);

User.hasMany(PaymentInfo);
PaymentInfo.belongsTo(User);
Address.belongsTo(PaymentInfo);

User.hasMany(Address);
Address.belongsTo(User);

User.hasOne(Wishlist);
Wishlist.belongsTo(User);

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
