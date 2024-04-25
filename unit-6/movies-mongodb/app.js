require('dotenv').config(); // connects our .env file to our project
const express = require('express');
const app = express();
const PORT = process.env.PORT; // points to our environment file and puts the value of PORT from that variable into this PORT variable.
const userController = require('./controllers/user.controller.js')

//! MongoDB Connection
const mongoose = require('mongoose'); // used from node.modules.
const MONGO = process.env.MONGODB; // connection variable from .env

mongoose.connect(`${MONGO}/moviedb`) // connection middleware. Est. route and defining our Collection we are targeting.
//* Doesn't display until there is a document within the collection

const db = mongoose.connection; // event listener to check if connected.
db.once('open', () => console.log(`Connected: ${MONGO}`));

//* Middleware
app.use(express.json()) // added to allow us to accept JSON data from the body of our client.

//* Routes / Controllers
app.use('/user', userController)

app.listen(PORT, () => console.log(`Movie Server on Port: ${PORT}`));