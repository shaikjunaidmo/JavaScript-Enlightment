const result = require("./math_function");

describe("return the power", () => {
  it("it must return the correct powered number ", () => {
    expect(result.getPow(8, 2)).toEqual(64);
  });
});

describe("return the sqrt", () => {
  it("it must return the correct sqrt number ", () => {
    expect(result.getSqrt(64)).toEqual(8);
  });
});

describe("return the floor", () => {
  it("it must return the correct floor number ", () => {
    expect(result.floor(4.7)).toEqual(4);
  });
});

describe("return the ceil", () => {
  it("it must return the correct ceil number ", () => {
    expect(result.ceil(4.4)).toEqual(5);
  });
});
