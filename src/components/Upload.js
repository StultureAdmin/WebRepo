import React, { useState } from "react"
import { AiOutlinePlus} from 'react-icons/ai';
import {Button, Card} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'
import { uploadProjectImage } from '../redux/actions/userActions'

export default function Upload() {
    const [profileImg,setProfileImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
    const imageUploaded = useSelector(state=>state.user.credentials.competitionImageList)
    const activeCompetition = useSelector(state=>state.user.credentials.activeCompetition)
    const dispatch = useDispatch()
    let totalImageUploaded = 0
    if (imageUploaded != null) {
    totalImageUploaded = imageUploaded.filter((image)=>{
      return image.competitionName==activeCompetition
        }).length
    }
    const handleEditPicture = ()=>{
        const fileInput = document.getElementById("imageUpload")
        fileInput.click()
      }
    const handleImageChange = (event) =>{
        event.preventDefault()
        const image = event.target.files[0]
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setProfileImg(reader.result)
            }
          }
        reader.readAsDataURL(event.target.files[0])
        const formData = new FormData()
        formData.append('image',image,image.name);
        dispatch(uploadProjectImage(formData))
      }
  return (
    <Card>
        <Card.Body style={{alignItems:"center",textAlign:"center"}} >
           { totalImageUploaded < 6 ?
            <>
            Upload Image {totalImageUploaded+1}/6
            <div className="img-holder" style={{alignItems:"center",textAlign:"center"}}>
				<img src={profileImg} alt="" id="img" className="img" width="80%"/>
                <input id="imageUpload" type="file" onChange={handleImageChange} hidden="hidden" />
			</div>
            <Button onClick={handleEditPicture}><AiOutlinePlus /></Button>
            </>:"You've already uploaded all the images"}
        </Card.Body>      
      </Card>
  )
}
