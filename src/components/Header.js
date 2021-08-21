import React from "react";
import logo from "../images/mesto.svg";
import {AuthContext} from "../contexts/AuthContext";
import {useLocation} from "react-router-dom";



function Header() {
  const isLoggedIn = React.useContext(AuthContext)
  let location = useLocation();
  console.log(location);
  return(
        <header className="header">
          <img className="header__logo" src={logo} alt="Место" />
          <div className="header__container">
            <p className="header__email">{ isLoggedIn ? 'Email' : ''}</p>
            <button className="header__button">{ isLoggedIn ? 'Выйти' : 'Войти'}</button>
          </div>

        </header>
    )
}
export default Header;