const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
   let string='';
   let strings = '';
     if(options['additionRepeatTimes']){
         for(let x = 1; x<=options['additionRepeatTimes'];x++){
             if(options['additionRepeatTimes'] !== x){
             string = string+ options['addition'] + options['additionSeparator']; 
             }else{
             string = string+ options['addition'];
             }
             }
     }
     if(options['repeatTimes']){
     for(let x = 1; x<=options['repeatTimes'];x++){
         if(options['repeatTimes'] !== x){
         strings = strings + str + string + options['separator'];
         }else{
         strings = strings + str + string;
         }
     }
 }
  return strings;
 //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};