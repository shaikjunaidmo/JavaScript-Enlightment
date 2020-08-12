const result = require("./string_methods");

describe("display the length", () => {
  it("it must return the correct length", () => {
    expect(result.getLength("hello")).toEqual(5);
  });
});

describe("display the index", () => {
  it("it must return the correct index", () => {
    expect(
      result.getIndex("Please locate where 'locate' occurs!", "locate")
    ).toEqual(7);
  });
});

describe("display the sliced string", () => {
  it("it must return the correct sliced string", () => {
    expect(result.slice("Please locate where 'locate' occurs!", 5, 7)).toEqual(
      "e "
    );
  });
});

describe("display the replaced string", () => {
  it("it must return the correct replaced string", () => {
    expect(
      result.replace("Please locate where 'locate' occurs!", "occurs", "junaid")
    ).toEqual("Please locate where 'locate' junaid!");
  });
});
