const Game = require('./game.js');
const GameView = require('./game_view.js');

document.addEventListener("DOMContentLoaded", function(event) {
  const ctx = document.getElementById("game-canvas").getContext("2d");
  const game = new Game();
  game.addAsteroids();
  const gameView = new GameView(game, ctx);
  gameView.start();
});
