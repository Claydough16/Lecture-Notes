/* 
! Async/Await
    - Introduced in ES8 in 2017
    - Can make any function an async function simply by adding our keyword async
        KEYWORDS:
            - async
                - denotes a function
            - await
                - calls a process to "wait" for a result
    - Can help us reduce the need for Callback Functions
    - Cannot be use in loops!
    - ALWAYS returns a promise
*/

//* Some syntax
async function asyncFuncDeclaration() {
    // code block...
};

let funcExpression = async function() {
    // code block...
};

let arrowFunc = async () => {
    // code block...
};

async function extraData() {
    let info = await returnData();
    return(`${info} in some cloud.`);
}

extraData().then(data => console.log(data));