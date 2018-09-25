const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

function Asteroid(pos) {
  MovingObject.call(
    this,
    pos,
    Util.randomVec(1),
    Asteroid.RADIUS,
    Asteroid.COLOR
  );
}

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = 'papayawhip';
Asteroid.RADIUS = 100;

module.exports = Asteroid;
