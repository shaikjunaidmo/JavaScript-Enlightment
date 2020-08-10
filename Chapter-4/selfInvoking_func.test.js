const self = require("./selfInvoking_func");

test("this is returns correct statement", () => {
  expect(self).toBe("hi junaid");
});
