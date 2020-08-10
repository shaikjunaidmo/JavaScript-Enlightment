var fibonacciSum = function(x) {
  if (x < 2) return 1;
  else return arguments.callee(x - 1) + arguments.callee(x - 2);
};
var y = fibonacciSum(6);
console.log(y);

module.exports = y;
