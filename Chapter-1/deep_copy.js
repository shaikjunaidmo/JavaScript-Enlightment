//JSON creates a deep copy
const obj = { name: { first: "Junaid", last: "shaik" } };
const copy = JSON.parse(JSON.stringify(obj));
copy.name.first = "J";

console.log(obj.name.first); // logs 'Junaid'
console.log(copy.name.first); // logs 'J'.
