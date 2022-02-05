import React ,{useState,useEffect} from 'react'
import { AiFillCamera} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import { Link, useHistory } from "react-router-dom"
import { CircularProgressbarWithChildren ,buildStyles} from 'react-circular-progressbar';
import { Alert} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'

import { uploadImage } from '../redux/actions/userActions'

export default function Profile({authenticated}) {
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
    let credentials = useSelector(state=>state.user.credentials)
    const requestedCredentials  = useSelector(state=>state.user.requestedCredentials)
    if (authenticated===false && requestedCredentials != null){
      credentials = requestedCredentials.credentials
    }
    return (
        <div style={{backgroundColor:"#02013D", color:"#FF0054", height:"95vh", padding:"20px", textAlign:"center"}}>
          <h2 className="text-center mb-4">{credentials != null && credentials.handle}</h2>
          {authenticated && <div style={{textAlign:"right"}}><Link to="/update-profile">
          <FiSettings/>
          </Link><span></span></div>}
             {error && <Alert variant="danger">{error}</Alert>}
          {credentials != null && credentials.imageUrl !=null && <>
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
                  <img src={credentials != null && credentials.imageUrl} style={{width:"166px", borderRadius:"50%"}}/>
                </div>
                </CircularProgressbarWithChildren>
              </div>
              <input id="imageInput" type="file" onChange={handleImageChange} hidden="hidden" />
              <AiFillCamera onClick={handleEditPicture}/>
            </div>
          </>}
          {credentials != null && credentials.points} Points<br/>
          {credentials != null && credentials.bio !=null && <>
          <strong>"{credentials!=null && credentials.bio}"</strong><br/>
          </>
          }
          <>
          <div style={{alignItems:"center"}}>
          <table style={{marginLeft:"auto", marginRight:"auto" , color:"orange", width:"80%" , marginTop:"20px", marginBottom:"20px"}}>
            <tr>
            <th>Skills</th>
            <th>Hobbies</th>
          </tr>
          <tr>
           </tr>
          <tr>
          <td colSpan={2}>TBA</td>
          </tr>
          <tr>
          <th>Education</th>
          <th>Language</th>
          </tr>
        </table>
        <h5> CONTACT </h5>
        </div>
          </>
          {credentials != null && credentials.email !=null && <>
          {credentials!=null && credentials.email}
          </>
          }
          <div className="w-100 text-center mt-2">
            {/* <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button> */}
          </div>
        </div>
    )
}
