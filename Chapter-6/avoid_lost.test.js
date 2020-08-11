const result = require("./avoid_lost");

test("should return junaid", () => {
  const expected = "junaid";
  const received = result;
  expect(received).toBe(expected);
});
