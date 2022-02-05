import {SET_USER, SET_ERRORS, CLEAR_ERRORS,GET_PARTICULAR_USER,  LOADING_UI ,LOADING_USER} from '../type';
import axios from "axios"

export const loginUser = (userData, history) => (dispatch)=> {
    dispatch({ type: LOADING_UI });
    axios
      .post('/login', userData)
      .then((res) => {
        console.log(res.data.token)
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
      })
      .then(
        history.push('/')
      )
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data
        });
      });
  };

export const editUserDetails = (userDetails) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios
      .post('/user', userDetails)
      .then(() => {
        dispatch(getUserData());
      })
      .catch((err) => console.log(err));
  };

export const getRequestedUser = (requestedUser) => (dispatch) => {
    dispatch({ type: LOADING_USER });
    console.log(requestedUser)
    axios
      .post('/user/handle', requestedUser)
      .then(res => {
        console.log(res)
        dispatch({
          type:GET_PARTICULAR_USER,
          payload: res.data
        });
      })
      .catch((err) => console.log(err));
  };


export const getUserData = () => (dispatch) => {
    axios.get('/user')
        .then(res=>{
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        }).catch(err => console.log(err));
}

export const uploadImage = (formData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user/image', formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const uploadProjectImage = (formData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post('/user/competitionImage', formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
  };