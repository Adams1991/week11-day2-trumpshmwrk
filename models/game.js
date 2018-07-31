const Card = require('./card.js');
const Player = require('./player.js');

const Game = function(){
  this.players = []
  this.deck = []
}

Game.prototype.addCard = function (card) {
  this.deck.push(card);
};

Game.prototype.addPlayer = function (player) {
  this.players.push(player);
};

Game.prototype.deal = function () {

};

Game.prototype.play = function (category) {

};



};


module.exports = Game;
