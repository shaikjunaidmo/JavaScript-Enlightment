let innerObj = {
  a: "b",
  c: "d"
};
let obj = {
  x: "test",
  y: innerObj
};
// Create a shallow copy.
let copyObj = Object.assign({}, obj);
// Both copyObj and obj's prop y now refers to the same innerObj. Any changes to this will be reflected.
innerObj.a = "test";
copyObj.x = "notest";
console.log(obj); //logs { x: 'test', y: { a: 'test', c: 'd' } }
console.log(copyObj); //logs { x: 'notest', y: { a: 'test', c: 'd' } }
