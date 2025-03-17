const people = [
  {
    name: "Albert Kipchirchir ",
    age: 50,
    isKenyan: true,
    schools: ["Meteitei", "JKUAT", "MKU"],
    work: {
      company: "Eldohub",
      role: "Instructor",
      since: 2022,
    },
    siblings: [
      { name: "Alex", age: 31 },
      { name: "Alfred", age: 25 },
      { name: "Allan", age: 29 },
    ],
    height: 5.9,
  },
  {
    name: "Beatrice",
    age: 35,
    isKenyan: false,
    schools: ["Hillcrest", "Moi University"],
    work: {
      company: "Technovation",
      role: "Software Engineer",
      since: 2018,
    },
    siblings: [],
    height: 5.5,
  },
  {
    name: "Charles",
    age: 42,
    isKenyan: true,
    schools: ["Maranda", "University of Nairobi"],
    work: {
      company: "Acme Corporation",
      role: "Manager",
      since: 2015,
    },
    siblings: [
      { name: "Christine", age: 38 },
      { name: "Caleb", age: 35 },
    ],
    height: 6.1,
  },
  {
    name: "Diana",
    age: 18,
    isKenyan: false,
    schools: ["St. Mary's", "Strathmore University"],
    work: {
      company: "FinTech Ltd",
      role: "Data Analyst",
      since: 2020,
    },
    siblings: [{ name: "David", age: 30 }],
    height: 5.7,
  },
  {
    name: "Edith",
    age: 65,
    isKenyan: true,
    schools: ["Ki̅rei", "Egerton University"],
    work: {
      company: "Retired",
      role: "Teacher",
      since: 1980,
    },
    siblings: [],
    height: 5.4,
  },
  {
    name: "Felix",
    age: 19,
    isKenyan: true,
    schools: ["Butere", "Maseno University"],
    work: {
      company: "Freelancer",
      role: "Web Developer",
      since: 2023,
    },
    siblings: [{ name: "Fiona", age: 17 }],
    height: 5.1,
  },
  {
    name: "Gladys",
    age: 48,
    isKenyan: false,
    schools: ["Loreto", "Kenyatta University"],
    work: {
      company: "Hospital",
      role: "Doctor",
      since: 2000,
    },
    siblings: [
      { name: "George", age: 52 },
      { name: "Gloria", age: 45 },
    ],
    height: 5.8,
  },
  {
    name: "Henry",
    age: 32,
    isKenyan: true,
    schools: ["Nyandarua", "University of Eldoret"],
    work: {
      company: "Government",
      role: "Lawyer",
      since: 2019,
    },
    siblings: [],
    height: 6.2,
  },
];

// Using dot notation for objects and bracket notation for array answer the following questions

// print/log the work place for the third person -- index 2
console.log(people[2].work.company);
// log the name of Felix's sibling
console.log(people[5].siblings[0].name);
// log the second school that Diana went to
// the age of the youngest person
// log the number of Glady's siblings
