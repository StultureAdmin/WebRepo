import { GET_COMPETITION , GET_LIST_OF_USER} from "../type";
import axios from "axios";

export const getCompetionList = () => (dispatch) => {
    axios.get('/getCompetitionList')
    .then(res=>{
        dispatch({
            type: GET_COMPETITION,
            payload: res.data
        })
    }).catch(err => console.log(err));
  };

export const getListOfUsersByCollege = (collegeData) => (dispatch) => {
    console.log("Data", collegeData)
    axios.get('/getUsersByCollege',collegeData)
    .then(res=>{
        dispatch({
            type: GET_LIST_OF_USER,
            payload: res.data
        })
    }).catch(err => console.log(err));
}

export const enrollToCompetition = (competitionData) => (dispatch) => {
    console.log(competitionData)
    axios.post('/enrollToCompetition',competitionData).then( res=>{
        dispatch(getCompetionList())
        console.log(res)
        }).catch(err => console.log(err));
}