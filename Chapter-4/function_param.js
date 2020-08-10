x = findMin(1, -120, 500, 11, 4, 25);
// function to identify the min number.
function findMin() {
  var min = Infinity;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
}
console.log(findMin(1, -120, 500, 11, 4, 25)); // logs the min number from the params.
module.exports = findMin(findMin(1, -120, 500, 11, 4, 25));
