// a method is a function found within an object

const car = {
  model: "Toyota v8",
  yom: 2020,
  start: (pin) => {
    if (pin == 1234) {
      console.log("Hello Driver!!");
      console.log("Car starting!!");
    } else {
      console.log("Please provide a correct key");
    }
  },
};

car.start(3545);
car.start(1234);

// start is a method/function belonging to the car object

console.log(7000);
console.log(typeof console);
// Global objects in javascript -- these are objects that have methods and properties available in every part of you javascript code.
// Other Global Objects
// - Math, console, Date, Number, Object, Array, String , Boolean ....

console.log(Object.keys(car)); // model, yom, start

// inheritance
/// When you create a string or an array, you automatically inherit properties and methods from their global counterpart objects

const numbers = [1, 2, 3, 4, 5];
numbers.unshift(99);
console.log(numbers);

const email = "alberteldohub.co.ke";
console.log(email.toUpperCase());

// vallidate an email

// does the email contain @ symbol???
// includes() is a String method - inherited from String global obj
if (email.includes("@")) {
  console.log("A valid email");
} else {
  console.log("Invalid Email");
}
//  write a function that validates emails