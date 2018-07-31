const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

describe("Player", function() {

  let player;
  let card;

  beforeEach(function(){
    player = new Player("Chris");
    card = new Card("The Flash", 7, 4, 10);
  });

  it("should have name", function(){
    const result = player.name;
    assert.deepStrictEqual(result, "Chris")
  });

  describe("hand", function(){
    it("should have an empty hand to start with", function(){
      const result = player.hand;
      assert.deepStrictEqual(result,[]);
    });
    it("should be able to count card in hand", function(){
      const result = player.handCount();
      assert.deepStrictEqual(result, 0);
    });
    it("should be able to add cards", function(){
      player.addCardToHand(card);
      const result = player.handCount();
      assert.deepStrictEqual(result, 1);
    });

  });



});
