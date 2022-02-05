import React,{useState} from 'react'
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
    const [expandCompetition,setExpandCompetition] = useState({
        expandedCompetition:"none"
    })
    const history = useHistory()
    const checkifEnrolled = (competition) => {
        return competition.participantsList.filter(participant=>{
            return participant==userHandle
          }).length > 0
    }
    const enrollToCompetitionFn = (competition) => {
        setExpandCompetition({
            expandedCompetition: competition.name
        })
        if (!checkifEnrolled(competition)) {
            dispatch(enrollToCompetition({
                competition:competition.name
            }))
            alert("Enrolled to Competition")
        }
    }
    return (
        <div style={{padding:"12px", backgroundColor:"#151515"}}>
             <h2 className="text-center mb-4">COMPETITIONS</h2>
             <Card style={{backgroundColor:"#151515", color:"white", alignItems:"center"}}>
               { competitions.map((competition)=>{
                  return (
                    <Card.Body style={{alignItems:"center", textAlign:"center"}} onClick={()=>enrollToCompetitionFn(competition)}>
                    <div 
                        style={{ backgroundImage:`url(${background})`, color:"white", padding:20, width:"auto",maxWidth:"350px", borderRadius:"10px" }} 
                        key={competition.name}
                        >
                    <h2>{competition.name}</h2>
                    {expandCompetition.expandedCompetition!=competition.name? <>
                    <p>Slots Available: {competition.participantsList.length}/{competition.maxParticipants}</p>
                    <p>Requirement: {competition.requirement}</p></>:<>
                    <p>{competition.details}</p>
                    <Button onClick={()=>{
                        history.push("/upload")
                    }}>Start</Button>
                    </>}
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