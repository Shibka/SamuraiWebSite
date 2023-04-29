import React from "react";
import logo from "../Images/Logo/logo.png";
import s from './Header.module.css'
const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="Logo" width={150}/>
        </header>
    )
}
export default Header