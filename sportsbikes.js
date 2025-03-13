const sportsBikesShop = [
  {
    category: "SuperSport",
    bikes: [
      {
        id: "SS001",
        brand: "Yamaha",
        model: "YZF-R1",
        year: 2023,
        price: 17999.99,
        specifications: {
          engine: {
            type: "998cc liquid-cooled inline 4-cylinder",
            horsepower: 200,
            torque: "112 Nm",
          },
          weight: {
            dry: "448 lbs",
            wet: "456 lbs",
          },
          suspension: {
            front: "43mm KYB inverted fork",
            rear: "KYB single shock",
          },
        },
        inventory: {
          available: true,
          stock: 15,
          colors: [
            {
              name: "Raven Black",
              code: "#1C2526",
              quantity: 8,
            },
            {
              name: "Team Yamaha Blue",
              code: "#003087",
              quantity: 7,
            },
          ],
        },
        reviews: [
          {
            customerId: "CUST001",
            rating: 4.8,
            comment: "Incredible performance on the track!",
            date: "2024-12-15",
          },
          {
            customerId: "CUST002",
            rating: 4.5,
            comment: "Great bike but pricey maintenance",
            date: "2025-01-20",
          },
        ],
      },
      {
        id: "SS002",
        brand: "Ducati",
        model: "Panigale V4",
        year: 2024,
        price: 23995.0,
        specifications: {
          engine: {
            type: "1103cc Desmosedici Stradale V4",
            horsepower: 214,
            torque: "124 Nm",
          },
          weight: {
            dry: "386 lbs",
            wet: "436 lbs",
          },
          suspension: {
            front: "Öhlins NIX30 43mm fork",
            rear: "Öhlins TTX36 shock",
          },
        },
        inventory: {
          available: true,
          stock: 10,
          colors: [
            {
              name: "Ducati Red",
              code: "#C40000",
              quantity: 6,
            },
            {
              name: "Stealth Black",
              code: "#2D2D2D",
              quantity: 4,
            },
          ],
        },
        reviews: [
          {
            customerId: "CUST003",
            rating: 4.9,
            comment: "A masterpiece of engineering",
            date: "2025-02-10",
          },
        ],
      },
    ],
  },
 
];
// console.log(sportsBikesShop[2]); // sepersports data
console.log(sportsBikesShop[0].bikes[0].specifications.engine.type); // all the info/object on yamaha r1 -



// people[3].ascools[1]  





/**
 Using dot notation(objects) and indexes(arrays) solve these
1. **Engine Type Retrieval**  
   What is the engine type of the Yamaha YZF-R1?  
   _(Hint: Access the first category, first bike, and its specifications.engine.type)_

2. **Color Code Lookup**  
   What is the hex code for the "Ducati Red" color variant of the Panigale V4?  
   _(Hint: Navigate to the SuperSport category, find the Panigale V4, and access its inventory.colors)_

3. **Review Comment Access**  
   What is the comment from the first review of the Kawasaki Z900?  
   _(Hint: Locate the Naked Bikes category, then the Z900, and access its reviews array)_

4. **Helmet Size Options**  
   What are the available sizes for the AGV Pista GP RR helmet?  
   _(Hint: Go to the Accessories category, find the helmet, and access its details.sizes)_

5. **Stock Quantity Check**  
   How many "Candy Lime Green" Kawasaki Z900 bikes are in stock?  
   _(Hint: Find the Z900 in Naked Bikes, then check its inventory.colors for the specific color)_

 */
