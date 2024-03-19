/* 
    ? Async Challenge
    * create a function that will return a promise object
    * this promise object must resolve itself 2 seconds after the call to job
    * it must provide `hello world` in the data
    * There are 3 ways to approach it
        * Promises
        * async function
        * mix of either and .then resolvers
*/

async function Challenge() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello World`);
        }, 2000);
    });
}

Challenge().then(data => {
    console.log(data);
});