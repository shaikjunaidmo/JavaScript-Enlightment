var toTrue = new Boolean(false); // creating a boolean object
console.log(toTrue);
if (toTrue) {
  console.log("toTrue is truthy");
}

console.log(Boolean(0)); //logs false
console.log(Boolean(-0)); //logs false
console.log(Boolean(null)); //logs false
console.log(Boolean(false)); //logs false
console.log(Boolean("")); //logs false
console.log(Boolean(undefined)); //logs false
console.log(Boolean(null)); //logs false

console.log(Boolean(1789)); //logs 'true'
console.log(Boolean("false")); // 'false' as a string is not false the boolean value
console.log(Boolean(Math)); //logs 'true'
console.log(Boolean(Array())); //logs 'true'
