import {SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../type';

const initialState = {
    autheticated: false,
    credentials: {},
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
        default:
            return state
    }
}