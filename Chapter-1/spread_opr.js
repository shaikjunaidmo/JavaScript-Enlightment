// normal array concat() method
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

arr1 = arr1.concat(arr2);

console.log(arr1); // [ 1, 2, 3, 4, 5 ]

// spread operator doing the concat job
let arr3 = [1, 2, 3];
let arr4 = [4, 5];

arr3 = [...arr3, ...arr4];
console.log(arr3); // [ 1, 2, 3, 4, 5 ]

let arr5 = ["a", "b", "c"];
let arr6 = [...arr5];

console.log(arr5); // [ 'a', 'b', 'c' ]

arr6.push("d"); //inserting an element at the end of arr2

console.log(arr6); // [ 'a', 'b', 'c', 'd' ]
console.log(arr5); // [ 'a', 'b', 'c' ]

//merging using spread operator

const user1 = {
  name: "zoya",
  age: 22
};

const user2 = {
  name: "ayesha",
  location: "London"
};

const mergedUsers = { ...user1, ...user2 };
console.log(mergedUsers); // logs { name: 'ayesha', age: 22, location: 'London' }
console.log(user1); // logs { name: 'zoya', age: 22 }
console.log(user2); // logs{ name: 'ayesha', location: 'London' }
