const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //let Activity = parseInt(sampleActivity);
  if( sampleActivity>15 || sampleActivity<=0 || !sampleActivity || typeof sampleActivity !== "string" || isNaN(sampleActivity)!=false){
    
    return false
  }
  else{
    let a = Math.log(MODERN_ACTIVITY/sampleActivity);
    let k = 0.693 / HALF_LIFE_PERIOD;
    let res = Math.ceil(a/k);
    return res;
  }
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
