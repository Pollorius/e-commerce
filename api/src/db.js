const Sequelize = require('sequelize');

function db() {
  return new Sequelize('postgres://postgres:12345@localhost/ecommerce7', {
    logging: false, // set to console.log to see the raw SQL queries

  });
}

module.exports = db;
