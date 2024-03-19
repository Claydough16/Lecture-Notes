const fullName = [`Jane`, `Doe`];

// const firstName = fullName[0]
// const lastName = fullName[1]

const [ firstName, lastName] = fullName;
// console.log(firstName); 
// console.log(lastName); 

//* Spread Operator

// const copiedFullName = [fullName];
const copiedFullName = [...fullName];
console.log(copiedFullName);

fullName.push(`Mrs.`);
// console.log(fullName, copiedFullName);

// console.log(Math.min(1,5,-3));

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(...prices));

const persons = [
    { name: `Jane`, age: 28},
    { name: `John`, age: 35}
];

// const copiedPersons = persons.map(person => ({
//     name: person.name,
//     age: person.age
// }))

const copiedPersons = [...persons]

persons.push({name: `Anna`, age: 29});

// console.log(`FIRST `,persons);
// console.log(`SECOND `, copiedPersons);

//! Rest

const fullName2 = [
    'Jane', 'Doe', 'Mrs.', 
    { month: 3, date: 22, year: 1973 },
    `test1`, 2, `test3`, true
];

// const[ fName, lName, ...otherInfo ] = fullName2;
// console.log(fName);
// console.log(lName);
// console.log(otherInfo);

const [fName, lName, , , ...testData] = fullName2;
//*      0     1    2 3     4 -->
console.log(testData);
//let fName = fullName2[0]
//console.log(testData);
//console.log(fName);


