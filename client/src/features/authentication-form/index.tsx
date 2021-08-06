import React, {useContext, useState} from 'react';
import SignInForm from './login';
import SignUp from './register';
import ForgotPassForm from './forgot-password';
import { useSelector } from "react-redux";
import {useEffect} from "react";
import {withRouter} from "next/router";
// @ts-ignore
import {closeModal} from "@haribhandari/react-popup-modal";
import authContext from "@/context/auth/authContext";
const AuthenticationForm=({router})=> {
  const auth = useContext(authContext);
  const { isAuthenticated } = auth;  const [currentForm,setCurrentForm]=useState<'signUp'|'forgotPass'|'signIn'>('signUp')
  useEffect(()=>{
    if(isAuthenticated){
      if(router.pathname==='/login'){
            router.push('/')
      }else {
        closeModal()
      }
    }
  },[isAuthenticated])
  if (currentForm === 'signIn') {
    return <SignInForm  setCurrentForm={setCurrentForm}/>
  }

  if (currentForm === 'signUp') {
    return <SignUp setCurrentForm={setCurrentForm}/>
  }

  if (currentForm ===  'forgotPass') {
    return <ForgotPassForm  setCurrentForm={setCurrentForm}/>
  }

}
export default withRouter(AuthenticationForm)
