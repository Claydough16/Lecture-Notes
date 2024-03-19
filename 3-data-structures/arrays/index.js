/* 
!   Arrays
        - Denoted with Square Brackets [ ]
        - Indices start at zero
        - Using a property "length", we can find the sum of data stored.
*/

let list = [ 'milk', 'bread', 'chicken', 'coffee' ];
//             0       1         2          3 

// console.log(list[2]);
// console.log(list.length);

list[0] = 'chocolate milk';
// console.log(list);

/*
! Using the console.log();
    - target "Bruce" - DONE
    - target "true" - DONE 
    - using string interpolation, return "Hello, Nick" and "Hello, Tony".
*/

let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce', ['Tony', 8, true]
];

// console.log(avengers[4]);
// console.log(avengers[5][2]);
// console.log(`Hello ${avengers[0]}. Hello ${avengers[5][0]}`);

// let x = 'a'

// console.log(typeof avengers);
// console.log(avengers instanceof Array);
// console.log('INSTANCE OF X: ', x instanceof Array);
// console.log(avengers instanceof Object);

//! Methods
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// for(item of food) {
//     console.log(item);
// }

//* .push()
food.push('Pizza'); // add value to the end of the array
// console.log('Push: ', food);

//* .splice(position, number to remove, new value)
food.splice(1,1,"Tacos");
// console.log('Splice: ', food);

food.splice(1,0,'Steak');
// console.log('Splice 2: ', food);

//* .pop()
food.pop(); // removes item from end of array.
// console.log('Pop: ', food);

//* .shift()
food.shift(); // removes item from the start of array
// console.log('Shift: ', food);

//* .unshift()
food.unshift('Hamburger', 'Salad');
// console.log('Unshift: ', food);

//* .toString()
let rgb = ['red','green','blue'];
// console.log(typeof rgb); // object
// console.log(rgb.toString());

//* .filter() & .includes()
/* 
    - does not destroy original array
    - store the filter array in a new variable
    - takes a callback function that returns true/false
    - loops the array
    - must have a return
*/

let fruits = ['apple', 'pear','mango','orange','pineapple'];

//? How can I use a filter to remove a mango?

const filteredFruit = fruits.filter(fruit => {
    let results = fruit !== 'mango';

    return results;
});

// console.log(filteredFruit); 
//? How can I remove any fruit that has the word "apple" in it?

let fruit1 = 'pineapple';
// console.log(fruit1.includes('apple')) // returns a boolean

const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple'));
/* 
                        array.filter(() => {})
*/
// console.log(filteredFruit2);

/* 
!   Challenge: 
        How do you remove the 5s from the array?
        Store it in a new variable and console.log that variable
*/

let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];

// const filteredArray = myNumberArray.filter(number => number !== 5)
const filteredArray = myNumberArray.filter(removeFives)

function removeFives(num) {
    // console.log(num); // evaluates each index
    return num !== 5
}

// console.log(filteredArray);

//* .forEach()

let newFoodList = [
    'apple', 'pear','mushroom','cheese','peach'
]

for(let i = 0; i < newFoodList.length; i++) {
    // console.log(newFoodList[i])
}

// newFoodList.forEach(item => 
//     console.log('For Each: ',item)
//     );

//* .find()
let tmnt= [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];

let character = 'Leo';

console.log('Find: ', tmnt.find(c => c == character))

character = 'April';
console.log('Find: ', tmnt.find(c => c == character))

character = 'Splinter';
tmnt.find((c,i) => console.log(c == character, 'index: ', i))

//* .map()

let numArray = [];
let fizzBuzzArray = [];

for(let i = 0; i < 101; i++) numArray.push(i);

numArray.map(x => {
    if(x % 15 === 0) fizzBuzzArray.push(x);
});

console.log(fizzBuzzArray);