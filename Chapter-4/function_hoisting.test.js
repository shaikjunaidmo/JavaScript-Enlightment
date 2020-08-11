const results = require("./function_hoisting");
const funcExpr = results.funcExpr;
const funcStat = results.funcStat;

test("checks if it is returning the correct statement or not", () => {
  expect(funcExpr).toBe("junaid's age is 23");
});

test("checks if it is returning the correct statement or not", () => {
  expect(funcStat).toBe("jack's age is 33");
});
