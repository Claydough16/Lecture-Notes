# Getting Started
- Create a `package.json`
    - In terminal: cli command: `npm init -y`
        - initializes our project
    - An index of the project
        - denotes required dependencies to run the project.
- Install our dependencies
    - express: `npm i express`
- Create a `.gitignore` file
    - `/node_modules` within the file
    - tells our local repository to ignore the `node_modules` folder when pushing to GitHub.
- node_modules folder
    - Provides us access to any "Behind the scenes" code that helps run express and any dependencies.
- package-lock.json
    - locks project into required dependencies/ helps with versioning.

## Start Project
- `nodemon`

## Stop Project
- `Ctrl+C`

## CRUD (Create, Read, Update, Delete)
- Create: POST
- Read: GET
- Update: PUT / PATCH
- Delete: DELETE

## Postman
- Set Methods
    - GET / POST / PUT / DELETE depending the route
    - Body
      - `raw`
      - `JSON`
      - make a JSON object

### Preparing our server to handle JSON objects
In our `app.js`|`index.js` we need to have this line of code:
```js
app.use(express.json());
```
This provides us access to JSON files throughout the routes.

## MVC
- Stands for Model View Controller
- Architecture pattern that helps our Separation of Concerns
- View: Browser, Postman, etc.
    - Application that interface with the server
- Controller: Part of the server application which handles logic.
- Model: Database schematic

## Middleware
- A function that accesses the request and response
- Has a call stack
    - request
    - response
    - next