const func = require("./function_versions");
const newResult = func.newResult;
const newFunc = func.newFunc;
const literalResult = func.literalResult;
const literalFunc = func.literalFunc;

test("function new_func() Adds two numbers", () => {
  expect(newFunc).toBe(newResult);
});

test("function literal_func() Adds two numbers", () => {
  expect(literalFunc).toBe(literalResult);
});
