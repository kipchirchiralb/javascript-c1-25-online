Practice questions organized into two distinct categories: **Nested Access** for practicing object and array navigation, and **Methods** for practicing JavaScript array methods and manipulation. The questions are based on this `sportsBikesShop` dataset.

```javascript
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
  {
    category: "Naked Bikes",
    bikes: [
      {
        id: "NB001",
        brand: "Kawasaki",
        model: "Z900",
        year: 2023,
        price: 9399.0,
        specifications: {
          engine: {
            type: "948cc liquid-cooled 4-cylinder",
            horsepower: 125,
            torque: "98.6 Nm",
          },
          weight: {
            dry: "465 lbs",
            wet: "471 lbs",
          },
          suspension: {
            front: "41mm inverted fork",
            rear: "Horizontal back-link shock",
          },
        },
        inventory: {
          available: true,
          stock: 20,
          colors: [
            {
              name: "Metallic Spark Black",
              code: "#1A1A1A",
              quantity: 12,
            },
            {
              name: "Candy Lime Green",
              code: "#00FF00",
              quantity: 8,
            },
          ],
        },
        reviews: [
          {
            customerId: "CUST004",
            rating: 4.6,
            comment: "Perfect balance of power and comfort",
            date: "2024-11-30",
          },
          {
            customerId: "CUST005",
            rating: 4.4,
            comment: "Love the aggressive styling",
            date: "2025-01-05",
          },
        ],
      },
    ],
  },
  {
    category: "Accessories",
    items: [
      {
        id: "ACC001",
        type: "Helmet",
        brand: "AGV",
        model: "Pista GP RR",
        price: 1499.99,
        details: {
          material: "Carbon Fiber",
          sizes: ["S", "M", "L", "XL"],
          safetyRating: "ECE 22.06",
        },
        inventory: {
          available: true,
          stock: 25,
          variants: [
            {
              color: "Glossy Carbon",
              sizeStock: {
                S: 5,
                M: 8,
                L: 7,
                XL: 5,
              },
            },
          ],
        },
      },
      {
        id: "ACC002",
        type: "Exhaust",
        brand: "Akrapovic",
        model: "Slip-On Line",
        price: 899.95,
        details: {
          material: "Titanium",
          compatibleBikes: ["YZF-R1", "Panigale V4"],
        },
        inventory: {
          available: true,
          stock: 12,
        },
      },
    ],
  },
];
```

---

### Category 1: Nested Access Questions

These questions focus on accessing deeply nested properties within the `sportsBikesShop` array of objects.

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

---

### Category 2: Methods Questions

These questions involve using JavaScript array methods (e.g., `filter`, `map`, `reduce`) and other manipulations on the `sportsBikesShop` data.

1. **Filtering by Price**  
   Create a list of all bikes under $15,000.  
   _(Hint: Use `filter` across categories that have bikes, checking the `price` property)_

2. **Mapping Models**  
   Generate an array of all bike models available in the shop.  
   _(Hint: Use `flatMap` or `map` to extract `model` from each bike across categories)_

3. **Average Rating Calculation**  
   Calculate the average customer rating for each bike and return an object with model names as keys and averages as values.  
   _(Hint: Use `reduce` on the `reviews` array for each bike)_

4. **Stock Availability**  
   Find all items (bikes or accessories) that are currently available and have stock greater than 10.  
   _(Hint: Use `filter` and check `inventory.available` and `inventory.stock`)_

5. **Adding a New Variant**  
   Add a new color variant ("Matte Grey", code "#4A4A4A", quantity 5) to the Yamaha YZF-R1's inventory.  
   _(Hint: Locate the YZF-R1 and push a new object into its `inventory.colors` array)_
