import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducers/userReducer'
import dataReducer from './reducers/dataReducers'
import uiReducer from './reducers/uiReducer'
import usersReducer from './reducers/usersReducer'

const initialState = [];

const middleware = [thunk];

const  reducers = combineReducers({
    user:userReducer,
    data:dataReducer,
    ui: uiReducer,
    users: usersReducer,
})
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);
export default store;