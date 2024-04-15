const express = require('express'); // being pulled from node modules
const app = express(); // simplifying the method call
const PORT = 4000; // server port within localhost. Using 'all caps' to indicate a 'general' variable.
const practiceController = require('./controllers/practice.controller');
const authController = require('./controllers/auth.controller');
const routesController = require('./controllers/routes.controller');
const { logTime } = require('./utils');

app.use(express.static(`${__dirname}/public`));
//__dirname comes from node
// console.log(`pathway: `, __dirname);

app.use(logTime);
app.use(express.json()); // Provides us access to use json data
app.use(express.urlencoded()); // parses the body from our browser so it can display the response

app.use('/practice', practiceController);
/* 
Any traffic coming in that has "practice" after localhost:4000 will route to practice.controller.js.
ex: localhost:4000/practice
*/
app.use('/todo', authController);
app.use('/routes', routesController);

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`); // providing feedback to tell us it is running.
});