const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  if(!Array.isArray(members)){
    return false;
  }
  else {
    members.forEach(element => {
      if(typeof element === "string"){
        let str = element.trim();
        let s = str.charAt(0).toUpperCase();
        arr.push(s[0]);
      }
    });
    return arr.sort().join("");
  }
  //throw new CustomError('Not implemented');
};
