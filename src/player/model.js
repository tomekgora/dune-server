const Sequelize = reuqire("sequelize");
const db = require("../db");

const Player = db.define("player", {
  playerFaction: {},
  playerSpice: {},
  playerTroops: {},
  playerTraitorHand: {}, // (rel)
  playerTreacheryHand: {}, // (rel)
  playerOccupiedRegions: {} // (rel)
});

// need to think this through

module.exports = Player;
