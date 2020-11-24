import axios from 'axios'
import * as actionTypes from '../types/logoutTypes';



export const logout = (history) => async(dispatch) => {
    try {
        
        dispatch(logoutRequest());
        const res = await axios.get('https://phanton-back-ft-logout--xiikam.herokuapp.com/api/v1/auth/logout')
        localStorage.removeItem('token')
        history.push("/login")
        dispatch(logoutSuccess(res))
        console.log('Response', res)
    } catch (error) {
        console.log(error)
        dispatch(logoutError(error))
    }    
};
    
export const logoutRequest = () =>{
    return { type: actionTypes.LOGOUT_REQUEST }
}  

export const logoutSuccess = (data) =>{
    
    return { 
        type: actionTypes.LOGOUT_SUCCESS,
        payload: data
        
    }
}  

export const logoutError = (error) =>{
    return { 
        type: actionTypes.LOGOUT_ERROR,
        payload: error
    }
}  




