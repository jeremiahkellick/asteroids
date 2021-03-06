const Util = require('./util.js');
const MovingObject = require('./moving_object.js');
const Ship = require('./ship');

function Asteroid(game, pos, size) {
  MovingObject.call(
    this,
    game,
    pos,
    Util.randomVec(1.3 * (size + 1)),
    Asteroid.SIZES[size],
    Asteroid.COLOR
  );
  this.size = size;
}

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = 'papayawhip';
Asteroid.SIZES = [25, 15, 8];
Asteroid.SCORE_BY_SIZE = { '0': 20, '1': 50, '2': 100 };

Asteroid.prototype.score = function() {
  return Asteroid.SCORE_BY_SIZE[this.size];
};

Asteroid.prototype.collideWith = function(other) {
  if (other instanceof Ship) other.respawn();
};

Asteroid.prototype.onDestroy = function() {
  if (this.size < 2) {
    for (let i = 0; i < 2; i++) {
      this.game.addAsteroid(this.pos, this.size + 1);
    }
  }
};

module.exports = Asteroid;
