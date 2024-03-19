/* 
    ? Loops
    * allow us to execute a block of code repeatedly
    * they stop once an exit condition has been met
*/

/* 
    ? For Loop
    * iterates over any data that's iterable
    * iterator - placeholder value
    * iterable - data type we can count through
    
    Syntax:

    for (start; stop; step) {
        code block to execute for each iteration
        until stop/exit condition is true
    }
*/

/* 
    i++ same as i = i + 1 same as i += 1
    means new i value assigned to old i + 1
*/
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let longWordEN = "supercalifragilisticexpialidocious"

console.log(longWordEN.length) // 34 or 33 index
console.log("-------------------------")
for (let i = 0; i < longWordEN.length; i = i + 1) {
    console.log(`Index: ${i} Letter: ${longWordEN[i]}`)
}


/* 
    ? For-in Loop
    * allows us to seek an index value of an iterable
    * for-in does not require an index number
    * for-in does not require a stop statement
*/

let longWordDE = "kraftfahrzeug-hafplifschtversicherung"
console.log(longWordDE.length)

for (i in longWordDE) {
    console.log(i)
}

/* 
    ? For-of Loop
    * allows us to seek iterable value against a condition
*/

let longWordPL = "konstantynopolitanczykowianeczka"
console.log(longWordPL.length)

for (i of longWordPL) {
    console.log(i)
}

/* 
    Difference between for-in and for-of in terms of use
    * for-in allows us to loop over items that are not an array
    * for-of only works if an item is indexed linked an array or string
*/

let challengeSentence = "I wish this weather was warmer like the other day."

/* 
    ? Challenge
    * loop over the challenge sentence
    * if the character is an "a", "e", and "i", make sure it's console logged
    ! SPICEY MODE
    * keep track of the total and console log the total
    ! Habanero Spicey Mode
    * count individual letters, will need count for a, e, and i
*/

// for (ltr in challengeSentence) {
//     if (challengeSentence[ltr] == "a" || challengeSentence[ltr] == "e" || challengeSentence[ltr] == "i") {
//         console.log(`${challengeSentence[ltr]} detected`)
//     } else {
//         console.log(challengeSentence[ltr])
//     }
// }


let countA = 0
let countE = 0
let countI = 0

for (let ltr = 0; ltr < challengeSentence.length; ltr++) {
    // if (challengeSentence[ltr] == "a" || challengeSentence[ltr] == "e" || challengeSentence[ltr] == "i") {
    //     console.log(`${challengeSentence[ltr]} detected`)
        
    // } else {
    //     console.log(challengeSentence[ltr])
    // }

    if (challengeSentence[ltr] == "a") countA++
    if (challengeSentence[ltr] == "e") countE++
    if (challengeSentence[ltr] == "i") countI++
}
console.log(countA, countE, countI)

/* 
    ? While Loop
    * executes a statement inside of a code block
    * it does so as long as a while condition evaluates to true
    
    Syntax:

    while(true) {
        do this until false
    }
*/

let loopCount = 0

while (loopCount <= 10) {
    console.log(loopCount)
    loopCount += 1
}

// ! Infinite Loop Example DO NOT RUN!
// while(true) {
//     console.log(loopCount)
//     loopCount++
// }

/* 
    ? Do While Loop
    * executes code in the do section while a condition remains true
*/

let doCount = 0
do {
    console.log(doCount)
    doCount++
} while (doCount <= 10)

// above example is not logical to Paul

/* 
    ! FizzBuzz Challenge
*/

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}

let animalArray = ["bird", "pig", "cat", "mouse", "dog"]

/* 
    ? Challenge
    * loop over the animal array
    * match the animals with the noises they make
    * ex: bird goes chirp
*/

for (animal of animalArray) {
    if (animal == "bird") console.log("chirp")
    if (animal == "pig") console.log("oink")
    if (animal == "cat") console.log("meow")
    if (animal == "mouse") console.log("squeak")
    if (animal == "dog") console.log("woof")

    // animal == "bird" ? console.log("chirp")
    //     : animal == "pig" ? console.log("oink")
    //     : animal == "cat" ? console.log("cat")
    //     : animal == "mouse" ? console.log("mouse")
    //     : animal == "dog" ? console.log("woof")
    //     : null

    switch(animal) {
        case "bird":
            console.log("chirp")
            break
        case "pig":
            console.log("oink")
            break
        case "cat":
            console.log("meow")
            break
        case "mouse":
            console.log("whatever")
            break
        case "dog":
            console.log("woof")
            break
    }
}

