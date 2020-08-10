var addNumbers_new = new Function("num1", "num2", "return num1 + num2");

var num1 = 10;
var num2 = 20;
console.log(addNumbers_new(num1, num2)); // logs 30

var addNumbers_literal = function(num1, num2) {
  return num1 + num2;
};

var num3 = 20;
var num4 = 20;
console.log(addNumbers_literal(num3, num4)); // logs 40

newResult = num1 + num2;
literalResult = num3 + num4;
module.exports.newResult = newResult;
module.exports.newFunc = addNumbers_new(num1, num2);
module.exports.literalResult = literalResult;
module.exports.literalFunc = addNumbers_literal(num3, num4);
