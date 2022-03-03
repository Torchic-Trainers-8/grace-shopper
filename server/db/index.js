//this is the access point for all things database related!

const db = require('./db');
const Product = require('./models/Product');
const User = require('./models/User');
const Cart = require('./models/Cart');
const Tag = require('./models/Tag');
const PaymentInfo = require('./models/PaymentInfo');
const Wishlist = require('./models/Wishlist');
const Address = require('./models/Address')
const PurchaseHistory = require('./models/PurchaseHistory');

//associations could go here!

Product.belongsToMany(User, { through: Cart });
User.belongsToMany(Product, { through: Cart });

User.hasMany(PurchaseHistory);
PurchaseHistory.belongsTo(User);
PurchaseHistory.belongsTo(Product);

Product.belongsToMany(Tag, {through: 'product_tags'});
Tag.belongsToMany(Product, { through: 'product_tags' });

User.hasMany(PaymentInfo);
PaymentInfo.belongsTo(User);
PaymentInfo.belongsTo(Address);

User.hasMany(Address);
Address.belongsTo(User);

User.hasOne(Wishlist);
Wishlist.belongsTo(User);
Product.hasOne(Wishlist);

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
