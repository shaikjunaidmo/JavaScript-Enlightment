var Vehicle = function(type, color, brand) {
  this.type = type;
  this.color = color;
  this.brand = brand;
  console.log(this.brand);
  this.getBrand = function() {
    return brand;
  };
};

var merc = new Vehicle("sedan", "blue", "mercedes");
var bmw = new Vehicle("saloon", "black", "BMW");

module.exports.getBrand = merc.getBrand;
module.exports.givenBrand = merc.brand;
