const sum = require("./callee_recursion");

test("returns sum of the fibonacci series", () => {
  expect(sum).toBe(13);
});
