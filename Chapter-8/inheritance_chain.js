var Earth = function() {
  this.planet = "Earth";
};
Earth.prototype.name = "World";

var India = function() {
  this.country = "India";
};

India.prototype = new Earth();
India.prototype.state = "Telangana";

var Warangal = new India();

function getPlanet() {
  return Warangal.planet;
}

function getName() {
  return Warangal.name;
}

function getCountry() {
  return Warangal.country;
}

function getState() {
  return Warangal.state;
}

module.exports.getPlanet = getPlanet;
module.exports.getName = getName;
module.exports.getCountry = getCountry;
module.exports.getState = getState;
