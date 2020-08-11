iamStringVar = "Hello";
var iamFunctionVar = function() {
  return "hello iam a function";
};
myString = "Hi";
myFunction = function() {
  return "hello iam the same function as above";
};
console.log(this);
console.log("iamStringVar" in global); // returns true
console.log("iamFunctionVar" in this); // return false
console.log("myString" in global); // returns true
console.log("myFunction" in this); // return false
