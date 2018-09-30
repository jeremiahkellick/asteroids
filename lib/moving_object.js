const Vector = require("./vector.js");
const Util = require('./util.js');

function MovingObject(game, pos, vel, radius, color) {
  this.game = game;
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
}

MovingObject.prototype.draw = function (ctx) {
  Util.drawCircle(ctx, this.pos, this.radius, this.color);
};

MovingObject.prototype.move = function () {
  this.pos = this.game.wrap(this.pos.plus(this.vel));
};

MovingObject.prototype.isCollidedWith = function(other) {
  return this.pos.distanceTo(other.pos) < this.radius + other.radius;
};

MovingObject.prototype.collideWith = function(other) {};

module.exports = MovingObject;
