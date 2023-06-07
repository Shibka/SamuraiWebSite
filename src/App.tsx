import React from "react";
import "./App.css";
import logo from './Images/Logo/logo.png';
import MainBackground from './Images/MainBackground/MainBackground.jpg'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

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