const Vector = require('./vector.js');

const Util = {
  inherits: function(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },

  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return new Vector(Math.sin(deg), Math.cos(deg)).times(length);
  },

  drawCircle(ctx, position, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(
      position.x,
      position.y,
      radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
  },

  drawTriangle(ctx, position, direction, base, height, color) {
    direction = direction.normalized();
    const point = position.plus(direction.times(height / 2));
    const rotatedDir = new Vector(-direction.y, direction.x);
    const back = position.minus(direction.times(height / 2));
    const right = back.plus(rotatedDir.times(base / 2));
    const left = back.minus(rotatedDir.times(base / 2));

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
    ctx.lineTo(right.x, right.y);
    ctx.lineTo(left.x, left.y);
    ctx.fill();
  }
};

module.exports = Util;
