const bike = {
  brand: "TVS",
  model: "Apache rtr 180",
  cc: 180,
  kenyanRegistered: true,
  availableColors: ["red", "white", "black"],
  lastService: {
    date: "02/02/2025",
    "my mech": "Jane Doe",
    oilChange: false,
  },
};

// accessing data in an object - dot notation or brackect notation

// know last service dat
console.log(bike.lastService.date);
// if in the last service there an oil change
console.log(bike.lastService.oilChange); // false
// cc of the bike
console.log(bike.cc); //180
// last available color - black
console.log(bike.availableColors[2]); // black
// JSON -- Javascript Object Notation
console.log(bike["lastService"]["my mech"]); 
