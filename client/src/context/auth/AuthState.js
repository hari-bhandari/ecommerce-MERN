
import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
    GET_TOKEN, REMOVE_TOKEN,LOAD_USER,LOAD_USER_FAIL
} from '../types'
const AuthState=props=>{
    const initialState = {
        token: '',
        isAuthenticated: false,
        loading: true,
        user: null,
        error: null
    };
    //get logged in user
    const loadUser=async ()=>{
        if(localStorage.token){
            //method
        }
        try{
            const res =await axios.get('/api/auth/me');
            dispatch({
                type:LOAD_USER,
                payload:res.data.data
            })

        }catch (err) {
            dispatch({
                type:REMOVE_TOKEN,
                payload:err.response.data.error
            })
        }
    };
    //get user logged in using
    const getUserLoggedIn=async (formData)=>{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post('/api/auth/login', formData, config);

            dispatch({
                type: GET_TOKEN,
                payload: res.data.token
            });


        } catch (err) {
            dispatch({
                type: REMOVE_TOKEN,
                payload: err.response.data.error
            })
        }


    }
    const[state,dispatch]=useReducer(authReducer,initialState)
    return(
        <AuthContext.Provider value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            error:state.error,
            getUserLoggedIn
        }}>{props.children}</AuthContext.Provider>
    )


}
export default AuthState;