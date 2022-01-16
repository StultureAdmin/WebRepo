import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }) {
  const authenticated = useSelector(state=>state.user.authenticated)
  return (
    <Route
      {...rest}
      render={props => {
        return authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
