var myAddress = function(houseNo, streetName, cityName) {
  // First, check that the right number of arguments were passed
  if (arguments.length != 3) {
    return (
      "function myAddress called with " +
      arguments.length +
      "arguments, but it expects 3 arguments."
    );
  }
  return (
    "My Address is " + houseNo + " , " + streetName + " , " + cityName + "."
  );
};

var houseNo = "3-4-76";
var streetName = "Sudhanagar";
var cityName = "Warangal";
var result = myAddress(houseNo, streetName, cityName);

console.log(result); // logs My Address is 3-4-76 , Sudhanagar , Warangal.
console.log(myAddress.length); // logs 3
console.log(myAddress.constructor); // [Function: Function]

module.exports = myAddress.length;
