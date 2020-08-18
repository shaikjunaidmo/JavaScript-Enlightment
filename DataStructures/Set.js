var mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(3);
console.log(mySet.size);

mySet.forEach((keys, something, mySet) => {
  console.log(keys);
});

mySet.delete(3);
mySet.forEach((keys, something, mySet) => {
  console.log(keys);
});
