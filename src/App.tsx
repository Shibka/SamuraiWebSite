import React from "react";
import "./App.css";
import logo from './Images/Logo/logo.png';
import MainBackground from './Images/MainBackground/MainBackground.jpg'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


export default App;