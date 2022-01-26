import React ,{useState,useEffect} from 'react'
import { AiFillCamera} from 'react-icons/ai';
import { Link, useHistory } from "react-router-dom"
import { CircularProgressbarWithChildren ,buildStyles} from 'react-circular-progressbar';
import { Alert} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'

import { uploadImage } from '../redux/actions/userActions'

export default function Profile() {
  const [error,setError] = useState("")
   const dispatch = useDispatch()
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
    return (
        <div style={{backgroundColor:"#02013D", color:"#FF0054", height:"95vh", padding:"20px", textAlign:"center"}}>
          <h2 className="text-center mb-4">{credentials.handle}</h2>
             {error && <Alert variant="danger">{error}</Alert>}
          {credentials.imageUrl !=null && <>
            <div style={{textAlign:"center",alignItems:"center"}}>
              <div style={{width:"196px",margin:"auto"}}>
                <CircularProgressbarWithChildren  value={20} styles={buildStyles({
                    rotation: 0.52,
                    strokeLinecap: 'butt',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: '#ff0052',
                })} >
                <div style={{borderRadius:"12px"}}>
                  <img src={credentials.imageUrl} style={{width:"166px", borderRadius:"50%"}}/>
                </div>
                </CircularProgressbarWithChildren>
              </div>
              <input id="imageInput" type="file" onChange={handleImageChange} hidden="hidden" />
              <AiFillCamera onClick={handleEditPicture}/>
            </div>
          </>}
          {credentials.points} Points<br/>
          {credentials.bio !=null && <>
          <strong>"{credentials!=null && credentials.bio}"</strong><br/>
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
            {/* <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button> */}
          </div>
        </div>
    )
}
