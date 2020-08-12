const passedFunc = require("./callBack_scope");

describe("Display the statement", () => {
  it("should return iam a global variable", () => {
    expect(passedFunc()).toBe("iam a global variable ");
  });
});
