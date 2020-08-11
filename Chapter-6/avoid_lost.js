var obj = {
  propName: "junaid",
  outerFunc: function() {
    var that = this;
    var innerFunc = function() {
      return that.propName; //logs "junaid" , this was not lost
    };
    return innerFunc();
  }
};
//console.log(obj.outerFunc());

module.exports = obj.outerFunc();
