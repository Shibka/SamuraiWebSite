import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' className={s.item} activeClassName={s.activeLink}>Friends</NavLink>
                <img className={s.item_img} src="https://i.pinimg.com/736x/bb/30/32/bb30326dda4f8240abb3ac64b4804583.jpg" alt="Avatar"/>
                <img className={s.item_img} src="https://i.pinimg.com/736x/bb/30/32/bb30326dda4f8240abb3ac64b4804583.jpg" alt="Avatar"/>
                <img className={s.item_img} src="https://i.pinimg.com/736x/bb/30/32/bb30326dda4f8240abb3ac64b4804583.jpg" alt="Avatar"/>
                </div>
        </nav>
    )
}
export default Navbar