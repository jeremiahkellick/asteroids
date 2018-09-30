const Util = require('./util.js');
const MovingObject = require('./moving_object.js');
const Ship = require('./ship');

function Asteroid(game, pos) {
  MovingObject.call(
    this,
    game,
    pos,
    Util.randomVec(4),
    Asteroid.RADIUS,
    Asteroid.COLOR
  );
}

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = 'papayawhip';
Asteroid.RADIUS = 30;

Asteroid.prototype.collideWith = function(other) {
  if (other instanceof Ship) other.relocate();
};

module.exports = Asteroid;
