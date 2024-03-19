/* 
    ? Conditionals and Logic Gates
    * conditional statements check if any expression is truthy
    * the expression must always resolve to true
    * if it's truthy, code block executes
    * if an expression if alsey, code block does not run
*/

/* 
    ? if statement
    * checks if an expression is true and executes code
*/

let lightSwitch = "off"

// Checks value and data type
if (lightSwitch === "on") {
    console.log("The light is on")
}

let boolLightSwitch = true
// Checks if it's true
if (boolLightSwitch) {
    console.log("The light is also on")
}

/* 
    ? else if statement
    * allows us to add additional expression to check for
    * executes when prior condition has not been satisfied
    * once satisfied, interpreter exits the conditional chain
*/

let temperature = 0

if (temperature > 60) {
    console.log("We're close to summer")
} else if (temperature > 40) {
    console.log("Spring or Fall")
} else if (temperature > 32) {
    console.log("Likely winter")
} else if (temperature > 0) {
    console.log("Definitely winter")
} 

/* 
    ? Else statement
    * if all else fails, execute this code
*/

let baby = false

if(baby == true) {
    console.log("Sleep deprivation")
} else {
    console.log("Sleeping very well tonight")
}

// else is a catch all

/* 
    ? Syntax
    if (conditionIsTrue)
        execute this code block
    } else if(conditionIsTrue) {
        execute this code block
    } else {
        execute this code block
    }
*/

/* 
    ? Logical Operators NOT AND OR
    * OR operator (||)
        * true if one of the conditions is true
        * ex: I will be happy if I do laundry or clean the house
        * (clean || laundry) == true
        * (clean || no laundry) == true
        * (no clean || laundry) == true
        * (no clean || no laundry) == false
    * AND operator (&&)
        * true if both conditions are true
        * ex: I will be happy if I do laundry AND clean the house
        * (clean && laundry) == true
        * (no clean && laundry) == false
        * (clean && no laundry) == false
        * (no clean && no laundry) == false
    * NOT operator (!)
        * opposite of logical expression
        * flips it
*/

let laundry = true
let cleaning = true

// AND example
if (laundry && cleaning) {
    console.log("I got all of my chores done")
}

// OR example
if (laundry || cleaning) {
    console.log("I got one of the tasks done")
}

// NOT example
if (!laundry) {
    console.log("The laundry is done")
}

// Cool real life example
let username = "1800violence"

if (!username) {
    console.log("Please enter username")
}

/* 
    ? Ternaries
    * a quick way of creating if/else conditionals
    * commonly used to check a flag
    * they work on expressions (they do not return values)
*/

let ignition = true

// if (ignition == true) {
//     console.log("Lambo goes vroom")
// } else {
//     console.log("Car is off")
// }

ignition ? console.log("The car is on") : console.log("The car is off")

// Chaining Ternaries

let seasons = 1

seasons == 1 
    ? console.log("spring")
    : seasons == 2
    ? console.log("Summer")
    : seasons == 3
    ? console.log("Autumn")
    : seasons == 4
    ? console.log("Winter")
    : null

    /* 
        ? Ternary Syntax
        conditional ? code block if true : code black if false

        conditional ? code block if true
            : else if statement ? code block if true
            : else if statement ? code block if true
            : else statement OR null

            ! you MUST have an else statement
    */

/* 
    ? Ternary Challenge
    *create a variable called income with a value of some income
    *if your income is over 100k, log "I am upper class"
    *if your income is between 50-100k (non-inclusive), log "I am middle class"
    *if you income is under 50k, log "I'm about to get that swanky new dev role for a 100k anyways"

    TIP: try using if else first and then revise into a ternary
*/

let income = 45000

if (income >= 100000) {
    console.log("I am upper class")
} else if (income < 100000 && income > 50000) {
    console.log("I am middle class")
} else if (income <= 50000) {
    console.log("I'm about to get that swanky new dev role for a 100k anyways")
}

income >= 100000
    ? console.log("I am upper class")
    : income < 100000 && income > 50000
    ? console.log("I am middle class")
    : income <= 50000
    ? console.log("I'm about to get that swanky new dev role for a 100k anyways")
    : console.log("Dang bro you don't have a job?")

    // can remove the "income < 100000 &&" in the above example because it's not needed

/* 
    ? Switch Statements
    * switches execute a code block dependent upon different cases
    * we ask questions that require specific response determined by our answer
*/

let instructor = "Paul"

switch(instructor) {
    // information that cases are compared against
    case "Paul":
        // condition that's compared against the switch
        // executes the code below
        console.log(`${instructor} is a PSM`)
        break
        // used to stop other cases from running
    case "Eric":
        console.log(`${instructor} is a Lead Instructor`)
        break
    case "Max":
        console.log(`${instructor} is a PM`)
    default:
        console.log(`${instructor} may or may not work here`)
}

/* 
    ? Switch Challenge
    * create a grade variable that holds a value (ex: 78)
    * create a switch statement that checks against the var
    * > 89 A
    * > 79 B
    * > 69 C
    * > 59 D
    * <= 59 F
    * default statement of "input is not a grade" 
*/

let grade = 77

switch (true) {
    case grade > 89:
        console.log("A")
        break
    case grade > 79:
        console.log("B")
        break
    case grade > 69:
        console.log("C")
        break
    case grade > 59:
        console.log("D")
        break
    case grade <= 59:
        console.log("F")
        break
    default: console.log(`${grade} is not a grade`)
}
