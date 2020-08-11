const values = require("./this_ref");
const inner = values.inner;
const outer = values.outer;
const innerObj = values.innerObj;
const outerObj = values.outerObj;

test("checks if the correct statement is being loged out or not", () => {
  expect(inner()).toBe(undefined);
});

test("checks if the correct statement is being loged out or not", () => {
  expect(outer()).toBe(undefined);
});
test("checks if the correct statement is being loged out or not", () => {
  expect(outerObj).not.toBe("Hi iam a function property. ");
});
test("checks if the correct statement is being loged out or not", () => {
  expect(innerObj).not.toBe("Hello iam also a func property.");
});
