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

Game.prototype.play = function (category, playerChoosing) {
let player1FirstCard = this.player_1.hand[0];
let player2FirstCard = this.player_2.hand[0];



if (player1FirstCard[category] >= player2FirstCard[category]){
  this.player_1.hand.push(player2FirstCard);
  this.player_2.hand.shift();
}else{
  this.player_2.hand.push(player2FirstCard);
  this.player_1.hand.shift();
}

};


module.exports = Game;
