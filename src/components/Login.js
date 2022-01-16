import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert,Spinner } from "react-bootstrap"
import logo from "../assets/logo.png"
import { Link, useHistory } from "react-router-dom"
//Redux Stuff 
import {useDispatch} from 'react-redux'
import {loginUser} from '../redux/actions/userActions'

export default function Login() {
  const emailRef = useRef()
  const dispatch = useDispatch()
  const passwordRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const userData = {
      email : emailRef.current.value,
      password : passwordRef.current.value
    }
    dispatch(loginUser(userData, history))
    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">
          <img src={logo} style={{width:92}}/>
          </h2>
          
          {error && <Alert variant="danger">{error}</Alert>} 
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
            {loading ? <Spinner/>:"Login"}
            </Button>
            <Spinner/>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2" style={{color:"white"}}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>

    </>
  )
}