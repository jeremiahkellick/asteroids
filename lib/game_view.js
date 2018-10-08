function GameView(game, ctx) {
  this.game = game;
  this.game.end = this.end.bind(this);
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  this.interval = setInterval(() => {
    this.game.step();
    this.game.draw(this.ctx);
  }, 20);
};

GameView.prototype.end = function() {
  clearInterval(this.interval);
  this.game.clear(this.ctx);
};

module.exports = GameView;
