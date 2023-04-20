import React from "react";
import "./App.css";
import logo from './Images/Logo/logo.png';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src={logo} alt="Logo" width={150}/>
            </header>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className='content'>Main Content</div>
        </div>
    );
}


export default App;