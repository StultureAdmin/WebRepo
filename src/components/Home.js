import React from 'react'
import {Card,Button} from 'react-bootstrap'
import background from '../assets/elysium.jpg'
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
    return (
        <div>
             <h2 className="text-center mb-4">COMPETITIONS</h2>
             <p>
                "If its humanely possible then consider it within your reach"
             </p>
             <Card>
                <Card.Body>
               { competitions.map((competition)=>{
                  return (
                    <div style={{ backgroundImage:`url(${background})`, color:"white", padding:20 }} key={competition.name}>
                    <h2>{competition.name}</h2>
                    <p>Slots Available: {competition.participantsList.length}/{competition.maxParticipants}</p>
                    <p>Requirement: {competition.requirement}</p>
                     <Button onClick={()=>dispatch(enrollToCompetition({
                         competition:competition.name
                     }))} disabled={checkifEnrolled(competition)}>
                     {checkifEnrolled(competition)?"Enrolled":"Enter"}
                     </Button> 
                     <Button hidden={!checkifEnrolled(competition)} onClick={()=>{
                         history.push("/upload")
                     }}>
                      Upload
                     </Button>
                    </div> 
                  )
               })}
                </Card.Body>
            </Card>
        </div>
    )
}