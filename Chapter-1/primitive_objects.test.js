const po = require("./primitive_objects.js");

test("returns brand", () => {
  expect(po.prStr1 === po.prStr2).toBe(po.test[0]);
  expect(po.prNum1 === po.prNum2).toBe(po.test[1]);
  expect(po.prBool1 === po.prBool2).toBe(po.test[2]);
});
