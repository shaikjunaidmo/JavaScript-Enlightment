const chain = require("./prototype_chain");
const prot = chain.prot;
const own = chain.own;

test("gears is its own prop", () => {
  expect(own("gears")).toBe(true);
});

test("toString is not its own prop", () => {
  expect(own("toString")).toBe(false);
});

test("gears is its own prop", () => {
  expect(prot("gears")).toBe(true);
});

test("toString is inherited by prototype chain", () => {
  expect(prot("toString")).toBe(true);
});
