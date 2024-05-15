import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav.jsx";
import Welcome from "./components/welcome/Welcome.jsx";
import Counter from "./components/counter/Counter.jsx";
import AddUser from "./components/add-user/AddUser.jsx";

function App() {
    // const name = "Sam"
    const [names, setNames] = useState([]);

    const displayWelcome = () => {
        return names.map((name, index) => {
            return (
                <Welcome
                    key={index}
                    name={name}
                    names={names} // obtaining our full array of our state
                    setNames={setNames} // passing ability to invoke our updateState
                />
            );
        });
    };

    return (
        <div className="App">
            <Nav />
            <AddUser names={names} setNames={setNames}/>
            {names.length > 0 ? (
                displayWelcome()
            ) : (
                <h1 style={{ textAlign: "center" }}>Add a User</h1>
            )}
            <Counter />
        </div>
    );
}

export default App;
