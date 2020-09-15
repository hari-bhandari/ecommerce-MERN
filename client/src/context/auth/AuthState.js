
import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
const AuthState=props=>{
    const initialState = {
        token: '',
        isAuthenticated: false,
        loading: true,
        user: null,
        error: null
    };
    const[state,dispatch]=useReducer(authReducer,initialState)
    return(
        <AuthContext.Provider value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            error:state.error
        }}>{props.children}</AuthContext.Provider>
    )


}
export default AuthState;