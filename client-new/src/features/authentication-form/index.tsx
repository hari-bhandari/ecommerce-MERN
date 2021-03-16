import React, {useState} from 'react';
import SignInForm from './login';
import SignUp from './register';
// import ForgotPassForm from './forgot-password';
import { useSelector } from "react-redux";
import {useEffect} from "react";
// @ts-ignore
import {closeModal} from "@redq/reuse-modal";

const AuthenticationForm=()=> {
  const {isAuthenticated} = useSelector((state:any) => state.globalReducer);
  const [currentForm,setCurrentForm]=useState<'signUp'|'forgotPass'|'signIn'>('signUp')
  useEffect(()=>{
    if(isAuthenticated){
      closeModal()
    }
  },[isAuthenticated])
  if (currentForm === 'signIn') {
    return <SignInForm/>
  }

  if (currentForm === 'signUp') {
    return <SignUp/>
  }

  if (currentForm ===  'forgotPass') {
    return <SignInForm/>
  }

}
export default AuthenticationForm
