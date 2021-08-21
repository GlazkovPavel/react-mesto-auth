import React from "react";
import logo from "../images/mesto.svg";
import {Route, Switch} from "react-router-dom";

function Header() {
    return(
        <header className="header">
          <img className="header__logo" src={logo} alt="Место" />
          <div className="header__container">
            <p className="header__email">Email</p>
            <button className="header__button">Войти</button>
          </div>

        </header>
    )
}
export default Header;