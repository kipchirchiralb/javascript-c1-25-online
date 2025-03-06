// We can store/manipulate/use different types of data in js programs
//These include:- number, string, boolean, null, undefined, object, array
let age = 30 // number
let rate = 3.25 // number
let email = 'alber@324342$.com' // string "" ''
// boolean - true or flase
let isKenyan = true
let isLoggedIn = false
// null - intentional absence of a value
let score = null
// udefined -- you have assigned a value to a variable
let username 
console.log( username );
console.log(age);
// object -- properties and methods of related data
let user = {
    name: "kevin",
    age: 40,
    gender: "male",
    siblings: ["jane", "vincent"],
    borrowBook: ()=>{
        console.log("Borrowing a book");
        
    }
}
console.log(user);
user.borrowBook()
// arrays -- list of data []
const colors = ["red","green","yellow"]
const data = ["3434", 35.43, true, "again", null ]
// json 
// kipchirchialb -- j c125 online