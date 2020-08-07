var some_constructor = function some_constructor() {
  return "origin_constructor";
};
var instanceOf_some_constructor = new some_constructor();

module.exports.ref = instanceOf_some_constructor.constructor;
module.exports.orig = some_constructor;
