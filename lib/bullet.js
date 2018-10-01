const Util = require('./util.js');
const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');

function Bullet(game, pos, vel) {
  MovingObject.call(
    this,
    game,
    pos,
    vel,
    Bullet.RADIUS,
    Bullet.COLOR
  );
  this.isWrappable = false;
}

Util.inherits(Bullet, MovingObject);

Bullet.COLOR = 'cyan';
Bullet.RADIUS = 5;

Bullet.prototype.collideWith = function(other) {
  if (other instanceof Asteroid) {
      this.game.awardPoints(1);
     this.game.remove(other);
     this.game.remove(this);
   }
};

module.exports = Bullet;
