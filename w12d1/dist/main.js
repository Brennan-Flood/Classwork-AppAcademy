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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nclass Asteroid {\n \n  constructor(options) {\n    this.color = '#4f4f4f';\n    this.radius = 25;\n    this.vel = Util.randomVec(1);\n    this.pos = options.pos;\n    this.game = options.game;\n  }\n}\nconsole.log(Util);\nUtil.inherits(Asteroid, MovingObject);\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\n class Game {\n  constructor () {\n\n    this.DIM_X = 1000;\n    this.DIM_Y = 600;\n    this.NUM_ASTEROIDS = 10;\n    this.asteroids = [];\n    this.addAsteroids();\n  };\n\n  addAsteroids() {\n    for (let i=0; i < this.NUM_ASTEROIDS; i++) {\n      let position = this.randomPosition();\n      this.asteroids.push(new Asteroid({pos: position, game: this}));\n    }\n  };\n\n  randomPosition() {\n    let x = Math.floor(Math.random(1001) * 1000);\n   let y = Math.floor(Math.random(601) * 600);\n   return [x, y];\n  };\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n\n    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n      this.asteroids[i].draw(ctx);\n    }\n  };\n\n  moveObjects() {\n    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n      this.asteroids[i].move();\n    }\n  };\n\n  wrap(pos) {\n    let wrappedPos = pos;\n    if (pos[0] > 1025) {\n      wrappedPos[0] = wrappedPos[0] - 1050;\n    }\n    if (pos[0] < -25) {\n      wrappedPos[0] = wrappedPos[0] + 1050;\n    }\n    if (pos[1] > 625) {\n      wrappedPos[1] = wrappedPos[1] - 650;\n    }\n    if (pos[1] < -25) {\n      wrappedPos[1] = wrappedPos[1] + 650;\n    }\n    return wrappedPos;\n  };\n  \n  checkCollisions() {\n    for (let i = 0; i < this.NUM_ASTEROIDS - 1; i++) {\n      for (let j = i + 1 ; j < this.NUM_ASTEROIDS; j++) {\n        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {\n          // alert(\"Collision!\");\n          this.asteroids[i].collideWith(this.asteroids[j]);\n          \n        }\n      }\n    }\n  };\n\n  step() {\n    this.checkCollisions();\n    this.moveObjects();\n  }\n\n  remove(asteroid) {\n    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n      if (asteroid.pos === this.asteroids[i].pos) {\n       this.asteroids.splice(i, 1);\n       let position = this.randomPosition();\n       this.asteroids.push(new Asteroid({ pos: position, game: this }));\n      }\n    }\n    \n  }\n  \n };\n\n module.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const Game = require(\"./game.js\");\n// const Ship = require(\"./ship.js\")\nclass GameView {\n  constructor(ctx, game) {\n    this.game = game;\n    this.ctx = ctx;\n  };\n\n  start() {\n    // setInterval(() => { console.log(\"interval!\")}, 100);\n    setInterval((ctx) => {\n      this.game.step();\n      this.game.draw(ctx);\n    }, 10, this.ctx);\n  };\n  \n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  window.MovingObject = MovingObject;\n  const canvas = document.getElementById('game-canvas');\n  console.log('DOM fully loaded and parsed');\n  const ctx = canvas.getContext('2d');\n  const game = new Game();\n  const gameView = new GameView(ctx, game);\n\n  gameView.start();\n  \n\n});\n \n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MovingObject {\n\n  constructor(params) {\n    this.pos = params.pos;\n    this.vel = params.vel;\n    this.radius = params.radius;\n    this.color = params.color;\n    this.game = params.game;\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n      this.pos[0],\n      this.pos[1],\n      this.radius,\n      0,\n      2 * Math.PI,\n      false\n    )\n    ctx.fill();\n  }\n\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.pos = this.game.wrap(this.pos);\n  }\n\n  isCollidedWith(otherObject) {\n    let xDistance = Math.abs(this.pos[0] - otherObject.pos[0]);\n    let yDistance = Math.abs(this.pos[1] - otherObject.pos[1]);\n    if (xDistance < 50 && yDistance < 50) {\n      return true;\n    }\n    return false;\n  }\n\n  collideWith(otherObject) {\n    this.game.remove(otherObject);\n    this.game.remove(this);\n  }\n}\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nconst Util = {\n  inherits(childClass, parentClass) {\n    // Surrogate.prototype = parentClass.prototype;\n    childClass.prototype.__proto__ = parentClass.prototype;\n    // childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });