const Sequelize = require("sequelize");
const db = require("../db");

const Game = db.define("game", {
  gameName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  currentPhase: {
    type: Sequelize.STRING,
    allowNull: false
  },
  stormPosition: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  firstPlayer: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  gamePlayers: {}, // all player IDs (rel)
  treacheryDeck: {}, // cards still in deck  (rel)
  stormDeck: {}, // cards still in deck   (rel)
  spiceDeck: {} // cards still in deck  (rel)
});

module.exports = Game;
