import React, { useState } from 'react';


function Counter(props) {

    const[ count , setCount ] = useState(0)

    function Increment () {
        setCount(count + 1)
        // console.log(count)
}

    function Decrement () {
        setCount(count - 1)
        // console.log(count)
    }

    return (
        <div className ='counter'>
            <button onClick={Increment}>+</button>
            <span className = 'counter'>Count is: {count}</span>
            <button onClick={Decrement}>-</button>
        </div>
    )
}

export default Counter

/* 
  ! Challenge:
    - Build out a Counter Component which will have two buttons (+), (-) and a span element that will take its value from a count state variable.
      - This should be within it's own folder.
    - Create two functions that will work as onClick event listeners.
      - One function will increment the current state.
      - One function will decrement the current state.
      
    Hard Mode:
      - Leave the count inside App.jsx
  */