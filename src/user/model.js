const Sequelize = reuqire("sequelize");
const db = require("../db");

const User = db.define("user", {
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userPassword: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userWins: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  userLosses: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

// need to think this through

module.exports = User;
