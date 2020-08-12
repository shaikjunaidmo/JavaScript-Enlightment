var myArray = ["my", "name", "is", "array"];
console.log(myArray.length);

myArray.length = 1; // assigning the length of the array.
console.log(myArray[0]); //logs "my"

myArray.length = 100; // reassigning the length of the array.
myArray[99] = "hello";
console.log(myArray[1]); //logs undefined

var myFunc = function() {
  var array = [1, 2, 3, 4];
  array.length = 5;
  array[5] = "iam a string";
  return array;
};

module.exports = myFunc;
