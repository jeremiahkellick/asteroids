function Game() {
  this.asteroids = [];
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 5;

Game.randomPos = function() {
  return new Vector(Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y);
}

Game.prototype.addAsteroids = function() {
  while (this.asteroids.length < Game.NUM_ASTEROIDS) {
    this.asteroids.push(new Asteroid(Game.randomPos()));
  }
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect();
  asteroids.forEach(asteroid => asteroid.draw(ctx));
}

Game.prototype.moveObjects = function() {
  asteroids.forEach(asteroid => asteroid.move());
}

module.exports = Game;
