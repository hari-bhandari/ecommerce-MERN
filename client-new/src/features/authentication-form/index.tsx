import React, {useState} from 'react';
import SignInForm from './login';
// import SignOutForm from './register';
// import ForgotPassForm from './forgot-password';
import { useSelector } from "react-redux";
import {useEffect} from "react";
// @ts-ignore
import {closeModal} from "@redq/reuse-modal";

const AuthenticationForm=()=> {
  const {isAuthenticated} = useSelector((state:any) => state.globalReducer);
  const [currentForm,setCurrentForm]=useState<'signUp'|'forgotPass'|'signIn'>('signIn')
  useEffect(()=>{
    if(isAuthenticated){
      closeModal()
    }
  },[isAuthenticated])
  let RenderForm;
  if (currentForm === 'signIn') {
    return <SignInForm/>
  }

  if (currentForm === 'signUp') {
    return <SignInForm/>
  }

  if (currentForm ===  'forgotPass') {
    return <SignInForm/>
  }

}
export default AuthenticationForm