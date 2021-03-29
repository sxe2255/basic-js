const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date)  {
  if(!date){
    return 'Unable to determine the time of year!';
  }

  let month = Date.prototype.getMonth.call(date);
  month+=1;
  if(month === 1||month === 2||month === 12){return 'winter'}
  else if(month === 3||month === 4||month === 5){return 'spring'}
  else if(month === 6||month === 7||month === 8){return 'summer'}
  else if(month === 9||month === 10||month === 11){return 'autumn'}
 

  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};