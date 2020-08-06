const complex = require("./complex_objects");
var complex1 = complex.cmplx1;
var complex2 = complex.cmplx2;
var complex3 = complex.cmplx3;

test("returns same as origin object", () => {
  expect(complex2).toBe(complex1);
  expect(complex3).toBe(complex1);
});
