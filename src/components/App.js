import React from "react"
import { Gradient } from 'react-gradient';
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import {Provider} from 'react-redux'
import store from "../redux/store"
import jwtDecode from 'jwt-decode'
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Upload from "./Upload"
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "../util/AuthRoute";
const gradients = [
  ["#090041", "#680031"],
  ["#090041", "#680031"],
];
function App() {
  return (
    <Provider store={store}>
      <Gradient
        gradients={ gradients } // required
        property="background"
        duration={ 3000 }
        angle="45deg"
      >
    <Container
      className="d-flex align-items-center justify-content-center w-100"
      style={{ minHeight: "100vh"}}
    >
      <div className="w-100" style={{ maxWidth: "400px"}}> 
        <Router>
          <AuthProvider>
            <Switch>
              <AuthRoute exact path="/login" component={Login}/>
              <AuthRoute exact path="/signup" component={Signup}/>
              <PrivateRoute path="/update-profile" component={UpdateProfile}/>
              <PrivateRoute exact path="/upload" component={Upload}/>
              <PrivateRoute path="/" component={Dashboard}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
    </Gradient>
    </Provider>
  )
}

export default App
