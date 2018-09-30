const Vector = require('./vector.js');
const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

function Ship(game, pos) {
  this.dir = 0;
  MovingObject.call(
    this,
    game,
    pos,
    Vector.zero(),
    Ship.RADIUS,
    Ship.COLOR
  );
}

Util.inherits(Ship, MovingObject);

Ship.COLOR = 'deeppink';
Ship.RADIUS = 20;

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPos();
  this.vel = Vector.zero();
};

Ship.prototype.power = function(impulse) {
  this.pos = this.pos.plus(impulse);
};

Ship.prototype.heading = function() {
  const radians = this.dir / 180 * Math.PI;
  return new Vector(Math.cos(radians), -Math.sin(radians)).normalized();
};

Ship.prototype.draw = function(ctx) {
  Util.drawTriangle(
    ctx,
    this.pos.plus(this.heading().times(5)),
    this.heading(),
    this.radius * 1.9,
    this.radius * 2.2,
    this.color
  );
};

module.exports = Ship;
