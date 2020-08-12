const inheritance = require("./inheritance_chain");
const getPlanet = inheritance.getPlanet;
const getName = inheritance.getName;
const getCountry = inheritance.getCountry;
const getState = inheritance.getState;

describe("display the correct planet name ", () => {
  it("it should return planet name", () => {
    expect(getPlanet()).toBe("Earth");
  });
});

describe("display the correct name  ", () => {
  it("it should return name", () => {
    expect(getName()).toBe("World");
  });
});

describe("display the correct country name", () => {
  it("it should return country name ", () => {
    expect(getCountry()).toBe("India");
  });
});

describe("display the correct state name", () => {
  it("it should return state name ", () => {
    expect(getState()).toBe("Telangana");
  });
});
