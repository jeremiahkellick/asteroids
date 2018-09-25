function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.zero = function() {
  return new Vector(0, 0);
};

Vector.prototype.add = function(otherVector) {
  return new Vector(this.x + otherVector.x, this.y + otherVector.y);
};

Vector.prototype.subtract = function(otherVector) {
  return new Vector(this.x - otherVector.x, this.y - otherVector.y);
};

Vector.prototype.magnitude = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.distanceTo = function(otherVector) {
  return this.subtract(otherVector).magnitude();
};

Vector.prototype.times = function(arg) {
  if (arg instanceof Vector) {
    return new Vector(this.x * arg.x, this.y * arg.y);
  } else {
    return new Vector(this.x * arg, this.y * arg);
  }
};

Vector.prototype.divide = function(arg) {
  if (arg instanceof Vector) {
    return new Vector(this.x / arg.x, this.y / arg.y);
  } else {
    return new Vector(this.x / arg, this.y / arg);
  }
};

Vector.prototype.normalized = function() {
  let mag = this.magnitude();
  return this.divide(mag);
};

module.exports = Vector;
