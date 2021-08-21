import React from "react";
import {AuthContext} from "../contexts/AuthContext";
import success from '../images/success.svg'
import fail from '../images/Unionfail.svg'

export function InfoTooltip(){

  const isLoggedIn = React.useContext(AuthContext)
  const handleText = () => {
    return isLoggedIn ? 'Что-то пошло не так! Попробуйте ещё раз.' : 'Вы успешно зарегистрировались!'
  }

  const handleImage = () => {
    return isLoggedIn ? fail : success
  }

  return(
      <div className="infoTooltip">
        <img className="infoTooltip__image" src={handleImage} alt="" />
        <p className="infoTooltip__title">{handleText}</p>
      </div>
  )
}