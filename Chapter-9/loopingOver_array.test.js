const result = require("./loopingOver_array");

describe("copy and original are same ", () => {
  it("it must return same as original one", () => {
    expect(result.array).toEqual(result.copy);
  });
});

describe("sorting of the array", () => {
  it("it must return sorted array", () => {
    expect(result.sort(result.num)).toEqual([-1, 2, 20, 4, 44, 67, 99]);
  });
});

describe("reverese of the array", () => {
  it("it must return reversed array", () => {
    expect(result.reverse(result.array2)).toEqual([
      "red",
      "orange",
      "green",
      "blue"
    ]);
  });
});
