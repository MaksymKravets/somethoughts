import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
        <img
          src="https://seeklogo.com/images/P/Pepe_Legal-logo-77CDE0E338-seeklogo.com.png"
          alt="logo"
        />
        <div className={s.loginBlock}>
        { props.isAuth 
        ? <div>{props.login} <button onClick={props.logout}>Log out</button> </div>
        : <NavLink to={'/login'}>Login</NavLink> }
        </div>
      </header>
    )
}

export default Header;