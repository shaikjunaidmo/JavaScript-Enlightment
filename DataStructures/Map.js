var myMap = new Map();
myMap.set("name", "junaid");
myMap.set("age", 22);
console.log(myMap);
console.log(myMap.get("name"));

var myMap_1 = new Map([
  ["JS", "Javascript"],
  ["Sk", "Shaik junaid"]
]);
for (let itr of myMap_1.keys()) {
  console.log(itr);
}
for (let itr of myMap_1.values()) {
  console.log(itr);
}

myMap.forEach((key, value, myMap) => {
  console.log(key + " : " + value);
});

let obj = {
  prop1: "hi iam property one",
  prop2: "hi iam property two"
};

var objMap = new Map(Object.entries(obj));
objMap.forEach((key, value, objMap) => {
  console.log(key + " : " + value);
});

console.log(objMap.has("prop1"));
