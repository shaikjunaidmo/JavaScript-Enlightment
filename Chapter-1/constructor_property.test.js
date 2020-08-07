const con = require("./constructor_property.js");
const ref = con.ref;
const orig = con.orig;

test("both are same sine ref is referencing to orig", () => {
  expect(ref()).toBe(orig());
});
