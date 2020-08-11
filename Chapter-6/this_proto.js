var Phone = function(brandName) {
  if (brandName) {
    return (this.brandName = brandName);
  }
};

Phone.prototype.versionName = function() {
  return this.brandName;
};

var iphone = new Phone("apple");
var sam = new Phone("samsung");

Object.prototype.brandName = "android";
var nokia = new Phone();

console.log(iphone.brandName);

module.exports = iphone;
