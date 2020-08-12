const result = require("./number_methods");

describe("displays the exponential number", () => {
  it("it must return exponential number", () => {
    expect(result.getExponential(9.656, 2)).toEqual("9.66e+0");
  });
});
