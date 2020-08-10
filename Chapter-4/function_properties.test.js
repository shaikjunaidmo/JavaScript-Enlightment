const lengthParams = require("./function_properties");

test("returns the correct number of params in the function", () => {
  expect(lengthParams).toBe(3);
});
