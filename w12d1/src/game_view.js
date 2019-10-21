// const Game = require("./game.js");
// const Ship = require("./ship.js")
class GameView {
  constructor(ctx, game) {
    this.game = game;
    this.ctx = ctx;
  };

  start() {
    // setInterval(() => { console.log("interval!")}, 100);
    setInterval((ctx) => {
      this.game.step();
      this.game.draw(ctx);
    }, 10, this.ctx);
  };
  
}

module.exports = GameView;