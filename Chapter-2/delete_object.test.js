const student = require("./delete_object");
const stud = student.stud;
const name = student.name;
const rollno = student.rollno;
const branch = student.branch;

test("returnsr rollno as null ", () => {
  expect(rollno in stud).toBe(false);
});

test("return name as null  ", () => {
  expect(name in stud).toBe(false);
});

test("return branch as null ", () => {
  expect(branch in stud).toBe(false);
});
