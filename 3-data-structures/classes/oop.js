/* 
!   Object Oriented Programming
    - Encapsulation
    - Inheritance
    - Abstraction
    - Polymorphism
*/

//* Encapsulation
class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        
    }

    // speak() {
    //     return `${this.name} says, "Woof!"`;
    // }

    fly() {
        if (this.flies === true) {
            return `${this.name} takes to the skies!`
        } else {
            return `${this.name} can only gaze upward...`
        }
    }

    speak() {
        return `${this.name} says, "${this.voice}"`;
    }
}

// let buttons = new Pet(`Buttons`, `Brown`);
// console.log(buttons.speak());

//* Inheritance
class Dog extends Pet {
    constructor(name, color, voice) {
        super(name,color);
        this.voice = voice;
    }
    
    // speak() {
    //     return `${this.name} says, "${this.voice}!"`;
    // } //* Only for Dog class
}
let buttons = new Dog(`Buttons`, `Brown`, `ruff`);
// console.log(buttons.speak());

//* extends: denotes for us that our class "Dog" is a child of "Pet"
//* super: brings in properties of the parent class

class Cat extends Pet {
    constructor(name, color, voice) {
        super(name, color);
        this.voice = voice;
    }
}

let Moss = new Cat(`Moss`, `black`, `mew`)
// console.log(Moss);
// console.log(Moss.speak());

//! CHALLENGE
/*
    - Create a bird class that extends pets.
    - Provide it a new key property called "flies" that will hold a boolean value.
    - Create a method within the parent class called "fly" that checks to see if our object can fly and returns as such:
        If so: "{pet} takes to the skies!"
        If not: "{pet} can only gaze upward..."

    - Create a new bird. (give whatever values to its attributes)
        - hint: make sure it is "true" that it can fly.
    - Within a console.log(), check the fly method of the new bird and another using either the dog or cat just created.

*/

class Bird extends Pet {
    constructor(name, color, flies) {
        super(name, color);
        this.flies = flies;
    }
}

let Bluejay = new Bird(`Bluejay`, `Blue`, true);
// console.log(Bluejay.fly());
// console.log(buttons.fly());

//* Abstraction
class Tab {
    constructor(sub, tax) {
        this.subTotal = sub;
        this.tax = tax;
        this.tip;
    }

    tipAmount(x) {
        let total = this.subTotal + this.tax;

        this.tip = total * x;
        let final = total + this.tip;
        return final.toFixed(2);
    }

}

let saleTax = .075;
let tipPercent = .2;

let dinnerBill = new Tab(42.83, saleTax);
console.log(dinnerBill);

function calcTip(bill) {
    return bill.tipAmount(tipPercent);
}
console.log(`Final Cost: $${calcTip(dinnerBill)}`);

//* Polymorphism

class A {
    show() {
        console.log(`from A`)
    }
}

class B extends A {}

let b = new B();
b.show();