const Player = function(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.handCount = function () {
  return this.hand.length;
};

Player.prototype.addCardToHand = function (card) {
  this.hand.push(card);
};


module.exports = Player;
