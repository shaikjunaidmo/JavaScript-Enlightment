const prop = require("./prototype_property");
const parent_type = typeof prop.parent;
const child_type = typeof prop.child;
const func = prop.func;

test("prototype property of both the object and instane are same", () => {
  expect(parent_type === child_type).toBe(true);
});

test("prototype is shared by both the object and instance of object", () => {
  expect(prop.func()).toBe("Hi");
});
