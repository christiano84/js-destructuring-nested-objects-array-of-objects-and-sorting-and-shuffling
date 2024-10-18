const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45},  
                {name: "banana", color: "yellow", calories: 105},   
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];


// ------------- reduce() --------------

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max  )
console.log(maxFruit)

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min  )
console.log(minFruit)

// // --------- filter() ---------------

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)


// console.log(highCalFruits)