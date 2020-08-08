//function creation
function Student() {
  this.name = "John";
  this.gender = "M";
}

Student.prototype.age = 15; // we are creating a prototype property.

Student.prototype.sayHi = function() {
  return "Hi";
};
var studObj1 = new Student();
console.log(studObj1.age); // logs 15 (since it shared by all the instance of Student object)
var proto = Object.getPrototypeOf(studObj1); // returns Student's prototype object
console.log(proto.constructor); // returns Student function
console.log(Student.prototype); // object
console.log(studObj1.prototype); // undefined ( .prototype won't work with instances)
console.log(studObj1.__proto__); // object (__proto__ works with the instances)
console.log(typeof Student.prototype); // object
console.log(typeof studObj1.__proto__); // object
console.log(Student.prototype === studObj1.__proto__); // true

module.exports.parent = Student.prototype;
module.exports.child = studObj1.__proto__;
module.exports.func = studObj1.sayHi;
