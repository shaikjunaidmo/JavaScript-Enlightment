var myArray = ["blue", "green", "orange", "red"];
var myCopy = [];

for (var i = 0; i < myArray.length; i++) {
  myCopy.push(myArray[i]);
}

var num = [99, 20, 44, -1, 2, 4, 67];

function sort(num) {
  num.sort();
  return num;
}
var myArray_2 = ["blue", "green", "orange", "red"];
function reverse(array) {
  array.reverse();
  return array;
}

module.exports.sort = sort;
module.exports.array = myArray;
module.exports.array2 = myArray_2;
module.exports.copy = myCopy;
module.exports.num = num;
module.exports.reverse = reverse;
