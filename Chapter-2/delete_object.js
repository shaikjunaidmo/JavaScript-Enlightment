//creating a object
var student = {
  name: "junaid",
  rollno: 53,
  branch: "CSE"
};

console.log(student); //logs {student : 'junaid', rollno : 53, branch : 'CSE'}

delete student.rollno; // deleting the rollno property from student object
delete student.name; // deleting the name property from student object
delete student.branch; // deleting the branch property from student object

module.exports.stud = student;
module.exports.rollno = student.rollno;
module.exports.name = student.name;
module.exports.branch = student.branch;
