// conditional statements allow execution of a block {} of code depending on some state/dat/value/result of an operation
// if statement , switch statement

let score = 9;

if (score > 7) {
  console.log("Good work");
  let percentage = (score / 10) * 100;
  console.log("You have scored: " + percentage + "%");
} else if (score > 4) {
  console.log("Average score");
  let percentage = (score / 10) * 100;
  console.log("You have scored: " + percentage + "%");
} else {
  console.log("Poor score");
  let percentage = (score / 10) * 100;
  console.log("You have scored: " + percentage + "%");
}
// grading system -- A B C D ,,,, red , medium, green

// using a switch statement, code a grading system, case >70 A, case>50 B , case >30 D , else E

//   ()   {}  []  |  ` " " ' ~ ! @ # $ % ^ & * ? > <
