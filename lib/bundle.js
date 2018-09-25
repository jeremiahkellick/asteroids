/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/asteroids.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/asteroids.js":
/*!**************************!*\
  !*** ./lib/asteroids.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./lib/moving_object.js\");\nconst Vector = __webpack_require__(/*! ./vector.js */ \"./lib/vector.js\");\n\nconst ctx = document.getElementById(\"game-canvas\").getContext(\"2d\");\n\nwindow.ctx = ctx;\nwindow.MovingObject = MovingObject;\nwindow.Vector = Vector;\n\n\n//# sourceURL=webpack:///./lib/asteroids.js?");

/***/ }),

/***/ "./lib/moving_object.js":
/*!******************************!*\
  !*** ./lib/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Vector = __webpack_require__(/*! ./vector.js */ \"./lib/vector.js\");\n\n\n// passing in options object\n// function MovingObject(options) {\n//   this.pos = options.pos;\n//   this.vel = options.vel;\n//   this.radius = options.radius;\n//   this.color = options.color;\n// }\n\nfunction MovingObject(pos, vel, radius, color) {\n  this.pos = pos;\n  this.vel = vel;\n  this.radius = radius;\n  this.color = color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos.x,\n    this.pos.y,\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n  this.pos = this.pos.add(vel);\n};\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./lib/moving_object.js?");

/***/ }),

/***/ "./lib/vector.js":
/*!***********************!*\
  !*** ./lib/vector.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Vector(x, y) {\n  this.x = x;\n  this.y = y;\n}\n\nVector.zero = function() {\n  return new Vector(0, 0);\n};\n\nVector.prototype.add = function(otherVector) {\n  return new Vector(this.x + otherVector.x, this.y + otherVector.y);\n};\n\nVector.prototype.subtract = function(otherVector) {\n  return new Vector(this.x - otherVector.x, this.y - otherVector.y);\n};\n\nVector.prototype.magnitude = function() {\n  return Math.sqrt(this.x * this.x + this.y * this.y);\n};\n\nVector.prototype.distanceTo = function(otherVector) {\n  return this.subtract(otherVector).magnitude();\n};\n\nVector.prototype.times = function(arg) {\n  if (arg instanceof Vector) {\n    return new Vector(this.x * arg.x, this.y * arg.y);\n  } else {\n    return new Vector(this.x * arg, this.y * arg);\n  }\n};\n\nVector.prototype.divide = function(arg) {\n  if (arg instanceof Vector) {\n    return new Vector(this.x / arg.x, this.y / arg.y);\n  } else {\n    return new Vector(this.x / arg, this.y / arg);\n  }\n};\n\nVector.prototype.normalized = function() {\n  let mag = this.magnitude();\n  return this.divide(mag);\n};\n\nmodule.exports = Vector;\n\n\n//# sourceURL=webpack:///./lib/vector.js?");

/***/ })

/******/ });