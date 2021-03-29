const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let object = new Object();
  let turns = Math.pow(2,disksNumber)-1;
  let speeds = Math.floor(turns/(turnsSpeed/3600));
  
  object.turns = turns;
  object.seconds = speeds;

  return object;

  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};