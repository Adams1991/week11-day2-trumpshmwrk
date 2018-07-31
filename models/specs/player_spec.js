const assert = require('assert');
const Player = require('../player.js');

describe("Player", function() {

  let player;

  beforeEach(function(){
    player = new Player("Chris");
  });

  it("should have name", function(){
    const result = player.name;
    assert.deepStrictEqual(result, "Chris")
  });

  describe("card", function(){
    it("should have an empty hand to start with", function(){
      const result = player.hand;
      assert.deepStrictEqual(result,[]);
    });
  });



});
