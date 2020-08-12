var globalVar = "iam a global string";
var Parent = function() {
  var localVar = "iam a local string";
  (function child() {
    var innerLocVar = "iam a inner local string";
    console.log(
      "global variable : " +
        globalVar +
        " local variable : " +
        localVar +
        " innerLocVar : " +
        innerLocVar
    );
  })();
  return "global variable : " + globalVar + ", local variable : " + localVar;
};

eval("var evalVar = `iam eval variable` ;console.log(evalVar)");

console.log(Parent());
