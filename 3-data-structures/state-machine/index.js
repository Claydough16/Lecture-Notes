const listGame = system => {

    let collection = {
        "Nintendo": ['Duck Hunt','The Legend of Zelda','Super Mario Bros.'],
        "Super Nintendo": ['Super Mario World','F-Zero','Star Fox'],
        Nintendo64:['Super Mario 64','Mario Kart 64','GoldenEye 007']
    }

    return collection[system];
}

// console.log(listGame(`Nintendo64`));
// console.log(listGame(`Nintendo`));

const stateAbbreviation = {
    alaska: `ak`,
    delaware: `de`,
    hawaii: `hi`,
    indiana: `in`,
    vermont: `vt`
}

const acronyms = {
    asap: `as soon as possible`,
    fomo: `fear of missing out`,
    gif: `graphics interchange format`,
    lol: `laugh out loud`
}

function findIt(dict,search) {
    return dict[search];
}

console.log(findIt(stateAbbreviation, `indiana`));
console.log(findIt(acronyms, `gif`));

//* State Machine
let state = {
    green: [`yellow`],
    yellow: [`red`],
    red: [`green`, `yield`],
    yield: [`red`]
}

let currentState = `green`;

function enterState(newState) {
    // what is a valid transition?
    let validTransition = state[currentState];
    console.log(validTransition)

    // Does our newstate exist in what's valid?
    if(validTransition.includes(newState)) {
        // update
        currentState = newState;
        console.log(currentState);
    } else {
        throw(`Invalid State: ${currentState} to ${newState}`)
    }

}

enterState(`yellow`);
enterState(`red`);
enterState(`yield`);
enterState(`red`);