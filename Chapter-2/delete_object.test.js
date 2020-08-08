const student = require("./delete_object");
const stud = student.stud;
const name = student.name;
const rollno = student.rollno;
const branch = student.branch;

//checking whether object contains the property or not with the help of "IN" operator

test("returnsr rollno as null ", () => {
  expect(rollno in stud).toBe(false);
});

test("return name as null  ", () => {
  expect(name in stud).toBe(false);
});

test("return branch as null ", () => {
  expect(branch in stud).toBe(false);
});
