/* 
!   Promise

    Returned to us is an object that may produce a singular value in the future

    3 states:
        - pending
        - fulfilled
        - rejected

    Takes in two parameters
        - Resolve
        - Reject

*   Always returns an object
*/

//? Mock internet send
function getData(cb) {
    setTimeout(() => {
        cb("some Data")
    }, 3000)
}

// let data = getData(); // the value comes "late" - 3 seconds
// console.log(data); // We get an undefined because the information is delayed when it is compiled

// getData(data => console.log(data));
// console.log('Hello World')

/* 
*   A promise is an object that may produce a singular value in the future
    - Resolved
    - Rejected
        - These detail what to do depending on the results
*/

function returnData() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve('some data from Promise');
            } else {
                reject('This is a rejection');
            }
        }, 5000)
    })

}

// console.log(returnData()) // details the promise object

/* 
    - When returned, the returnData() func. will return a Promise instead of a given string

    - Chained with a resolver
        - Keywords:
            - .then() - if success
                - can be chained together
            - .catch() - if error
        - Takes in a callback function
        - only put the semicolon (;) after the last resolver
*/

returnData()
    .then(data => console.log('From Response: ', data))
    .then(() => {
        let x = 10;
        let y = 20;
        console.log(x + y);
    })
    .catch(function(err) {
        console.error(err)
    });

    /* 
    *   The Process:
        - Creating a new Promise.
            - resolve / reject are parameters of a callback function
        - setTimout is acting as our "waiting" for a resource
        - resolve() or reject() said promise
        - When returned, returns a Promise object - not a string
        - use of resolvers (.then() / .catch()) with CB functions to extrapolate the info from that promise object
    */