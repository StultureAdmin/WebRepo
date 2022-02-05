import React, { useState ,useEffect} from "react"
import { AiOutlineHome ,AiOutlineUser} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi'
import { Card, Nav} from "react-bootstrap"
import { getCompetionList } from '../redux/actions/dataActions'
import { useDispatch } from "react-redux";
import Profile from "./Profile";
import Search from "./Search"
import Home from "./Home";
import { getListOfUsers } from "../redux/actions/usersAction";


export default function Dashboard() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCompetionList())
    dispatch(getListOfUsers())
  },[])
  const [setting, setSetting] = useState("profile")
  return (
    <div>
      <Card style={{backgroundColor:"white", 
                    color:"white",
                    height:"100vh",
                    width:"100vw" }}>
        <Card.Body style={{padding:"0px"}}>
          {setting=="profile" && <Profile authenticated={true}/>}
          {setting=="reqProfile" && <Profile authenticated={false}/>}
          {setting=="home" && <Home/>}
          {setting=="search" && <Search setSetting={setSetting}/>}
        </Card.Body>
        <Nav activeKey="/home" 
             style={{justifyContent:"space-around", backgroundColor:"white"}}
             onSelect={(selectedKey) => {setSetting(selectedKey)}}>
            <Nav.Item>
              <Nav.Link eventKey="home"><AiOutlineHome/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="search"><BiSearch/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="profile"><AiOutlineUser/></Nav.Link>
            </Nav.Item>
          </Nav>
      </Card>
    </div>
  )
}
