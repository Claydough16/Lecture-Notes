import './App.css';
import Auth from './components/auth/Auth';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

function App() {

    const [sessionToken, setSessionToken] = useState('')

    // console.log(sessionToken)
    const updateToken = newToken => {
        localStorage.setItem("token", newToken);
        setSessionToken(newToken);
    }

    console.log('TOKEN: ', sessionToken)

    useEffect(() => {
        if(localStorage.getItem('token')) {
            setSessionToken(localStorage.getItem('token'));
        }
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route 
                path='/'
                element={<Auth updateToken={updateToken}/>}
                />
                <Route
                path='/movie'
                element={<h2>Movie Section Placeholder</h2>}
                />
            </Routes>
        </div>
    );
}

export default App;

/* 
! Challenge
    - Set the Signup component to store our session token
    - After the user signs up, have the route navigate to the /movie endpoint to display our placeholder page.
*/
