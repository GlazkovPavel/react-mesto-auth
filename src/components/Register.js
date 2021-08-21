import React from "react";
import {Link} from "react-router-dom";

export function Register() {
  return(
      <div className="login">
        <p className="login__title">Регистрация</p>
        <form className="login__form" typeof="form">
          <input className="login__input" type="email" placeholder="Email" required minLength="2" maxLength="40" />
          <input className="login__input" type="password" placeholder="Пароль" required minLength="2" maxLength="40" />
        </form>
        <button className="login__button">Зарегистрироваться</button>
        <Link className="login__link" to="/">Уже зарегистрированы? Войти</Link>
      </div>
  )
}