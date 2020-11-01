const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let cats = 0;
  let result = [].concat(...arr)
  if (arr.length === 0) {
    return []
  }
  else {
    for (let i = 0; i <= result.length; i++) {
      if (result[i] === '^^') {
        cats += 1
      }
    }
    return cats
  }
};
