const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach((elem)=>{
    elem.forEach((element)=>{
      if(element =="^^"){count++}
    })
  })
  return count;

  //throw new CustomError('Not implemented');
};
