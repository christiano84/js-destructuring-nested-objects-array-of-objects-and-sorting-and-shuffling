// nested objects = Objects inside of other Objects
// allow you to represent more complex data structures
// Child object is enclosed by a parent object

// Person(Address{}, ContactInfo{}, ShoppingCart{Keyboard{}, Mouse{}, Monitor{}})

// const person = {
//   fullName: "Spongebob Squarepants",
//   age: 30,
//   isStudent: true,
//   hobbies: ["Karate", "Jellyfishing", "Cooking"],
//   address: {
//     street: "124 Conch St.",
//     city: "Bikini Bottom",
//     country: "Int. water"
//   }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);

// for (const property in person.address) {
//   console.log(person.address[property]);
// }

class person {
  constructor (name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
const person2 = new person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Waters");
const person3 = new person("Squidward", 45, "128 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person3.age)