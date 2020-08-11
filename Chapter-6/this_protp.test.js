const result = require("./this_proto");

describe("Print the right name", () => {
  it("this operator returns object property name", () => {
    expect(result.versionName()).toBe("apple");
  });
});
