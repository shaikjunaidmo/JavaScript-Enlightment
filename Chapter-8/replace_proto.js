var replace = function() {};
replace.prototype.name = "original one";

var instance_1 = new replace();
console.log(instance_1.name); // logs "original one"

replace.prototype = { name: "replaced one" };
var instance_2 = new replace();
console.log(instance_2.name); // logs "replaced one"

console.log(instance_1.name); // logs "original one"
