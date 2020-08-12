const userDefined = require("./userDefined_proto");
const getBrand = userDefined.getBrand;
const getProcessor = userDefined.getProcessor;
const getRam = userDefined.getRam;

describe("display the correct brand name ", () => {
  it("it should return brand name", () => {
    expect(getBrand()).toBe("DELL-inspiron");
  });
});

describe("display the correct processor  ", () => {
  it("it should return processor", () => {
    expect(getProcessor()).toBe("i7");
  });
});

describe("display the correct ram", () => {
  it("it should return ram ", () => {
    expect(getRam()).toBe("16GB");
  });
});
