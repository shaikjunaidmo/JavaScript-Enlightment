var myFunc = function() {};
myFunc.prototype = {}; // replacing the prototype property with empty object.

var myInstance = new myFunc();

var ourFunc = function() {};
myFunc.prototype.name = "xyz";

var ourInstance = new ourFunc();

//to avoid the reference wire back together a constructor property that references the constructor function
myFunc.prototype = { constructor: myFunc };

var notBroke = new myFunc();

module.exports.myFunc = myFunc;
module.exports.myInstance = myInstance;
module.exports.ourFunc = ourFunc;
module.exports.ourInstance = ourInstance;
module.exports.notBroke = notBroke;
