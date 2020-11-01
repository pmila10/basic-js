const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.counter = 1
    this.depth = 1
  }
  calculateDepth(arr) {
    let counter  = 1
    let depth = 1
    for (let a of arr) {
      if (Array.isArray(a)) {
        counter = this.calculateDepth(a) + 1
      }
    }
    if (counter > depth) {
      return depth = counter
    }
    return depth
  }
};