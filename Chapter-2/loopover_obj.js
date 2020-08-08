//creating an object address
var address = {
  hno: 76,
  city: "warnagal",
  state: "telangana"
};
//creating a function that counts the number of properties in the object.
function countprop(obj) {
  var count = 0;
  for (var key in obj) {
    // checking whether the property is in the obj or not.
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count; //returing the count.
}

module.exports = countprop(address);
