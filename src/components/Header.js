import React from "react";
import logo from "../images/mesto.svg";
import { Route, Link} from "react-router-dom";



function Header() {

  return(
        <header className="header">
          <img className="header__logo" src={logo} alt="Место" />
          <Route path="/sign-up">
            <Link to="/sign-in" className="header__button">Войти</Link>
          </Route>
          <Route path="/sign-in">
            <Link to="/sign-up" className="header__button">Регистрация</Link>
          </Route>
          <Route exact path="/">
            <div className="header__container">
              <p className="header__email">Email</p>
              <button className="header__button">Выйти</button>
            </div>
          </Route>
        </header>
    )
}
export default Header;