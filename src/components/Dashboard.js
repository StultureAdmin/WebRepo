import React, { useState } from "react"
import { AiOutlineHome ,AiOutlineUser} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi'
import { Card, Nav} from "react-bootstrap"
import Profile from "./Profile";
import Search from "./Search"
import Home from "./Home";


export default function Dashboard() {
  const [setting, setSetting] = useState("profile")
  return (
    <>
      <Card>
        <Card.Body >
          {setting=="profile" && <Profile/>}
          {setting=="home" && <Home/>}
          {setting=="search" && <Search/>}
        </Card.Body>
        <Nav activeKey="/home" 
             style={{justifyContent:"space-around"}}
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
      
    </>
  )
}
