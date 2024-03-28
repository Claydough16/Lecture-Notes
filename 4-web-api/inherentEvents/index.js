/* 
!   Forms
        - default behavior is to send a GET request to the action attr value
        - can be overriden using:
            event.preventDefault()
        - name attri within html element give data its properties

!   URL's
        - Uniform Resource Locator
        - carries protocol, top domain, sub domain, route, and any queries
        - Query params are the data that comes from our form
        - Begins with ? symbol
        - Followed by key=value pair
        -  Separated with & symbol
            ex:
*                127.0.0.1:4000/index.html?email=joe%40email.com&pwd=test
*/

// console.log("connect") // help track code in it's current state

let url = document.location.search;
console.log('URL String: ', url);
// creates a location object that sanitizes query parameters
let params = new URLSearchParams(url);
console.log(params);

// Utilize .get() method of the Location interface to access query value
let email = params.get('email');
let pwd = params.get('pwd');

const btn = document.getElementById("submit");
const output = document.getElementById("output");

const db = [
    { email: "one@email.com", password: 'password123'},
    { email: "two@email.com", password: 'test'},
    { email: "three@email.com", password: 'testing'},
];

btn.addEventListener('click', e => {
    e.preventDefault();
    let email = e.target.form[0].value;
    let pwd = e.target.form[1].value;
    // console.log(email);

    const foundUser = db.filter(entry => entry.email === email);

    if(foundUser.length === 0) {
        output.textContent = "No user found"
    } else {
        if(foundUser[0].password === pwd) {
            output.textContent = 'Logged in'
    } else {
            output.textContent = "Incorrect Email or Password"
        }
    }

});