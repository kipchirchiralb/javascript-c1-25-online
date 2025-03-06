/**
 *    - Arithmetic: `+`, `-`, `*`, `/`, `%`
   - Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
   - Logical: `&&`, `||`, `!`
   - Assignment: `=`, `+=`, `-=`, etc.
   - Practical: Write a program to check if a number is even or odd
 */

//    Arithmetic operators

console.log(54 * 2);
console.log(54 / 2);
console.log(54 + 2);
console.log(54 - 2);
console.log(54 % 2); // remainder after division of whole numbers operator -- 0
console.log(54 % 5); // 10 rem 4 --- 4 outupt --- if a num is even(rem 0 when divided by 2)

let age = 90;
// Comparison --- result a boolean(true or false)
console.log(54 == 154);
console.log(54 == "54"); // true
console.log(54 === "54"); // strict equality check -- compares data types -- false
console.log("**************");

console.log(20 >= 20); //true
console.log(20 >= 21); //false
console.log(20 >= 10); // true

// Logical Operators AND &&     OR ||   NOT !
console.log("Logical ops");

console.log(true && true); //true
console.log(20 > 10 && "good" == "good");

console.log(true && false); //false
console.log(20 < 10 && "good" == "good"); //false

console.log(true || false); //true --- as long as one is true, then the result is true
console.log(20 < 10 || "good" == "good"); //false

console.log(!true); // false
console.log(!(20 > 100)); // true
// negation/not operate

let score = 90; // assignment oprator
console.log(score); //90

score += 5; // score = score + 5
console.log(score); // 95

score *= 5; // score = score * 5
console.log(score); // 475

score++; // score = score + 1
console.log(score); //476
