const Vector = require("./vector.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require('./asteroid.js');

const ctx = document.getElementById("game-canvas").getContext("2d");

window.ctx = ctx;
window.Vector = Vector;
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
