import React from 'react';
import SignInForm from './login';
import SignOutForm from './register';
import ForgotPassForm from './forgot-password';
import { useSelector } from "react-redux";
import {useEffect} from "react";
// @ts-ignore
import {closeModal} from "@redq/reuse-modal";

export default function AuthenticationForm({}) {
  const {isAuthenticated} = useSelector((state:any) => state.globalReducer);

  useEffect(()=>{
    if(isAuthenticated){
      closeModal()
    }
  },[isAuthenticated])
  let RenderForm;
  const globalItems = useSelector((state:any) => state.globalReducer);

  if (globalItems.currentForm === 'signIn') {
    RenderForm = SignInForm;
  }

  if (globalItems.currentForm === 'signUp') {
    RenderForm = SignOutForm;
  }

  if (globalItems.currentForm === 'forgotPass') {
    RenderForm = ForgotPassForm;
  }

  // @ts-ignore
  return <RenderForm />;
}
