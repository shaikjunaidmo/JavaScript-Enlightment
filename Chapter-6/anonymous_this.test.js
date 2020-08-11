const result = require("./anonymous_this");

test("returns correct property", () => {
  expect(result).toBe("HI iam prop1");
});
