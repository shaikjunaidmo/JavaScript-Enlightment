Array.prototype.name = "junaid";
var myArray = new Array();

console.log(myArray.__proto__.name); // logs 'junaid'.
console.log(myArray.name); // logs 'junaid'.
console.log(myArray.constructor); // logs [Function: Array]

var Person = function() {};
Person.prototype.name = "shaik";
var junaid = new Person();
console.log(junaid.name); //logs "shaik"
console.log(junaid.__proto__); // logs Person { name: 'shaik' }
console.log(junaid.constructor); // logs [Function: Person]
