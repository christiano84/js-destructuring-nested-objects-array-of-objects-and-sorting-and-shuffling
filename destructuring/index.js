// destructuring = extract values from arrays and 
// objects then assign them to variables in a 
// convenient way
//
// [] = to perform array destructuring
// {} = to perform object destructuring

// ---- EXAMPLE 1 ----
// SWAP THE VALUE OF TWO VARIABLES

// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

function displayPerson({firstName, lastName, age, job="unemployed"}) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry Cook"
}

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34
}

const {firstName, lastName, age, job="unemployed"} = person2;

displayPerson(person1);