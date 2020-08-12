var parentLoc = "iam a global variable ";
function Parent(passedFunction) {
  var parentLoc = "iam a local variable in the parent function";
  return passedFunction;
}

var passedFunc = Parent(function() {
  return parentLoc;
});
//console.log(passedFunc());

module.exports = passedFunc;
