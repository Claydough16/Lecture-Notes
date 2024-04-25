# Traditional Database

Database:
- Types:
    - Relational
        - SQL, PostgreSQL, MySQL
    - Non-Relational
        - MongoDB, Apache Cassandra, Couchbase
- Collection of tables or documents
    - Tables:
        - Primary Keys (ID)
        - Records: Data within rows of table
    - Mongo
        - Database = Database
        - Collection = Table
        - Documents = Records
            - Stored as JSON
        - Is a **Document Data Store**

# MERN Stack
- M: Mongo
- E: Express
- R: React
- N: Node

# Express
- Need a `package.json` file
    - run `npm .init` or `npm init -y`
- Install Dependencies:
    - Express: `npm i express`
    - Mongoose: `npm i mongoose`
        - package that connects to MongoDB
    - dotenv: `npm i dotenv`
    - **NOTE:**
        - We can install multiple dependencies at once
        - `npm i express mongoose dotenv`
- Entry point within `package.json`
    - `index.js` || `app.js`
- `.gitignore`
    - ignore files / folders that shouldn't be in our github repo
        - ex: node_modules & .env

# .env
- Contains constants that are specific for our environment.
- Stores items that we don't want published.
    - passwords / port numbers / deployment routes / keys
- Should be added to `.gitignore`
- Should have a sample version to communicate with team.
    - `example.env`

## Mongo & Mongoose
- Needs to connect to our database
    - Using **MongoDB Compass**
    - Stateful connection

```js
const mongoose = require('mongoose');
const MONGO = process.env.MONGODB;

mongoose.connect(`${MONGO}/moviedb`);

const db = mongoose.connection;

db.once("open", () => log(`Connected: ${MONGO}`));
```

# Models
- Define what our database collection will look like.
    - A schema for each object being created.
    - `mongoose` establishes our schema.

Example:
```js
const UserSchema = new mongoose.Schema({
    // columns for our document (in a collection)
    firstName: {
        type: String, // What datatype this is expecting
        required: true // default is false
    }
})
```

## Challenge:
```js
/*
! CHALLENGE:
    - Add a boilerplate code for the controller
    - Create a POST method route ('/signup')
    - Make sure route is working
        - simple response of "Connected"
        -Test in Postman
    - full URL is:
        - localhost:4000/user/signup
*/
```