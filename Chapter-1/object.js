var person = new Object();
person.height = 6;
person.gender = "Male";
person.colour = "fair";
person.origin = "India";
person.getGender = function() {
  return person.gender;
};
person.getColour = function() {
  return person.colour;
};
person.getOrigin = function() {
  return person.origin;
};
module.exports.gender = person.getGender;
module.exports.colour = person.getColour;
module.exports.origin = person.getOrigin;
