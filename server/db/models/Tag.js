const { Sequelize } = require('sequelize');
const db = require('../db');

const Tag = db.define('tag', {
  tag: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      notEmpty: true
    }
  }
});

module.exports = Tag;
