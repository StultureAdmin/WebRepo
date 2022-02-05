import { SET_USERS } from "../type";

const initialState = {
    users : []
}


export default function(state=initialState,action){
    switch(action.type){
        case SET_USERS:
            return {
                users:action.payload
            }
        default:
            return state
    }
}