//function hoisting in the function expression.
var funcExpr = function(name, age) {
  this.name = name;
  this.age = age;
  return getAge(name, age);
  function getAge(name, age) {
    return name + "'s age is " + age;
  }
};
console.log(funcExpr("junaid", 23)); //logs junaid's age is 23.
//functin hoisting in the function statement.
console.log(funcStat("jack", 33)); //logs jack's age is 33.
function funcStat(name, age) {
  return name + "'s age is " + age;
}

module.exports.funcExpr = funcExpr("junaid", 23);
module.exports.funcStat = funcStat("jack", 33);
