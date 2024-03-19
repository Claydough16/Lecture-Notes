/* 
! Classes
    - Introduced in 2015
    - A function that helps us create objects
    - Defines a category of objects

    * Base Structure:

    class NameOfClass {
        constuctor(parameters) {
            this.key = paramters
        }

        methodName() {
            ... code block
        }
    }
*/

class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
// console.log(one);
one.name = `sample`;
// console.log(one);

// 1    2
class Item {
//       3             4
    constructor(name, desc, price) {
//        5    6      7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/* 
    1. Keyword to establish what type of function
    2. The Name of our class (Should be Pascal case)
    3. Keyword - automatically run when the class is instantiated
    4. The parameters for our constructed object (est. the values of the new object)
    5. Keyword - Refers to "this" specific object being created
    6. The name of a key to our new object (Item has 3 keys being constructed)
    7. The value for those keys (ref. by the params)
*/

let itemZero = new Item()
// console.log(itemZero);

let itemOne = new Item(`beans`, `canned`, 0.89);
// console.log(itemOne);

// let brokenItem = Item();
// console.log(brokenItem);

let iType = `tomato soup`;
let iDesc = `canned`;
let iCost = 1.29;

function processItem(item, desc, cost) {
    return new Item(item, desc, cost);
}

let useFunction = processItem(iType, iDesc, iCost);
// console.log(useFunction);

class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = []; // making a default value for this key

    }

    addToInventory(newItem) {
        this.items.push(newItem);
        // console.log(`Item Added!`)
    }
}

let dryGoods = new DeptInventory(`Dry Goods`);
let itemTwo = new Item(`corn`, `canned`, 0.79);

dryGoods.addToInventory(itemOne);
dryGoods.addToInventory(itemTwo);
// console.log(dryGoods);


class Expense {
    //* Factory Method
    static addUpchargeForProfit(wholesale) {
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge)
    }

    constructor(w, s) {
        this.purchased_price = w;
        this.sell_at = s;
        this.plus_sales_tax;
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_at;

        this.plus_sales_tax = (saleCost + (saleCost * percentage)).toFixed(2);
    }

}

let itemToSell = Expense.addUpchargeForProfit(1);
// console.log(itemToSell);
// console.log(Expense.addUpchargeForProfit(2));
let anotherItem = Expense.addUpchargeForProfit(2);

anotherItem.addTax(.075);
console.log(anotherItem);
