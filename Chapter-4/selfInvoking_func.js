var self = (function(message) {
  return "hi" + message;
})(" junaid");

(function(message) {
  console.log(message);
})("Hi am anonymous function and iam invoked automcatically");

(function(message) {
  console.log(message);
})(
  "Hi am anonymous function with slight difference in syntax and iam invoked automcatically"
);

console.log(self);

module.exports = self;
