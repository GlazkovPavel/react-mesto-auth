import React from "react";

export function Login() {
  return(
      <div className="login">
        <p className="login__title">Вход</p>
        <form className="login__form" typeof="form">
          <input className="login__input" type="email" placeholder="Email" required minLength="2" maxLength="40" />
          <input className="login__input" type="password" placeholder="Пароль" required minLength="2" maxLength="40" />
        </form>
        <button className="login__button">Войти</button>
      </div>
  )
}