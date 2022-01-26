import React from 'react'
import {Card,Button} from 'react-bootstrap'
import background from '../assets/elysium.jpg'
import comingSoon from '../assets/locked_competition.png'
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom"
import {enrollToCompetition} from '../redux/actions/dataActions'
export default function Home() {
    const competitions = useSelector(state=>state.data.competitions)
    const userHandle = useSelector(state=>state.user.credentials.handle)
    const dispatch = useDispatch()
    const history = useHistory()
    const checkifEnrolled = (competition) => {
        return competition.participantsList.filter(participant=>{
            return participant==userHandle
          }).length > 0
    }
    const enrollToCompetitionFn = (competition) => {
        if (!checkifEnrolled(competition)) {
            dispatch(enrollToCompetition({
                competition:competition.name
            }))
            alert("Enrolled to Competition")
        } else {
            alert("Already enrolled")
            history.push("/upload")
        }
    }
    return (
        <div style={{padding:"12px"}}>
             <h2 className="text-center mb-4">COMPETITIONS</h2>
             <Card style={{backgroundColor:"#151515", color:"white", alignItems:"center"}}>
               { competitions.map((competition)=>{
                  return (
                    <Card.Body style={{alignItems:"center"}} onClick={()=>enrollToCompetitionFn(competition)}>
                    <div 
                         style={{ backgroundImage:`url(${background})`, color:"white", padding:20, width:"auto",maxWidth:"350px", borderRadius:"10px" }} 
                        key={competition.name}
                        >
                    <h2>{competition.name}</h2>
                    <p>Slots Available: {competition.participantsList.length}/{competition.maxParticipants}</p>
                    <p>Requirement: {competition.requirement}</p>
                     {/* <Button onClick={()=>dispatch(enrollToCompetition({
                         competition:competition.name
                     }))} disabled={checkifEnrolled(competition)}>
                     {checkifEnrolled(competition)?"Enrolled":"Enter"}
                     </Button> 
                     <Button hidden={!checkifEnrolled(competition)} onClick={()=>{
                         history.push("/upload")
                     }}>
                      Upload
                     </Button> */}
                    </div> 
                    </Card.Body>
                  )
               })}
               
                <Card.Body>
                    <div style={{textAlign:"center"}}>
                        <img src={comingSoon} style={{height:"250px", borderRadius:"10px", width:"350px"}}/>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}