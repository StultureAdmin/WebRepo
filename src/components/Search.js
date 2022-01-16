import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {getListOfUsersByCollege} from '../redux/actions/dataActions'
export default function Search() {
   const dispatch = useDispatch()
    return (
        <div>
            <h2>Explore</h2>
            <div>
            <p>
                Institutions
            </p>
            <Card>
                <Card.Body>
                <div style={{ background:"yellow", color:"black", padding:20 }}>
                   <h2>UID</h2>
                   <p>United World Institute of Design</p>
                   {dispatch(getListOfUsersByCollege({
                       college:"UID"
                   }))}
                </div>          
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}
