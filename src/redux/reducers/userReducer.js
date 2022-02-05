import {SET_USER, SET_ERRORS, GET_PARTICULAR_USER, CLEAR_ERRORS, LOADING_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../type';

const initialState = {
    autheticated: false,
    credentials: {},
    requestedCredentials: {},
};

export default function(state=initialState,action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                autheticated:true
            }
        case SET_UNAUTHENTICATED:
            return initialState
        case LOADING_USER:
                return {
                  ...state,
                  loading: true
                };
        case SET_USER:
            return {
                authenticated:true,
                ...action.payload
            }
        case GET_PARTICULAR_USER:
            return {
                ...state,
                requestedCredentials:action.payload
            }    
        default:
            return state
    }
}