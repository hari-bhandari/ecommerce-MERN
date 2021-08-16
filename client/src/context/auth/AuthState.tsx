import React, {useReducer} from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../setAuthToken';

import {AUTH} from "../defines";
import {API_BASE_URL} from "@/utils/config";

const AuthState = (props: { children: React.ReactNode; }) => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    error: null,
    token: null,
    loading: false
  };

  const [state, dispatch]: any = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      const token=localStorage.token.replaceAll('"','')
      //sending token to headers
      setAuthToken(token)
      try {
        const res = await axios.get(`${API_BASE_URL}/api/v1/auth/me`);
        dispatch({
          type: AUTH.LOAD_USER,
          payload: {...res.data.data,token}
        })

      } catch (err) {
        dispatch({
          type: AUTH.LOAD_USER_FAIL,
          payload: err.response.data.error
        })
      }
    }
  };

  // register a  User
  const register = async (data:any) => {
    dispatch({
      type: AUTH.SIGN_UP,
      payload: data,
    });

  };
  // Login User
  const login = async (data:any) => {
      dispatch({
        type: AUTH.SIGN_UP,
        payload: data,
      });

  };

  // Logout
  const logout = () => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('persist:root')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    localStorage.removeItem('token')
    dispatch({ type: AUTH.LOG_OUT });
  }

  // Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        loading:state.loading,
        register,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
