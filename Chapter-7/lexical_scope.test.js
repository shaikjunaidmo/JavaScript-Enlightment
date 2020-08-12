const parent = require("./lexical_scoping");

describe("Display the correct statement", () => {
  it("it should return the statement saying the it can access all variables", () => {
    expect(parent()).toBe(
      "I can access global variable, local variable and  my local variable"
    );
  });
});
