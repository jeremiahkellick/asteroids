const Vector = require("./vector.js");
const Util = require('./util.js');

function MovingObject(game, pos, vel, radius, color) {
  this.game = game;
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
  this.isWrappable = true;
}

MovingObject.prototype.draw = function (ctx) {
  Util.drawCircle(ctx, this.pos, this.radius, this.color);
};

MovingObject.prototype.move = function () {
  this.pos = this.pos.plus(this.vel);
  if (this.isWrappable) {
    this.game.wrap(this);
  } else if (this.game.isOutOfBounds(this)) {
    if (this.game.isOutOfBounds(this)) this.game.remove(this);
  }
};

MovingObject.prototype.isCollidedWith = function(other) {
  return this.pos.distanceTo(other.pos) < this.radius + other.radius;
};

MovingObject.prototype.collideWith = function(other) {};

MovingObject.prototype.onDestroy = function() {};

module.exports = MovingObject;
