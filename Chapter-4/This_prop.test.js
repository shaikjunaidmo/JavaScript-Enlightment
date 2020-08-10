const areas = require("./This_prop");
const circleArea = areas.circleArea;
const squareArea = areas.squareArea;
const radius = areas.radius;

test("returns the area of the circle", () => {
  expect(circleArea).toBe(28.2852);
});

test("returns the area of the square", () => {
  expect(squareArea).toBe(693);
});

test("returns the radius of the circle", () => {
  expect(radius).toBe(3);
});
