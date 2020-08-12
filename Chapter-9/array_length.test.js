const Func = require("./array_length");

describe("display the correct array", () => {
  it("it should return the updated array", () => {
    expect(Func()).toEqual([1, 2, 3, 4, undefined, "iam a string"]);
  });
});
