console.log("Hello world")

/* 
    ? JavaScript

    Founded in 1996 by Brandon Eich
    * weakly typed or duck typed language
    * client-side language (runs in the browser)
    * interpreted language, not compiled
    * first-class-function -- functions are treated like any other variable
    * functional language
    * object-oriented language
    * prototype-based
    * imperative
    * ECMAScript - organization setting language standards
*/

/* 
    ? Comments
    * blocks of code that are not being interpreted
    * denoted by // for single-line
    * denoted by /* for multi-line
    * comments are read but not executed
    * helps students with note taking
    * helps devs to document their code
*/

/* 
    ? Console object
    * gives access to the browser or node's debugging console
    * allows developers to view output from their programs
*/

2+2
// above doesn't display when node data-types.js
console.log(2 + 2)
// this one does because it's inside console.log

/*
    ? DataTypes
    Primitive
        * string
        * number
        * boolean
        * null
        * undefined
        * Not a Number (NaN)
    Reference
        * arrays
        * objects
        * sets
        * maps

*/ 

// single line comment shortcut cmd/ctrl + /
// multi line comment shortcut option/alt + shift + a


/*
    ? Numbers
    * any integer or decimal
*/

console.log(25)
console.log(3.14)
// typeof operater tells us the data type
console.log( typeof 1776)

/*
    ? Strings
    * primitive data type respresenting characters (text)
    * enclosed by " ", '', ``
    * are immutable (unable to be modified)
    * are indexed
 */

    console.log("This is a text")
    console.log('This is also a text')
    console.log(`This is a text using string interpolation`)

    //  We can add strings (concatenate)
    console.log("Hi, I'm Paul" + " and I'm 24 years old")
    // Make sure to add space inside one of the strings. Ex: above

    // String Index
    // Index always starts at 0

    console.log("Germany")
    console.log("Germany"[0])
    console.log("Germany"[1])
    console.log("Germany"[2])
    console.log("Germany"[3])
    console.log("Germany"[4])
    console.log("Germany"[5])
    console.log("Germany"[6])
    console.log("Germany"[7]) //returns undefined because Germany at Index 7 is out of range

    // Spaces also have their own Index assigned to them

    /* 
        ? String Interpolation
        *process of including space for an expression

        Syntax:
        `string ${expresssion} string`
    */

    console.log("My name is Paul and I am " + 2024 - 1990) // Bad! Without () we get NaN (this is due to type coercion issue)
    console.log("My name is Paul and I am " + (2024 - 1990))

    console.log(`My name is Paul and I am ${2024 - 1990}`)

    /* 
        ? String Properties & Methods
        * built in functions allowing us to manipulate strings
        .length
            * gives us the length of the string
        .slice()
            * returns sections of a string
            * takes optional start and stop parameters
        .toUpperCase()
            * returns new string with all chars uppercase
        .toLowerCase()
            * guess what this does
    */
// MDN String Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

console.log("Kraftfahrzeug-hafptlichversicherung".length)
console.log("Mr. Niemczyk".slice(0, 3))
console.log("Mr. Neimczyk".slice(4, 12))
console.log("richard gore".toUpperCase())

/* 
    ? Booleans
    * binary value
    * either true (on) or false (off)
    * examples of falsey values
        * false
        * 0
        * undefined
        * null
        * NaN
        * "" (empty string)
*/

console.log(true)
console.log(false)
console.log(2 == 2)
console.log(2 == 5)

// Boolean() object returns whether value is truthy or falsey
console.log(Boolean(1))
console.log(Boolean(0))

/* 
    ? Null & Undefined
    * falsey values
    * null - means nothing (placeholder)
    * undefined - default value (broken)
*/

/* 
    ? Operators
    * addition (+)
    * subtraction (-)
    * multiplication (*)
    * division (/)
    * exponent (**)
    * dot (.)
    * assignment (=) (think of = as IS)
    * comparison (==)
    * strict comparison (===) (triple)
*/

// Assignment
let teacher = "Paul"
console.log(teacher)

// Comparison (==)
console.log("paul" == "Paul")

//Strict Comparison (===)
console.log(2 == "2")
console.log(2 === "2")

/* 
    ? TypeCoercion
    * JS is a weakly typed programming language
    * doesn't require data type definition
    * comparison operator (==) performs type coercion to try and resolve the expression
    * we can use strict equality (===) to avoid type coercion
*/

/* 
    ? Modulo (%)
    * remainder of long division

*/

console.log(12 / 3)
console.log(12 % 3) //returns 0 because they go in perfectly
console.log(12 % 5)

/* 
    ? Expressions
    * unprocessed values grouped using the ( )
    * evaluated to be truthy or falsey
    * expressions evaluate
*/

console.log(Boolean(2 == 2));
console.log(Boolean("Paul" == "paul"));

/* 
    ? Statements
    * keyword
    * expression
    * code block
    * statements evaluate and execute bcode block when invoked
    
    Ex: conditional statement

    if (true) {
        run this code
    }
*/