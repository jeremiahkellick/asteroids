const Vector = require('./vector.js');
const Util = require('./util.js');
const MovingObject = require('./moving_object.js');
const key = require('keymaster');

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
  this.height = this.radius * 2.2;
}

Util.inherits(Ship, MovingObject);

Ship.COLOR = 'deeppink';
Ship.RADIUS = 20;

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPos();
  this.vel = Vector.zero();
};

Ship.prototype.shoot = function() {
  this.game.addBullet(
    this.triangleOrigin().plus(this.heading().times(this.height / 2)),
    this.heading().times(20)
  );
};

Ship.prototype.move = function () {
  if (this.thrusting()) this.vel = this.vel.plus(this.heading().times(0.2));
  if (this.turningRight()) this.dir -= 5;
  if (this.turningLeft()) this.dir += 5;
  Object.getPrototypeOf(Ship.prototype).move.call(this);
};

Ship.prototype.thrusting = function() {
  return key.isPressed('W');
};

Ship.prototype.turningRight = function() {
  return key.isPressed('D');
};

Ship.prototype.turningLeft = function() {
  return key.isPressed('A');
};

Ship.prototype.power = function(impulse) {
  this.pos = this.pos.plus(impulse);
};

Ship.prototype.heading = function() {
  const radians = this.dir / 180 * Math.PI;
  return new Vector(Math.cos(radians), -Math.sin(radians)).normalized();
};

Ship.prototype.triangleOrigin = function() {
  return this.pos.plus(this.heading().times(5));
};

Ship.prototype.draw = function(ctx) {
  const triangleOrigin = this.triangleOrigin();
  if (this.thrusting()) {
    const thrustStart = triangleOrigin.minus(
      this.heading().times(this.height / 2)
    );
    const thrustEnd = thrustStart.minus(this.heading().times(15));
    ctx.strokeStyle = 'lime';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(thrustStart.x, thrustStart.y);
    ctx.lineTo(thrustEnd.x, thrustEnd.y);
    ctx.stroke();
  }
  Util.drawTriangle(
    ctx,
    triangleOrigin,
    this.heading(),
    this.radius * 1.9,
    this.height,
    this.color
  );
};

module.exports = Ship;
