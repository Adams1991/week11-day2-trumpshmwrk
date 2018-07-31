const Game = function(player_1, player_2, deck){
  this.player_1 = player_1;
  this.player_2 = player_2;
  this.deck = deck;
}

Game.prototype.addCard = function (card) {
  this.deck.push(card);
};

Game.prototype.deal = function () {
  this.player_1.hand.push(this.deck.pop());
  this.player_2.hand.push(this.deck.pop());
};


module.exports = Game;
