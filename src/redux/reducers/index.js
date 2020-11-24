import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import logoutReducer from './reducerLogout'

const allReducers = combineReducers({
    login: loginReducer,
    logout: logoutReducer
});


export default allReducers;

