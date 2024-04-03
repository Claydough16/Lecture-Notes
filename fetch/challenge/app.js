let form1 = document.getElementById('form1')
let input1 = document.getElementById('input1')
let button1 = document.getElementById('button1')
let title1 = document.getElementById('title1')
let p1 = document.getElementById('p1')
let img1 = document.getElementById('img1')


const url = `https://pokeapi.co/api/v2/pokemon/`;

async function getData(selectedPokemon) {
    try {

        const res = await fetch(`${url}${selectedPokemon}`)
        if (!res.ok) {
            console.log("Error! Pokemon not found")
        }
        const data = await res.json()
        title1.textContent = data.name;
        p1.textContent = (`${data.weight} lbs`);
        img1.src = data.sprites.front_default;
    } catch (err) {
        console.log(err);
    }
}

form1.addEventListener('submit', async (button) => {
    button.preventDefault();
    const selectedPokemon = input1.value;
    await getData(selectedPokemon);
})


// ? Instructions
//     * connect your files (index, style, app)
//     * create a pokedex card in index: (div)
//     * it should have name (h3), weight (p), and picture (img)
//     * above it, there should be a form with an input field and a Go button
//     * access all elements within app.js using DOM
//     * create an event listener that listens for the button click
//     * when the button is clicked, it should grab the input value (aka pokemon name)
//     * it should then trigger a fetch to the pokemon api with that pokemon name
//     * it should then display the values of that pokemon's name, weight, and picture