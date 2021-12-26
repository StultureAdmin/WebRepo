import React from "react"
import { Gradient } from 'react-gradient';
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

const gradients = [
  ["#090041", "#680031"],
  ["#090041", "#680031"],
];

function App() {
  return (
    <div>
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
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
    </Gradient>
    </div>
  )
}

export default App
