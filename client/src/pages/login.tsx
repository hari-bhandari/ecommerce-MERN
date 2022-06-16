import React from 'react';
import {SEO} from "@/components/Others/seo";
import LoginComponent from "@/features/authentication-form/login";
import {AuthContainer, Container} from "@/pages/signup";


const Login = () => {
    return (
        <>
            <SEO title={"Login "} description={"Login to find the best deals"}/>
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
                <LoginComponent/>
            </AuthContainer>

        </>
    );
};

export default Login;