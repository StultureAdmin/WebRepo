import React ,{useState} from 'react'
import { AiFillCamera} from 'react-icons/ai';
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Card, Button, Alert, Nav} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'
import { getCompetionList } from '../redux/actions/dataActions'
import { uploadImage } from '../redux/actions/userActions'

export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const dispatch = useDispatch()
    dispatch(getCompetionList())

    const handleEditPicture = ()=>{
      const fileInput = document.getElementById("imageInput")
      fileInput.click()
    }
    const handleImageChange = (event) =>{
      event.preventDefault()
      const image = event.target.files[0]
      const formData = new FormData()
      formData.append('image',image,image.name);
      dispatch(uploadImage(formData))
    }
    const credentials = useSelector(state=>state.user.credentials)
    async function handleLogout() {
        setError("")
        try {
          await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
    }
    return (
        <div>
        <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {credentials.imageUrl !=null && <>
          <div style={{textAlign:"center",alignItems:"center"}}>
          <img src={credentials.imageUrl} style={{width:"128px"}}/><br/>
          <input id="imageInput" type="file" onChange={handleImageChange} hidden="hidden" />
          <AiFillCamera onClick={handleEditPicture}/>
          </div>
          </>}
          {credentials.bio !=null && <>
          <strong>Bio:</strong> {credentials!=null && credentials.bio}<br/>
          <strong>College:</strong> {credentials!=null && credentials.college}<br/>
          </>
          }
          {credentials.email !=null && <>
          <strong>Handle:</strong> {credentials!=null && credentials.handle}<br/>
          <strong>Email:</strong> {credentials!=null && credentials.email}
          </>
          }
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
           Update Profile
          </Link>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
    )
}
