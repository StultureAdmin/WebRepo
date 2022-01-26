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
      <Card style={{background:"none", border:"none"}}>
        <Card.Body>
          <h2 className="text-center mb-4">
          <img src={logo} style={{width:92}}/>
          </h2>
          
          {error && <Alert variant="danger">{error}</Alert>} 
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Control type="email" ref={emailRef} required  placeholder="player-id"  style={{textAlign:"center"}}/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Control type="password" ref={passwordRef} required placeholder="password" style={{textAlign:"center"}}/>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit" style={{background:"#e9004f"}}>
            {loading ? <Spinner/>:"Start"}
            </Button>
            <Spinner/>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2" style={{color:"white"}}>
        Create a new account ? <Link to="/signup">Sign Up</Link>
      </div>

    </>
  )
}