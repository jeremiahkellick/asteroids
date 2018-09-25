const MovingObject = require("./moving_object.js");
const Vector = require("./vector.js");

const ctx = document.getElementById("game-canvas").getContext("2d");

window.ctx = ctx;
window.MovingObject = MovingObject;
window.Vector = Vector;
