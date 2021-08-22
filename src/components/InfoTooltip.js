import React from "react";
import {AuthContext} from "../contexts/AuthContext";
import success from '../images/success.svg'
import fail from '../images/Unionfail.svg'

export function InfoTooltip(props){

  const isLoggedIn = React.useContext(AuthContext)
  const handleText = () => {
    return isLoggedIn ? 'Что-то пошло не так! Попробуйте ещё раз.' : 'Вы успешно зарегистрировались!'
  }

  const handleImage = () => {
    return isLoggedIn ? fail : success
  }

  return(
      <div className="popup">
        <div className="popup__container">
          <button className="popup__close" type="button" onClick={props.onClose}></button>
          <img className="infoTooltip__image" src={handleImage} alt="" />
          <p className="infoTooltip__title">{handleText}title</p>
        </div>
      </div>
  )
}