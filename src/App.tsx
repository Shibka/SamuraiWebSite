import React from "react";
import "./App.css";
import logo from './Images/logo.png';

const App = () => {
    return (
        <div>
            <header>
                <img src={logo} alt="Logo" width={150}/>
            </header>
            <nav>
                <div>Profile</div>
                <div>Messages</div>
            </nav>
            <div>Main Content</div>
        </div>
    );
}


export default App;