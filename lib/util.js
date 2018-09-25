const Util = {
  inherits: function(childClass, parentClass) {
    childClass.prototype = Object.create(parentClass.prototype);
    childClass.prototype.constructor = childClass;
  },
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    debugger;
    return new Vector(Math.sin(deg), Math.cos(deg)).times(length);
  }
};

module.exports = Util;
