var address = {
  hno: 76,
  city: "warnagal",
  state: "telangana"
};

function countprop(obj) {
  var count = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

module.exports = countprop(address);
