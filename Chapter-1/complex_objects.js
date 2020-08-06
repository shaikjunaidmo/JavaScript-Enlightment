var cmplx1 = {
  //complex object1
  name: "john",
  city: "Los Angeles",
  country: "USA"
};

var cmplx2 = cmplx1;
var cmplx3 = cmplx2;

cmplx1.name = null;

module.exports.cmplx1 = cmplx1.name;
module.exports.cmplx2 = cmplx2.name;
module.exports.cmplx3 = cmplx3.name;
