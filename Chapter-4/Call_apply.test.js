const lang = require("./Call_apply");
const java = lang.java;
const javascript = lang.javascript;

test("returns the correct statement about java", () => {
  expect(java).toBe("java is a Object Oriented programming language. ");
});

test("returns the correct statement about javascript", () => {
  expect(javascript).toBe(
    "javascript is a Object Based programming language. "
  );
});
