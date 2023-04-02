import React from "react";
import "./App.css";
import Header from "./Header";
import Technologies from "./Technologies";
import Footer from "./Footer";
import Logo from './Images/Logo.jpg';
const App = () => {
    return (
        <div>
            <header>
                <img src={Logo} alt="Logo" width={150}/>
            </header>
            <Technologies/>
            <Footer />
        </div>
    );
}


export default App;