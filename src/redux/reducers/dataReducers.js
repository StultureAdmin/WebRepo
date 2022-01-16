import {GET_COMPETITION ,GET_LIST_OF_USER} from '../type';

const initialState = {
    competitions :{},
    listOfUsers: []
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_COMPETITION:
            return {
                ...state,
                competitions: action.payload
            }
        case GET_LIST_OF_USER: 
            return {
                ...state,
                listOfUsers: action.payload
            }
        default:
            return state
    }
}