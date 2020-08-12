function getExponential(x, exp) {
  return x.toExponential(exp);
}

function getPrecision(x, pre) {
  return x.getPrecision(pre);
}
module.exports.getExponential = getExponential;
module.exports.getPrecision = getPrecision;
