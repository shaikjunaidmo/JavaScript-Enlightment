function getLength(txt) {
  return txt.length;
}

function getIndex(txt, pattern) {
  return txt.indexOf(pattern);
}

function slice(txt, start, end) {
  return txt.slice(start, end);
}
function replace(txt, present, replaced) {
  return txt.replace(present, replaced);
}

module.exports.getLength = getLength;
module.exports.getIndex = getIndex;
module.exports.slice = slice;
module.exports.replace = replace;
