import React from "react";
import "./App.css";
import logo from './Images/Logo/logo.png';
import MainBackground from './Images/MainBackground/MainBackground.jpg'

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
            <div className='content'>
                <div>
                    <img src={MainBackground} alt="Background" width={1000}/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default App;