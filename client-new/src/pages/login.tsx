import React from 'react';
import SignInModal from "@/features/authentication-form/login";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;

`

const Login = () => {
    return (
        <LoginContainer>
            <SignInModal/>
        </LoginContainer>
    );
};

export default Login;