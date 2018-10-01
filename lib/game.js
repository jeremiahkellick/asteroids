const Vector = require('./vector.js');
const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');
const key = require('keymaster');
const Bullet = require('./bullet.js');

function Game() {
  this.asteroids = [];
  this.bullets = [];
  this.ship = new Ship(this, Game.randomPos());
  key('space', this.shoot.bind(this));
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 8;

Game.randomPos = function() {
  return new Vector(Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y);
};

Game.prototype.randomPos = Game.randomPos;

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.shoot = function() {
  this.ship.shoot();
};

Game.prototype.addAsteroids = function() {
  while (this.asteroids.length < Game.NUM_ASTEROIDS) {
    this.asteroids.push(new Asteroid(this, Game.randomPos()));
  }
};

Game.prototype.addBullet = function(pos, vel) {
  this.bullets.push(new Bullet(this, pos, vel));
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.allObjects().forEach(asteroid => asteroid.draw(ctx));
};

Game.prototype.moveObjects = function() {
  this.allObjects().forEach(object => object.move());
};

Game.prototype.wrap = function(pos) {
  const wrapped = new Vector(pos.x, pos.y);
  if (wrapped.x > Game.DIM_X) wrapped.x %= Game.DIM_X;
  if (wrapped.x < 0) wrapped.x = wrapped.x % Game.DIM_X + Game.DIM_X;
  if (wrapped.y > Game.DIM_Y) wrapped.y %= Game.DIM_Y;
  if (wrapped.y < 0) wrapped.y = wrapped.y % Game.DIM_Y + Game.DIM_Y;
  return wrapped;
};

Game.prototype.isOutOfBounds = function(object) {
  const pos = object.pos;
  return pos.x > Game.DIM_X || pos.x < 0 || pos.y > Game.DIM_Y || pos.y < 0;
};

Game.prototype.checkCollisions = function() {
  const objects = this.allObjects();
  objects.forEach(obj1 => {
    objects.forEach(obj2 => {
      if (obj1 !== obj2 && obj1.isCollidedWith(obj2)) {
        obj1.collideWith(obj2);
      }
    });
  });
};

Game.prototype.remove = function(object) {
  const asteroidIndex = this.asteroids.indexOf(object);
  if (asteroidIndex !== -1) this.asteroids.splice(asteroidIndex, 1);
  const bulletIndex = this.bullets.indexOf(object);
  if (bulletIndex !== -1) this.bullets.splice(bulletIndex, 1);
};

Game.prototype.allObjects = function() {
  return this.asteroids.concat(this.bullets).concat(this.ship);
};

module.exports = Game;
