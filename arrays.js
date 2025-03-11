// An array is a list of data that could be of different data types. In most cases an array carries data of the same data type

const scores = [23, 43, 66, 90, 32, 43, 43, 89483, 434343, 4343, 43, 434, 4354];

const colors = [["red", "green", "blue"], "yellow", "brown"];

// Arrays are zero-indexed - first element being of index 0

// Accessing data in an array using its index
// first score
console.log(scores[0]); // 23
console.log(scores[7]);
console.log(colors[1]);
console.log(colors[0][1]); // green

for (let index = 0; index < scores.length; index++) {
  console.log("Element at index " + index + " is " + scores[index]);
}
