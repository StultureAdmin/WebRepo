import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import {editUserDetails} from '../redux/actions/userActions'

export default function UpdateProfile() {
  const bioRef = useRef()
  const collegeRef = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  function handleSubmit(e) {
    e.preventDefault()
    const promises = []
    setLoading(true)
    setError("")
    const userData = {
      bio: bioRef.current.value,
      college: collegeRef.current.value
    }
    dispatch(editUserDetails(userData))
    setLoading(false)
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="bio">
              <Form.Label>Short Bio</Form.Label>
              <Form.Control
                type="text"
                ref={bioRef}
                placeholder="Short Description"
              />
            </Form.Group>
            <Form.Group id="bio">
              <Form.Label>College Name</Form.Label>
              <Form.Control
                type="text"
                ref={collegeRef}
                placeholder="Short Description"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </>
  )
}
