// using a switch statement, code a marks grading system, case >70 A, case>55 B ,case > 45
// c, case>30 D , else E

// switch has different syntax when comparing exactness or using relative comparisons > <  >= <=

//exactness
// 0 sudnay -- 6 sat
const dayOfWeek = 3;

switch (dayOfWeek) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}

// relative comparison -- ranges
const mark = 96;

switch (true) {
  case mark > 70:
    console.log("A")
    break;
  case mark > 55:
    console.log("B")
    break;
  case mark > 45:
    console.log("C")
    break;
  case mark > 30:
    console.log("D")
    break;
  default:
    console.log("E")
}
