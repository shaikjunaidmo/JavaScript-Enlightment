var myObj1 = {
  prop1: "HI iam prop1",
  myFunc: function(passedFunc) {
    passedFunc();
    return this.prop1; // logs myObj1{prop1: "HI iam prop1", myFunc: ƒ}
  }
};

var result = myObj1.myFunc(function() {
  //console.log(this); //logs head object.
});

module.exports = result;
