const MovingObject = require("./moving_object.js");

const Util = {
  inherits(childClass, parentClass) {
    // Surrogate.prototype = parentClass.prototype;
    childClass.prototype.__proto__ = parentClass.prototype;
    // childClass.prototype.constructor = childClass;
  },

  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },

  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};
module.exports = Util;
