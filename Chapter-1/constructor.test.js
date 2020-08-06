const mode = require("./constructor.js");
const getBrand = mode.getBrand;
const givenBrand = mode.givenBrand;
test("returns brand", () => {
  expect(getBrand()).toBe(givenBrand);
});
