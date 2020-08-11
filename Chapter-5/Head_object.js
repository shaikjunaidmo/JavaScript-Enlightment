//scope of the global variables
var globalVar = "global";

(function outer(globalVar) {
  var localVar = "local";
  console.log("Hi Iam  " + globalVar + " variable."); //logs "Hi Iam  global variable."
  return inner(localVar);
  function inner(localVar) {
    console.log("Hi Iam  " + localVar + " variable."); //logs "Hi Iam  local variable."
  }
})("global");
