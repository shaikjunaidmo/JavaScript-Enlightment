var Computer = function(brand, processor, ram) {
  if (brand != undefined) {
    this.brand = brand;
  }
  if (processor != undefined) {
    this.processor = processor;
  }
  if (ram != undefined) {
    this.ram = ram;
  }
};
Computer.prototype.brand = "Mac";
Computer.prototype.processor = "i7";
Computer.prototype.ram = "8GB";
var dell = new Computer("DELL-inspiron", "i7", "16GB");

function getBrand() {
  return dell.brand;
}
function getProcessor() {
  return dell.processor;
}
function getRam() {
  return dell.ram;
}

module.exports.getBrand = getBrand;
module.exports.getProcessor = getProcessor;
module.exports.getRam = getRam;
