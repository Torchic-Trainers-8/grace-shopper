//this is the access point for all things database related!

const db = require('./db');
const Product = require('./models/Product');
const User = require('./models/User');
const Cart = require('./models/Cart');
const Tag = require('./Tag');
const PaymentInfo = require('./PaymentInfo');
const Wishlist = require('./Wishlist');
const Address = require('./Address')
const PurchaseHistory = require('./PurchaseHistory');

//associations could go here!

Product.belongsToMany(User, { through: Cart });
User.belongsToMany(Product, { through: Cart });

User.hasOne(PurchaseHistory);
PurchaseHistory.belongsTo(User);
Product.hasMany(PurchaseHistory);

User.belongsToMany(Product, { through: Tag });
Product.belongsToMany(User, { through: Tag });

User.hasMany(PaymentInfo);
PaymentInfo.belongsTo(User);
Address.belongsTo(PaymentInfo);

User.hasMany(Address);
Address.belongsTo(User);

User.hasOne(Wishlist);
Wishlist.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Product,
    Cart,
    Tag,
    PaymentInfo,
    Wishlist,
    Address,
    PurchaseHistory
  },
};
