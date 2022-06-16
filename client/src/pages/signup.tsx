import React from 'react';
import styled from "styled-components";
import {SEO} from "@/components/Others/seo";
import Register from "../features/authentication-form/register";

export const AuthContainer = styled.div`
  z-index: 100;
  position: relative;
  margin: 0 auto;

`
export const Container = styled.div`
  margin-top: 100px;

  .bubbles {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 0;
    left: 0;
  }

  .bubble {
    position: absolute;
    bottom: -100px;
    width: 40px;
    height: 40px;
    background: #54C5C6;
    border-radius: 50%;
    opacity: 0.5;
    animation: rise 10s infinite ease-in;
  }

  .bubble:nth-child(1) {
    width: 40px;
    height: 40px;
    left: 10%;
    animation-duration: 8s;
  }

  .bubble:nth-child(2) {
    width: 20px;
    height: 20px;
    left: 20%;
    animation-duration: 5s;
    animation-delay: 1s;
  }

  .bubble:nth-child(3) {
    width: 50px;
    height: 50px;
    left: 35%;
    animation-duration: 7s;
    animation-delay: 2s;
  }

  .bubble:nth-child(4) {
    width: 80px;
    height: 80px;
    left: 50%;
    animation-duration: 11s;
    animation-delay: 0s;
  }

  .bubble:nth-child(5) {
    width: 35px;
    height: 35px;
    left: 55%;
    animation-duration: 6s;
    animation-delay: 1s;
  }

  .bubble:nth-child(6) {
    width: 45px;
    height: 45px;
    left: 65%;
    animation-duration: 8s;
    animation-delay: 3s;
  }

  .bubble:nth-child(7) {
    width: 90px;
    height: 90px;
    left: 70%;
    animation-duration: 12s;
    animation-delay: 2s;
  }

  .bubble:nth-child(8) {
    width: 25px;
    height: 25px;
    left: 80%;
    animation-duration: 6s;
    animation-delay: 2s;
  }

  .bubble:nth-child(9) {
    width: 15px;
    height: 15px;
    left: 70%;
    animation-duration: 5s;
    animation-delay: 1s;
  }

  .bubble:nth-child(10) {
    width: 90px;
    height: 90px;
    left: 25%;
    animation-duration: 10s;
    animation-delay: 4s;
  }

  @keyframes rise {
    0% {
      bottom: -100px;
      transform: translateX(0);
    }
    50% {
      transform: translate(100px);
    }
    100% {
      bottom: 1080px;
      transform: translateX(-200px);
    }
  }
`

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
                <Register/>
            </AuthContainer>

        </>
    );
};

export default Login;