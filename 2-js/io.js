/* 
    ? IO & Callbacks
    * Process
        * an event that runs in the foreground or background of your machine
    * Node.js allows access to its process via the process object
    * This allows us to process external input and internal output (IO)
    * We do this by using process.stdin and process.stdout
*/

let process = require("process")

console.log(`This is an output from Node. Process ID: ${process.pid}`)

/* 
    ? Event Listener
    * listens for an event
    * triggers a callback function
    * callback is a function that is triggered when an event occurs
*/



// function handleInput(input) {
//     console.log(`This is input repeated ${input}`)
// }

// process.stdin.once("data", input => {
//     console.log(`This is input repeated ${input}`)
// })
// process.stdin.once("data", handleInput)

/* 
    .on() method allows continous listen to a data stream
    process.stdin.on("data", handleInputStdOut)
    (1)    (2)     (3)    (4)     (5)

    * 1. Node's process interface
    * 2. Input data stream
    * 3. Event listener method
    * 4. Event we're listening for
    * 5. Callback fx which runs when the event occurs
*/
// console.log("What is your name?")
// process.stdin.on("data", input => {
//     process.stdout.write(`Your name is ${input}`)
//     process.exit()
// })

// ? Readline
// 1. Import readline
const readline = require("readline")
// 2. Create interface
const rl = readline.createInterface({ input: process.stdin, output: process.stdout})

rl.question("What is your favorite vacation spot?", input => {
    console.log(input)
    if (input == "Germany") {
        rl.setPrompt("Guten tag")
    }
    if (input == "Italian") {
        rl.setPrompt("Buongiorno")
    }
    if (input == "French") {
        rl.setPrompt("Bonjour")
    }
    rl.prompt()
    console.log("")
    rl.close()
})

function ask(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, resolve)
    })
}

// ask("What is your eye color?").then(data => {
//     console.log(data)
//     rl.close()
// })

async function start() {
    let eyeColor = await ask("What is your eye color?")
    let beard = await ask ("Do you have a beard?")
    let potato = await ask ("Do you eat potatoes?")
    console.log(`This person has ${eyeColor} eyes, ${beard} they have a beard, and ${potato} to eating potatoes`)
    rl.close()
}

start()