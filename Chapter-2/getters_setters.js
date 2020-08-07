// creating person Object() object
var person = new Object();
// setting properties
person["living"] = true;
person["age"] = 33;
person["gender"] = "male";
person["getGender"] = function() {
  return person.gender;
};
// getting properties
console.log(
  person["living"],
  person["age"],
  person["gender"],
  person["getGender"]()
); // logs 'true 33 male male'
// updating properties, very similar to setting
person["living"] = false;
person["age"] = 99;
person["gender"] = "female";
person["getGender"] = function() {
  return "Gender = " + person.gender;
};
console.log(person); //logs {living : false , age : 99 , gender : "female" }

module.exports.living = person.living;
module.exports.age = person.age;
module.exports.gender = person.gender;
module.exports.getGender = person.getGender;
