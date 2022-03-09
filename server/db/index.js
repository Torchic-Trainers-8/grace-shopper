const db = require("./db");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const Order = require("./models/Order");
const PaymentInfo = require("./models/PaymentInfo");
const Address = require("./models/Address");

User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, { through: Cart });
Product.belongsToMany(Order, { through: Cart });

User.hasMany(PaymentInfo);
PaymentInfo.belongsTo(User);
PaymentInfo.belongsTo(Address);

User.hasMany(Address);
Address.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Product,
    Cart,
    Order,
    PaymentInfo,
    Address,
  },
};
