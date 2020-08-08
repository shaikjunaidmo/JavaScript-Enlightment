var bike = {
  gears: 5,
  brand: "RE",
  colour: "blue"
};

function checkItsOwnProp(prop1) {
  return bike.hasOwnProperty(prop1); //checks only its own property
}

function checkItsProtoProp(prop2) {
  return prop2 in bike; // checks also for any properties that object inherits via the prototype chain
}

console.log(checkItsOwnProp("gears")); // logs true
console.log(checkItsOwnProp("toString")); // logs false
console.log(checkItsProtoProp("gears")); // logs true
console.log(checkItsProtoProp("toString")); // logs true

module.exports.own = checkItsOwnProp;
module.exports.prot = checkItsProtoProp;
