const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name = []
  if (!Array.isArray(members)) {
    return false
  }
  for (let member of members) {
    if (typeof member === 'string') {
      let letter = member.trim().split('')
      name.push(letter[0].toUpperCase())
    }
  }
  return name.sort().join('')
};
