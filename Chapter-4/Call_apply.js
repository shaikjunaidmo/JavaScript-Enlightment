var stat = {
  runStat: function() {
    console.log(this.name + " is a Object " + this.comesUnder + arguments[0]);
    return this.name + " is a Object " + this.comesUnder + arguments[0];
  }
};

var javascript = {
  name: "javascript",
  comesUnder: "Based"
};

var java = {
  name: "java",
  comesUnder: "Oriented"
};
stat.runStat.call(javascript, " programming language. ");
stat.runStat.call(java, " programming language. ");

module.exports.java = stat.runStat.call(java, " programming language. ");
module.exports.javascript = stat.runStat.call(
  javascript,
  " programming language. "
);
