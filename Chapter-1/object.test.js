const gets = require("./object");
const gender = gets.gender;
const origin = gets.origin;
const colour = gets.colour;

test("returns male", () => {
  expect(gender()).toBe("Male");
  expect(origin()).toBe("India");
  expect(colour()).toBe("fair");
});
