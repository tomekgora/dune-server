const Sequelize = require("sequelize");
const db = require("../db");

const Game = db.define("game", {
  gameName: {},
  gamePlayers: {},
  currentPhase: {},
  treacheryDeck: {},
  stormDeck: {},
  spiceDeck: {}
});

module.exports = Game;
