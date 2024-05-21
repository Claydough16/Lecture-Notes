import './App.css';
import Auth from './components/auth/Auth';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import MovieIndex from './components/movie/MovieIndex';

function App() {

    const [sessionToken, setSessionToken] = useState('')

    // console.log(sessionToken)
    const updateToken = newToken => {
        localStorage.setItem("token", newToken);
        setSessionToken(newToken);
    }

    // console.log('TOKEN: ', sessionToken)

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
                element={<MovieIndex token={sessionToken}/>}
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
