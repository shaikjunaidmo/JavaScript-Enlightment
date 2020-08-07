const encap = require("./encapsulating_objects");
const prop1 = encap.prop1;
const prop2 = encap.prop2;
const prop3 = encap.prop3;
const prop4 = encap.prop4;

test("results", () => {
  expect(prop1()).toBe("Hello");
  expect(prop2()).toBe("Hi");
  expect(prop3()).toBe("Ola");
  expect(prop4()).toBe("Hey");
});
