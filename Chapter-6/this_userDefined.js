var Person = function(name) {
  this.name = name || "junaid";
};

var jun = new Person("jun");
console.log(jun.name); //logs "jun"

var j = new Person();
console.log(j.name); //logs "junaid"
