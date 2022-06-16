import React from 'react';
import {SEO} from "@/components/Others/seo";
import ForgotPassword from "../features/authentication-form/forgot-password";
import {AuthContainer, Container} from "./signup";


const Login = () => {
    return (
        <>
            <SEO title={"Login or Signup"} description={"Login to find the best deals"}/>
            <Container>

                <div className="bubbles">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                </div>

            </Container>
            <AuthContainer>
                <ForgotPassword/>
            </AuthContainer>

        </>
    );
};

export default Login;