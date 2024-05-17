# React

- Created by Facebook
- Is a client-side Javascript Library
- Quickly renders on the page
- Companies transitioning more to React
  - Netflix, Uber, Dropbox, AirBnB
- Works through **Components**

## Rules of JSX

1. **Must** Export for it to be used.
2. **Must** be imported to be used.
3. **Must** be mounted to be used.
4. **Must** only return **ONE** JSX Element

# Create a React App

- `npx create-react-app react-app-name`
- **npx create-react-app [your project name]**

## Points of Interest

- public
  - `index.html`: What is displayed to the browser.
- src
  - `index.js`: JS being rendered to `index.html`.
  - `App.js`: Main point where components are mounted. This is being rendered within `index.js`.

## About Me Challenge
```js
/* 
  - Create a new folder called aboutme within the components folder.
  - Create a new file inside the folder called AboutMe.jsx.
  - Create a <p> tag that notes where you grew up. 
    - Use variables for city and state.
  - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
  - Export the component.
  - Import the component into App.jsx and mount it between the Header and Footer components.
*/
```

### React Extension
**React Snippets**
### React Extension
**React Snippets**
dsznajder.es7-react-js-snippets
[docs](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)
- Quick Commands
  - rfce
    - React Functional Component Export
  - rfc
    - React Funcitonal Component (default export)

# State
- Helps modify data based on a condition
  - ex: 
    - offline/online status
    - session token storage
- Utilizes types of hooks
- Requires to be imported

`import { useState } from 'react'`

## `useState()`
- Structure:
  - `keyword [ variable, function ] = hook(initial value);`
  - The Process:

```js
function useState(startingData) {
  function updateState(newData) {
    startingData = newData;
  }
  return [startingData, updateState]
}
```

# useRef
- is a hook
- values consist and don't cause re-renders of the page.
- returns only one item
    - an object called "current"
- must be imported in with 'react'
```jsx
import { useRef } from 'react'
```
# Challenge
```

/* 
    - Create a login folder within auth.
        - Create a JSX file called login (consider how the file/folder should be set)
    - Create a functional component called Login
    - Setup a form:
        - Above the form, make an h2 that displays "Login"
        - Use components from Reactstrap (hint: consider Signup)
        - No labels are required.
        - Two input fields: 
            - email: use a placeholder to denote "Email"
            - password: use a placeholder to denote "Password"
    - Import useRef:
        - create variables to reference both email & password.
        - incorporate within the Input components
    - Handle Submit
        - Set the form to fire off an async function called "handleSumbit"
            - write is as an arrow function.
        - Within the function
            - console.log both useRef variables that were established.
    - Export the component.
    - Import & mount the Login component within Auth.jsx
        - Note: Frame the component in the same fashion as Signup.
*/
```

# useEffect()
- Allows us to perform side effects in functional components.
- Accepts two arguments
  - function
  - dependency
    - optional
    - Can denote a specific event to to trigger

```js
useEffect(() => {
  // Runs on every render
});

useEffect(() => {
  // Runs only on the first render
}, []);

useEffect(() => {
  // Runs on first render
  // Runs any time any dependency changes
}, [state]);
```