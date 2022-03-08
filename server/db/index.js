//this is the access point for all things database related!

const db = require('./db');
const Product = require('./models/Product');
const User = require('./models/User');
const Cart = require('./models/Cart');
const Order = require('./models/Order');
const Tag = require('./models/Tag');
const PaymentInfo = require('./models/PaymentInfo');
const Wishlist = require('./models/Wishlist');
const Address = require('./models/Address');
const PurchaseHistory = require('./models/PurchaseHistory');

//associations could go here!

// o: there are some issues with this cart setup
// Product.belongsToMany(User, { through: Cart })
// User.belongsToMany(Product, { through: Cart })

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, { through: Cart });
Product.belongsToMany(Order, { through: Cart });

// o: let's talk about purchase history, wishlist, tags and payment info
User.hasMany(PurchaseHistory);
PurchaseHistory.belongsTo(User);
PurchaseHistory.belongsTo(Product);

Product.belongsToMany(Tag, { through: 'product_tags' });
Tag.belongsToMany(Product, { through: 'product_tags' });

User.hasMany(PaymentInfo);
PaymentInfo.belongsTo(User);
PaymentInfo.belongsTo(Address);

User.hasMany(Address);
Address.belongsTo(User);

// o: this has some issues... wishlist currently can have no products within it
User.hasOne(Wishlist);
Wishlist.belongsTo(User);
Product.hasOne(Wishlist);

module.exports = {
  db,
  models: {
    User,
    Product,
    Cart,
    Order,
    Tag,
    PaymentInfo,
    Wishlist,
    Address,
    PurchaseHistory,
  },
};
