import React,{useState} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {Card} from 'react-bootstrap'
import { getRequestedUser } from '../redux/actions/userActions';
export default function Search(props) {
   const dispatch = useDispatch()
   const users = useSelector(state=>state.users.users)
   const [department,setDepartment] = useState(false)
   const filteredUsers = users.filter((user)=>{
       return user.college="UID"
   })
    return (
        <div style={{background:"white",color:"black", padding:"20px"}} >
            <h2>Explore</h2>
            <div>
            <p>
                Institutions
            </p>
            <Card style={{border:"0px"}}>
                <Card.Body onClick={()=>{
                    setDepartment(!department)
                }}>
                <div style={{ background:"yellow", color:"black", padding:20 , borderRadius:"20px"}}>
                   <h2>UID</h2>
                   <p>United World Institute of Design</p>
                </div>   
                {department && <>
                    <ul class="list-group">
                        {
                            filteredUsers.map((user)=>{
                                return(
                                    <li class="list-group-item"
                                    onClick={
                                        ()=>{
                                            dispatch(getRequestedUser({
                                                handle:user.handle
                                            }))
                                            props.setSetting("reqProfile")
                                        }
                                    }
                                    >{user.handle}</li>
                                )
                            })
                        }
                    </ul>  
                </>}        
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}
