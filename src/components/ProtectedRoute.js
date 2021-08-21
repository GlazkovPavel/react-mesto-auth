import React from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";

export const ProtectedRoute = ({ component: Component ,...restProps}) => {
  const isLoggedIn = React.useContext(AuthContext)
  if(!isLoggedIn){
    return <Redirect to="/sign-in"></Redirect>
  }
  return <Route>
    <Component {...restProps} />
  </Route>
}