import React from "react";
import logo from "../Images/Logo/logo.png";
import './Header.css'
const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="Logo" width={150}/>
        </header>
    )
}
export default Header