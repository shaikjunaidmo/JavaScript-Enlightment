var Update = function() {};
Update.prototype.name = "updated once";

var instance_1 = new Update();
console.log(instance_1.name); // logs "updated once"

Update.prototype.name = "updates twice"; // gets updated for all the instances
var instance_2 = new Update();
console.log(instance_1.name); // logs "updated twice"
console.log(instance_2.name); // logs "updated twice"
