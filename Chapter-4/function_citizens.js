var funcReg = function() {
  return "this is a function ";
};

var funcArray = [
  function() {
    return "this is array enclosed function";
  },
  "javascript"
];
console.log(funcArray[0]); // logs "this is array enclosed function"
console.log(funcArray[1]); // logs "javascript"

var funcObject = {
  method_1: "Hi",
  method_0: function() {
    return "this is object enclosed function";
  }
};

console.log(funcObject.method_1); //logs 'Hi'
console.log(funcObject.method_0()); // logs "this is object enclosed function"

// functions can be sent to, and sent back from, functions
var toFro = function(func) {
  return func;
};

var funcPass = toFro(function() {
  console.log("WOw");
});

console.log(funcPass()); //undefined

// functions are objects, which means they can have properties
var funcAreObjects = function() {};
funcAreObjects.prop = "True"; // instance property
console.log(funcAreObjects.prop); // logs "True"

module.exports = funcAreObjects.prop;
