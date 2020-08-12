var parent = function() {
  var count = 0;
  return function() {
    // inner_1 anonymous function.
    count += 1;
    return function() {
      // inner_2 anonymous function.
      return (count += 1);
    };
  };
};

var call = parent();
var call_2 = call();
call();
call_2();
call_2();

module.exports = call;
