Object.prototype.prop1 = "Hi iam property one";
var Phone = function() {};
Phone.prototype.name = "apple";
Phone.prototype.version = "11 pro";
var iphone = new Phone();
console.log(iphone.name); // logs apple
console.log(iphone.version); //  logs 11 pro
console.log(iphone.prop1); // logs "Hi iam property one"
