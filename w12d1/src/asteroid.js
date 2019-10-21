const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

class Asteroid {
 
  constructor(options) {
    this.color = '#4f4f4f';
    this.radius = 25;
    this.vel = Util.randomVec(1);
    this.pos = options.pos;
    this.game = options.game;
  }
}
console.log(Util);
Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;