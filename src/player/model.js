const Sequelize = reuqire("sequelize");
const db = require("../db");

const Player = db.define("player", {
  // the players Faction
  playerFaction: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // current spice held by the Player
  playerSpice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  // The troops available to the player for deployment
  playerOffPlanetTroops: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  // is the player allowed to bid in the bidding phase
  playerAllowedToBid: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  // players current ally
  playerAlly: {
    type: Sequelize.STRING,
    allowNull: true
  },
  // does the player have access to move of 3
  hasThopters: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  playTraitorHand: {}, // (rel)
  playerTreacheryHand: {}, // (rel)
  playerOccupiedRegions: {} // (rel)
});

// need to think this through

module.exports = Player;
