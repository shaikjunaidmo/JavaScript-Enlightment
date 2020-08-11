var iamVar = " Hi iam a string";
var iamOtherVar = " Hi iam another string.";
var iamObj = {
  iamVar: "Hi iam a function property. ",
  iamOtherVar: "Hello iam also a func property."
};

function iamFunc() {
  console.log(this["iamVar"]);
  //return this["iamVar"];
  function iamInnerFunc() {
    console.log(this["iamOtherVar"]);
    //return this["iamOtherVar"];
  }
  iamFunc.iamInnerFunc = iamInnerFunc;
}

iamFunc(); // logs "Hi iam a string".
iamFunc.iamInnerFunc(); // logs undefined as it loses its way.
iamObj.iamFunc = iamFunc; // assigning the iamFunc as a property to iamObj.
var outerObj = iamObj.iamFunc(); // logs "Hi iam a function property."
iamObj.iamInnerFunc = iamFunc.iamInnerFunc; // assigning the iamInnerFunc as a property to iamObj.
var innerObj = iamObj.iamInnerFunc(); // logs "Hello iam also a func property"

module.exports.outer = iamFunc;
module.exports.inner = iamFunc.iamInnerFunc;
module.exports.outerObj = outerObj;
module.exports.innerObj = innerObj;
