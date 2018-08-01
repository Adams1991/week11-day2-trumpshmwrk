const assert = require('assert');
const Card = require('../card.js');
const Player = require('../player.js');
const Game = require('../game.js');

describe("Game", function() {

  let card1;
  let card2;
  let card3;
  let card4;
  let player_1;
  let player_2;
  let game;

  beforeEach(function(){
    card1 = new Card("Superman", 4, 5, 6);
    card2 = new Card("The Flash", 7, 4, 10);
    card3 = new Card("Green Arrow", 8, 5, 7);
    card4 = new Card("The Hulk", 7, 4, 10);
    player_1 = new Player("Chris");
    player_2 = new Player("Shaun");
    game = new Game(player_1, player_2, [])
  });

  it("should have a player_1", function(){
    const result = game.player_1.name;
    assert.deepStrictEqual(result, "Chris")
  });

  it("should have a player_2", function(){
    const result = game.player_2.name;
    assert.deepStrictEqual(result, "Shaun")

  });

  it("should have an empty deck", function(){
    const result = game.deck;
    assert.deepStrictEqual(result, [])
  });

  it("should be able to add card to deck", function(){
    game.addCard(card1);
    const result = game.deck.length;
    assert.deepStrictEqual(result, 1)
  });

  it("should be able to deal two cards to players", function(){
    game.addCard(card1);
    game.addCard(card2);
    game.deal();
    const result1 = game.deck.length;
    assert.deepStrictEqual(result1, 0)
    const result2 = game.player_1.hand.length;
    assert.deepStrictEqual(result2, 1)
    const result3 = game.player_2.hand.length;
    assert.deepStrictEqual(result3, 1)
  });

  it("should allow a player to win hand", function(){
    game.addCard(card1);
    game.addCard(card2);
    game.deal();
    game.playerOneChoosesCategory("agility");
    const result1 = game.player_1.handCount()
    assert.deepStrictEqual(result1, 2)
    const result2 = game.player_2.handCount()
    assert.deepStrictEqual(result2, 0)
  });

  it("should be able to check winner", function(){
    game.addCard(card1);
    game.addCard(card2);
    game.deal();
    game.playerOneChoosesCategory("agility");
    const result = game.checkWinner();
    assert.deepStrictEqual(result, "Chris wins")
  });

  it("should be able to check if still game to play", function(){
    game.addCard(card1);
    game.addCard(card2);
    game.addCard(card3);
    game.addCard(card4);
    game.deal();
    game.playerOneChoosesCategory("agility");
    const result = game.checkWinner();
    assert.deepStrictEqual(result, `There's no winner at the moment. Player one has 3 left and
    Player two 1 left.`)
  });

  







});
