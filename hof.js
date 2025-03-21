//  Higher order functions in js are functions that take other functions as argument and/or return a function.

function helloOne() {
  console.log("First greeting");
}

function helloTwo(name, talk) {
  console.log("Second greeting");
  console.log("greeting " + name);
  talk();
}

helloTwo("albert", function talk() {
  console.log("ABCDEFGHIJKLMNOPQR");
});

// blocking

const strArray = ["albert", "john", "vincent", "ancel", "lydia", "angel"];
strArray.unshift("herman");
console.log(strArray);

strArray.forEach(function greet(person) {
  console.log("HEllo " + person);
});
const res = strArray.filter((username) => username.startsWith("a"));
console.log(res);
// filter and forEach are examples of higher order functions in js
// sort, 
// forEach implementation in js
// implicit returns in arrow functions
