// Function --  a function is a resuable block of code

// Functional programming --  put code in functions/small blocks of code -- modulariity

// two ways of writing/declaring js functions

// 1. regular functions - function keyword

function doSomething() {
  // block of code to be reused
  console.log("Function running");
  console.log("lock of code to be reused ");
}

// 2. arrow functions  - => es6/modern js

const doSmth = () => {
  // block of code to be reused
  console.log("Function running");
  console.log("lock of code to be reused ");
};

// Call/invoke the function
doSmth();
doSmth();
doSmth();
doSomething();
doSomething();

function calculateAreaOfCircle(radius) {
  console.log("Radius : " + radius);

  console.log("Area is: " + radius * radius * Math.PI);
  console.log("****************");
}
calculateAreaOfCircle(27);
calculateAreaOfCircle(7);
calculateAreaOfCircle(42);
