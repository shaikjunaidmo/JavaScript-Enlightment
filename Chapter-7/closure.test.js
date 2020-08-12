const call = require("./closure");
const callOne = call();

describe("Display the counter", () => {
  it("should return the correct counter number", () => {
    expect(callOne()).toBe(6);
  });
});

describe("Display the counter", () => {
  it("should return the correct counter number", () => {
    expect(callOne()).toBe(7);
  });
});
