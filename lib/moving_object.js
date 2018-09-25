const Vector = require("./vector.js");


// passing in options object
// function MovingObject(options) {
//   this.pos = options.pos;
//   this.vel = options.vel;
//   this.radius = options.radius;
//   this.color = options.color;
// }

function MovingObject(pos, vel, radius, color) {
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
}

MovingObject.prototype.draw = function (ctx) {

  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos.x,
    this.pos.y,
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos = this.pos.add(vel);
};


module.exports = MovingObject;
