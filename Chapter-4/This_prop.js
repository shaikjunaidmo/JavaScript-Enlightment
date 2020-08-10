var square_dimensions = {
  lenght: 21,
  breadth: 33,
  getArea: function() {
    return this.lenght * this.breadth;
  }
};

var square = square_dimensions.getArea();
console.log(square); // logs 693 i.e,(21*33)

var circle_dimensions = {
  pi: 3.1428,
  getArea: function(radius) {
    this.radius = radius;
    return this.pi * radius * radius;
  }
};
var radius = 3;
var circle = circle_dimensions.getArea(3);
console.log(circle); //logs 28.2852
console.log(circle_dimensions.radius);

module.exports.circleArea = circle;
module.exports.squareArea = square;
module.exports.radius = circle_dimensions.radius;
