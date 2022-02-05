import { SET_USERS} from "../type";
import axios from "axios";

export const getListOfUsers = () => (dispatch) => {
    axios.get('/users')
    .then(res=>{
        dispatch({
            type: SET_USERS,
            payload: res.data
        })
    }).catch(err => console.log(err));
  };
