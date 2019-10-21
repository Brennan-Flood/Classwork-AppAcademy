const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

document.addEventListener('DOMContentLoaded', () => {
  window.MovingObject = MovingObject;
  const canvas = document.getElementById('game-canvas');
  console.log('DOM fully loaded and parsed');
  const ctx = canvas.getContext('2d');
  const game = new Game();
  const gameView = new GameView(ctx, game);

  gameView.start();
  

});
 
