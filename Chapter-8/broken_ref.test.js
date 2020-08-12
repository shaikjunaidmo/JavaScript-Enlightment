const broken = require("./broken_ref");
const myFunc = broken.myFunc;
const myInstance = broken.myInstance;
const ourFunc = broken.ourFunc;
const ourInstance = broken.ourInstance;
const notBroke = broken.notBroke;

describe("display the correct one", () => {
  it("it should return false", () => {
    expect(myInstance.constructor === myFunc).toBe(false);
  });
});

describe("display the correct one", () => {
  it("it should return true", () => {
    expect(ourInstance.constructor === ourFunc).toBe(true);
  });
});

describe("display the correct one", () => {
  it("it should return true", () => {
    expect(notBroke.constructor === myFunc).toBe(true);
  });
});
