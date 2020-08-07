const person = require("./getters_setters");
const living = person.living;
const age = person.age;
const gender = person.gender;
const getGender = person.getGender;

test("return correct bool for living ", () => {
  expect(living).not.toBe(true);
});

test("return correct number for age ", () => {
  expect(age).not.toBe(33);
});

test("return correct string for gender ", () => {
  expect(gender).not.toBe("male");
});

test("return correct value for getGender ", () => {
  expect(getGender()).not.toBe("male");
});
