const Vector = require('./vector.js');
const Asteroid = require('./asteroid.js');
const Ship = require('./ship.js');
const key = require('keymaster');
const Bullet = require('./bullet.js');

function Game() {
  this.asteroids = [];
  this.bullets = [];
  this.ship = new Ship(this, Game.center());
  this.scoreEl = document.getElementById('score');
  this.score = 0;
  this.scoreEl.innerText = this.score;
  key('space', this.shoot.bind(this));
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 4;

Game.randomPos = function() {
  return new Vector(Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y);
};

Game.prototype.randomPos = Game.randomPos;

Game.randomOffScreenPos = function(radius) {
  if (Math.random() > 0.5) {
    const y = Math.random() > 0.5 ? -radius : Game.DIM_Y + radius;
    return new Vector(Math.random() * Game.DIM_X, y);
  } else {
    const x = Math.random() > 0.5 ? -radius : Game.DIM_X + radius;
    return new Vector(x, Math.random() * Game.DIM_Y);
  }
};

Game.center = function() {
  return new Vector(Game.DIM_X / 2, Game.DIM_Y / 2);
};

Game.prototype.center = Game.center;

Game.prototype.awardPoints = function(points) {
  this.score += points;
  this.scoreEl.innerText = this.score;
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.shoot = function() {
  this.ship.shoot();
};

Game.prototype.addAsteroid = function(pos, size) {
  this.asteroids.push(new Asteroid(this, pos, size));
};

Game.prototype.addAsteroids = function() {
  while (this.asteroids.length < Game.NUM_ASTEROIDS) {
    this.asteroids.push(
      new Asteroid(this, Game.randomOffScreenPos(Asteroid.SIZES[0]), 0)
    );
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

Game.prototype.wrap = function(object) {
  switch (this.isOutOfBounds(object)) {
    case '>x':
      object.pos.x -= Game.DIM_X + object.radius * 2;
      break;
    case '<x':
      object.pos.x += Game.DIM_X + object.radius * 2;
      break;
    case '>y':
      object.pos.y -= Game.DIM_Y + object.radius * 2;
      break;
    case '<y':
      object.pos.y += Game.DIM_Y + object.radius * 2;
      break;
  }
};

Game.prototype.isOutOfBounds = function(object) {
  const { pos, radius } = object;
  if (pos.x - radius > Game.DIM_X) return '>x';
  if (pos.x + radius < 0) return '<x';
  if (pos.y - radius > Game.DIM_Y) return '>y';
  if (pos.y + radius < 0) return '<y';
  return false;
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
  if (asteroidIndex !== -1) {
    this.asteroids[asteroidIndex].onDestroy();
    this.asteroids.splice(asteroidIndex, 1);
  }
  const bulletIndex = this.bullets.indexOf(object);
  if (bulletIndex !== -1) {
    this.bullets[bulletIndex].onDestroy();
    this.bullets.splice(bulletIndex, 1);
  }
};

Game.prototype.allObjects = function() {
  return this.asteroids.concat(this.bullets).concat(this.ship);
};

module.exports = Game;
