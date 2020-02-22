const Sequelize = reuqire("sequelize");
const db = require("../db");

const User = db.define("user", {
  userName: {},
  userPassword: {},
  userWins: {},
  userLosses: {}
});

// need to think this through

module.exports = User;
