var globVar = "global variable";
function parent() {
  var locVar = "local variable";
  var child = function() {
    var otherLocVar = " my local variable";
    return "I can access " + globVar + ", " + locVar + " and " + otherLocVar;
  };
  return child();
}

module.exports = parent;
