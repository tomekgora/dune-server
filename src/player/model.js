const Sequelize = reuqire("sequelize");
const db = require("../db");

const Player = db.define("player", {
  playerFaction: {},
  playerSpice: {},
  playerTroops: {},
  playerTraitors: {},
  playerTreacheryCards: {},
  playerOccupiedRegions: {}
});

// need to think this through

module.exports = User;
